import ui from '../data/ui.json';
export type Lang = 'fr' | 'en' | 'tr';
export const langs: Lang[] = ['fr', 'en', 'tr'];
// All interface strings are editable in Pages CMS via src/data/ui.json.
export const tr = (lang: Lang) => ui[lang];
export const withBase = (path: string) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path.startsWith('/')?path:`/${path}`}`;
};
export const localized = (lang: Lang, page = '') => withBase(`/${lang}/${page.replace(/^\//,'')}`);
export const media = (path?: string) => path ? (/^https?:\/\//.test(path) ? path : withBase(path)) : undefined;
