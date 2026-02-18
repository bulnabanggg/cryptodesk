import Link from 'next/link';
import { getAllCategories, getPostsByCategory } from '../../../lib/posts';

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((category) => ({ category }));
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const posts = getPostsByCategory(params.category);

  return (
    <main className="container py-12">
      <h1 className="text-[32px] font-semibold mb-6">Category: {params.category}</h1>
      <div className="grid gap-8">
        {posts.map(({ meta }) => (
          <article key={meta.slug} className="card">
            <div className="flex items-center justify-between">
              <span className="badge">{meta.category}</span>
              <span className="text-sm text-gray-500">{meta.date}</span>
            </div>
            <h2 className="mt-3 text-[24px] font-semibold text-gray-900">
              <Link href={`/blog/${meta.slug}`} className="hover:text-[#2563eb]">
                {meta.title}
              </Link>
            </h2>
            <p className="mt-2 text-gray-700">{meta.description}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
