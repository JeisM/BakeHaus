import assert from "node:assert/strict";
import { mkdir, readFile } from "node:fs/promises";
import { chromium } from "playwright-core";

const baseUrl = process.env.BASE_URL ?? "http://localhost:3000";
const browser = await chromium.launch({
  executablePath: process.env.CHROME_PATH ?? "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: true,
});
const screenshotDir = process.env.SCREENSHOT_DIR ?? "visual-tests/actual/redesign";
await mkdir(screenshotDir, { recursive: true });
const data = await readFile("src/data/products.ts", "utf8");
const productIds = [...data.matchAll(/\{ id: "([^"]+)"/g)].map((match) => match[1]);
const routes = ["/", "/menu", "/about", "/locations", "/contact", ...productIds.map((id) => `/menu/${id}`), "/not-a-page"];
const errors = [];

try {
  for (const width of [320, 390, 768, 1024, 1440]) {
    const page = await browser.newPage({ viewport: { width, height: 1000 } });
    page.on("pageerror", (error) => errors.push(error.message));
    for (const route of routes) {
      const response = await page.goto(`${baseUrl}${route}`, { waitUntil: "domcontentloaded" });
      assert.equal(response?.status(), route === "/not-a-page" ? 404 : 200, `${route} should load`);
      await page.evaluate(() => document.fonts.ready);
      if (route === "/menu") {
        await page.locator(".product-card").first().waitFor();
        assert.equal(await page.locator(".product-card img").count(), 30, "All menu items should have product photos");
      }
      if (route === "/locations") {
        await page.locator(".location-map-marker").first().waitFor();
        assert.equal(await page.locator(".location-map-marker").count(), 3, "Location map should show three markers");
        assert.equal(await page.locator(".location-select").count(), 3, "Location list should show three branches");
      }
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth), width, `${route} should not overflow at ${width}px`);
      assert.equal(await page.locator("main h1").count(), 1, `${route} should have one page heading`);
      assert.doesNotMatch(await page.locator("main").innerText(), /\bdemo\b|illustrative|not delivered|reset.*refresh|static concept|presentation purposes/i, `${route} should keep disclosures in footer`);
      assert.match(await page.locator("footer").innerText(), /static concept site/);
      await page.locator("main img").evaluateAll(async (images) => { await Promise.all(images.map(async (img) => { img.loading = "eager"; try { await img.decode(); } catch { /* Report failed image URLs below. */ } })); });
      const broken = await page.locator("main img").evaluateAll((images) => images.filter((img) => !img.complete || img.naturalWidth === 0).map((img) => img.src));
      assert.deepEqual(broken, [], `${route} should have no broken images at ${width}px`);
      const outside = await page.locator("main input, main textarea, main button, main .product-card, .nav .logo, .mobile-bottom-nav a:visible, .mobile-bottom-nav button:visible").evaluateAll((elements) => elements.filter((element) => { const r = element.getBoundingClientRect(); return r.width && (r.left < -1 || r.right > innerWidth + 1); }).map((element) => element.outerHTML.slice(0, 100)));
      assert.deepEqual(outside, [], `${route} controls/cards should stay within viewport at ${width}px`);
      if (route === "/") {
        const bottomNav = page.getByRole("navigation", { name: "Mobile navigation" });
        if (width <= 700) {
          assert.equal(await bottomNav.evaluate((element) => getComputedStyle(element).position), "fixed");
          assert.equal(await bottomNav.evaluate((element) => Math.round(element.getBoundingClientRect().bottom)), 1000);
          assert.equal(await bottomNav.locator("a").count(), 5);
          assert.equal(await bottomNav.getByRole("button", { name: "Switch to night mode" }).isVisible(), true);
          await page.evaluate(() => window.scrollTo({ top: document.body.scrollHeight, behavior: "instant" }));
          assert(await page.locator("footer").evaluate((element) => element.getBoundingClientRect().bottom) <= await bottomNav.evaluate((element) => element.getBoundingClientRect().top), "Footer should scroll clear of bottom navigation");
        } else assert.equal(await bottomNav.isVisible(), false);
      }
      if (route === "/menu") {
        const expectedColumns = width <= 700 ? 2 : width <= 900 ? 3 : width <= 1100 ? 4 : 5;
        const boxes = await page.locator(".product-card").evaluateAll((cards) => cards.slice(0, 6).map((card) => { const r = card.getBoundingClientRect(); return { top: r.top, width: r.width }; }));
        assert(boxes.slice(0, expectedColumns).every((box) => box.width > 0 && Math.abs(box.top - boxes[0].top) < 1));
        assert(boxes[expectedColumns].top > boxes[0].top);
        if (width <= 700) {
          assert.equal(await page.locator(".search-control").evaluate((element) => getComputedStyle(element).position), "fixed");
          assert.equal(await page.getByRole("button", { name: "Open search" }).isVisible(), true);
        } else {
          const searchBox = await page.locator(".menu-search").boundingBox();
          const categoryBox = await page.locator(".category-select-trigger").boundingBox();
          assert(searchBox && categoryBox && searchBox.x + searchBox.width < categoryBox.x, "Desktop search and category should sit side by side");
        }
      }
      if ([390, 1440].includes(width) && ["/", "/menu", "/menu/classic-croissant", "/contact", "/about", "/locations"].includes(route)) {
        await page.screenshot({ path: `${screenshotDir}/${route === "/" ? "home" : route.slice(1).replaceAll("/", "-")}-${width}.png`, fullPage: true });
      }
    }
    console.log(`Layout, images, and footer disclosure passed: ${routes.length} routes at ${width}px.`);
    await page.close();
  }

  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.keyboard.press("Tab");
  assert.equal(await page.locator(":focus").innerText(), "Skip to content");
  assert.equal(await page.locator(":focus").evaluate((element) => getComputedStyle(element).outlineStyle), "solid");
  const mobileNav = page.getByRole("navigation", { name: "Mobile navigation" });
  await mobileNav.getByRole("link", { name: "About" }).click();
  await page.waitForURL("**/about");
  assert.equal(await mobileNav.getByRole("link", { name: "About" }).getAttribute("aria-current"), "page");
  await mobileNav.getByRole("link", { name: "Locations" }).click();
  await page.waitForURL("**/locations");
  await page.locator(".location-map-marker").first().waitFor();
  await page.locator(".location-select").first().click();
  const locationDialog = page.getByRole("dialog");
  await locationDialog.getByRole("heading", { name: "BakeHaus Riverbanks" }).waitFor();
  assert.match(await locationDialog.getByRole("link", { name: /Open in Google Maps/ }).getAttribute("href"), /google\.com\/maps/);
  await page.keyboard.press("Escape");
  assert.equal(await locationDialog.isVisible(), false);
  await mobileNav.getByRole("link", { name: "Home" }).click();
  await page.waitForURL(baseUrl + "/");
  await page.locator(".category-shortcuts").getByRole("link", { name: "Cakes", exact: true }).click();
  await page.waitForURL("**/menu?category=Cakes");
  const category = page.getByRole("button", { name: /^Category:/ });
  const chooseCategory = async (value) => {
    await category.click();
    await page.getByRole("listbox", { name: "Categories" }).getByRole("option", { name: value, exact: true }).click();
  };
  assert.equal(await category.getAttribute("aria-label"), "Category: Cakes");
  await category.focus();
  await page.keyboard.press("ArrowDown");
  await page.getByRole("listbox", { name: "Categories" }).waitFor();
  await page.keyboard.press("Escape");
  assert.equal(await category.getAttribute("aria-expanded"), "false");
  assert.equal(await page.locator(".product-card").count(), 6);
  await chooseCategory("Pastries");
  await page.waitForURL("**/menu?category=Pastries");
  assert.equal(await page.locator(".product-card").count(), 6);
  await page.goBack({ waitUntil: "networkidle" });
  assert.equal(await category.getAttribute("aria-label"), "Category: Cakes");
  await page.reload({ waitUntil: "networkidle" });
  assert.equal(await category.getAttribute("aria-label"), "Category: Cakes");
  await page.goto(`${baseUrl}/menu?category=invalid`, { waitUntil: "networkidle" });
  assert.equal(await page.locator(".product-card").count(), 30);
  assert.equal(await category.getAttribute("aria-label"), "Category: All");
  await chooseCategory("Specials");
  assert.equal(await page.locator(".product-card").count(), 6);
  await chooseCategory("All");
  assert.equal(await page.locator(".product-card").count(), 30);
  assert(!new URL(page.url()).searchParams.has("category"));
  await page.getByRole("button", { name: "Open search" }).click();
  await page.waitForFunction(() => getComputedStyle(document.querySelector(".site-header .logo")).opacity === "0");
  await page.waitForFunction(() => Math.round(document.querySelector(".search-control").getBoundingClientRect().width) === innerWidth - 36);
  assert.equal(await page.locator(".search-control").evaluate((element) => Math.round(element.getBoundingClientRect().width)), 354);
  await page.keyboard.press("Escape");
  await page.waitForFunction(() => getComputedStyle(document.querySelector(".site-header .logo")).opacity === "1");
  await page.getByRole("button", { name: "Open search" }).click();
  const search = page.getByRole("searchbox", { name: "Search menu items" });
  await search.fill("matcha");
  await page.getByText("2 treats to explore").waitFor();
  assert.equal(new URL(page.url()).searchParams.get("q"), "matcha");
  await chooseCategory("Cakes");
  await page.getByText("1 treat to explore").waitFor();
  assert.equal(await page.getByRole("button", { name: "Open search" }).isVisible(), true, "Mobile search should collapse when focus leaves it");
  await chooseCategory("Pastries");
  await page.getByRole("heading", { name: "No treats found." }).waitFor();
  assert.equal(await page.locator(".product-card").count(), 0);
  await page.getByRole("button", { name: "Open search" }).click();
  await page.locator(".menu-search").getByRole("button", { name: "Clear search" }).click();
  await page.getByText("6 treats to explore").waitFor();
  assert(!new URL(page.url()).searchParams.has("q"));
  await chooseCategory("All");
  await page.goto(`${baseUrl}/menu?q=molten`, { waitUntil: "networkidle" });
  await page.getByRole("button", { name: "Open search" }).click();
  assert.equal(await search.inputValue(), "molten");
  await page.getByText("1 treat to explore").waitFor();
  await page.locator(".menu-search").getByRole("button", { name: "Clear search" }).click();
  await page.getByText("30 treats to explore").waitFor();
  await chooseCategory("Cakes");
  await mobileNav.getByRole("link", { name: "Menu" }).click();
  await page.waitForURL("**/menu");
  assert.equal(await category.getAttribute("aria-label"), "Category: All");
  await chooseCategory("Pastries");
  await page.locator(".product-card-link").first().click();
  await page.waitForURL("**/menu/classic-croissant");
  await page.getByRole("heading", { name: "Classic Butter Croissant" }).waitFor();
  assert.equal(await mobileNav.locator("a.active").innerText(), "Menu");
  assert.equal(Math.round((await page.getByRole("button", { name: "Post comment" }).boundingBox()).width), Math.round((await page.locator(".comment-form").boundingBox()).width), "Mobile comment Send button should span the form");
  await page.getByRole("button", { name: "Post comment" }).click();
  await page.getByText("Add your name and a comment before posting.").waitFor();
  await page.getByLabel("Your name").fill("Test Baker");
  await page.getByLabel("Leave a comment").fill("Fresh from the test suite!");
  await page.getByRole("button", { name: "Post comment" }).click();
  await page.getByText("Your comment was added.", { exact: true }).waitFor();
  await page.getByText("Fresh from the test suite!", { exact: true }).waitFor();
  await page.reload({ waitUntil: "networkidle" });
  assert.equal(await page.getByText("Fresh from the test suite!").count(), 0);

  await page.goto(`${baseUrl}/contact`, { waitUntil: "networkidle" });
  const contactFormBox = await page.locator(".contact form").boundingBox();
  const contactButtonBox = await page.getByRole("button", { name: "Send message" }).boundingBox();
  const contactFormPadding = await page.locator(".contact form").evaluate((element) => parseFloat(getComputedStyle(element).paddingLeft) + parseFloat(getComputedStyle(element).paddingRight));
  assert(Math.abs(contactButtonBox.width - (contactFormBox.width - contactFormPadding)) <= 2, "Mobile contact Send button should span the form");
  await page.getByRole("button", { name: "Send message" }).click();
  await page.getByText("Please complete every field before submitting.").waitFor();
  await page.getByLabel("Name", { exact: true }).fill("Test Baker");
  await page.getByLabel("Email").fill("invalid");
  await page.getByLabel("Subject").fill("Hello");
  await page.getByLabel("Message", { exact: true }).fill("A question about pastries.");
  await page.getByRole("button", { name: "Send message" }).click();
  await page.getByText("Please enter a valid email address.").waitFor();
  assert.equal(await page.getByLabel("Subject").inputValue(), "Hello");
  await page.getByLabel("Email").fill("baker@example.com");
  await page.getByRole("button", { name: "Send message" }).click();
  await page.getByText("Thank you for your note.", { exact: true }).waitFor();
  await page.emulateMedia({ colorScheme: "dark" });
  await page.waitForFunction(() => document.documentElement.dataset.theme === "dark");
  await mobileNav.getByRole("button", { name: "Switch to day mode" }).click();
  assert.equal(await page.locator("html").getAttribute("data-theme"), "light");
  await page.reload({ waitUntil: "networkidle" });
  assert.equal(await page.locator("html").getAttribute("data-theme"), "light", "Chosen theme should survive reload");
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.locator(".nav-links .theme-toggle").click();
  assert.equal(await page.locator("html").getAttribute("data-theme"), "dark");
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  assert.equal(await page.locator("html").getAttribute("data-theme"), "dark", "Chosen theme should survive navigation");
  await page.emulateMedia({ reducedMotion: "reduce" });
  assert.equal(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior), "auto");
  assert.deepEqual(errors, [], "No browser runtime errors");
  console.log("Navigation, search, URL filters, comments, form validation, theme, and reduced-motion checks passed.");
} finally {
  await browser.close();
}
