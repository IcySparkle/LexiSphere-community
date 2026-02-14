# Commenting Guidelines

## Purpose
This document defines a consistent commenting standard for LexiSphere community repository scripts and tests.

## Core Principles
- Prefer clear code first; comments should explain intent, constraints, or non-obvious behavior.
- Keep comments accurate; stale comments are worse than no comments.
- Keep comments concise and specific.
- Prefer module-level and API-level docs over line-by-line narration.

## Standard
- TypeScript files should use TSDoc-style comments (JSDoc-compatible syntax).
- Use block doc comments (`/** ... */`) for modules and exported APIs.
- Use inline comments sparingly for complex validation logic only.

## Adoption Profiles (R/S/O)
Use this matrix to set expected comment depth by codebase type:
- `R` = Required
- `S` = Should
- `O` = Optional

| File type / area | Public Library / SDK | Internal App | Monorepo (mixed) |
| --- | ---: | ---: | ---: |
| **Exported TS APIs** (`*.ts`) | **R** TSDoc on all exports + examples for key APIs | **S** TSDoc on shared utilities/services | **R in packages/libs, S in apps** |
| **Internal TS modules** | **S** (non-obvious contracts only) | **O** | **S** (especially shared packages) |
| **React components** (`*.tsx`) | **R** for reusable components (props, behavior, a11y) | **S** for shared components; **O** for page-only | **R in UI libs, S in apps** |
| **Hooks** (`use*.ts`) | **R** contract (inputs/outputs, edge cases) | **S** | **R** for shared hooks |
| **Types/interfaces** | **R** semantic docs on public types/invariants/units | **S** for domain models | **R** for shared domain/type packages |
| **Error boundaries** | **R** `@throws` and error taxonomy notes | **S** | **R** for shared libs, **S** in apps |
| **Deprecations** | **R** `@deprecated` + migration guidance | **S** | **R** in shared packages |
| **Vue / HTML templates** | **S** landmark/"why" comments only | **S** landmark/"why" comments only | **S** |
| **CSS / SCSS / Modules** | **S** explain hacks/quirks and section intent | **O/S** only when tricky | **S** in shared design system |
| **Tests** (`*.test.*`) | **S** only for tricky setup/intent | **O/S** | **S** for shared libs, **O** in apps |
| **Test setup / mocks** | **R** explain global mocks and guarantees | **S** | **R** (shared test tooling) |
| **Schema / API defs** | **R** conventions (auth, pagination, errors) | **S** | **R** when shared across services |
| **DB schema/migrations** | **R** intent + constraints/index rationale | **S** | **R** for shared DB packages |
| **Tooling config** | **R** non-default/quirk rationale | **S** | **R** at repo root, **S** in packages |
| **CI workflows** | **R** caching/gates/deploy-step rationale | **S** | **R** |
| **Scripts** (`scripts/*`, `.sh`, `.ps1`) | **R** header: purpose, args, examples, safety | **S** | **R** |
| **Env templates** (`.env.example`) | **R** line-by-line purpose/value/security notes | **R** | **R** |
| **Generated code** | **R** "DO NOT EDIT" + source/command | **R** | **R** |
| **Docs/README/MDX** | **R** usage + API overview + examples | **S** (runbooks/ops context) | **R** root docs + package READMEs |

## File Intro Comments (Required)
For each source code file under `scripts/` and non-trivial test helper files, include a top-level intro block:

```ts
/**
 * <Module Name>
 *
 * <1-3 sentences describing what this file validates or enforces,
 * and any key boundaries/side effects.>
 */
```

Guidance:
- Describe responsibilities, not implementation history.
- Mention side effects (filesystem reads, markdown/template checks, CI gating).
- Mention key collaborators when helpful.

Rollout:
- Required for all new source files.
- Required when substantially editing an existing source file.
- Legacy files should be backfilled incrementally.

## Exported API Documentation (Required)
All exported/public functions, classes, interfaces, and type aliases should have doc comments when behavior is not obvious from types alone.

Recommended tags:
- `@param`
- `@returns`
- `@throws`
- `@remarks`
- `@example`

## Inline Comments (Use Sparingly)
Use inline comments for:
- template/regex edge-case handling
- ordering guarantees in validators
- compatibility assumptions tied to GitHub issue template schema

Avoid comments that only restate code.

## Tests And Docs
- Prefer descriptive test names over heavy comments.
- Use comments in tests only for non-obvious setup.
- Keep `tests/README.md` aligned with test suite behavior.

## TODO/FIXME Convention
- `TODO(<owner|team>, <issue-or-date>): <action>`
- `FIXME(<owner|team>, <issue-or-date>): <problem>`

## Anti-Patterns
- large banner comments duplicating docs
- commented-out dead code
- historical narratives in code comments
- contradictory comments that drift from implementation
