import { createRequire } from "node:module";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const { chromium } = require("C:/Users/zande/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright");
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const output = path.join(root, "dist", "client");
const origin = "https://yolloai.fun";
const mime = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".webp": "image/webp", ".jpg": "image/jpeg", ".svg": "image/svg+xml", ".png": "image/png" };
const browser = await chromium.launch({ executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe", headless: true });
const context = await browser.newContext({ viewport: { width: 390, height: 844 }, userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36" });
await context.addInitScript(() => Object.defineProperty(navigator, "webdriver", { get: () => false }));
const tagRequests = [];
try {
  await context.route(`${origin}/**`, async (route) => {
    const pathname = decodeURIComponent(new URL(route.request().url()).pathname);
    let file = path.resolve(output, "." + pathname);
    if ((!file.startsWith(output + path.sep) && file !== output)) return route.fulfill({ status: 403 });
    if (!path.extname(file)) file = path.join(file, "index.html");
    if (!existsSync(file)) return route.fulfill({ status: 404 });
    await route.fulfill({ status: 200, contentType: mime[path.extname(file)] ?? "application/octet-stream", body: readFileSync(file) });
  });
  await context.route("https://www.googletagmanager.com/**", async (route) => { tagRequests.push(route.request().url()); await route.fulfill({ status: 200, contentType: "text/javascript", body: "" }); });
  await context.route("https://www.google-analytics.com/**", async (route) => { tagRequests.push(route.request().url()); await route.fulfill({ status: 200, body: "" }); });
  await context.route("https://fonts.googleapis.com/**", (route) => route.abort());
  await context.route("https://fonts.gstatic.com/**", (route) => route.abort());
  const page = await context.newPage();
  const assert = (condition, message) => { if (!condition) throw Error(message); };
  await page.goto(origin + "/ja/", { waitUntil: "load" });
  assert(await page.locator("#analytics-notice,#analytics-accept,#analytics-settings").count() === 0, "Consent UI remains");
  assert(tagRequests.length === 1, "Japanese visit did not load the Google tag automatically exactly once");
  await page.goto(origin + "/ar/", { waitUntil: "load" });
  assert(await page.locator("html").getAttribute("dir") === "rtl", "Arabic page not RTL");
  assert(tagRequests.length === 2, "Arabic visit did not load the Google tag automatically");
  await page.locator("[data-menu-button]").click();
  assert(await page.locator(".mobile-language-links a").count() === 10, "mobile language menu incomplete");
  await page.locator('.mobile-language-links a[lang="ja"]').click();
  assert(new URL(page.url()).pathname === "/ja/", "mobile language switch failed");
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(`${origin}/blog/yolloai-vs-character-ai/`, { waitUntil: "domcontentloaded" });
  await page.locator(".language-switch summary").click();
  await page.locator('.language-options a[lang="es"]').click();
  assert(new URL(page.url()).pathname === "/es/blog/yolloai-vs-character-ai/", "desktop article language switch failed");
  await page.waitForLoadState("load");
  await page.addInitScript(() => Object.defineProperty(navigator, "globalPrivacyControl", { get: () => true }));
  const beforePrivateVisit = tagRequests.length;
  await page.reload({ waitUntil: "load" });
  assert(tagRequests.length === beforePrivateVisit, "Google tag loaded despite GPC");
  console.log("Yollo AI: automatic Japanese/Arabic analytics, GPC, mobile and desktop language switching passed; test requests intercepted.");
} finally {
  await context.close();
  await browser.close();
}
