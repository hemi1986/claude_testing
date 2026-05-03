# Dark-first color scheme with `.light` class toggle

The site is dark by default. Light mode is an *override*, applied by adding a `.light` class to `<html>` via `ThemeToggle.astro`. CSS custom properties in `src/styles/global.css` define the dark palette at the `:root` level; the `.light` selector block overrides them.

This is the reverse of the conventional approach (light default, dark mode via `prefers-color-scheme: dark` media query or a `.dark` class). The inversion is deliberate: the site's visual identity — cyan and magenta accents against a dark background, the retro/nerd aesthetic, the glow effects — only works in a dark context. A light-first palette would require entirely different accent colors and contrast ratios, changing the character of the design.

Consequence: all new components must be designed dark-first. Light mode is a supported but secondary concern.
