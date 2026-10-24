---
name: frontend-styling-motion-and-performance
description: Implement or improve frontend styling, responsive layouts, themes, animation, and browser performance. Use for CSS and visual behavior changes or measured loading, rendering, image, and bundle issues; use ui-ux-design separately when the experience itself needs designing.
---

# Frontend Styling, Motion, and Performance

Follow `web-development-standards` and the project's existing frontend conventions. Apply only the sections relevant to the request: a small style fix does not require a performance audit, and a slow page does not require a redesign. Keep mobile and desktop usability, accessibility, and maintainability intact.

## Decide what is needed

Before adding a styling system, abstraction, animation, optimization, or dependency, identify the user-facing problem, evidence that it matters, the simplest existing solution, and how to verify the result. Prefer a focused change when a new mechanism has no clear benefit. Preserve explicit design, product, and browser-support requirements.

## Styling and responsive behavior

- Work with the project's established CSS approach. Keep global defaults, shared components, themes, feature styles, and third-party overrides discoverable. Prefer shallow selectors and clear ownership over chains of overrides.
- Use shared semantic tokens for genuinely repeated colors, spacing, type, shape, and motion values. Avoid a token or component for every one-off declaration. Check every supported theme when changing tokens.
- Build flexible layouts with content-driven breakpoints. Check narrow phones, larger phones, tablets, and desktop; include long text, zoom, safe areas, and touch input where relevant. Prevent clipped controls and accidental page overflow.
- Preserve visible focus, usable contrast, text scaling, meaningful selected and disabled states, and native behavior where possible. Hover must not be the only way to use a control.
- Before removing styles, search for component usage, dynamic classes, theme variants, tests, and third-party consumers.

## Animation and interaction

- Use motion to clarify feedback, state changes, hierarchy, or continuity. Keep it brief and let content remain readable and controls operable during the effect.
- Prefer CSS transitions for simple state changes. Use JavaScript or a motion library only when sequencing, cancellation, gestures, or coordinated enter/exit behavior justify its cost.
- Prefer `transform` and `opacity` for common motion when they produce the intended result. Avoid needless layout animation, permanent `will-change`, heavy blur, and continuous effects; profile expensive or repeated effects.
- Respect `prefers-reduced-motion`. The interface must remain understandable and usable with motion disabled. Preserve focus management, keyboard operation, and dismissal behavior for menus, drawers, and dialogs.
- Check rapid repeated input, interruption, navigation, and component cleanup when motion has stateful or asynchronous behavior.

## Loading and rendering performance

- For a performance issue, capture a comparable baseline, identify the bottleneck, make the smallest useful change, and measure again. Report observed results and conditions rather than an assumed speedup. Use browser network/performance tools, Lighthouse or equivalent, framework profilers, and bundle analysis when they answer the question.
- Consider LCP, INP, and CLS when user-facing page speed is in scope. Prioritize essential content and avoid layout shifts. Use responsive images and appropriate formats; do not lazy-load likely LCP content by default. Lazy-load below-the-fold media and large, infrequently used UI only when it reduces initial work without creating a blank or delayed critical flow.
- Avoid oversized bundles, unnecessary renders, repeated requests, and unbounded lists. Use pagination or virtualization when scale warrants it; memoize only for measured cost or a concrete stability need. Parallelize independent requests when safe.
- Cache with deliberate scope, expiration, and invalidation. Do not expose secrets or server-only configuration in frontend bundles, and never treat frontend data dictionaries as authorization controls.
- Use typed mappings for repeated, centrally governed labels or configuration when they improve consistency. Keep machine keys separate from display labels and handle unknown external values. Do not centralize one-off values without benefit.
- Consider constrained mobile CPUs, memory, and networks. Do not trade real user flows, accessibility, correctness, or maintainability for a benchmark score.

## Verify the change

Check affected screens and shared components at representative mobile and desktop sizes. Exercise keyboard, touch, focus, theme, loading, error, and reduced-motion states that the change affects. Run existing build and relevant tests. For performance work, compare the same conditions before and after; for styling or motion, inspect the rendered result and check overflow, layout shifts, and interrupted interactions. State any remaining limitation clearly.
