---
name: application-security-and-data-integrity
description: Use when handling authentication, authorization, private data, file uploads, secrets, database changes, tenant isolation, sensitive operations, or security reviews.
---

# Security and Data Integrity

Follow `web-development-standards`. Apply secure defaults and least privilege.

## Identity and access
- Authenticate identity and authorize each protected operation on the server.
- Enforce resource ownership and tenant boundaries in server-side queries and mutations.
- Never trust client-supplied roles, prices, permissions, or ownership.
- Treat frontend visibility controls as UX only, not security boundaries.
- Apply CSRF protection where appropriate to the authentication and cookie model.
- Configure cookies securely (`HttpOnly`, `Secure`, and suitable `SameSite`) where applicable.

## Inputs and outputs
- Validate untrusted input at every trust boundary.
- Use parameterized queries or safe ORM APIs.
- Escape output and avoid unsafe HTML rendering.
- Do not expose stack traces, internal database details, or secrets to clients.
- Validate uploaded files by size, actual content/signature where appropriate, storage destination, and access policy. Do not trust filenames or browser MIME types alone.
- Protect private files and media with appropriate authorization and expiring access mechanisms when suitable.

## Secrets and privacy
- Never commit secrets.
- Use environment variables or a secrets manager and validate required configuration.
- Never log passwords, tokens, payment details, or unnecessary personal information.
- Use proven password hashing and cryptographic libraries; do not invent cryptography.
- Keep sensitive or server-only configuration out of client bundles.
- Use production data only with proper authorization and safeguards.

## Database integrity
- Use constraints for critical invariants where feasible.
- Use transactions when related changes must succeed or fail together.
- Consider concurrency, duplicate requests, race conditions, and idempotency.
- Design migrations to protect existing data.
- For risky migrations, define backups, rollout, compatibility, and recovery plans.
- Do not perform destructive changes without a clear need and appropriate approval.

## Security review checklist
- Are all protected operations authorized server-side?
- Can a user access another user's or tenant's data?
- Are external inputs validated and queries safe?
- Could errors or logs leak sensitive information?
- Are uploads and private media protected?
- Are retries, concurrency, and migrations safe?
- Are dependencies and configuration handled securely?

Report risks clearly. Do not claim a system is secure based only on a checklist or limited test.
