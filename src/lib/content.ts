import { getCollection } from 'astro:content';
export async function publicPosts() {
  const posts = await getCollection('posts', ({data}) => data.published === true && data.date <= new Date());
  return posts.sort((a,b) => b.data.date.getTime()-a.data.date.getTime());
}
export async function publicProjects() {
  return (await getCollection('projects', ({data}) => data.published === true));
}
export function formatDate(date: Date, lang: 'fr'|'en'|'tr') {
  return new Intl.DateTimeFormat(lang==='fr'?'fr-FR':lang==='tr'?'tr-TR':'en-US', {day:'numeric', month:'long', year:'numeric', timeZone:'UTC'}).format(date);
}
export const tags = (value: string='') => value.split(',').map(x=>x.trim()).filter(Boolean);
