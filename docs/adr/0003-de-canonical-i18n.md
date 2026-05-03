# German as canonical language with optional English translation

German (`de`) is the canonical language for all content. Every piece of content must exist in German; English (`en`) is an optional translation. The slug is the content's identity — the language is an attribute. A missing English translation falls back to the German original rather than producing a 404.

This differs from treating both languages as peers (the default Astro i18n mental model), where each language version is an independent document. The peer model would require maintaining a full parallel content tree in English and would break navigation when translations are absent. The canonical-with-fallback model matches the reality of how this site is maintained: content is authored in German first and translated selectively.
