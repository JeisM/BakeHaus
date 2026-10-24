---
name: software-architecture
description: Use when planning a new application or major feature, choosing architecture or technology, defining system boundaries and data flows, designing APIs or databases, assessing scalability and reliability, or reviewing an existing system's design.
---

# Architecture and System Design

## Purpose

Design systems that satisfy real requirements with the least unnecessary complexity. Optimize for correctness, security, maintainability, operability, and cost—not novelty or fashionable architecture.

Always follow `web-development-standards` where available. Use other specialist skills only when the task warrants them.

## 1. Mandatory necessity and scope check

Before proposing a design choice, ask:

1. **Requirement:** Which explicit functional or non-functional requirement does this choice satisfy?
2. **Evidence:** Is it supported by current constraints, expected workload, known risks, or measured limitations?
3. **Simpler alternative:** Could a modular monolith, existing framework feature, managed service, or simpler data flow satisfy the need?
4. **Trade-offs:** What complexity, operational burden, cost, latency, lock-in, or failure modes does it add?
5. **Validation:** How will the design be tested, measured, or reviewed?

Do not add microservices, event buses, distributed caches, queues, multiple databases, orchestration, abstraction layers, or new infrastructure without a concrete reason.

If requirements are unclear but a decision is consequential, ask focused questions. Otherwise, state assumptions and continue.

## 2. Discover the context before designing

For an existing system:
- Inspect the repository structure, framework, dependencies, deployment configuration, data models, API contracts, tests, and documentation.
- Identify established patterns and operational constraints.
- Distinguish confirmed facts from assumptions.
- Avoid proposing a replacement architecture without first understanding what exists.

For a new system, establish as much of the following as the decision requires:
- Product goals, users, main workflows, and scope boundaries.
- Expected traffic, workload shape, data volume, growth, and latency expectations.
- Availability, durability, recovery, privacy, and compliance needs.
- Team size, expertise, delivery timeline, budget, and operational capacity.
- Deployment environment, integrations, and technology constraints.
- Known failure scenarios and consequences.

Do not block low-risk work on questions that do not affect the decision. Make reasonable assumptions explicit.

## 3. Separate functional and non-functional requirements

### Functional requirements
Describe what the system must do:
- Primary use cases and workflows.
- Inputs, outputs, and domain rules.
- Roles, permissions, and ownership.
- External integrations and required data.
- State transitions and exceptional paths.

### Non-functional requirements
Specify measurable targets where possible:
- Performance and latency.
- Throughput and expected concurrency.
- Availability and recovery objectives.
- Data durability and consistency.
- Security and privacy.
- Accessibility and operability.
- Scalability and cost limits.

Avoid vague goals such as “must scale” without defining the expected workload or bottleneck. If exact targets are unknown, document assumptions and what should be measured.

## 4. Define system boundaries and responsibilities

- Identify the system's users, external systems, trust boundaries, and major responsibilities.
- Group functionality by cohesive domain responsibility.
- Define ownership of data and business rules.
- Document key interactions and dependencies between modules or services.
- Prefer high cohesion and low coupling.
- Keep interfaces small and explicit.
- Avoid circular dependencies and shared mutable state across unrelated modules.
- Make failure boundaries clear.

Start with the simplest architecture that satisfies the requirements. A well-structured monolith is often an appropriate starting point. Separate deployable services only when independent scaling, ownership, isolation, deployment, or reliability requirements justify the distributed-system costs.

## 5. Design data and persistence

- Identify core entities, relationships, ownership, invariants, and lifecycle.
- Choose storage based on query patterns, consistency needs, data shape, operational expertise, and cost.
- Prefer one suitable primary data store unless concrete requirements justify more.
- Define constraints and transactions for important invariants.
- Consider indexes, pagination, query patterns, retention, deletion, backups, and recovery.
- Avoid duplicating the source of truth without a synchronization and reconciliation strategy.
- Define consistency expectations for reads and writes.
- Consider concurrent updates, duplicate requests, and idempotency.
- Treat schema migrations as part of the design, including compatibility and recovery.
- Classify sensitive data and define access, encryption, retention, and audit requirements as applicable.

Do not select a database or data model solely because it is popular.

## 6. Design APIs and communication

- Define clear contracts, validation rules, error semantics, authentication, and authorization.
- Choose synchronous request/response communication when it adequately meets the workflow.
- Introduce asynchronous messaging or background jobs when long-running work, decoupling, buffering, or independent retry behavior requires them.
- Document message ownership, delivery guarantees, retry rules, ordering needs, and dead-letter handling when messaging is used.
- Design external calls with timeouts and explicit failure handling.
- Use bounded retries with backoff for transient failures.
- Make operations idempotent when clients, jobs, or infrastructure may retry them.
- Consider rate limits, pagination, versioning, and backward compatibility.
- Avoid distributed transactions unless necessary; prefer simpler consistency patterns where acceptable.

## 7. Security and threat modeling

Security must influence architecture from the start.

- Identify assets, actors, trust boundaries, attack surfaces, and likely abuse cases.
- Define authentication, authorization, tenant isolation, and resource ownership.
- Apply least privilege to users, services, credentials, and infrastructure.
- Keep secrets out of source control, logs, and client bundles.
- Validate data at trust boundaries and use safe database APIs.
- Plan secure handling of files, sessions, tokens, and sensitive information.
- Consider encryption in transit and at rest where appropriate.
- Define audit logging and monitoring for sensitive actions when needed.
- Consider rate limiting, abuse prevention, dependency risk, and security updates.
- Avoid relying on frontend checks as a security boundary.
- Identify security assumptions and unresolved threats explicitly.

Use a formal threat model for high-risk systems; use a proportionate checklist for routine, low-risk features.

## 8. Reliability and failure handling

For each important dependency or workflow, consider:
- What happens if the dependency is slow, unavailable, or returns invalid data?
- Can a request or job execute more than once?
- Can partial success leave inconsistent state?
- What is retried, and what must not be retried?
- How are failures detected and recovered?
- What data could be lost, and how is it restored?

Use only the resilience mechanisms that fit the risk:
- Timeouts and bounded retries.
- Idempotency and deduplication.
- Transactions and constraints.
- Queues and dead-letter handling for suitable asynchronous workflows.
- Circuit breakers or bulkheads when they address a demonstrated failure-propagation risk.
- Backups and tested restoration procedures.
- Graceful degradation where the product can tolerate it.

Do not add every resilience pattern by default.

## 9. Performance and scaling

- Estimate workload and identify likely bottlenecks.
- Optimize important user and system paths, not hypothetical extremes.
- Consider network round trips, database queries, payload size, rendering, concurrency, and external service limits.
- Use caching only with explicit invalidation, freshness, and privacy rules.
- Use pagination or streaming for large datasets when appropriate.
- Consider horizontal or vertical scaling based on measured or reasonably anticipated demand.
- Introduce queues, replicas, partitioning, or distributed services only when workload or isolation requirements justify them.
- Define how performance will be measured and how bottlenecks will be detected in production.
- Preserve correctness and data isolation while optimizing.

Do not promise scalability without stating the assumptions and limits.

## 10. Deployment and operations

Consider the system's real operating environment:
- Deployment target and runtime.
- Configuration and secret management.
- Build and release process.
- Database migration order and compatibility.
- Health checks and readiness behavior where relevant.
- Logs, metrics, traces, and alerts appropriate to system risk.
- Backup frequency, retention, and restore testing.
- Rollback or forward-fix procedures.
- Environment separation and access controls.
- Cost monitoring and ownership.

Prefer managed infrastructure when it reduces operational burden and meets the requirements. Compare total cost and operational risk, not just advertised service price.

## 11. Architecture choices and decision records

For consequential decisions, record:
- **Context:** The problem and constraints.
- **Decision:** The chosen approach.
- **Alternatives:** Plausible options considered.
- **Reasons:** Why the chosen approach fits.
- **Trade-offs:** Costs, limitations, and risks.
- **Revisit triggers:** Evidence that would justify changing the decision.

Keep records lightweight for small decisions. Do not create formal architecture documents for every minor change.

## 12. Diagrams and design artifacts

Choose artifacts based on what helps stakeholders understand the design:
- **Context diagram:** system, users, and external dependencies.
- **Container/component diagram:** major runtime units or modules and their responsibilities.
- **Sequence diagram:** important interactions or workflows.
- **Data model / ER diagram:** entities, relationships, and constraints.
- **Deployment diagram:** runtime environments and network boundaries.
- **Decision record:** consequential architecture choices.

Use diagrams when they clarify real complexity; avoid diagrams that merely restate simple code. Keep diagrams aligned with the actual design.

## 13. Architecture validation

Before implementation, check:
- Does the design satisfy the stated functional and non-functional requirements?
- Are responsibilities, boundaries, and data ownership clear?
- Are security and authorization enforced at trusted boundaries?
- Are data integrity and consistency requirements addressed?
- Are failures, retries, timeouts, and recovery considered?
- Are performance assumptions and likely bottlenecks explicit?
- Can the team deploy, monitor, debug, and maintain the design?
- Are costs and operational responsibilities acceptable?
- Is there a simpler design with comparable benefits?
- Are important assumptions testable?

For high-risk decisions, use a proof of concept, load test, security review, or failure test when appropriate.

## 14. Implementation plan

Turn the design into incremental, verifiable steps:
1. Establish interfaces, invariants, and acceptance criteria.
2. Implement the smallest vertical slice.
3. Add persistence and integrations with safe failure handling.
4. Add security controls and tests.
5. Add observability and operational configuration as required.
6. Validate behavior and performance against requirements.
7. Plan rollout, migration, and recovery where applicable.

Avoid large, speculative implementation plans that cannot be validated incrementally.

## 15. Architecture deliverable format

For a meaningful architecture task, provide the relevant sections below, omitting those that do not add value:

1. **Summary and goals**
2. **Requirements and explicit assumptions**
3. **Proposed architecture and why it fits**
4. **Major components and responsibilities**
5. **Data model, ownership, and data flow**
6. **API and integration boundaries**
7. **Security and privacy**
8. **Reliability and failure handling**
9. **Performance, scaling, and cost considerations**
10. **Alternatives considered and trade-offs**
11. **Risks, open questions, and revisit triggers**
12. **Implementation and verification plan**
13. **Diagrams**, if they materially clarify the design

For a small design question, answer directly rather than forcing the full template.

## 16. Definition of done

- Requirements and assumptions are clear enough for the decision.
- The design is no more complex than necessary.
- Responsibilities, interfaces, and data ownership are explicit.
- Relevant security, reliability, performance, and operational concerns are addressed.
- Significant trade-offs and risks are disclosed.
- High-risk assumptions have a validation plan.
- The next implementation steps are clear.
- No unrelated projects or features have been introduced.
