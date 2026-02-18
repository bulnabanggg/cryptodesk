import { getAllPosts } from '@/lib/posts';
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const baseUrl = 'https://cryptodesk.vercel.app';

  return [
    { url: baseUrl, lastModified: new Date() },
    ...posts.map((p) => ({
      url: `${baseUrl}/blog/${p.meta.slug}`,
      lastModified: new Date(p.meta.date)
    }))
  ];
}
