# Static-only output; no server-side rendering

The site uses Astro's default static output mode. There is no server, no API routes, and no runtime rendering. Every page is a pre-built HTML file.

This decision constrains future dynamic features: anything requiring server-side logic (form submission, authentication, personalisation) would need a third-party service (e.g. a form backend, a serverless function) rather than an API route in this codebase. This is the direct reason the Contact pages are curated link lists rather than forms — a contact form would require server-side handling that this deployment model does not support.

The trade-off is accepted: a personal portfolio site has no need for a server, and static output means trivial hosting, no runtime failures, and no ops overhead.
