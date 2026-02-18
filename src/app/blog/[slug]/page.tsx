import Link from 'next/link';
import { compileMDX } from 'next-mdx-remote/rsc';
import { getAllPosts, getPostBySlug } from '../../../lib/posts';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.meta.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  const { meta } = post;
  const canonical = `/blog/${meta.slug}`;

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: 'article',
      url: canonical
    }
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return null;

  const { meta, content } = post;
  const { content: mdxContent } = await compileMDX({ source: content });

  const all = getAllPosts().map((p) => p.meta);
  const idx = all.findIndex((p) => p.slug === meta.slug);
  const prev = all[idx + 1];
  const next = all[idx - 1];

  return (
    <main className="container py-14">
      <div className="mb-6 text-sm text-gray-500">
        <Link href="/">← Back to all posts</Link>
      </div>
      <article className="prose prose-lg max-w-none">
        <h1 className="text-4xl font-bold">{meta.title}</h1>
        <p className="mt-2 text-sm text-gray-500">{meta.date} • {meta.category}</p>
        {mdxContent}
      </article>
      <div className="mt-10 flex justify-between text-sm text-gray-500">
        {prev ? <Link href={`/blog/${prev.slug}`}>← Previous</Link> : <span />}
        {next ? <Link href={`/blog/${next.slug}`}>Next →</Link> : <span />}
      </div>
    </main>
  );
}
