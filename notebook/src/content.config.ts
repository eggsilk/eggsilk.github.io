import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// One entry = one Markdown file. The frontmatter is the citation record;
// the body is the note. Fields mirror the metadata line shown on each page
// (created / modified / status / confidence) and the index row.

const status = z.enum(['draft', 'published', 'in-revision', 'superseded', 'in-development']);
const confidence = z.enum(['certain', 'highly-likely', 'likely', 'possible', 'speculative']);

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    id: z.string(),                      // F-001, P-001, E-001
    kind: z.enum(['finding', 'position', 'explainer']),
    title: z.string(),
    gloss: z.string(),                   // one or two sentences for the index, written for a reader deciding whether to open it
    abstract: z.string().optional(),     // the collapsible abstract in the index
    created: z.coerce.date(),
    modified: z.coerce.date().optional(),
    status,
    confidence: confidence.optional(),
    topics: z.array(z.string()).default([]),
    sources: z.array(z.object({ label: z.string(), href: z.string().optional() })).default([]),
    related: z.array(z.string()).default([]),   // slugs
    pdf: z.string().optional(),
    unverified: z.array(z.string()).default([]), // claims still owed an accuracy pass; shown on the page
    draft: z.boolean().default(false),
  }),
});

const tools = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tools' }),
  schema: z.object({
    id: z.string(),                      // T-001
    kind: z.enum(['tool']).default('tool'),
    title: z.string(),
    gloss: z.string(),
    created: z.coerce.date(),
    modified: z.coerce.date().optional(),
    status,
    href: z.string().optional(),         // where the thing lives, if it has a page
    topics: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { notes, tools };
