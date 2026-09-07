import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const notes = (await getCollection('notes')).filter((n) => !n.data.draft);
  return rss({
    title: 'Ege Ipek — notes',
    description: 'Dated notes on CBAM and EU ETS monitoring, reporting and verification.',
    site: context.site!,
    items: notes
      .sort((a, b) => b.data.created.getTime() - a.data.created.getTime())
      .map((n) => ({
        title: `${n.data.id} · ${n.data.title}`,
        pubDate: n.data.created,
        description: n.data.gloss,
        link: `/notes/${n.id}/`,
      })),
  });
}
