---
name: web-development-skill-orchestrator
description: Selects, sequences, and coordinates the web-development skills needed for a request. Use this skill at the start of every web-development task to decide which other skills are required, optional, or unnecessary, and to avoid loading irrelevant guidance.
---

# Web Development Skill Orchestrator

## Purpose

Act as the routing and coordination layer for the Web Development Engineering Skills collection. Assess the task, choose the smallest safe set of relevant skills, determine their order, and keep their guidance consistent. This skill selects other skills; it does not replace their specialist instructions.

## Core rules

1. **Run orchestration first.** For every web-development request, classify the task before implementation or advice.
2. **Always apply `web-development-standards`.** Treat it as the baseline for code changes and technical recommendations. For purely conceptual questions, apply the relevant parts without forcing coding conventions into the answer.
3. **Always select `web-development-workflow` when code is being created, changed, debugged, refactored, or reviewed.** Choose the workflow level based on scope, uncertainty, dependencies, and risk.
4. **Screen UI changes before implementation.** For every requested UI change, briefly check requirements, UI/UX, frontend implementation, and architecture. Use complexity and risk to decide which specialist skills need a deeper review; a four-area screen does not require four full skill reads.
5. **Select by evidence, not habit.** Load a specialist skill only when the task contains its trigger conditions or when analysis reveals a need. Mark skills as required, conditional, or not needed.
6. **Use the smallest sufficient set.** Do not load every skill for every task. Do not omit a skill that is necessary to manage material risk.
7. **Reassess as the task evolves.** If discovery reveals new requirements, sensitive data, architectural impact, performance problems, or UI changes, add the relevant skill before proceeding.
8. **Resolve conflicts deliberately.** Follow security, privacy, data-integrity, accessibility, and explicit user constraints over convenience or speed. If specialist guidance conflicts, identify the conflict and choose the safer, more specific rule; ask the user when a consequential product decision cannot be inferred.
9. **Do not claim to have executed a skill or tool that was not actually available or invoked.** Treat skill selection as a plan for applying guidance, not proof of external execution.
10. **Read the Git skill before a requested push.** If the user asks to push, publish, or sync code to a Git repository/remote (including GitHub), select and read `../git-commit-engineering/SKILL.md` before any staging, commit, or push action. Do not treat an ordinary coding task as a push request.

## Skill registry and routing rules

| Skill | Select when | Usually unnecessary when |
|---|---|---|
| `web-development-standards` | Baseline for coding tasks, code review, or technical recommendations | Only unrelated casual conversation |
| `web-development-workflow` | Creating, changing, debugging, refactoring, or reviewing code; choose light, feature, or high-risk workflow | No implementation or code-related work is involved |
| `requirements-analysis-and-planning` | Requirements are unclear, a feature is new, scope/acceptance criteria are needed, or a multi-step delivery needs planning | A tiny, fully specified change with clear acceptance criteria |
| `ui-ux-design` | User journeys, information architecture, wireframes, interaction design, visual design, accessibility, or usability decisions | Backend-only work with no user-facing impact |
| `software-architecture` | New systems, significant feature boundaries, integrations, data flows, APIs, scaling, deployment, or architectural trade-offs | Isolated, low-risk change that fits established architecture |
| `frontend-styling-motion-and-performance` | CSS, layout, design tokens, responsive UI, motion, or a credible loading/rendering/media performance concern | No frontend presentation, motion, or performance-sensitive behavior is affected |
| `application-security-and-data-integrity` | Authentication, authorization, personal/sensitive data, validation, uploads, secrets, permissions, persistence, migrations, payments, trust boundaries, or an architecture assessment that finds possible security/data-integrity impact or cannot confidently rule it out | Work with no credible security or data impact after relevant inspection; still retain baseline safe practices |
| `software-testing-and-quality` | Code changes that need verification, bug fixes, refactors, test strategy, regression coverage, or code review | Pure brainstorming or explanation with no claim of verified behavior |
| `git-commit-engineering` | A requested commit message, staging/commit operation, Git history review, or push/publish/sync to a Git remote | Ordinary implementation work with no Git deliverable |

## Decision procedure

### 1. Classify the request

Identify:
- **Outcome:** explain, plan, design, implement, debug, refactor, review, or optimize.
- **Surface:** frontend, backend, full stack, infrastructure, data, or mixed.
- **Scope:** isolated change, feature, or cross-cutting/system-level work.
- **Risk:** low, moderate, or high based on user impact, security, data loss, reliability, and reversibility.
- **Unknowns:** missing requirements, unclear behavior, undocumented dependencies, or uncertain constraints.

Ask one concise clarifying question only if a missing detail materially changes the solution or risk. Otherwise state reasonable assumptions and proceed.

### 2. Screen requested UI changes

Before changing any user-facing UI requested by a user or client, including copy, icons, layout, and interactions, briefly assess four areas using the request and relevant code. This is a skill-guided assessment, not a separate reviewer or approval gate:

1. **Requirements:** What should change, for whom, and what observable result will satisfy the request?
2. **UI/UX:** How will people see and use it, including responsive and accessible behavior?
3. **Frontend:** What styling, component, motion, loading, or rendering work is involved?
4. **Architecture:** Does it affect component boundaries, state, data flow, APIs, integrations, or persistence?

Scale the follow-up to complexity and risk. A localized, fully specified cosmetic change can use a brief screen and the relevant implementation guidance. Load `requirements-analysis-and-planning` for unclear scope, new flows, or multiple affected screens; `ui-ux-design` for interaction, hierarchy, usability, or accessibility decisions; `frontend-styling-motion-and-performance` for relevant presentation, motion, or performance work; and `software-architecture` for changed boundaries or data flow, integrations, or uncertain structural effects. Complete needed specialist reviews before implementation.

During the architecture screen or review, inspect relevant code before ruling out security and data-integrity effects. Select `application-security-and-data-integrity` before implementation if an effect is possible or cannot confidently be ruled out. Direct security triggers in the registry also select it independently of architecture. Do not treat a routine low-risk UI edit as a full architecture or security review when no such concern is present.

### 3. Choose the workflow level

- **Lightweight:** small, localized, well-understood, low-risk task.
- **Feature-level:** user-visible feature, multiple components, API integration, or moderate uncertainty.
- **High-risk / complex:** cross-cutting architecture, sensitive data, authorization changes, migrations, critical flows, major refactors, or difficult-to-reverse decisions.

Use `web-development-workflow` to apply the selected level. A task can be small in code size but high-risk; risk takes precedence over size.

### 4. Select and sequence skills

Use the following typical order, skipping skills that do not apply:

1. `web-development-skill-orchestrator` — classify and route.
2. `web-development-standards` — establish baseline conventions.
3. `requirements-analysis-and-planning` — clarify goals and acceptance criteria when needed.
4. `ui-ux-design` — establish user flows and interaction expectations when UI/UX is affected.
5. `frontend-styling-motion-and-performance` — review relevant presentation, motion, or performance concerns before implementation.
6. `software-architecture` — review boundaries and technical approach when the UI screen finds architectural impact or uncertainty.
7. `application-security-and-data-integrity` — assess risks early when directly triggered or when architecture finds possible or unresolved security/data-integrity impact.
8. `web-development-workflow` — plan and execute the appropriate implementation workflow.
9. `software-testing-and-quality` — define verification and run relevant checks after changes.
10. `git-commit-engineering` — if Git work is requested, read it before Git mutations; inspect the exact change set for a commit and verify the destination and outgoing commits before a push.

This order is a guide, not a mandatory pipeline. A CSS-only fix still receives the four-area UI screen, but may need only standards, workflow, frontend guidance, and targeted testing. A security-sensitive change should assess security before implementation and verify it afterward.

### 5. Produce a concise routing plan

For non-trivial tasks, briefly state:
- **Required:** skills that must guide the task.
- **Conditional:** skills to add if a stated condition appears.
- **Skipped:** major skills intentionally omitted and why, only when useful.
- **Workflow level:** lightweight, feature-level, or high-risk/complex.
- **Verification:** what will establish that the result works.

For trivial tasks, do this silently and answer directly. Do not make the user read a long routing report unless they ask for it.

### 6. Re-evaluate during execution

Pause and re-route if any of these appear:
- Any new UI change discovered during work → run the four-area screen before changing it.
- New or changed user-facing flows → add requirements analysis and/or UI/UX.
- New system boundary, service, schema, or integration → add architecture.
- Authentication, permissions, sensitive data, uploads, persistence, migration, or possible/uncertain security or data-integrity impact in an architecture assessment → add security and data integrity.
- Slow loading, large bundles, expensive rendering, or media payloads → add the combined frontend skill and use its performance guidance.
- CSS, responsive behavior, accessibility, or motion changes → add the combined frontend skill and use its styling or motion guidance.
- Any code change, bug fix, or refactor → plan appropriate tests and quality review.
- Request to push, publish, or sync code to a Git remote → read `git-commit-engineering` before Git mutations, even if the request began as ordinary implementation work.

## Task patterns

- **Explain a concept:** select the relevant specialist only; do not force implementation workflow.
- **Small UI fix:** run the four-area screen, then use standards + lightweight workflow + relevant frontend guidance and targeted testing; deepen requirements, UI/UX, or architecture review only when the screen warrants it.
- **Redesigned flow or multiple screens:** run the four-area screen, then load requirements/planning, UI/UX, and frontend guidance; add architecture for changed or uncertain boundaries, and security if its trigger is met.
- **UI involving data or integrations:** run the four-area screen, load the affected specialist skills including architecture, and add security for possible or unresolved security/data-integrity effects.
- **Small backend bug fix:** standards + workflow (lightweight) + testing; add other skills when triggered by the bug.
- **API or database change:** requirements + architecture + security/data integrity + workflow + testing; add frontend skills if the user-facing interface changes.
- **Performance issue:** combined frontend skill + standards + workflow if code changes + testing/measurement; diagnose before optimizing.
- **UI animation:** run the four-area screen; use UI/UX if interaction design is in question, combined frontend skill for implementation, accessibility and reduced-motion considerations, plus testing.
- **Code review:** standards + testing/quality, with security, architecture, or performance skills selected based on findings and change context.
- **Commit preparation:** git-commit-engineering after relevant verification; distinguish staged from unstaged changes and use the repository's message convention.
- **Push to repository:** read git-commit-engineering first; check branch, remote/upstream, outgoing commits, and working-tree status. A push request does not by itself authorize creating a new commit, rewriting history, or force-pushing.

## Completion criteria

Before finishing, confirm that:
- The selected skills covered the task's material risks without unnecessary overhead.
- Requirements and acceptance criteria are addressed when needed.
- Security and data integrity were considered wherever applicable.
- Responsive behavior and accessibility were considered for user-facing work.
- Verification claims accurately reflect checks actually performed.
- Any unresolved assumptions, limitations, or follow-up checks are stated clearly.

## Frontend design-fidelity verification

When a task implements or changes a frontend UI and an approved design/reference exists, include `software-testing-and-quality` in the selected skills. Require screenshot-based or equivalent visual comparison at matching viewports, a minimum estimated fidelity of 90%, and refinement toward 99%. Do not report a numeric fidelity score without a documented comparison basis. Treat results below 90% as a failed acceptance gate unless the user explicitly approves a documented exception.
