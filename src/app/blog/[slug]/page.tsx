import { compileMDX } from 'next-mdx-remote/rsc';
import { getAllPosts, getPostBySlug } from '@/lib/posts';
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

  return (
    <main className="container py-12">
      <article className="prose prose-lg max-w-none">
        <h1>{meta.title}</h1>
        <p className="text-gray-500">{meta.date} · {meta.category}</p>
        {mdxContent}
      </article>
    </main>
  );
}
