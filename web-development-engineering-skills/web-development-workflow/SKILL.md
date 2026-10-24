---
name: web-development-workflow
description: Implement, debug, and refactor web applications using a workflow matched to task complexity and risk.
---

# Web Development Workflow

Apply `web-development-standards` on every coding task. Choose the lightest workflow that safely meets the task's requirements.

## Choose a workflow level

### 1. Lightweight change
Use for isolated bug fixes, copy changes, minor styling, small validations, or focused utility changes.

1. Inspect the relevant code and nearby conventions.
2. Confirm expected behavior and keep scope narrow.
3. Reuse existing components, helpers, types, and dependencies.
4. Make the smallest complete change.
5. Run relevant focused checks or tests.
6. Review the diff for regressions and unrelated changes.
7. Report what changed and what was actually checked.

Do not add abstractions, global state, dependencies, configuration systems, or unrelated refactors without a concrete need. If the change exposes a security issue, data-loss risk, or wider dependency, reassess its risk level.

### 2. Feature-level change
Use for work spanning multiple files, user workflows, forms, reusable components, API endpoints, or coordinated frontend/backend behavior.

**Before implementation**
- Define expected behavior, acceptance criteria, inputs, outputs, and permission rules.
- Inspect existing components, services, API contracts, types, data models, and tests.
- Identify loading, success, empty, invalid-input, failure, and unauthorized states.
- Prefer established project patterns unless there is a reason to change them.

**Implementation**
- Separate presentation, business rules, and data access when this improves clarity.
- Use typed interfaces and validate untrusted data at runtime.
- Maintain a single source of truth for shared rules and stable values.
- Follow existing state management, form, validation, and API conventions.
- Consider compatibility for existing callers and persisted data.
- Prevent duplicate submissions and stale async results where relevant.
- Use transactions when related data changes must be atomic.
- Handle errors clearly and safely.
- Add dependencies only when existing capabilities are insufficient.

**Verification**
- Test important success and failure paths, invalid input, and permission failures where relevant.
- Update affected types, contracts, and documentation.
- Run focused tests, type checks, lint, and builds as available.
- Review the final diff and disclose checks not run.

### 3. High-risk or system-level change
Use when failure could cause security exposure, data loss, financial impact, downtime, or broad regressions. Examples include authentication, payments, multi-tenancy, background jobs, concurrency, major refactors, data migrations, and changes spanning multiple subsystems.

**Analyze first**
- Record requirements, assumptions, constraints, and acceptance criteria.
- Map affected modules, interfaces, dependencies, data flow, trust boundaries, and data ownership.
- Identify failure modes, security risks, compatibility concerns, and operational dependencies.
- Inspect tests, deployment conventions, migrations, and observability.

**Design proportionately**
- Choose the simplest architecture that satisfies explicit reliability and scale requirements.
- Document important trade-offs and decisions.
- Define contracts, state transitions, invariants, and error behavior.
- Consider authorization, tenant isolation, concurrency, transactions, idempotency, retries, timeouts, and partial failure where applicable.
- Define migration, rollout, rollback or forward-fix, and recovery plans for risky changes.
- Do not add distributed systems, queues, caches, services, or abstractions without demonstrated need.

**Implement in stages**
- Split work into small, reviewable steps.
- Preserve compatibility when required.
- Make destructive data changes explicit and protect existing data.
- Use transactions and database constraints for important invariants where feasible.
- Use bounded retries and backoff for transient failures; never blindly retry non-idempotent operations.
- Handle secrets and sensitive data safely.
- Add useful logging and monitoring without exposing sensitive information.

**Verify and prepare release**
- Add unit tests for core rules and edge cases.
- Add integration tests for subsystem boundaries and persistence.
- Add end-to-end tests for critical user journeys where practical.
- Test authorization, invalid input, concurrency, retries, and recovery as applicable.
- Run static checks, migrations in a safe test environment, and builds when available.
- Review the full diff for compatibility, rollout, and recovery concerns.
- Identify migration/configuration requirements, monitoring implications, known risks, and unverified assumptions.

Do not perform production, destructive, costly, or externally visible actions without clear authorization.

## Responsive frontend requirement

Frontend work must support mobile and desktop web by default unless explicitly scoped otherwise.

- Use responsive, mobile-first layouts and flexible sizing.
- Define behavior for narrow, medium, and wide viewports when layout or interaction differs.
- Keep content, forms, navigation, dialogs, tables, and actions usable on small screens.
- Support touch, mouse, and keyboard; never depend on hover alone.
- Prevent overflow and preserve access to primary actions.
- Validate representative mobile and desktop viewports.

## Cross-cutting rules

- Follow project conventions unless unsafe or unsuitable.
- Do not refactor unrelated code.
- Consider edge cases and failure states in proportion to risk.
- Escalate to a higher workflow level if the scope or risk grows.
- Report exact verification results and skipped checks.
- Never claim work was tested, deployed, or verified unless it was.

## Definition of done

The change meets its requirements, effort matches complexity and risk, relevant edge cases are addressed, responsive behavior is considered for frontend work, appropriate checks have run, and remaining risks or unverified assumptions are disclosed.
