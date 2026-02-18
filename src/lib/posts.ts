import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type PostMeta = {
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  slug: string;
};

const postsDir = path.join(process.cwd(), 'content', 'posts');

export function getAllPosts() {
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith('.mdx'));
  return files.map((file) => {
    const filePath = path.join(postsDir, file);
    const source = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(source);
    return {
      meta: data as PostMeta,
      content
    };
  }).sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1));
}

export function getPostBySlug(slug: string) {
  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith('.mdx'));
  const file = files.find((f) => {
    const { data } = matter(fs.readFileSync(path.join(postsDir, f), 'utf8'));
    return (data as PostMeta).slug === slug;
  });
  if (!file) return null;
  const source = fs.readFileSync(path.join(postsDir, file), 'utf8');
  const { data, content } = matter(source);
  return { meta: data as PostMeta, content };
}

export function getAllCategories() {
  const posts = getAllPosts();
  const categories = new Set(posts.map((p) => p.meta.category));
  return Array.from(categories);
}

export function getPostsByCategory(category: string) {
  return getAllPosts().filter((p) => p.meta.category === category);
}
