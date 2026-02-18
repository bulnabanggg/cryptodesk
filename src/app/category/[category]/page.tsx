import Link from 'next/link';
import { getAllCategories, getPostsByCategory } from '../../../lib/posts';

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((category) => ({ category }));
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const posts = getPostsByCategory(params.category);

  return (
    <main className="container py-10">
      <h1 className="font-serif text-[32px] font-semibold mb-6">Category: {params.category}</h1>
      <div className="grid gap-8">
        {posts.map(({ meta }) => (
          <article key={meta.slug} className="border-b border-neutral-300 pb-6">
            <div className="text-[11px] uppercase tracking-widest text-neutral-500">{meta.category}</div>
            <h2 className="mt-2 font-serif text-[24px] leading-snug text-neutral-900">
              <Link href={`/blog/${meta.slug}`} className="hover:underline underline-offset-4">
                {meta.title}
              </Link>
            </h2>
            <p className="mt-2 text-neutral-700">{meta.description}</p>
            <div className="mt-3 text-xs text-neutral-500">{meta.date}</div>
          </article>
        ))}
      </div>
    </main>
  );
}
