import assert from "node:assert/strict";
import { chromium } from "playwright-core";

const baseUrl = "http://localhost:3000";
const browser = await chromium.launch({
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  headless: true,
});

try {
  for (const viewport of [{ width: 320, height: 844 }]) {
    const page = await browser.newPage({ viewport });
    for (const route of ["/menu"]) {
      const response = await page.goto(`${baseUrl}${route}`, { waitUntil: "domcontentloaded" });
      assert.equal(response?.status(), route === "/not-a-page" ? 404 : 200, `${route} should load`);
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth), viewport.width, `${route} should not overflow at ${viewport.width}px`);
    }
    await page.close();
  }

  for (const viewport of [{ width: 320, height: 844 }, { width: 375, height: 844 }, { width: 768, height: 1024 }, { width: 1024, height: 1000 }, { width: 1440, height: 1000 }]) {
    const page = await browser.newPage({ viewport });
    await page.goto(`${baseUrl}/menu`, { waitUntil: "domcontentloaded" });
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth), viewport.width, `Menu should not overflow at ${viewport.width}px`);
    const expectedColumns = viewport.width <= 900 ? 2 : 4;
    const cardBoxes = await page.locator(".product-card").evaluateAll((cards, columns) => cards.slice(0, Number(columns) + 1).map((card) => {
      const { top, width } = card.getBoundingClientRect();
      return { top, width };
    }), expectedColumns);
    assert.equal(cardBoxes.length, expectedColumns + 1, `Menu should show enough cards to verify ${expectedColumns} columns at ${viewport.width}px`);
    assert(cardBoxes.slice(0, expectedColumns).every((card) => card.width > 0 && Math.abs(card.top - cardBoxes[0].top) < 1), `Menu cards should align in the first row at ${viewport.width}px`);
    assert(cardBoxes[expectedColumns].top > cardBoxes[0].top, `Menu should wrap after ${expectedColumns} cards at ${viewport.width}px`);
    await page.close();
  }

  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await page.goto(`${baseUrl}/`, { waitUntil: "domcontentloaded" });
  await page.getByRole("button", { name: "Open menu" }).click();
  await page.keyboard.press("Escape");
  await page.getByRole("button", { name: "Open menu" }).waitFor();
  await page.goto(`${baseUrl}/menu`, { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(500);
  await page.getByRole("button", { name: "Pastries" }).click();
  assert.equal(await page.locator(".product-card").count(), 6, "Pastries filter should show six products");
  await page.getByRole("button", { name: "Specials" }).click();
  assert.equal(await page.locator(".product-card").count(), 6, "Specials filter should show six products");
  await page.getByRole("button", { name: "Pastries" }).click();
  await page.locator(".product-card-link").first().click();
  await page.waitForURL(`${baseUrl}/menu/classic-croissant`);
  await page.getByRole("heading", { name: "Classic Butter Croissant" }).waitFor();
  await page.getByRole("button", { name: "Send comment" }).click();
  await page.getByText("Add your name and a comment before posting.").waitFor();
  await page.getByLabel("Your name").fill("Test Baker");
  await page.getByLabel("Leave a comment").fill("Fresh from the test suite!");
  await page.getByRole("button", { name: "Send comment" }).click();
  await page.getByText("Your comment was added. It will reset when the page refreshes.").waitFor();
  await page.reload({ waitUntil: "domcontentloaded" });
  assert.equal(await page.getByText("Fresh from the test suite!").count(), 0, "Comments should reset after reload");

  await page.goto(`${baseUrl}/contact`, { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(500);
  await page.getByRole("button", { name: "Send message" }).click();
  await page.getByText("Please complete every field before submitting.").waitFor();
  console.log("Playwright smoke checks passed.");
} finally {
  await browser.close();
}
