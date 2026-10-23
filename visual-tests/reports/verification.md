# BAKEHAUS verification report

## Automated checks

- `npm test` — passed: 1 Vitest file, 3 tests.
- `npm run test:e2e` — passed: route status checks, no-overflow checks at 320 px and 1440 px, mobile-menu Escape handling, menu filtering, dedicated product-page navigation, demo-comment validation/insertion/reset, and contact-form validation.
- `npm run build` — passed: Next.js 15.5.28 static export, including all six product-detail pages; output is in `out/`.

## Rendered evidence

Implementation screenshots are stored in `visual-tests/actual/` for Home, Menu, About, Locations, Contact, and 404 at 320, 375, 390, 768, 1024, and 1440 px. The mobile Menu page was additionally captured with Playwright at `visual-tests/actual/320/menu-playwright.png`; its document/body widths were both verified at 320 px.

## Visual comparison status

No approved reference screenshots or Figma exports were supplied. Therefore, a similarity percentage cannot be calculated honestly and the required reference-comparison gate is blocked on approved references. The captured implementation images are evidence of the current render, not replacement references.

## Security note

The project was upgraded from Next.js 15.1.2 to 15.5.28. `npm audit --omit=dev` reports two remaining framework-tree advisories (one moderate and one high) in transitive PostCSS; npm's proposed remediation is the breaking upgrade to Next.js 16.4.3, which was not applied without a compatibility review. The site is a static export and uses unoptimized local images; no server-side routes, Server Actions, remote image patterns, or user data persistence were added.
