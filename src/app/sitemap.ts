import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap { return ["", "/menu", "/about", "/locations", "/contact"].map((path) => ({ url: `https://example.com${path}` })); }
