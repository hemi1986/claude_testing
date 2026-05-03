# Tailwind v4 via Vite plugin with CSS custom properties

Tailwind CSS v4 is integrated via the `@tailwindcss/vite` plugin rather than the PostCSS plugin used in v3. There is no `tailwind.config.js`. All theme tokens (colors, glow values, backgrounds) are defined as CSS custom properties in the `@theme` block in `src/styles/global.css`.

This approach has two consequences worth knowing:

1. A future developer expecting a `tailwind.config.js` will not find one — the theme lives in CSS, not JavaScript.
2. All theme tokens are simultaneously available as Tailwind utility classes *and* as raw CSS variables (`var(--color-pro)`, `var(--color-hobby)`, etc.), which is necessary because section accent colors are applied via inline `style` attributes in Astro components where utility class generation would be unreliable.

The v4 Vite-native integration was chosen over v3+PostCSS to eliminate the PostCSS configuration layer and stay aligned with Astro's Vite-first build pipeline.
