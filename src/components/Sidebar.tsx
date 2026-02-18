export function SidebarLatest({ items }: { items: { title: string; slug: string }[] }) {
  return (
    <section>
      <h4 className="text-sm font-semibold uppercase tracking-widest text-neutral-600">Latest</h4>
      <ul className="mt-3 space-y-3 text-sm">
        {items.map((i) => (
          <li key={i.slug} className="border-b border-neutral-200 pb-2">
            {i.title}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function SidebarCategories({ categories }: { categories: string[] }) {
  return (
    <section>
      <h4 className="text-sm font-semibold uppercase tracking-widest text-neutral-600">Categories</h4>
      <ul className="mt-3 space-y-2 text-sm text-neutral-700">
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
      <h4 className="text-sm font-semibold uppercase tracking-widest text-neutral-600">Market Pulse</h4>
      <div className="mt-3 border border-neutral-300 p-4 text-sm text-neutral-700">
        Market dashboard placeholder
      </div>
    </section>
  );
}

export function SidebarMostRead({ items }: { items: { title: string; slug: string }[] }) {
  return (
    <section>
      <h4 className="text-sm font-semibold uppercase tracking-widest text-neutral-600">Most Read</h4>
      <ol className="mt-3 list-decimal list-inside space-y-2 text-sm text-neutral-700">
        {items.map((i) => (
          <li key={i.slug}>{i.title}</li>
        ))}
      </ol>
    </section>
  );
}
