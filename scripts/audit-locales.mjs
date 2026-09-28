import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const output = path.join(root, "dist", "client");
const origin = "https://yolloai.fun";
const localeSource = readFileSync(path.join(root, "src", "data", "locales.ts"), "utf8");
const pairs = [["en", ""], ...[...localeSource.matchAll(/\{ slug: "([^"]+)", lang: "([^"]+)", label: "([^"]+)" \}/g)].map(([, slug, lang]) => [lang, slug])];
const articleSlugs = ["yolloai-vs-character-ai", "yolloai-vs-janitor-ai", "yolloai-vs-spicychat-ai", "yolloai-vs-crushon-ai", "yolloai-vs-candy-ai"];
const pagePaths = ["", "about", "contact", "editorial-policy", "privacy", "terms", "blog", ...articleSlugs.map((slug) => `blog/${slug}`)];
const sitemapPath = path.join(output, "sitemap-0.xml");
const sitemap = existsSync(sitemapPath) ? readFileSync(sitemapPath, "utf8") : "";
const failures = [];
const assert = (condition, message) => { if (!condition) failures.push(message); };

assert(pairs.length === 10, "expected English plus nine locale codes");
assert(pagePaths.length === 12, "expected twelve indexable page types");
assert(Boolean(sitemap), "missing sitemap-0.xml");
for (const page of pagePaths) {
  const expected = new Map(pairs.map(([lang, slug]) => [lang, `${origin}/${slug ? `${slug}/` : ""}${page ? `${page}/` : ""}`]));
  expected.set("x-default", expected.get("en"));
  const descriptions = [];
  for (const [lang, slug] of pairs) {
    const file = path.join(output, slug, page, "index.html");
    assert(existsSync(file), `${page || "home"}/${lang}: missing page`);
    if (!existsSync(file)) continue;
    const html = readFileSync(file, "utf8");
    const url = expected.get(lang);
    const title = html.match(/<title>(.*?)<\/title>/i)?.[1];
    const description = html.match(/<meta name="description" content="([^"]+)"/i)?.[1];
    descriptions.push(description);
    assert(html.includes(`<html lang="${lang}"`), `${page}/${lang}: html lang`);
    assert(html.includes(`<link rel="canonical" href="${url}"`), `${page}/${lang}: self canonical`);
    assert(html.includes(`<meta property="og:url" content="${url}"`), `${page}/${lang}: Open Graph URL`);
    assert((html.match(/<h1(?:\s|>)/gi) ?? []).length === 1, `${page}/${lang}: H1 count`);
    assert(Boolean(title && description), `${page}/${lang}: title/description`);
    assert(html.includes(`href="${url.slice(origin.length)}" lang="${lang}" aria-current="page"`), `${page}/${lang}: current language link`);
    if (!page) {
      assert(title === "Yollo AI", `${lang}: homepage title must be exact keyword`);
      assert(/<h1>Yollo AI<\/h1>/.test(html), `${lang}: homepage H1 must be exact keyword`);
      assert(html.includes('"@type":"FAQPage"'), `${lang}: FAQ schema`);
    }
    if (page.startsWith("blog/")) {
      assert(html.includes('"@type":"Article"'), `${page}/${lang}: Article schema`);
      assert(html.includes(`"inLanguage":"${lang}"`), `${page}/${lang}: Article language`);
    }
    if (lang === "ar") assert(/<html[^>]+dir="rtl"/.test(html), `${page}/ar: RTL missing`);
    for (const [alternate, href] of expected) {
      assert(html.includes(`<link rel="alternate" hreflang="${alternate}" href="${href}"`), `${page}/${lang}: alternate ${alternate}`);
    }
    assert(sitemap.includes(`<loc>${url}</loc>`), `${page}/${lang}: missing from sitemap`);
  }
  assert(new Set(descriptions).size === 10, `${page || "home"}: duplicate descriptions between languages`);
}
const notFound = readFileSync(path.join(output, "404.html"), "utf8");
assert(/<meta name="robots" content="noindex,follow"/.test(notFound), "404 must be noindex");
assert(!/<link rel="alternate" hreflang=/.test(notFound), "404 must not advertise missing language alternates");
if (failures.length) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log("Yollo AI: 120/120 local routes passed language, canonical, reciprocal hreflang, H1, social, schema, sitemap and Arabic RTL checks.");
}
