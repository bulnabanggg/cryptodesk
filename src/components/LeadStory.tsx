import Link from 'next/link';
import { PostMeta } from '@/lib/posts';

export default function LeadStory({ post }: { post: PostMeta }) {
  return (
    <article className="border-b border-neutral-300 pb-6">
      <div className="text-xs uppercase tracking-widest text-neutral-500">{post.category}</div>
      <h2 className="mt-2 font-serif text-[38px] leading-tight text-neutral-900">
        <Link href={`/blog/${post.slug}`} className="hover:underline underline-offset-4">
          {post.title}
        </Link>
      </h2>
      <p className="mt-3 text-[18px] text-neutral-700">{post.description}</p>
      <div className="mt-3 text-sm text-neutral-500">{post.date}</div>
      <div className="mt-4 h-48 w-full border border-neutral-300 bg-neutral-100" />
    </article>
  );
}
