---
name: git-commit-engineering
description: Review Git changes, draft precise Conventional Commit messages, and safely prepare requested pushes for web-development work. Use when asked to prepare a commit message, stage or commit changes, improve commit history, or push/publish/sync code to a Git remote; do not invoke for ordinary code edits without a Git-related request.
---

# Git Commit Engineering

Produce a commit that explains a coherent change to future maintainers, or safely push existing commits when explicitly requested. A good message reflects the actual diff and its user or system impact, not the task title or a list of touched files. Drafting a message does not authorize staging, committing, amending, rebasing, pushing, or opening a PR.

## Check repository ignore rules

When using this skill, check whether a `.gitignore` exists at the repository root and inspect it if present. A message-only or commit-only request does not by itself call for an ignore-file edit.

On the first push request handled under this skill for each repository, perform a project-specific ignore audit; repeat a lighter audit on later pushes for newly introduced artifacts. If unsure whether the first audit occurred, repeat it; an adequate `.gitignore` needs no edit. Inspect the stack and manifests, untracked and ignored files, staged changes, tracked files, and outgoing commits. Add only missing rules supported by the repository, such as local dependencies, build output, caches, logs, environment files, and generated test or visual captures. Preserve source assets, lockfiles, intentional examples, and other files needed to build or review the project. Do not use broad patterns merely to make `git status` look clean.

If the root `.gitignore` is missing or incomplete, create or update it before the push, stage only that file, and make a focused commit containing only its rules—even if other changes are already staged. If that commit cannot be isolated safely, stop and ask. This is the sole exception to the push-only rule below: it does not authorize staging or committing other working-tree changes. Keep the audit idempotent so later pushes do not duplicate rules. Verify representative generated paths with `git check-ignore -v`, inspect the exact `.gitignore` diff and resulting commit, and confirm intended source files remain eligible for Git.

Ignore rules do not remove already tracked files or erase outgoing commit history. Check the index, tracked ignored files (`git ls-files -ci --exclude-standard`), and every outgoing commit for sensitive or unintended files. If an outgoing commit contains such a file, do not push; explain the required cleanup instead of assuming a new ignore rule protects it. Do not rewrite history, remove tracked files, or discard user work without separate authorization.

## Establish the commit boundary

- Follow repository-specific guidance (`CONTRIBUTING`, commit templates, lint rules, and recent commit history) when it exists. Use the convention below when the repository does not specify one.
- Inspect `git status --short` and `git diff --staged` before describing a commit. Use `git diff` to distinguish unstaged changes; inspect untracked files only when they are in the requested scope. A staged-only commit message must describe only staged content.
- Identify the behavior changed, the reason, and any compatibility or migration consequence. Do not infer a feature or fix from filenames alone.
- If a staged diff mixes independent changes, suggest a small set of coherent commits when useful. Do not split, stage, or discard the user's work without authorization.
- If nothing is staged, label the draft as based on working-tree changes or ask which change set to describe. Never present an unverified message as ready to commit.

## Choose the type

Use `<type>(optional-scope)!: concise imperative summary`. The scope names a stable area of the codebase, not a filename. Prefer the narrowest type that describes the primary effect:

| Type | Use for |
| --- | --- |
| `feat` | A new capability or meaningful behavior available to users or consumers. |
| `fix` | A defect correction; a “bug” commit uses `fix`, not `bug`. |
| `perf` | A performance improvement supported by the change, without a new feature. |
| `refactor` | Internal restructuring without an intended behavior change. |
| `style` | Formatting-only changes with no UI or runtime effect. |
| `test` | Test-only additions or corrections. |
| `docs` | Documentation-only changes. |
| `build` / `ci` | Build or dependency tooling / automation pipelines. |
| `chore` | Maintenance that fits none of the more informative types. |

Do not call a change `feat` merely because it touches UI, `fix` merely because a test was added, or `style` merely because CSS changed. When the diff genuinely spans types, prefer separate commits if practical and authorized; otherwise classify by the primary outcome and explain the rest in the body. Repository conventions may define additional types.

## Write the message

- Keep the subject specific and short enough to scan in Git history (about 50 characters when practical; clarity wins over a rigid limit). Use an imperative verb, no trailing period, and avoid vague subjects such as “updates,” “bug fixes,” or “final changes.”
- Add a body when the motivation, behavior, trade-off, or migration path is not obvious from the subject. Explain *why* and *what changed for consumers*, not a line-by-line diff. Separate the body from the subject with a blank line.
- Mark a real breaking contract with `!` and/or a `BREAKING CHANGE: <impact and migration>` footer. Do not label a large refactor as breaking unless consumers must adapt.
- Include issue references, co-author credits, or other trailers only when their exact values are known and appropriate. Do not invent tickets, verification, release impact, or authorship.

Examples:

```text
feat(menu): add search across product names and descriptions
fix(contact): preserve form values after invalid submission
refactor(cards): share product image rendering
```

## If the user asks to make the commit

Confirm the exact staged contents immediately before committing. Stage only requested files or hunks, preserve unrelated work, and run relevant checks in proportion to the change. Report checks actually run; do not claim a green build based on the message alone. Avoid `git add -A`, hook bypasses, history rewrites, and force pushes unless explicitly requested and justified. If the index contains unrelated changes that cannot be separated safely, stop and ask before committing.

For a message-only request, return the proposed message and briefly note any uncertainty about the change set. Do not mutate Git state.

## If the user asks to push code

- Inspect the repository status, current branch, remote URL, upstream/tracking branch, and commits that would be sent. Verify the intended destination; do not guess a remote or branch when multiple plausible targets exist.
- Check for sensitive or unintended files in outgoing commits. Run relevant checks before pushing when the request includes new implementation or commits; report any checks that could not be run.
- A push sends commits, not uncommitted working-tree changes. If asked only to push, stage and commit only a necessary `.gitignore` update under the exception above; leave other working-tree changes local. Explain what remains local and ask for direction if pushing the intended code requires another new commit. If explicitly asked to commit and push, follow the commit guidance above first.
- Use an ordinary push to the verified remote and branch. Do not force-push, rewrite history, set a new upstream, or publish a different branch unless explicitly requested and justified. Stop and ask if the push is rejected or the destination is ambiguous; do not bypass protections.
- Report the remote/branch, pushed commits, and any uncommitted changes left behind. Never claim the push succeeded without checking its result.

The format follows the [Conventional Commits 1.0.0 specification](https://www.conventionalcommits.org/en/v1.0.0/). Git's [commit documentation](https://git-scm.com/docs/git-commit) explains subject/body conventions; [Git's diff documentation](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository) distinguishes staged and unstaged changes.
