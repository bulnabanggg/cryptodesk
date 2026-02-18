import { getAllPosts } from '../lib/posts';
import Header from '@/components/Header';
import SectionNav from '@/components/SectionNav';
import LayoutGrid from '@/components/LayoutGrid';
import LeadStory from '@/components/LeadStory';
import StoryList from '@/components/StoryList';
import { SidebarLatest, SidebarCategories, SidebarMarketPulse, SidebarMostRead } from '@/components/Sidebar';

export default function HomePage() {
  const posts = getAllPosts();
  const [lead, ...rest] = posts.map((p) => p.meta);
  const latest = rest.slice(0, 5).map((p) => ({ title: p.title, slug: p.slug }));
  const mostRead = rest.slice(0, 5).map((p) => ({ title: p.title, slug: p.slug }));
  const categories = Array.from(new Set(posts.map((p) => p.meta.category)));

  return (
    <div className="min-h-screen">
      <Header />
      <SectionNav />

      <LayoutGrid
        left={
          <>
            <SidebarLatest items={latest} />
            <SidebarCategories categories={categories} />
          </>
        }
        main={
          <>
            <LeadStory post={lead} />
            <StoryList posts={rest} />
          </>
        }
        right={
          <>
            <SidebarMarketPulse />
            <SidebarMostRead items={mostRead} />
          </>
        }
      />
    </div>
  );
}
