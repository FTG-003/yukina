import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import YukinaConfig from '../../yukina.config';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const blog = await getCollection('posts');
  const items = await Promise.all(
    blog
      .filter((post) => !post.data.draft)
      .sort((a, b) => new Date(b.data.published).valueOf() - new Date(a.data.published).valueOf())
      .map(async (post) => {
        const { Content } = await post.render();
        return {
          title: post.data.title,
          pubDate: post.data.published,
          description: post.data.description,
          link: `/posts/${post.slug}/`,
          content: Content,
        };
      })
  );

  return rss({
    title: YukinaConfig.title,
    description: YukinaConfig.description,
    site: context.site!,
    items,
    customData: `<language>${YukinaConfig.locale}</language>`,
  });
}