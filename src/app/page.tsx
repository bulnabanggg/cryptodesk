import Link from 'next/link';
import { getAllPosts } from '../lib/posts';

export default function HomePage() {
  const posts = getAllPosts();
  const categories = Array.from(new Set(posts.map((p) => p.meta.category)));

  return (
    <div className="min-h-screen">
      <header className="border-b border-gray-200 bg-white">
        <div className="container py-6 flex items-center justify-between">
          <div>
            <h1 className="text-[40px] font-semibold tracking-wide">CryptoDesk</h1>
            <p className="text-sm text-gray-500">Professional Crypto Research</p>
          </div>
          <nav className="flex items-center gap-4 text-sm font-semibold text-gray-600">
            {categories.map((c) => (
              <Link key={c} href={`/category/${c}`} className="hover:text-[#2563eb]">
                {c}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="container py-12">
        <section className="grid gap-8">
          {posts.map(({ meta }) => (
            <article key={meta.slug} className="card">
              <div className="flex items-center justify-between">
                <span className="badge">{meta.category}</span>
                <span className="text-sm text-gray-500">{meta.date}</span>
              </div>
              <h2 className="mt-3 text-[26px] font-semibold text-gray-900">
                <Link href={`/blog/${meta.slug}`} className="hover:text-[#2563eb]">
                  {meta.title}
                </Link>
              </h2>
              <p className="mt-2 text-gray-700">{meta.description}</p>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
