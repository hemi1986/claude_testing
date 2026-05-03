import de from './de';
import en from './en';

export const languages = { de, en } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'de';

export function getLang(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

export function t(lang: Lang) {
  return languages[lang];
}

export function getLocalePath(lang: Lang, path: string): string {
  if (lang === defaultLang) return path;
  return `/${lang}${path}`;
}
