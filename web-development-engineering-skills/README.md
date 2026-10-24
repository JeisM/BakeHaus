# Web Development Engineering Skills

A modular engineering skill set for planning, designing, building, securing, testing, and optimizing web applications. Start with `web-development-skill-orchestrator` to determine which skills are needed and in what order. Apply `web-development-standards` as the baseline, then select only the task-specific skills that are relevant.

## Recommended workflow

1. `web-development-skill-orchestrator` — classify the task and select the minimum sufficient skill set.
2. `requirements-analysis-and-planning` — clarify the problem, requirements, scope, user flows, and acceptance criteria.
3. `ui-ux-design` — design the experience, interaction patterns, visual interface, accessibility, and responsive behavior.
4. `software-architecture` — make system-level decisions about boundaries, data, APIs, reliability, and operations when needed.
5. `web-development-workflow` — implement using the lightweight, feature-level, or high-risk workflow.
6. `frontend-styling-motion-and-performance` — handle CSS, responsive behavior, animation, and measured frontend performance work as relevant.
7. `application-security-and-data-integrity` — apply especially to sensitive data, authorization, uploads, and migrations.
8. `software-testing-and-quality` — verify behavior and review the resulting code.
9. `git-commit-engineering` — when a commit or push is requested, read this skill before Git mutations; review the exact change set and push destination.

## Skill directory

- `web-development-skill-orchestrator/SKILL.md` — routes tasks to the appropriate skills, chooses workflow level, sequences guidance, and avoids unnecessary skill loading.
- `web-development-standards/SKILL.md` — baseline coding conventions and quality rules.
- `web-development-workflow/SKILL.md` — task-size and risk-based implementation workflows.
- `requirements-analysis-and-planning/SKILL.md` — discovery, requirements, scope, user stories, acceptance criteria, and delivery planning.
- `ui-ux-design/SKILL.md` — UX research, information architecture, interaction design, visual design, accessibility, prototyping, validation, and handoff.
- `software-architecture/SKILL.md` — architecture, system boundaries, data, APIs, reliability, scaling, deployment, and technical decisions.
- `frontend-styling-motion-and-performance/SKILL.md` — CSS organization, responsive styling, animation, performance measurement, loading, and rendering optimization.
- `application-security-and-data-integrity/SKILL.md` — authentication/authorization, validation, secrets, privacy, and data consistency.
- `software-testing-and-quality/SKILL.md` — test strategy, code review, and verification.
- `git-commit-engineering/SKILL.md` — commit boundaries, Conventional Commit classification, message writing, and safe push preparation.

## Selection rules

- Start with `web-development-skill-orchestrator` for every web-development task. It decides which specialist skills are necessary, conditional, or unnecessary.
- Before any requested UI change, screen requirements, UI/UX, frontend implementation, and architecture. A small, low-risk edit needs a brief screen; changed flows, multiple screens, data flow, integrations, or uncertainty call for deeper specialist review before implementation.
- Select `application-security-and-data-integrity` when architecture finds possible security or data-integrity impact or cannot confidently rule it out. Direct security triggers still apply.
- Always use `web-development-standards`.
- Use `web-development-workflow` for coding tasks; choose its workflow level based on scope and risk.
- Use `ui-ux-design` for experience design and `frontend-styling-motion-and-performance` for implementation, visual behavior, or frontend performance as relevant.
- Load architecture, security, and testing guidance when relevant; keep security-critical requirements in force whenever applicable.
- Read `git-commit-engineering` when drafting a commit message or performing requested Git commit or push work, including requests to publish or sync code to a Git remote; ordinary code edits do not require it.
- Avoid loading every skill for a small change. Prefer the smallest set of skills that safely covers the work.
