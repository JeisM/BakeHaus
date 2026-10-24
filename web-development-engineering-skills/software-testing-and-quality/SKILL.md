---
name: software-testing-and-quality
description: Use when reviewing code, adding or improving tests, diagnosing regressions, preparing a change for merge, or verifying that implemented frontend UI matches its approved UI/UX design.
---

# Software Testing and Quality

Follow `web-development-standards`. Tests should protect meaningful behavior and reviewers should prioritize correctness, security, requirement coverage, visual fidelity, and maintainability.

## UI/UX design fidelity gate — required for frontend UI work

The implemented frontend must visually and behaviorally match the approved UI/UX design as closely as practical.

- **Minimum acceptance target: 90% design fidelity. Preferred target: 99% where the supplied design assets, fonts, content, and implementation environment allow it.** Treat 99% as the goal, not as a claim that can be made without evidence.
- Compare the running implementation against the approved design reference, mockup, prototype, or design file. Do not rely on memory or a subjective glance alone.
- Capture implementation screenshots at matching viewport dimensions, device scale, content state, and theme to the reference. Compare every materially different page/state and relevant responsive breakpoint.
- Use screenshot overlays, side-by-side comparison, or visual regression/diff tooling when available. Review differences in layout, alignment, spacing, sizing, typography, font weight, line height, colors, borders, shadows, radii, icons, imagery, cropping, and content density.
- Verify component states and interactions represented in the design, including hover, focus, active, disabled, loading, empty, success, and error states where applicable. A visually similar static screen is not sufficient if the designed interactions do not work.
- Check mobile and desktop behavior; include tablet/intermediate widths when layout changes materially. Confirm no unintended horizontal scrolling, clipped content, overlapping elements, or inaccessible primary actions.
- Prefer exact supplied assets, fonts, icons, design tokens, and content. Do not substitute approximations when the approved source is available.
- Distinguish genuine design mismatches from harmless rendering noise caused by antialiasing, platform font rendering, or nondeterministic content. Pixel-diff percentages are evidence, not a universal measure of perceived fidelity; combine them with a structured visual review.
- If an explicit scoring method is available, record the score and method. Otherwise, provide a reasoned estimate against a consistent checklist and identify the remaining mismatches. Never fabricate a precise percentage or claim 99% fidelity without a documented comparison.
- If estimated fidelity is below 90%, the UI is **not accepted**: fix the highest-impact discrepancies and compare again. At 90–98%, continue refinement toward 99% when practical and within scope. If the target cannot be met because reference assets, fonts, design decisions, or tooling are missing, state the blocker and obtain approval for any deviation rather than silently lowering the bar.
- Include the reference, viewport(s), comparison method, score or estimate, important differences, and retest result in the verification summary when these materials are available.

### Suggested visual fidelity checklist

Score each applicable category consistently, using a 0–5 rating (0 = missing/incorrect, 5 = matches the reference):

1. Overall composition, layout, and alignment.
2. Spacing, sizing, and proportions.
3. Typography and text wrapping.
4. Color, surfaces, borders, shadows, and visual effects.
5. Images, icons, and asset fidelity.
6. Component styling and visual states.
7. Responsive behavior at target viewports.
8. Interaction and state fidelity.

Calculate the estimate as the achieved points divided by the maximum applicable points, multiplied by 100. Exclude a category only when it genuinely does not apply, and document exclusions. This checklist is a consistent review estimate, not a substitute for judgment or an objectively exact measure.

## Choose tests by risk

- **Unit:** isolated rules, calculations, parsing, and validation.
- **Integration:** API handlers, persistence, service boundaries, and external-system adapters.
- **End-to-end:** critical user journeys and high-risk workflows.
- **Visual regression:** screenshot comparison for important pages, components, themes, responsive breakpoints, and states when tooling is available.
- **Regression:** reproduce the original bug and confirm the fix.

Do not add every test type to every change. Select the smallest test set that provides meaningful confidence, but do not skip the design-fidelity gate for frontend work that has an approved visual reference.

## Test quality

- Cover important success paths, invalid inputs, authorization failures, and expected errors.
- Keep tests deterministic and independent.
- Avoid production data and real external services in routine tests.
- Use readable fixtures and factories.
- Mock external boundaries where useful; do not mock every internal function by default.
- Fix the cause of flaky tests rather than repeatedly rerunning them.
- Avoid tests that merely mirror implementation details and break during harmless refactors.

## Review order

1. Correctness and requirement coverage.
2. Security, authorization, and data exposure.
3. Data integrity, concurrency, and failure handling.
4. UI/UX design fidelity and responsive behavior for frontend work.
5. Compatibility and regression risk.
6. Performance concerns supported by evidence.
7. Readability, duplication, and maintainability.
8. Style and minor polish.

## Verification

- Inspect package scripts and project instructions before selecting commands.
- Run focused tests first, then broader checks when practical.
- Run linting, type checks, and builds when available and relevant.
- For frontend UI changes, compare the running UI to the approved design and repeat the comparison after corrections. Verify at least one narrow mobile viewport and one desktop viewport unless the feature is explicitly limited to one.
- Review the final diff for unrelated edits, secrets, debug code, and incomplete work.
- Clearly separate tests that passed, failed, or were not run.
- Never claim a test passed without running it, and never claim a design-fidelity percentage without a comparison basis.

## Review output

Report findings by severity and cite the relevant file or code location when possible. For UI reviews, include the design-fidelity estimate or score, comparison method, tested viewport(s), major mismatches, and whether the 90% minimum passed; list any remaining work toward 99%. Explain the risk and a practical fix. If no material issues are found, say so without claiming that the code is flawless.
