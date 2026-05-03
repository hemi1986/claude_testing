# Astro as static site generator

This is a content-heavy personal site with no dynamic server requirements. Astro was chosen for its content-first model: file-based routing, first-class content collections with Zod schema validation, built-in i18n support, and zero JavaScript shipped to the browser by default. These features map directly to what the site needs — authored Markdown content, type-safe frontmatter, two-language routing — without requiring a backend.

## Considered options

- **Next.js / Nuxt** — SSR capabilities not needed for a static portfolio; would add deployment complexity (Node server or serverless functions) for no benefit.
- **Hugo / Jekyll** — No JavaScript component model; extending the design system or adding interactive islands would require workarounds.
- **Plain HTML** — Not scalable for content collections, i18n routing, or the component-based design system.
