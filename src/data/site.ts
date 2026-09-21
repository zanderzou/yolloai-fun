export const site = {
  name: "Yollo AI Guide",
  domain: "yolloai.fun",
  url: "https://yolloai.fun",
  description: "An independent Yollo AI guide to AI roleplay, character creation, image and video generation, privacy, regional availability, pricing, and alternatives.",
  author: "Yollo AI Guide editorial team",
  officialUrl: "https://app.yollo.ai/",
};
export const formatDate = (date: Date) => new Intl.DateTimeFormat("en-US", { year:"numeric", month:"long", day:"numeric", timeZone:"UTC" }).format(date);
export const toIsoDate = (date: Date) => date.toISOString().slice(0,10);

