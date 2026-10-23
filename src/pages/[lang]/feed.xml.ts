import type {APIRoute,GetStaticPaths} from 'astro';
import {publicPosts} from '../../lib/content';
import {localized,langs} from '../../lib/i18n';
export const getStaticPaths: GetStaticPaths=()=>langs.map(lang=>({params:{lang}}));
const escapeXml=(s:string)=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
export const GET:APIRoute=async ({params,site})=>{
  const lang=params.lang==='tr'?'tr':params.lang==='en'?'en':'fr';
  const posts=(await publicPosts()).filter(p=>p.data.language===lang);
  const origin=site || new URL('https://example.github.io');
  const items=posts.map(p=>`<item><title>${escapeXml(p.data.title)}</title><description>${escapeXml(p.data.description)}</description><link>${new URL(localized(lang,`blog/${p.id}/`),origin)}</link><guid isPermaLink="true">${new URL(localized(lang,`blog/${p.id}/`),origin)}</guid><pubDate>${p.data.date.toUTCString()}</pubDate></item>`).join('');
  const xml=`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Mohamed I CONDE — ${lang==='fr'?'Articles français':lang==='tr'?'Türkçe yazılar':'English articles'}</title><link>${new URL(localized(lang,'blog/'),origin)}</link><description>${lang==='tr'?'Ekonomi, ekonometri, enerji ve veri bilimi':lang==='fr'?'Économie, économétrie, énergie et science des données':'Economics, econometrics, energy and data science'}</description><language>${lang}</language>${items}</channel></rss>`;
  return new Response(xml,{headers:{'Content-Type':'application/rss+xml; charset=utf-8'}});
};
