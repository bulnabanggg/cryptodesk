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
  const currentIndex = all.findIndex((p) => p.slug === meta.slug);
  const prev = all[currentIndex + 1];
  const next = all[currentIndex - 1];

  const words = content.split(/\s+/).filter(Boolean);
  const splitIndex = Math.max(1, Math.floor(words.length * 0.3));
  const firstPart = words.slice(0, splitIndex).join(' ');
  const secondPart = words.slice(splitIndex).join(' ');

  const first = await compileMDX({ source: firstPart });
  const second = await compileMDX({ source: secondPart });

  return (
    <main className="container py-10">
      <div className="mb-6 text-sm text-gray-500">
        <Link href="/">← Back to all posts</Link>
      </div>
      <article className="prose prose-lg max-w-none">
        <h1 className="text-[40px] font-semibold tracking-tight">{meta.title}</h1>
        <p className="mt-2 text-gray-600">{meta.description}</p>
        <p className="mt-2 text-sm text-gray-500">{meta.date} • {meta.readingTime} • {meta.category}</p>

        <div className="mt-6">{first.content}</div>

        <div className="my-8 border border-gray-200 p-4 text-sm">
          <div className="font-semibold">Subscribe to CryptoDesk Research</div>
          <div className="mt-1 text-gray-600">Get weekly market notes and research summaries.</div>
          <button className="mt-3 rounded-full border border-gray-300 px-3 py-1 text-sm">Subscribe</button>
        </div>

        <div>{second.content}</div>
      </article>

      <div className="mt-10 flex items-center justify-between text-sm text-gray-600">
        <div className="space-x-3">
          <span>Share:</span>
          <a href="#">X</a>
          <a href="#">LinkedIn</a>
          <a href="#">Copy link</a>
        </div>
        <div className="space-x-4">
          {prev && <Link href={`/blog/${prev.slug}`}>← Previous</Link>}
          {next && <Link href={`/blog/${next.slug}`}>Next →</Link>}
        </div>
      </div>
    </main>
  );
}
