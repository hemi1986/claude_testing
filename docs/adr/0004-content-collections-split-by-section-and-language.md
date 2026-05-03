# Content collections split by section and language

Content collections are defined per section × language: `pro-blog-de`, `pro-blog-en`, `hobby-blog-de`, etc. — eight collections total rather than four with a language field on each entry.

This gives full type safety per collection (the TypeScript schema is bound to a specific section and language) and maps cleanly to the filesystem layout. The trade-off is verbosity: adding a new section or language multiplies the collection count. We accepted this because the section and language dimensions are both stable (two sections, two languages) and the type-safety benefit is immediate and ongoing. A unified collection with a `lang` field would require runtime filtering everywhere and lose the per-collection schema guarantees.
