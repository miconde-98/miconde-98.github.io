import fs from 'node:fs';
import path from 'node:path';
for(const dir of ['src/content/posts','src/content/projects']){
 const files=fs.readdirSync(dir).filter(f=>f.endsWith('.md'));
 for(const file of files){const text=fs.readFileSync(path.join(dir,file),'utf8');if(!text.startsWith('---\n')||text.indexOf('\n---\n',4)===-1)throw new Error(`Missing YAML frontmatter in ${file}`);if(!/published:\s*(true|false)/.test(text))throw new Error(`Missing published flag in ${file}`);}
 console.log(`${dir}: ${files.length} Markdown files passed basic syntax checks.`)
}
const site=JSON.parse(fs.readFileSync('src/data/site.json','utf8'));if(!site.email)throw Error('Missing email');
console.log('Public site settings JSON: OK');

for(const source of ['home','blog-page','projects-page','ui']){
 const content=JSON.parse(fs.readFileSync(`src/data/${source}.json`,'utf8'));
 const reference=Object.keys(content.fr);
 for(const lang of ['fr','en','tr']){
  if(!content[lang]) throw new Error(`Missing ${lang} translation in ${source}.json`);
  const missing=reference.filter(key=>!(key in content[lang]));
  if(missing.length) throw new Error(`Missing ${lang} keys in ${source}.json: ${missing.join(', ')}`);
 }
}
for(const name of ['brandTagTr','footerTr','metaTitleTr','metaDescriptionTr']){
 if(!(name in site)) throw new Error(`Missing Turkish site setting: ${name}`);
}
if(!fs.readFileSync('.pages.yml','utf8').includes('name: cvTr'))
 throw new Error('Pages CMS must offer a Turkish CV field');
console.log('All three languages and Turkish CMS CV settings: OK');
