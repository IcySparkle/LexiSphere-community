# REPO_CHANGES

## 2026-02-14
- Added language selector bar to `README.md` and created 15 localized README files (`README.{locale}.md`) for ja, zh-CN, ko, de, es, fr, pt-BR, zh-TW, vi, id, ru, th, tr, it, pl.
- Expanded `COMMENTING_GUIDELINES.md` with an R/S/O adoption-profile matrix (Public SDK vs Internal App vs Monorepo expectations).
- Added module intro comments to LS-COMM script/test/config TypeScript files (`scripts/repoValidation.ts`, test files, `vitest.config.ts`).
- Added JSDoc comments for exported interfaces/functions in `scripts/repoValidation.ts` to clarify parsing and validation contracts.

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
- Updated README wording from legacy "capture mode" to manual "Capture Now" terminology for consistency with the extension UX.
- Added `COMMENTING_GUIDELINES.md` and linked it from contributor docs (`README.md`, `CONTRIBUTING.md`, `REPO_MAP.md`, `REPO_MEMORY.md`) so developers follow consistent source comment standards.

