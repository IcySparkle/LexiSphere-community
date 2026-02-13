# AGENTS.md

## Purpose
This repository is the public-facing community hub for LexiSphere. It hosts issue tracking, discussions, and release artifacts. It contains no source code.

## Always-Read Files (per task)
- `AGENTS.md`
- `REPO_MEMORY.md`
- `REPO_MAP.md`

## Aliases
- LS = LexiSphere extension/source repository (`LexiSphere`)
- LS-WEB = LexiSphere documentation website repository (`lexisphere-website`)
- LS-COMM = LexiSphere community repository (`LexiSphere-community`)

## Response Timestamps
- For any task command, include a `Start` timestamp before actions and a `Complete` timestamp after finishing, including the duration from Start -> Complete.
- Use local time in `YYYY-MM-DD HH:MM:SS ±HH:MM` format unless the user requests a different format or time zone.

## Repository Snapshot
- Current state: community repo with issue templates, contributing guide, and release artifacts.
- No source code — source lives in the private LexiSphere repo.

## Operating Principles
- Keep edits minimal and scoped to the request.
- When making changes, append a dated entry to `REPO_CHANGES.md`.
- Do not delete or overwrite repository memory files without explicit user request.

## Agent Communication Protocol
All communication between agents is logged in the repository root:
- `AGENT_COMM_CODEX.md`
- `AGENT_COMM_GEMINI.md`
- `AGENT_COMM_CLAUDE.md`
- `AGENT_COMM_QWEN.md`

Commit policy for agent comms:
- Always include changes to any AGENT_COMM_* files in commits so the conversation history stays consistent.

Message format:
```
[AgentName] [YYYY-MM-DD HH:MM:SS ±HH:MM]
<Your message content here.>

-[AgentName]-
---
```

## Agent Roles And Permissions

### CodeX (Main Driver)
- Role: Primary maintainer of community repo content and release artifacts.
- Communication: Post updates to `AGENT_COMM_CODEX.md`.
- File permissions: Full read/write access to the entire repository.

### Claude Code (Observer And Advisor)
- Role: Observe and advise on community repo structure and content.
- Communication: Append observations or feedback to `AGENT_COMM_CLAUDE.md`.
- File permissions: Append to `AGENT_COMM_CLAUDE.md`. May edit `.md` files. Not permitted to modify issue templates or GitHub config without explicit request.

### Qwen (Collaborator)
- Role: Collaborate on community content tasks.
- Communication: Post updates to `AGENT_COMM_QWEN.md`.
- File permissions: Append to `AGENT_COMM_QWEN.md`. May edit `.md` files.

### Gemini (Observer And Advisor)
- Role: Observe and advise on community content and coordination.
- Communication: Post messages to `AGENT_COMM_GEMINI.md`.
- File permissions: Append to `AGENT_COMM_GEMINI.md`. May edit `.md` files.

## Repo Memory Protocol
Goal: avoid re-reading the entire repo on every task.

Memory files (authoritative):
- `REPO_MEMORY.md` - repo purpose, structure, key decisions.
- `REPO_MAP.md` - index of important files/directories with 1-line purpose each.
- `REPO_CHANGES.md` - dated log of notable changes.

Default behavior:
- On any task: read `AGENTS.md` + `REPO_MEMORY.md` + `REPO_MAP.md` first.
- Only open files relevant to the task unless explicitly told "study everything."

When making changes:
- Update `REPO_CHANGES.md` with a short, dated entry.
- If structure changes, update `REPO_MEMORY.md` and `REPO_MAP.md`.

## Branching And Commits
- `main` stays green; all work happens on short-lived `feature/<name>` branches.
- Merge, then delete feature branches.
- Prefer small, descriptive commits; optional conventional prefixes (`feat:`, `fix:`, `docs:`, `chore:`).
