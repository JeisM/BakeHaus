---
name: web-development-standards
description: Always apply baseline coding standards when creating, editing, reviewing, debugging, or refactoring code in any software development task.
---

## Responsive frontend requirement

For any frontend or user-interface work, treat **mobile and desktop web compatibility as a default requirement** unless the user explicitly specifies a different target.

- Build responsive layouts that work on narrow mobile screens, tablets, laptops, and wide desktop screens.
- Use mobile-first styling where practical; add breakpoints only when the layout genuinely needs them.
- Prevent horizontal overflow, clipped controls, unreadable text, and layouts that depend on a fixed desktop width.
- Make interactive elements usable with touch, mouse, and keyboard; provide visible focus states and accessible labels.
- Account for small viewports, safe areas, text zoom, long content, loading/empty/error states, and portrait/landscape where relevant.
- Prefer fluid sizing and flexible layouts over hard-coded dimensions. Do not add breakpoints or responsive abstractions without a real need.
- Verify the result at representative mobile, tablet, and desktop viewport sizes before calling the UI complete.


# Core Coding Standards

## Purpose
Apply a consistent baseline to all coding work. Use the task-specific skills only when their descriptions match the current work.

## Mandatory necessity check
Before adding any pattern, abstraction, dependency, tool, or optimization, determine whether it is needed for the current task.

Ask:
1. What concrete requirement, duplication, risk, or bottleneck does it address?
2. Is the need supported by existing code, requirements, expected usage, or measurements?
3. Can the current code or a built-in framework/platform feature solve it more simply?
4. What maintenance, complexity, performance, security, or cost trade-offs does it introduce?
5. How will correctness or improvement be verified?

Implement what is needed, investigate what is uncertain, and omit what provides no meaningful benefit. Do not narrate this checklist for every trivial change.

## Workflow
1. Inspect relevant files, conventions, scripts, dependencies, and tests before editing.
2. Clarify the expected behavior and what must remain unchanged.
3. Plan in proportion to complexity: minimal for small changes, staged for high-risk work.
4. Make focused changes; preserve unrelated user work and avoid unrelated refactors.
5. Verify with available relevant checks.
6. Review the final diff for accidental edits, secrets, debug code, and incomplete work.
7. Report changes, actual verification results, and material limitations.

## Code quality
- Prefer clear names, focused functions, explicit data flow, and readable control flow.
- Follow existing project conventions unless they are unsafe or unsuitable.
- Avoid duplicated business rules, giant components, deeply nested conditionals, speculative abstractions, and clever code that obscures intent.
- Keep configuration separate from business logic.
- Comment on intent and constraints, not obvious syntax.
- Avoid unsafe casts, disabled checks, and suppressed errors without justification.
- Do not add dependencies when existing tools or platform features suffice.

## Types and data
- Use strict typing where supported and practical.
- Validate external data at runtime; static types do not validate API responses or user input.
- Define clear contracts for APIs, domain entities, and component props.
- Distinguish missing, optional, nullable, and empty values when relevant.
- Treat user input, API responses, URL parameters, environment variables, and browser storage as untrusted.

## Reliability
- Handle relevant loading, empty, success, error, and permission states.
- Fail clearly; do not silently swallow exceptions.
- Protect existing behavior and consider compatibility before changing interfaces or data schemas.
- Avoid destructive operations without understanding their effects and obtaining approval when authorization is unclear.

## Verification
Run appropriate available checks, such as formatting, linting, type checking, focused tests, integration tests, and builds. Do not claim a check passed unless it ran and passed. Explain checks that could not be run.

## Required behavior
- Stay within the user's requested scope.
- Do not introduce unrelated projects, features, files, or examples.
- Match engineering effort to task complexity and risk.
- Ask before irreversible, destructive, costly, or externally visible actions when authorization is unclear.
- Never claim code was executed, tested, deployed, or verified unless that actually occurred.

## Final response
Keep the report proportional to the task:
- **Implemented:** behavior and important files changed.
- **Verification:** checks run and actual results.
- **Notes:** material assumptions, risks, limitations, or setup, if any.
