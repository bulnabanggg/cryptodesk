import Link from 'next/link';
import { getAllPosts } from '../lib/posts';

export default function HomePage() {
  const posts = getAllPosts();
  const categories = Array.from(new Set(posts.map((p) => p.meta.category)));

  return (
    <div className="min-h-screen">
      <header className="border-b border-gray-200 bg-[#fdfdfc]">
        <div className="container py-6">
          <h1 className="text-[36px] font-semibold">CryptoDesk</h1>
          <p className="mt-1 text-sm text-gray-500">Straightforward crypto research & market notes.</p>
          <nav className="mt-4 flex flex-wrap gap-6 text-sm text-gray-600">
            {categories.map((c) => (
              <Link key={c} href={`/category/${c}`} className="hover:text-[#2563eb]">
                {c}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="container py-10">
        <section>
          {posts.map(({ meta }) => (
            <article key={meta.slug} className="border-b border-gray-200 py-6">
              <h2 className="text-[26px] font-semibold">
                <Link href={`/blog/${meta.slug}`} className="hover:text-[#2563eb]">
                  {meta.title}
                </Link>
              </h2>
              <p className="mt-2 text-gray-600">{meta.description}</p>
              <div className="mt-2 text-sm text-gray-500">{meta.date}</div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
