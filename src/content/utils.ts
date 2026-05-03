import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n';

type Section = 'pro' | 'hobby';
type ContentType = 'blog' | 'projects';

type BlogEntry = CollectionEntry<'pro-blog-de'>;
type ProjectEntry = CollectionEntry<'pro-projects-de'>;

async function safeGetCollection(key: string) {
  try {
    return await getCollection(key as any);
  } catch {
    return [];
  }
}

async function getEntries(section: Section, type: ContentType, lang: Lang) {
  const deKey = `${section}-${type}-de`;
  const enKey = `${section}-${type}-en`;

  const deEntries = await safeGetCollection(deKey);
  if (lang === 'de') return deEntries;

  const enEntries = await safeGetCollection(enKey);
  const enIds = new Set(enEntries.map((e: any) => e.id));

  // English entries + German fallbacks for anything not yet translated
  return [...enEntries, ...deEntries.filter((e: any) => !enIds.has(e.id))];
}

export async function getBlogPosts(section: Section, lang: Lang, filter?: (data: BlogEntry['data']) => boolean) {
  const entries = await getEntries(section, 'blog', lang) as BlogEntry[];
  return entries.filter(e => !e.data.draft && (filter ? filter(e.data) : true));
}

export async function getProjects(section: Section, lang: Lang, filter?: (data: ProjectEntry['data']) => boolean) {
  const entries = await getEntries(section, 'projects', lang) as ProjectEntry[];
  return entries.filter(e => !e.data.draft && (filter ? filter(e.data) : true));
}

/** For [slug] pages: find a post by slug, preferring the requested lang, falling back to de. */
export async function getBlogPostBySlug(section: Section, slug: string, lang: Lang): Promise<BlogEntry | undefined> {
  if (lang === 'en') {
    const enEntries = await safeGetCollection(`${section}-blog-en`) as BlogEntry[];
    const en = enEntries.find(e => e.id === slug);
    if (en) return en;
  }
  const deEntries = await safeGetCollection(`${section}-blog-de`) as BlogEntry[];
  return deEntries.find(e => e.id === slug);
}

export async function getProjectBySlug(section: Section, slug: string, lang: Lang): Promise<ProjectEntry | undefined> {
  if (lang === 'en') {
    const enEntries = await safeGetCollection(`${section}-projects-en`) as ProjectEntry[];
    const en = enEntries.find(e => e.id === slug);
    if (en) return en;
  }
  const deEntries = await safeGetCollection(`${section}-projects-de`) as ProjectEntry[];
  return deEntries.find(e => e.id === slug);
}

/** All slugs from the de collection — used by getStaticPaths to ensure all routes exist. */
export async function getAllSlugs(section: Section, type: ContentType): Promise<string[]> {
  const key = `${section}-${type}-de` as const;
  const entries = await getCollection(key as any);
  return entries.filter((e: any) => !e.data.draft).map((e: any) => e.id);
}
