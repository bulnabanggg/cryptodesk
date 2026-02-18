import Link from 'next/link';
import { getAllPosts } from '../lib/posts';
import ArticlesGrid from '@/components/ArticlesGrid';

export default function HomePage() {
  const posts = getAllPosts().map((p) => p.meta);

  return (
    <div className="min-h-screen bg-[#eef2ef]">
      <header className="h-14 border-b border-gray-200 bg-white">
        <div className="container h-14 flex items-center justify-between">
          <div className="text-lg font-semibold">CryptoDesk</div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            {['Research', 'Markets', 'Bitcoin', 'Ethereum'].map((n) => (
              <Link key={n} href="#" className="hover:text-[#2563eb]">
                {n}
              </Link>
            ))}
          </nav>
          <button className="rounded-full bg-[#2563eb] px-4 py-2 text-xs font-semibold text-white">Subscribe</button>
        </div>
      </header>

      <section className="bg-[#1f2b26] text-white">
        <div className="container py-14">
          <h1 className="font-serif text-[64px] tracking-tight">Articles</h1>
          <p className="mt-2 text-white/70">Curated research, editorial insights, and market context.</p>
        </div>
      </section>

      <main className="container py-10">
        <ArticlesGrid posts={posts} />
      </main>

      <footer className="border-t border-white/10 bg-[#1f2b26] text-gray-300">
        <div className="container py-14 grid gap-8 md:grid-cols-3">
          <div>
            <div className="text-white text-lg font-semibold">CryptoDesk</div>
            <p className="mt-2 text-sm text-gray-400">Premium crypto research and editorial analysis.</p>
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Resources</div>
            <ul className="mt-3 space-y-2 text-sm">
              <li>About</li>
              <li>Research</li>
              <li>Markets</li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Subscribe</div>
            <div className="mt-3 flex gap-2">
              <input className="w-full rounded-md border border-white/10 bg-[#2f403a] px-3 py-2 text-sm text-white placeholder:text-white/60" placeholder="Email address" />
              <button className="rounded-md bg-[#2563eb] px-3 py-2 text-sm font-semibold text-white">Join</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
