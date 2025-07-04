import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
  const blog = await getCollection('posts');
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: await Promise.all(
      blog
        .filter((post) => !post.data.draft)
        .sort((a, b) => new Date(b.data.published) - new Date(a.data.published))
        .map(async (post) => ({
          title: post.data.title,
          pubDate: post.data.published,
          description: post.data.description,
          link: `/posts/${post.slug}/`,
          // Add the full post content to the RSS feed.
          content: (await post.render()).Content,
        }))
    ),
    customData: `<language>en-us</language>`,
  });
}