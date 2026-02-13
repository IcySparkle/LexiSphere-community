# REPO_MEMORY

## Overview
LexiSphere-community is the public-facing repository for the LexiSphere Chrome Extension. It hosts bug reports, feature requests, discussions, and release artifacts. Source code is maintained in a separate private repository.

## Purpose
- Provide a public channel for users to report bugs and request features.
- Host release artifacts (extension .zip files) for sideloading.
- Host community discussions for Q&A and usage tips.
- Link to the LexiSphere documentation website.

## Structure
- GitHub Issue Templates (bug report, feature request) with structured forms.
- GitHub Discussions enabled for Q&A.
- Release artifacts published via GitHub Releases.
- No source code in this repository.
- Repository quality checks are implemented with Vitest to validate issue templates and markdown link safety.
- GitHub Actions CI enforces coverage checks on `push`/`pull_request` to `main`.

## Related Repositories
- `IcySparkle/LexiSphere` (private): Extension source code.
- `IcySparkle/lexisphere-website` (private/public): Documentation website (VitePress).
