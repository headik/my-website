// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

const site = process.env.SITE_URL || process.env.CF_PAGES_URL;

// https://astro.build/config
export default defineConfig({
	...(site ? { site } : {}),
	integrations: [mdx(), ...(site ? [sitemap()] : [])],
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
	}),
});
