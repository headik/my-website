import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

// The feed needs the public request origin, which is only known at runtime.
export const prerender = false;

export async function GET(context) {
	const posts = await getCollection("blog");
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site ?? context.url.origin,
		items: posts.map((post) => ({
			...post.data,
			link: `/blog/${post.id}/`,
		})),
		customData: "<language>cs</language>",
	});
}
