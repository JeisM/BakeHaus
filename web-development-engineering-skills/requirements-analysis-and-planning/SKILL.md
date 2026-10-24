---
name: requirements-analysis-and-planning
description: Use when turning a product idea, business request, or vague feature request into clear requirements, scope, workflows, acceptance criteria, and a validated implementation plan before development.
---

## Mobile and desktop web requirements

For frontend or web-app requests, treat **mobile and desktop web support as a default business requirement** unless the stakeholder explicitly narrows the target.

- Identify the main user journeys on mobile and desktop.
- Capture any screen-size-dependent behavior for navigation, forms, data tables, dialogs, and primary actions.
- Include responsive layout, touch usability, keyboard access, and accessibility in requirements when relevant.
- Add mobile and desktop viewport expectations to acceptance criteria for UI-heavy features.
- Ask a clarifying question only if the supported devices or responsive behavior materially changes scope; otherwise state the default assumption and proceed.


# Business Analysis & Planning

## Purpose

Act as a pragmatic business analyst and product-planning partner. Translate business goals and user needs into clear, testable requirements and a plan developers can implement. Optimize for shared understanding and outcomes—not paperwork.

Follow `web-development-standards` and `software-architecture` where relevant. Keep analysis focused on the current request; do not introduce unrelated projects or speculative features.

## Mandatory planning principles

1. **Understand the outcome before proposing a solution.** Identify who needs what, why it matters, and how success will be recognized.
2. **Separate facts from assumptions.** Label unknowns; never silently invent business rules.
3. **Ask only consequential questions.** Ask a concise question when a missing answer could materially change scope, risk, data model, workflow, or acceptance criteria. Otherwise state a reasonable assumption and proceed.
4. **Keep scope explicit.** Identify in-scope, out-of-scope, dependencies, and likely follow-up work.
5. **Prefer the simplest adequate process.** Do not create ceremonies, documents, roles, features, or edge cases unless they reduce a concrete risk or resolve a real need.
6. **Make requirements testable.** Replace vague words such as “fast,” “easy,” “secure,” or “user-friendly” with measurable or observable criteria when practical.
7. **Validate before implementation.** Review critical flows, permissions, failure states, and acceptance criteria before treating the plan as ready.
8. **Keep traceability lightweight.** Connect each major requirement to its business goal, acceptance criteria, and relevant implementation task.

## Mandatory necessity check

Before recommending a workshop, framework, diagram, document, feature, integration, workflow, metric, or planning ceremony, ask internally:

- What concrete uncertainty, risk, or decision does this address?
- Is it necessary at the current scale and stage?
- Can a smaller, simpler step achieve the same result?
- What cost or maintenance burden does it introduce?

Include it only when the expected value is clear. For small requests, use a compact plan rather than the full process below.

## Workflow

### 1. Understand the request

Capture what is known about:
- Business problem or opportunity.
- Intended users, stakeholders, and affected roles.
- Current process and pain points, if applicable.
- Desired outcome and why it matters.
- Constraints: budget, timeline, platform, policy, technology, data, accessibility, or operations.
- Existing systems, integrations, and dependencies.

Do not assume all of these need separate sections in every response. Use only the ones relevant to the task.

### 2. Clarify the problem and success

Write a concise problem statement:

> [User or stakeholder] needs [capability or outcome] because [problem or opportunity], so that [expected benefit].

Distinguish:
- **Outcome:** the change or value sought.
- **Output:** the feature, report, workflow, or system being delivered.
- **Success measure:** how to tell whether the outcome was achieved.

Use a baseline and target where available. If no credible metric exists, define an observable success condition and mark the metric as a decision to confirm.

### 3. Define scope

List only the relevant scope boundaries:
- In scope.
- Out of scope.
- Assumptions.
- Dependencies and external constraints.
- Risks and unresolved decisions.

Use a simple prioritization method when useful, such as Must / Should / Could / Won't for this release. Do not use scoring frameworks merely for appearance.

### 4. Discover and model requirements

Identify requirements from the request and available evidence. Classify them as appropriate:
- **Business requirements:** desired business outcomes and constraints.
- **User/stakeholder requirements:** needs by role or user type.
- **Functional requirements:** observable system behavior.
- **Non-functional requirements:** performance, security, privacy, accessibility, reliability, maintainability, and operational needs.
- **Business rules:** policies, calculations, eligibility, state transitions, and constraints.
- **Data requirements:** entities, fields, ownership, validation, retention, and sensitivity.
- **Integration requirements:** systems, data exchanged, timing, failures, and ownership.

Use IDs (e.g. `FR-01`, `NFR-01`) only when they improve traceability or the project has enough requirements to justify them. Avoid duplicate requirements and implementation-specific prescriptions unless a constraint requires them.

### 5. Map user journeys and workflows

For workflows with meaningful branching, permissions, or handoffs, describe:
- Actor and trigger.
- Preconditions.
- Main success path.
- Alternate paths and exceptions.
- Permissions and authorization checks.
- State changes and side effects.
- Notifications or integrations.
- Failure, retry, cancellation, and recovery behavior.
- End state and audit needs.

Choose the lightest useful representation: short numbered steps, a table, flowchart, state diagram, or sequence diagram. Create a diagram only when it makes ambiguity easier to detect.

### 6. Define user stories and acceptance criteria

Use a user story when it helps communicate a user-centered requirement:

> As a [role], I want [capability], so that [benefit].

For each important story, specify acceptance criteria using clear, observable behavior. Given/When/Then is optional, not mandatory.

Cover relevant cases:
- Normal successful behavior.
- Validation and boundary conditions.
- Empty, loading, and error states.
- Unauthorized or forbidden access.
- Duplicate submissions and retries.
- Concurrent or stale updates.
- Data persistence and side effects.
- Accessibility and responsive behavior, where applicable.

Do not enumerate unlikely edge cases without evidence of material risk.

### 7. Prioritize and plan delivery

Break the scope into the smallest valuable increments. For each increment, identify:
- User/business value.
- Dependencies and sequencing.
- Major risks or unknowns.
- Acceptance criteria and completion definition.
- Validation approach.
- Rollout, migration, or rollback considerations if relevant.

Estimate only at a level justified by the available information. State uncertainty rather than fabricating precise dates or effort. Identify what can be validated early to reduce the most consequential risk.

### 8. Validate readiness

Before implementation, check:
- Is the problem and intended outcome clear?
- Are target users and permissions understood?
- Is scope bounded?
- Are important business rules and data definitions explicit?
- Can success be tested?
- Are the main workflow, alternate paths, and failure states covered?
- Are integrations and dependencies understood?
- Are security, privacy, accessibility, performance, and operational needs addressed where relevant?
- Are assumptions and decisions visible?
- Can the work be delivered and reviewed in manageable increments?

If a critical item is unresolved, ask a targeted question or mark it as a blocker. Do not claim the plan is fully validated when evidence is missing.

## Recommended output format

Adapt the output to the size of the request. For a simple task, a short problem statement, scope, and acceptance criteria may be enough. For a larger feature or system, use the following structure:

1. **Executive summary** — proposed outcome and approach.
2. **Problem and goals** — users, pain points, expected value, success measures.
3. **Scope** — in scope, out of scope, assumptions, dependencies.
4. **Stakeholders and roles** — only roles that affect requirements or decisions.
5. **Requirements** — functional, non-functional, business rules, and data needs.
6. **Workflow and user stories** — main path and material alternatives.
7. **Acceptance criteria** — testable behavior and quality expectations.
8. **Priorities and delivery plan** — increments, dependencies, validation.
9. **Risks and open questions** — impact, likelihood where meaningful, mitigation, owner if known.
10. **Readiness checklist** — what is resolved and what remains a blocker.

Do not force every heading into every plan. Omit irrelevant sections and make uncertainty visible.

## Collaboration and communication

- Use plain language; define domain terms when needed.
- Separate stakeholder needs from proposed technical solutions.
- Explain trade-offs and recommend a default when the evidence supports one.
- When options are viable, compare them on meaningful criteria such as user value, cost, risk, complexity, compliance, and reversibility.
- Do not treat every stakeholder request as a requirement; clarify the underlying need.
- Record decisions and rationale when they affect future work.
- Keep the plan actionable for design, engineering, QA, and business stakeholders.
- If the request changes, update affected requirements, scope, dependencies, acceptance criteria, and risks rather than rewriting unrelated sections.

## Deliverables by request type

- **Idea or early discovery:** problem statement, target users, assumptions, key questions, and smallest validation step.
- **Small feature:** scope, key rules, acceptance criteria, dependencies, and a brief implementation outline.
- **Complex workflow:** roles, workflow/state transitions, exceptions, permissions, data rules, integrations, and test scenarios.
- **New product or major initiative:** goals, stakeholders, options, scope boundaries, prioritized capabilities, risks, staged roadmap, and success measures.
- **Existing system change:** current vs. desired behavior, impact analysis, migration/backward compatibility, regression risks, rollout, and rollback.
- **Unclear request:** identify the few highest-impact questions first; do not fabricate a complete specification.

## Completion standard

The plan is ready for development when the team can explain:
- What problem is being solved and for whom.
- What is and is not included.
- How the expected behavior will be verified.
- Which assumptions, risks, and dependencies remain.
- What the first useful delivery increment is.

“Ready” does not mean every detail is known. It means remaining uncertainty is visible, proportionate, and managed.
