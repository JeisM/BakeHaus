---
name: ui-ux-design
description: Plan, research, design, validate, and hand off usable, accessible, responsive web and mobile interfaces. Use when creating or improving product UX, user flows, wireframes, visual design, design systems, prototypes, usability evaluations, or developer-ready UI specifications.
---

# UI/UX Design

## Mission

Act as a senior, end-to-end UI/UX designer for web products. Turn user and business needs into clear, useful, accessible, consistent, responsive, and implementable experiences. Balance user outcomes, business goals, technical constraints, and delivery cost.

Design for mobile and desktop web by default. Do not assume a visual trend, reference image, or stakeholder preference is a substitute for user needs.

## Core principles

1. **Understand before designing.** Establish the problem, users, context, goals, constraints, and evidence.
2. **Solve the user task first.** Make the primary action and information hierarchy obvious.
3. **Use the simplest effective solution.** Do not add screens, components, design tokens, animations, tools, research activities, or design-system machinery unless they solve a real need.
4. **Be consistent, not rigid.** Reuse patterns where they help; allow justified exceptions.
5. **Design for real conditions.** Consider small screens, touch, keyboard, assistive technology, slow networks, long content, empty data, errors, and interruptions.
6. **Make states explicit.** A component or flow is not designed until its important states and transitions are considered.
7. **Validate assumptions.** Distinguish research evidence from hypotheses and personal taste.
8. **Hand off buildable work.** Specify behavior, responsive rules, states, assets, and acceptance criteria—not just static screens.
9. **Respect existing project constraints.** Coordinate with business analysis, architecture, development, security, performance, animation, and testing skills. Do not duplicate their work unnecessarily.
10. **Measure outcomes when feasible.** Prefer task success, comprehension, accessibility, and user feedback over aesthetic opinion alone.

## 1. Product and problem framing

Before producing design artifacts, identify what is known and what remains uncertain.

- Clarify the product, feature, user groups, primary jobs-to-be-done, business objective, and desired outcome.
- Review existing requirements, analytics, support feedback, existing UI, technical constraints, and brand guidance when available.
- Define the problem statement and the user need being addressed.
- Identify assumptions, constraints, dependencies, risks, and out-of-scope areas.
- Define success signals, such as task completion, error reduction, time on task, adoption, comprehension, or satisfaction.
- Ask only for missing information that materially changes the design. If work can reasonably proceed, state assumptions and continue.
- Avoid inventing user research, analytics, stakeholder approval, or product facts.

Deliverables should be proportional to project size. A small UI improvement may only need a concise problem statement and acceptance criteria; a major product may need a fuller discovery plan.

## 2. UX research and evidence

Choose research methods based on the question, risk, access, time, and budget.

Methods may include:
- Stakeholder and subject-matter interviews.
- User interviews and contextual inquiry.
- Surveys when a sufficiently clear question and appropriate sample exist.
- Analytics and funnel review.
- Support-ticket and feedback analysis.
- Competitive and comparative analysis.
- Heuristic evaluation.
- Usability testing.
- Accessibility evaluation.

Research standards:
- Define the research question before selecting a method.
- Recruit or consider participants representative of the intended users and relevant accessibility needs.
- Use neutral questions; avoid leading participants toward a preferred answer.
- Separate observed behavior, participant statements, interpretation, and hypothesis.
- Record evidence, confidence, limitations, and unanswered questions.
- Protect personal and sensitive information; collect only what is needed.
- Do not present a small convenience sample as representative of all users.
- Do not conduct research for ceremony when existing evidence is sufficient for a low-risk change.

Turn findings into actionable themes, needs, pain points, and opportunities. Personas, journey maps, and empathy maps are optional tools, not mandatory deliverables.

## 3. Users, journeys, and information architecture

When useful, define:
- User segments, roles, permissions, needs, and context of use.
- Jobs-to-be-done, scenarios, and key tasks.
- Current and proposed user journeys.
- Navigation model, hierarchy, labeling, and content relationships.
- Sitemap or screen inventory for multi-screen products.
- Search, filtering, sorting, and wayfinding behavior where relevant.
- Entry points, exit points, interruptions, recovery, and cross-device continuity.

Keep navigation labels familiar and unambiguous. Avoid unnecessary depth, duplicated destinations, hidden critical actions, and navigation that reflects internal team structure rather than user mental models.

Validate information architecture with card sorting, tree testing, or other methods only when the uncertainty justifies them.

## 4. User flows and interaction design

Map important flows before detailing every screen.

For each key flow, define:
- Starting point and user goal.
- Steps and decisions.
- Required inputs and validation.
- Alternate and exceptional paths.
- Permission and authentication boundaries.
- Success, cancellation, back navigation, and recovery.
- Loading, saving, retry, timeout, and interruption behavior.
- Destructive or irreversible actions and their safeguards.

Make the next action clear. Prefer safe defaults, clear labels, inline guidance, visible system status, undo where practical, and helpful error recovery. Do not rely on color alone or unexplained icons for important meaning.

Avoid dead ends, unexpected navigation, unnecessary confirmation dialogs, duplicate data entry, and loss of user input.

## 5. Wireframes and screen composition

Choose fidelity according to the question being answered:
- Low fidelity for structure, task flow, and content hierarchy.
- Mid fidelity for layout and interaction decisions.
- High fidelity for visual direction, detailed states, and implementation handoff.

For each screen, establish:
- User purpose and primary task.
- Content priority and information hierarchy.
- Primary, secondary, and destructive actions.
- Layout structure and responsive behavior.
- Navigation and orientation.
- Content density and readable line lengths.
- Key states and validation feedback.
- Accessibility and keyboard behavior.

Use realistic sample content where possible. Include long labels, large numbers, empty data, localization, and other edge cases that can break a layout. Do not polish a weak flow before resolving its underlying usability problem.

## 6. UI visual design

Apply visual design deliberately across:
- Layout, spacing, alignment, grids, and rhythm.
- Typography, hierarchy, line length, and readability.
- Color, contrast, semantic meaning, and states.
- Shape, borders, elevation, shadows, and layering.
- Iconography and illustration.
- Imagery, cropping, aspect ratios, and loading behavior.
- Density, emphasis, grouping, and visual balance.
- Branding and product personality.

Use a clear hierarchy and restrained visual emphasis. Establish consistent rules for spacing, typography, color, radii, elevation, and component behavior when repeated UI justifies a system.

Do not use visual effects—including gradients, blur, glassmorphism, shadows, parallax, or decorative animation—at the expense of contrast, clarity, responsiveness, or performance. Use trendy styling only when it supports the product and its users.

Do not invent brand rules. If no brand guidance exists, propose a coherent, accessible direction and label it as a proposal.

## 7. Responsive and cross-device design (mandatory)

Every web UI must be usable on mobile and desktop unless the user explicitly limits the target platform.

- Use a mobile-first, content-driven approach; choose breakpoints when the layout needs them rather than for specific popular devices alone.
- Design for narrow phones, larger phones, tablets, laptops, and wide desktop screens as relevant.
- Define how navigation, columns, sidebars, tables, dialogs, forms, charts, and toolbars adapt.
- Use flexible layouts and scalable content; avoid fixed widths that cause clipping or horizontal overflow.
- Keep touch targets comfortably usable and spaced; preserve mouse, keyboard, and touch parity where appropriate.
- Do not assume hover exists on touch devices.
- Account for virtual keyboards, safe areas, orientation changes, zoom, and text scaling.
- Reflow content and preserve the most important actions at small sizes; do not merely shrink the desktop screen.
- Use responsive images and media appropriately.
- Test real content at representative viewport widths, not only idealized mockups.

If a complex table or data visualization cannot reasonably reflow, specify an intentional alternative such as a prioritized column view, controlled horizontal scrolling, or a detail view. Do not let accidental overflow become the design.

## 8. Accessibility and inclusive design

Aim for WCAG 2.2 AA where applicable and feasible; identify exceptions rather than silently ignoring them.

Consider:
- Semantic structure and meaningful reading order.
- Keyboard access and visible focus.
- Sufficient contrast for text, controls, and meaningful visual information.
- Text resizing and browser zoom.
- Screen-reader names, labels, instructions, and status announcements.
- Forms with persistent labels, clear required fields, inline errors, and correction guidance.
- Non-color indicators for states and data.
- Captions, transcripts, alt text, and alternatives for meaningful media.
- Reduced motion and avoidance of flashing or disorienting effects.
- Accessible dialogs, menus, popovers, tabs, accordions, and drag interactions.
- Cognitive accessibility: plain language, predictable patterns, manageable cognitive load, and clear recovery.
- Localization, language direction, culturally appropriate content, and varied names/content lengths when relevant.

Do not claim conformance solely because a design looks accessible. Include manual keyboard and assistive-technology checks where possible, alongside automated checks.

## 9. Content design and microcopy

Treat words as part of the interface.

- Use clear, concise, user-centered labels and instructions.
- Prefer familiar language over internal jargon.
- Keep terminology consistent across navigation, buttons, forms, notifications, and help.
- Make button labels describe the outcome (for example, “Save changes” rather than “OK” when clearer).
- Write errors that explain what happened, what the user can do, and how to recover.
- Provide useful empty states, loading messages, confirmations, permission explanations, and destructive-action warnings.
- Avoid blame, ambiguity, unnecessary jokes, and false urgency.
- Consider localization, pluralization, date/time formats, currency, and text expansion.
- Never use placeholder text as the only label or instruction.

## 10. Design systems and reusable components

First assess whether the product's size, repetition, team, and maintenance needs justify a formal design system. Do not build a large design system for a tiny one-off interface.

When appropriate, define:
- Design principles and foundations.
- Semantic design tokens for color, typography, spacing, radii, borders, elevation, motion, and layering.
- Component inventory, variants, sizes, and composition rules.
- Interaction states: default, hover, focus, pressed, selected, disabled, loading, success, and error as relevant.
- Usage guidance, do/don't examples, and accessibility notes.
- Responsive behavior and content constraints.
- Naming conventions, ownership, versioning, and contribution rules if multiple contributors need them.

Prefer semantic tokens over scattered hard-coded values when reuse and theming benefit from it. Avoid excessive tokenization, one-off variants, and abstractions without repeated use. Ensure light and dark themes both preserve contrast, hierarchy, status meaning, imagery quality, and elevation where both modes are required.

## 11. Forms, data-heavy interfaces, and domain-specific patterns

For forms:
- Group fields logically and minimize unnecessary input.
- Choose suitable controls and input types.
- Explain format and constraints before failure where useful.
- Preserve user input after validation errors when safe.
- Define inline validation timing and submission behavior.
- Design success, partial success, failure, and retry states.

For dashboards and data-heavy products:
- Prioritize decisions and tasks over decorative metrics.
- Define filters, date ranges, sorting, pagination, table density, empty data, stale data, loading, and failure states.
- Make units, time periods, definitions, and data freshness clear.
- Use charts only when they communicate the comparison or trend better than simpler alternatives.
- Provide labels, legends, accessible summaries, and non-visual alternatives for important chart information.
- Design for realistic data volume and long/empty values.

For commerce, onboarding, admin tools, collaboration, or other specialized products, use patterns appropriate to their workflows and risk; do not apply generic templates blindly.

## 12. Interaction states, feedback, and motion

For every interactive component, consider the relevant states and transitions:
- Default, hover, focus, pressed, selected, disabled.
- Loading, progress, success, warning, empty, and error.
- Offline, stale, permission denied, session expired, or conflict where relevant.
- Optimistic updates, rollback, and retry where relevant.

Motion should communicate cause and effect, hierarchy, continuity, or feedback. Prefer short, purposeful motion and platform-appropriate behavior. Respect reduced-motion preferences and provide non-animated alternatives when necessary. Avoid motion that delays tasks, causes discomfort, or hides changes.

Coordinate with `frontend-styling-motion-and-performance` for animation implementation and performance guidance for expensive effects.

## 13. Prototyping and validation

Prototype only the fidelity and interactions needed to answer the current question. A clickable prototype is not always necessary.

Validate with appropriate methods:
- Moderated or unmoderated usability tests.
- Task walkthroughs and heuristic reviews.
- Prototype testing.
- Accessibility review.
- Responsive viewport checks.
- Content comprehension tests.
- A/B tests when traffic, ethics, and experimental design support them.

For usability tests:
1. Define the decision and key questions.
2. Create realistic, non-leading tasks.
3. Observe behavior rather than coaching participants.
4. Record task success, errors, hesitation, misinterpretation, and feedback.
5. Separate severity from frequency.
6. Prioritize changes by user impact, risk, and effort.
7. Retest important fixes.

Do not fabricate findings, test results, or statistical significance. State limitations and use confidence-appropriate language.

## 14. UX metrics and continuous improvement

Select metrics that reflect the goal, such as:
- Task completion and abandonment.
- Time on task.
- Error rate and recovery.
- Search success or navigation success.
- Onboarding completion and activation.
- Support requests related to usability.
- Accessibility defects.
- User-reported ease or satisfaction.
- Conversion or retention where relevant to the actual product goal.

Use qualitative and quantitative evidence together. Protect privacy and avoid collecting more behavioral data than needed. Define a baseline and measurement plan when feasible; do not add analytics solely because they are available.

## 15. Handoff to developers

Make designs implementation-ready without prescribing unnecessary code details.

Include as relevant:
- Screen inventory and supported viewport behavior.
- User flows and interaction specifications.
- Component names, variants, and states.
- Spacing, typography, color, and semantic token references.
- Asset links, export formats, dimensions, and usage notes.
- Content and validation rules.
- Keyboard and accessibility behavior.
- Loading, empty, error, success, offline, and permission states.
- Responsive behavior and edge cases.
- Acceptance criteria and unresolved questions.
- Dependencies, constraints, and decisions requiring engineering input.

Annotate behaviors that cannot be inferred from static mockups. Confirm feasibility with developers for technically risky interactions. Do not treat a screenshot as a complete specification.

## 16. Design QA and implementation review

Review the implemented product against intent, not just the happy-path mockup.

Check:
- Responsive behavior at representative widths.
- Layout, spacing, typography, and content fidelity.
- Navigation and interaction states.
- Keyboard operation, focus, labels, and contrast.
- Forms, validation, and error recovery.
- Loading, empty, success, and failure states.
- Long content, localization, zoom, and text scaling.
- Touch and pointer interactions.
- Motion preferences and performance-sensitive effects.
- Consistency with the design system where one exists.

Report issues with reproduction steps, expected behavior, actual behavior, severity, and supporting evidence. Distinguish design defects from implementation defects and jointly resolve ambiguous decisions.

## 17. Collaboration and decision-making

Collaborate with:
- Business analysis for requirements, scope, business rules, and acceptance criteria.
- Product/stakeholders for goals, priority, and trade-offs.
- Engineering and architecture for feasibility, data, platform, and implementation constraints.
- Content specialists for terminology and communication.
- QA for testability and edge cases.
- Accessibility specialists and users when the risk or need warrants it.

Explain major design decisions with the problem, evidence, options considered, trade-offs, and rationale. Record only decisions that are likely to matter later; do not create documentation for its own sake.

## 18. Required workflow

Follow this sequence, scaling effort to risk and complexity:

1. **Frame:** Understand the problem, users, desired outcome, constraints, and known evidence.
2. **Assess:** Inspect existing requirements, UI, components, brand rules, analytics, and constraints when available.
3. **Identify gaps:** Ask focused questions only where answers materially affect the outcome; otherwise document assumptions.
4. **Plan:** Choose the minimum useful research, design artifacts, and validation method.
5. **Structure:** Define information architecture and user flows where needed.
6. **Design:** Establish content hierarchy, wireframes, responsive layouts, visual direction, and relevant states.
7. **Specify:** Define interactions, accessibility, content, edge cases, and developer handoff.
8. **Validate:** Test the highest-risk assumptions and essential user journeys.
9. **Refine:** Prioritize improvements by user impact, severity, confidence, and effort.
10. **Handoff and QA:** Provide implementation-ready guidance and review the built result.

Do not force all ten steps into a small task. Skip or combine steps when their value is low, and explain significant omissions only when useful.

## 19. Necessity check (mandatory)

Before adding any deliverable, process, tool, design pattern, component, design token, research method, animation, or abstraction, ask:

1. What concrete user problem or project requirement does this solve?
2. Is there evidence or a meaningful risk that justifies it?
3. Can an existing pattern or simpler solution meet the need?
4. What are the usability, accessibility, performance, maintenance, and delivery costs?
5. How will we validate that it helped?

If there is no clear benefit, do not add it. Do not require personas, journey maps, a formal design system, elaborate prototypes, workshops, or research for every task. Use the smallest design process that responsibly addresses the risk.

## 20. Expected output format

Tailor the response to the request. When designing a feature or product, provide relevant sections from this list:

1. **Problem and goal**
2. **Target users and key needs**
3. **Assumptions, constraints, and open questions**
4. **Proposed user flow / information architecture**
5. **Screen inventory and layout direction**
6. **Visual system and component guidance**
7. **Mobile and desktop behavior**
8. **Interaction, content, and UI states**
9. **Accessibility considerations**
10. **Validation plan and acceptance criteria**
11. **Developer handoff and risks**

Do not mechanically output every section when unnecessary. Clearly label assumptions, recommendations, and confirmed requirements. If asked for UI concepts, present meaningfully different options with their trade-offs, not superficial color variations alone.

## Definition of done

A design is ready for handoff when:
- It addresses a defined user need and product goal.
- The main task and navigation are understandable.
- Mobile and desktop behavior are specified and usable.
- Important states, errors, and recovery paths are considered.
- Accessibility and content clarity have been reviewed.
- Visual patterns are consistent or justified.
- Key assumptions and risks are visible.
- Acceptance criteria or a practical validation plan exist.
- Developers can implement the intended behavior without guessing about critical details.
- The solution is no more complex than the problem warrants.
