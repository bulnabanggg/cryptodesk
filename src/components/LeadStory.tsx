import Link from 'next/link';
import { PostMeta } from '@/lib/posts';

export default function LeadStory({ post }: { post: PostMeta }) {
  return (
    <article className="border-b-2 border-gray-300 pb-8">
      <div className="text-[11px] uppercase tracking-widest text-gray-500">{post.category}</div>
      <h2 className="mt-2 font-serif text-[38px] leading-tight text-gray-900">
        <Link href={`/blog/${post.slug}`} className="hover:underline underline-offset-4">
          {post.title}
        </Link>
      </h2>
      <p className="mt-3 text-[17px] text-gray-700">{post.description}</p>
      <div className="mt-3 text-sm text-gray-500">{post.date}</div>
      <div className="mt-4 h-48 w-full border border-gray-200 bg-gray-100" />
    </article>
  );
}
