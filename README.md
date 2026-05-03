# michaelschempp.de

Personal website for Michael Schempp — software architect by day, pinball restorer by night.

Built with [Astro 6](https://astro.build), [Tailwind CSS v4](https://tailwindcss.com), and a lot of opinions about how a personal site should be structured.

## What's here

Two independent mini-sites sharing a common shell:

- **Pro** (`/pro`) — software architecture, engineering leadership, platform engineering, CV
- **Hobby** (`/hobby`) — pinball restoration, arcade, retro gaming, builds

The root `/` is not a redirect. It's a deliberate identity statement — one person, two professions.

## Stack

- **Astro 6** — static site generator, file-based routing, content collections
- **Tailwind CSS v4** — via `@tailwindcss/vite`, no config file, theme tokens as CSS custom properties
- **Astro i18n** — German default (`/`), English at `/en/`. DE is canonical; EN is an optional translation
- **Content Collections** — Zod-validated Markdown with YAML frontmatter

## Commands

```bash
npm run dev      # Dev server at localhost:4321
npm run build    # Build to dist/
npm run preview  # Preview built site
```

## Adding content

All content is Markdown files in `src/content/`. German is the canonical language — write DE first, EN is optional (missing translations fall back to DE automatically).

```
src/content/pro/blog/de/my-post.md
src/content/pro/projects/de/my-project.md
src/content/hobby/blog/de/my-post.md
src/content/hobby/projects/de/my-project.md
```

**Blog post frontmatter:**
```yaml
---
title: "Post Title"
description: "Short description"
date: 2025-01-15
tags: ["Tag1", "Tag2"]
draft: false
---
```

**Project frontmatter:**
```yaml
---
title: "Project Title"
description: "Short description"
date: 2025-01-01
tags: ["Tag1", "Tag2"]
status: ongoing  # ongoing | completed
draft: false
---
```

Drafts are visible in `npm run dev` and filtered from production builds.

## Working with Claude

This repo is built with [Claude Code](https://claude.ai/code) as a genuine collaborator — not just a code generator. Here's how that works in practice.

### Domain model

`CONTEXT.md` at the root is the shared vocabulary. Before touching anything structural, read it. It defines what a Hub, Section, Project, Article, Log Entry, CV, and Contact Page actually mean in this codebase — and why some things are named the way they are.

### Architectural decisions

`docs/adr/` contains Architecture Decision Records for every non-obvious choice:

| ADR | Decision |
|-----|----------|
| 0001 | Hub as dual-identity statement (not a redirect) |
| 0002 | Sections as independent mini-sites |
| 0003 | German as canonical language with EN fallback |
| 0004 | Content collections split by section × language |
| 0005 | Astro as static site generator |
| 0006 | Tailwind v4 via Vite plugin with CSS custom properties |
| 0007 | Static-only output, no SSR |
| 0008 | Dark-first color scheme with `.light` class toggle |

If you're about to make a decision that touches any of these — read the ADR first.

### Claude skills

`.claude/skills/` contains slash commands that shape how Claude approaches work in this repo:

| Skill | What it does |
|-------|-------------|
| `/grill-with-docs` | Stress-tests plans against the domain model; updates `CONTEXT.md` and ADRs inline |
| `/diagnose` | Disciplined debugging loop: reproduce → hypothesise → instrument → fix |
| `/tdd` | Red-green-refactor development loop |
| `/improve-codebase-architecture` | Finds deepening opportunities informed by the domain language |
| `/grill-me` | Relentless design interview until shared understanding is reached |
| `/to-prd` | Turns conversation context into a PRD |
| `/triage` | Issue triage state machine |
| `/zoom-out` | Steps back to evaluate the bigger picture |
| `/caveman` | Ultra-compressed mode (~75% fewer tokens) |

Skills are based on [Matt Pocock's claude-skills](https://github.com/mattpocock/skills) — a fantastic framework for giving Claude persistent, structured behaviours. Big shoutout to Matt for open-sourcing this approach.

## Design system

CSS custom properties in `src/styles/global.css`:

- `--color-pro` / `--color-pro-dim` — cyan accent for the Pro section
- `--color-hobby` / `--color-hobby-dim` — magenta accent for the Hobby section
- `--color-bg`, `--color-bg-surface`, `--color-bg-elevated` — dark backgrounds
- Light mode applied via `.light` class on `<html>` (dark is the default)
