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
      <div className="mb-6 text-sm text-gray-500">
        <Link href="/">← Back to all posts</Link>
      </div>
      <h1 className="text-[28px] font-semibold mb-6">Category: {params.category}</h1>
      <div>
        {posts.map(({ meta }) => (
          <article key={meta.slug} className="border-b border-gray-200 py-6">
            <h2 className="text-[24px] font-semibold">
              <Link href={`/blog/${meta.slug}`} className="hover:text-[#2563eb]">
                {meta.title}
              </Link>
            </h2>
            <p className="mt-2 text-gray-600">{meta.description}</p>
            <div className="mt-2 text-sm text-gray-500">{meta.date} • {meta.readingTime} • {meta.author}</div>
          </article>
        ))}
      </div>
    </main>
  );
}
