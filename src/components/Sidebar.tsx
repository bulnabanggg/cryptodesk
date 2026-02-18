export function SidebarLatest({ items }: { items: { title: string; slug: string }[] }) {
  return (
    <section>
      <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-600">Latest</h4>
      <ul className="mt-3 space-y-3 text-sm">
        {items.map((i) => (
          <li key={i.slug} className="border-b border-gray-200 pb-2">
            {i.title}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function SidebarCategories({ categories }: { categories: string[] }) {
  return (
    <section className="mt-10 border-t border-gray-200 pt-6">
      <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-600">Categories</h4>
      <ul className="mt-3 space-y-2 text-sm text-gray-700">
        {categories.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </section>
  );
}

export function SidebarMarketPulse() {
  return (
    <section>
      <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-600">Market Pulse</h4>
      <div className="mt-3 border border-gray-200 p-4 text-sm text-gray-700">
        Market dashboard placeholder
      </div>
    </section>
  );
}

export function SidebarMostRead({ items }: { items: { title: string; slug: string }[] }) {
  return (
    <section>
      <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-600">Most Read</h4>
      <ol className="mt-3 list-decimal list-inside space-y-2 text-sm text-gray-700">
        {items.map((i) => (
          <li key={i.slug}>{i.title}</li>
        ))}
      </ol>
    </section>
  );
}
