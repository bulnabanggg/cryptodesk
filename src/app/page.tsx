import Link from 'next/link';
import { getAllPosts } from '../lib/posts';

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <main className="container py-12">
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight">CryptoDesk</h1>
        <p className="mt-2 text-gray-600">SEO-first crypto research and analysis.</p>
      </header>

      <section className="grid gap-6">
        {posts.map(({ meta }) => (
          <article key={meta.slug} className="card">
            <div className="text-xs uppercase tracking-wide text-gray-500">{meta.category}</div>
            <h2 className="mt-2 text-xl font-semibold">
              <Link href={`/blog/${meta.slug}`} className="text-indigo-600 hover:underline">
                {meta.title}
              </Link>
            </h2>
            <p className="mt-2 text-gray-700">{meta.description}</p>
            <div className="mt-4 text-sm text-gray-500">{meta.date}</div>
          </article>
        ))}
      </section>
    </main>
  );
}
