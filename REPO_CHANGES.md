# REPO_CHANGES

## 2026-02-13
- Initial repository scaffolding: README, CONTRIBUTING, issue templates, gitignore.
- Added AGENTS.md, REPO_MEMORY.md, REPO_MAP.md, REPO_CHANGES.md.
- Added AGENT_COMM_*.md files.
- Added cross-repo abbreviations (`LS-EXT`, `LS-WEB`, `LS-COMM`) to `AGENTS.md` for consistent multi-repository coordination.
- Updated cross-repo abbreviations so the extension repository is labeled `LS` (replacing `LS-EXT`) in `AGENTS.md` and the umbrella workspace.
- Added Vitest test/coverage infrastructure for repository quality checks.
- Added `scripts/repoValidation.ts` helpers and tests validating issue-template structure, contact link URLs, and markdown link safety.
- Added test documentation in `tests/README.md`.
- Updated `.gitignore` to ignore `node_modules/` and generated `coverage/` outputs from test runs.
- Added `.github/workflows/ci.yml` to enforce `npm run test:coverage` on `push`/`pull_request` for `main`.
- Removed `AGENT*.md` files from the public repository and added `AGENT*.md` to `.gitignore`.

