import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import YukinaConfig from '../../yukina.config';
import type { APIContext } from 'astro';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
import { IdToSlug } from '../utils/hash';
const parser = new MarkdownIt();

export async function GET(context: APIContext) {
  const blog = await getCollection('posts');

  const items = blog
    .filter((post) => post.data.draft !== true)
    .sort((a, b) => new Date(b.data.published).valueOf() - new Date(a.data.published).valueOf())
    .map((post) => ({
      title: post.data.title,
      pubDate: post.data.published,
      description: post.data.description,
      link: `/posts/${IdToSlug(post.id)}/`,
      content: sanitizeHtml(parser.render(post.body ?? ''), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img']),
      }),
    }));

  return rss({
    title: YukinaConfig.title,
    description: YukinaConfig.description,
    site: context.site!,
    items,
    customData: `<language>${YukinaConfig.locale}</language>`,
  });
}
