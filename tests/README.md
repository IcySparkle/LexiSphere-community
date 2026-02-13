# Tests

## Commands
- `npm test`: run the test suite once.
- `npm run test:coverage`: run tests with coverage output.

## Coverage Scope
- `scripts/repoValidation.ts`: repository validation helpers for issue templates and markdown link safety checks.

## Test Files
- `tests/repoValidation.test.ts`: unit tests for YAML parsing, field extraction, required checks, and URL/link helpers.
- `tests/repository-files.test.ts`: integration tests validating real repository files (`.github/ISSUE_TEMPLATE/*.yml`, `README.md`, `CONTRIBUTING.md`).
