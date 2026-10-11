import {readFileSync,writeFileSync,readdirSync,existsSync} from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const {transformSync}=require('esbuild');
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const siteSource=readFileSync(path.join(root,'src/data/site.ts'),'utf8');
const value=(key)=>{const m=siteSource.match(new RegExp('(?:"'+key+'"|\\b'+key+')\\s*:\\s*("(?:[^"\\\\]|\\\\.)*")'));return m?JSON.parse(m[1]):null};
const name=value('name'),url=value('url'),description=value('description');
if(!name||!url||!description||!url.startsWith('https://'))throw Error('Missing site metadata');
const origin=new URL(url).origin;
const pages=path.join(root,'src/pages');
const blog=path.join(root,'src/content/blog');
const localeSource=readFileSync(path.join(root,'src/data/locales.ts'),'utf8');
const localeModule={exports:{}};
new Function('module','exports','require',transformSync(localeSource,{loader:'ts',format:'cjs'}).code)(localeModule,localeModule.exports,createRequire(path.join(root,'src/data/locales.ts')));
const locales=localeModule.exports.locales;
if(locales.length!==9||new Set(locales.map(locale=>locale.slug)).size!==9)throw Error('Expected all nine complete public Yollo AI editions');
const articles=readdirSync(blog).filter(f=>f.endsWith('.md')).sort().map(f=>{
 const source=readFileSync(path.join(blog,f),'utf8');
 const match=source.match(/^title:\s*(.+)$/m);if(!match)throw Error('Missing title: '+f);
 let title=match[1].trim();if(title.startsWith('"'))title=JSON.parse(title);else if(title.startsWith("'"))title=title.slice(1,-1).replaceAll("''","'");
 return {title,slug:f.slice(0,-3)};
});
const localizedModule={exports:{}};
const localizedBuild=transformSync(readFileSync(path.join(root,'src/data/localized-articles.ts'),'utf8'),{loader:'ts',format:'cjs'});
new Function('module','exports',localizedBuild.code)(localizedModule,localizedModule.exports);
const localizedArticles=localizedModule.exports.comparisonArticles;
const label=s=>s.replace(/[\[\]]/g,'');
const links=[['Homepage','/','Overview and practical decision guidance.'],['Blog and comparisons','/blog/','Browse the editorial article collection.']];
const languages=[["Japanese","ja"],["Korean","ko"],["Traditional Chinese","zh-hant"],["Spanish","es"],["Brazilian Portuguese","pt-br"],["Russian","ru"],["German","de"],["French","fr"],["Arabic","ar"]];
const optional=[['About','about'],['Editorial policy','editorial-policy'],['Contact','contact'],['Privacy policy','privacy'],['Terms','terms']].filter(([,slug])=>existsSync(path.join(pages,slug+'.astro'))||existsSync(path.join(pages,slug,'index.astro')));
const localizedLinks=locales.flatMap(({slug,lang,label:localeLabel})=>[
 `### ${localeLabel} (${lang})`,'',
 `- [Yollo AI — ${localeLabel}](${origin}/${slug}/)`,
 `- [Blog — ${localeLabel}](${origin}/${slug}/blog/)`,
 ...articles.filter(a=>localizedArticles[slug]?.[a.slug.replace(/^yolloai-vs-/,'')]).map(a=>{
   const key=a.slug.replace(/^yolloai-vs-/,'');
   const title=localizedArticles[slug]?.[key]?.title;
   if(!title)throw Error('Missing localized article title: '+slug+'/'+key);
   return `- [${label(title)}](${origin}/${slug}/blog/${a.slug}/)`;
 }),
 ...optional.map(([title,page])=>`- [${title} — ${localeLabel}](${origin}/${slug}/${page}/)`),'',
]);
let text =[`# ${name}`,'',`> ${description}`,'',`Canonical publication: ${origin}/`,'','This is an independent editorial publication, not the official provider. Articles distinguish published provider information from suggested evaluation methods. Examples and proposed tests are not measured benchmark results. Check dated sources and live provider terms for changing features and prices.','',
 '## Main pages','',...links.map(([title,route,note])=>`- [${title}](${origin}${route}): ${note}`),'',
 '## Language editions','',...languages.map(([title,slug])=>`- [${title}](${origin}/${slug}/): Localized homepage, publication pages, and five comparison articles.`),'',
 '## Comparisons','',...articles.map(a=>`- [${label(a.title)}](${origin}/blog/${a.slug}/)`),'',
 '## Publication information','',...optional.map(([title,slug])=>`- [${title}](${origin}/${slug}/)`),'',
 '## Full localized editions','',...localizedLinks,
 '## Optional','',`- [XML sitemap](${origin}/sitemap-index.xml): Canonical page inventory.`,`- [RSS feed](${origin}/rss.xml): Published article updates.`,`- [Robots policy](${origin}/robots.txt): Crawler access directives.`,''].join('\n');

// New English articles do not create language counterparts.
const englishEditorialSet = new Set(JSON.parse(readFileSync(path.join(root, 'src/data/editorialSchedule.json'), 'utf8')).articles.map(a => a.slug));
function filterEnglishEditorialLinks(line) {
  const match = line.match(/https:\/\/[^/]+\/(?:ja|ko|zh-hant|es|pt-br|ru|de|fr|ar)\/blog\/([^/)\s]+)\//i);
  return !match || !englishEditorialSet.has(match[1]);
}
text = text.split('\n').filter(filterEnglishEditorialLinks).join('\n');
const destination=path.join(root,'public/llms.txt');
if(process.argv.includes('--check')){
 if(!existsSync(destination)||readFileSync(destination,'utf8')!==text)throw Error('llms.txt is missing or stale; run npm run generate:llms');
 const out=existsSync(path.join(root,'dist/client/index.html'))?path.join(root,'dist/client'):path.join(root,'dist');
 if(!existsSync(path.join(out,'llms.txt'))||readFileSync(path.join(out,'llms.txt'),'utf8')!==text)throw Error('Build does not contain current llms.txt');
 for(const match of text.matchAll(/\]\((https:\/\/[^)]+)\)/g)){
  const link=new URL(match[1]);if(link.origin!==origin)throw Error('Unexpected external link');
  const route=decodeURIComponent(link.pathname);const file=path.join(out,route.endsWith('/')?route+'index.html':route);
  if(!existsSync(file))throw Error('Broken llms.txt link: '+link.href);
 }
 console.log(`${new URL(origin).hostname}: llms.txt current, ${articles.length} English and ${articles.length*locales.length} localized article links verified`);
}else{writeFileSync(destination,text);console.log(`Generated llms.txt for ${name}`);}
