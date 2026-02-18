import Link from 'next/link';
import { getAllPosts } from '../lib/posts';

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen">
      <header className="border-b border-gray-200">
        <div className="container py-6">
          <h1 className="text-3xl font-bold">CryptoDesk</h1>
          <p className="mt-2 text-sm text-gray-500">Clear, research‑first crypto notes.</p>
        </div>
      </header>

      <main className="container py-14">
        <section>
          {posts.map(({ meta }) => (
            <article key={meta.slug} className="border-b border-gray-200 py-6">
              <h2 className="text-2xl font-semibold">
                <Link href={`/blog/${meta.slug}`} className="hover:text-[#2563eb]">
                  {meta.title}
                </Link>
              </h2>
              <p className="mt-2 text-gray-600 line-clamp-2">{meta.description}</p>
              <div className="mt-2 text-sm text-gray-500">{meta.date} • {meta.category}</div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
