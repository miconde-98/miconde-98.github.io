import fs from 'node:fs';
import path from 'node:path';
for(const dir of ['src/content/posts','src/content/projects']){
 const files=fs.readdirSync(dir).filter(f=>f.endsWith('.md'));
 for(const file of files){const text=fs.readFileSync(path.join(dir,file),'utf8');if(!text.startsWith('---\n')||text.indexOf('\n---\n',4)===-1)throw new Error(`Missing YAML frontmatter in ${file}`);if(!/published:\s*(true|false)/.test(text))throw new Error(`Missing published flag in ${file}`);}
 console.log(`${dir}: ${files.length} Markdown files passed basic syntax checks.`)
}
const site=JSON.parse(fs.readFileSync('src/data/site.json','utf8'));if(!site.email)throw Error('Missing email');
console.log('Public site settings JSON: OK');
