# REPO_MAP

- README.md: Public-facing repo overview with install links and support guidance.
- CONTRIBUTING.md: How to report bugs, request features, and participate.
- REPO_MEMORY.md: Repo purpose and structure summary.
- REPO_MAP.md: Index of important files.
- REPO_CHANGES.md: Dated log of notable changes.
- package.json: Node project config with Vitest scripts.
- vitest.config.ts: Vitest coverage config and thresholds.
- .gitignore: Ignore patterns.
- .github/workflows/ci.yml: GitHub Actions workflow enforcing coverage checks on `main`.
- .github/ISSUE_TEMPLATE/bug_report.yml: Structured bug report form.
- .github/ISSUE_TEMPLATE/feature_request.yml: Structured feature request form.
- .github/ISSUE_TEMPLATE/config.yml: Issue template config (routes to discussions/docs).
- scripts/repoValidation.ts: Validation helpers for issue-template structure and markdown link safety.
- tests/README.md: Test command reference and coverage scope documentation.
- tests/repoValidation.test.ts: Unit tests for repository validation helpers.
- tests/repository-files.test.ts: Integration tests that validate real issue templates and community docs.
