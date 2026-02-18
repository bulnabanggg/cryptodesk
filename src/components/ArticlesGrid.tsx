'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { PostMeta } from '@/lib/posts';

type SortOption = 'newest' | 'oldest' | 'category';

export default function ArticlesGrid({ posts }: { posts: PostMeta[] }) {
  const categories = Array.from(new Set(posts.map((p) => p.category)));
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [sort, setSort] = useState<SortOption>('newest');

  const filtered = useMemo(() => {
    let items = posts;
    if (activeCategory !== 'all') {
      items = items.filter((p) => p.category === activeCategory);
    }
    if (sort === 'newest') {
      items = [...items].sort((a, b) => (a.date < b.date ? 1 : -1));
    } else if (sort === 'oldest') {
      items = [...items].sort((a, b) => (a.date > b.date ? 1 : -1));
    } else if (sort === 'category') {
      items = [...items].sort((a, b) => a.category.localeCompare(b.category));
    }
    return items;
  }, [posts, activeCategory, sort]);

  return (
    <section>
      <div className="bg-[#3b524b] px-4 py-4 rounded-xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2 overflow-x-auto">
            <button
              onClick={() => setActiveCategory('all')}
              className={`rounded-full px-3 py-1 text-xs ${activeCategory === 'all' ? 'bg-white text-gray-900' : 'bg-[#2f403a] text-white/90'}`}
            >
              All
            </button>
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={`rounded-full px-3 py-1 text-xs ${activeCategory === c ? 'bg-white text-gray-900' : 'bg-[#2f403a] text-white/90'}`}
              >
                {c}
              </button>
            ))}
          </div>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="rounded-xl border border-white/10 bg-[#2f403a] px-4 py-2 text-sm text-white focus:outline-none focus:ring-4 focus:ring-white/10"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="category">Category A–Z</option>
          </select>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
            <article className="rounded-2xl border border-gray-200 bg-white shadow-sm transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:shadow-md">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-2xl">
                <Image
                  src={post.coverImage || '/placeholder.jpg'}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <div className="text-xs uppercase tracking-widest text-gray-500">{post.category}</div>
                <div className="mt-2 text-sm text-gray-500">{post.date}</div>
                <h3 className="mt-2 font-serif text-[22px] leading-snug text-gray-900">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-3">{post.description}</p>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
