import Link from 'next/link';
import { getAllCategories, getPostsByCategory } from '@/lib/posts';

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((category) => ({ category }));
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const posts = getPostsByCategory(params.category);

  return (
    <main className="container py-12">
      <h1 className="text-2xl font-bold mb-6">Category: {params.category}</h1>
      <div className="grid gap-6">
        {posts.map(({ meta }) => (
          <article key={meta.slug} className="card">
            <h2 className="text-xl font-semibold">
              <Link href={`/blog/${meta.slug}`} className="text-accent hover:underline">
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
