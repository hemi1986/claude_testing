# Sections as independent mini-sites

Pro and Hobby are structured as two independent mini-sites that share a common shell (layout, nav chrome, design system) rather than as filtered views of a single unified site. They have separate navigation structures, separate accent colors, separate content vocabularies (Article vs Log Entry), and schemas that will diverge over time (Hobby Projects will gain machine-specific metadata that Pro Projects will never need). Treating them as independent prevents Pro vocabulary and content conventions from leaking into Hobby and vice versa, at the cost of some duplication in routing and layout code.

## Considered options

- **Filtered views of one site** — a single content model with a `section` field. Simpler routing, but forces a shared schema onto concepts that are fundamentally different (a Hobby Project may need machine metadata; a Pro Project does not).
- **Completely separate sites/repos** — maximum isolation, but breaks the Hub's dual-identity purpose and duplicates infrastructure for no gain.
