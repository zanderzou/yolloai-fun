import { createRequire } from "node:module";
import { createServer } from "node:http";
import { createReadStream, existsSync, mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const { chromium } = require("C:/Users/zande/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright");
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const output = path.join(root, "dist", "client");
const screenshots = path.join(root, "research", "i18n-yolloai-final");
const locales = ["", "ja", "ko", "zh-hant", "es", "pt-br", "ru", "de", "fr", "ar"];
const pages = ["", "about", "contact", "editorial-policy", "privacy", "terms", "blog",
  "blog/yolloai-vs-character-ai", "blog/yolloai-vs-janitor-ai",
  "blog/yolloai-vs-spicychat-ai", "blog/yolloai-vs-crushon-ai", "blog/yolloai-vs-candy-ai"];
const routes = locales.flatMap((locale) => pages.map((page) => `/${locale ? `${locale}/` : ""}${page ? `${page}/` : ""}`));
const mime = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".webp": "image/webp", ".jpg": "image/jpeg", ".svg": "image/svg+xml", ".png": "image/png" };
const server = createServer((request, response) => {
  const url = new URL(request.url, "http://localhost");
  const pathname = decodeURIComponent(url.pathname);
  let file = path.resolve(output, "." + pathname);
  if (!file.startsWith(output + path.sep) && file !== output) { response.writeHead(403); response.end(); return; }
  if (!path.extname(file)) file = path.join(file, "index.html");
  if (!existsSync(file)) { response.writeHead(404); response.end(); return; }
  response.setHeader("Content-Type", mime[path.extname(file)] ?? "application/octet-stream");
  createReadStream(file).pipe(response);
});
await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const origin = `http://127.0.0.1:${server.address().port}`;
const browser = await chromium.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true });
const failures = [];
let checked = 0;
try {
  for (const viewport of [{ width: 1440, height: 900 }, { width: 390, height: 844 }]) {
    const page = await browser.newPage({ viewport });
    page.on("pageerror", (error) => failures.push(`${viewport.width}: JavaScript ${error.message}`));
    for (const route of routes) {
      const response = await page.goto(origin + route, { waitUntil: "domcontentloaded" });
      if (response?.status() !== 200) { failures.push(`${viewport.width} ${route}: HTTP ${response?.status()}`); continue; }
      const shape = await page.evaluate(() => ({
        width: document.documentElement.scrollWidth,
        viewport: innerWidth,
        h1: document.querySelectorAll("h1").length,
        article: Boolean(document.querySelector("article.article-shell")),
        images: [...document.images].filter((image) => image.complete && image.naturalWidth === 0).length,
      }));
      if (shape.width > shape.viewport + 2) failures.push(`${viewport.width} ${route}: horizontal overflow ${shape.width}px`);
      if (shape.h1 !== 1) failures.push(`${viewport.width} ${route}: H1 count ${shape.h1}`);
      if (shape.images) failures.push(`${viewport.width} ${route}: ${shape.images} broken images`);
      checked++;
      if (["/ja/", "/ar/", "/es/", "/de/blog/yolloai-vs-character-ai/", "/ar/blog/yolloai-vs-candy-ai/", "/zh-hant/privacy/"].includes(route)) {
        mkdirSync(screenshots, { recursive: true });
        const name = `${route.replaceAll("/", "-").replace(/^-|-$/g, "") || "en"}-${viewport.width}.png`;
        await page.screenshot({ path: path.join(screenshots, name), fullPage: false });
        if (["/ja/", "/ar/"].includes(route)) {
          await page.locator("#compare").screenshot({ path: path.join(screenshots, `${route.slice(1, 3)}-comparisons-${viewport.width}.png`) });
          await page.locator("#field-notes").screenshot({ path: path.join(screenshots, `${route.slice(1, 3)}-notes-${viewport.width}.png`) });
        }
        if (route === "/ar/blog/yolloai-vs-candy-ai/") {
          await page.locator("#comparison table").screenshot({ path: path.join(screenshots, `ar-table-${viewport.width}.png`) });
        }
      }
    }
    await page.close();
  }
} finally {
  await browser.close();
  server.close();
}
if (failures.length) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Yollo AI: ${checked}/240 desktop/mobile routes passed HTTP, H1, width and image checks; visual samples saved to ${screenshots}.`);
}
