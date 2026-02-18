import Link from 'next/link';
import { getAllPosts } from '../lib/posts';

export default function HomePage() {
  const posts = getAllPosts();
  const categories = Array.from(new Set(posts.map((p) => p.meta.category)));
  const [featured, ...rest] = posts.map((p) => p.meta);

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-10 border-b border-gray-200 bg-white/95 backdrop-blur">
        <div className="container py-6 flex items-center justify-between">
          <div className="text-[24px] font-semibold">CryptoDesk</div>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <Link href="#" className="hover:text-[#2563eb]">Search</Link>
            <button className="rounded-full border border-gray-300 px-3 py-1 text-sm hover:border-gray-400">Subscribe</button>
          </div>
        </div>
        <div className="container pb-4">
          <p className="text-sm text-gray-500">Straightforward crypto research & market notes.</p>
          <nav className="mt-3 flex flex-wrap gap-6 text-sm text-gray-600">
            {categories.map((c) => (
              <Link key={c} href={`/category/${c}`} className="hover:text-[#2563eb]">
                {c}
              </Link>
            ))}
            <Link href="/sitemap.xml" className="ml-auto text-xs text-gray-400 hover:text-[#2563eb]">RSS</Link>
          </nav>
        </div>
      </header>

      <main className="container py-10">
        <section className="border-b border-gray-200 pb-6">
          <div className="text-[11px] uppercase tracking-widest text-gray-500">{featured.category}</div>
          <h2 className="mt-2 text-[32px] font-semibold">
            <Link href={`/blog/${featured.slug}`} className="hover:text-[#2563eb]">
              {featured.title}
            </Link>
          </h2>
          <p className="mt-2 text-gray-600">{featured.description}</p>
          <div className="mt-2 text-sm text-gray-500">{featured.date} • {featured.readingTime} • {featured.author}</div>
          <div className="mt-3 text-sm">
            <Link href={`/blog/${featured.slug}`} className="text-[#2563eb]">Read →</Link>
          </div>
        </section>

        <section className="mt-6">
          {rest.map((meta) => (
            <article key={meta.slug} className="border-b border-gray-200 py-6">
              <h3 className="text-[24px] font-semibold">
                <Link href={`/blog/${meta.slug}`} className="hover:text-[#2563eb]">
                  {meta.title}
                </Link>
              </h3>
              <p className="mt-2 text-gray-600">{meta.description}</p>
              <div className="mt-2 text-sm text-gray-500">{meta.date} • {meta.readingTime} • {meta.author}</div>
            </article>
          ))}
        </section>
      </main>

      <footer className="container py-10 text-sm text-gray-500">
        <div>© 2026 CryptoDesk Research · Not financial advice</div>
        <div className="mt-2">contact@cryptodesk.example</div>
      </footer>
    </div>
  );
}
