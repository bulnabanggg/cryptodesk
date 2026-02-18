import Link from 'next/link';
import { PostMeta } from '@/lib/posts';

export default function StoryList({ posts }: { posts: PostMeta[] }) {
  return (
    <div className="grid grid-cols-2 gap-8">
      {posts.map((post) => (
        <article key={post.slug} className="border-b border-gray-200 py-6">
          <div className="text-[11px] uppercase tracking-widest text-gray-500">{post.category}</div>
          <h3 className="mt-2 font-serif text-[24px] leading-snug text-gray-900">
            <Link href={`/blog/${post.slug}`} className="hover:underline underline-offset-4">
              {post.title}
            </Link>
          </h3>
          <p className="mt-2 text-sm text-gray-700">{post.description}</p>
          <div className="mt-3 text-xs text-gray-500">{post.date}</div>
        </article>
      ))}
    </div>
  );
}
