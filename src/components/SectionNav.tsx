import Link from 'next/link';

const sections = ['Ethereum', 'Bitcoin', 'Markets', 'Research'];

export default function SectionNav() {
  return (
    <nav className="border-b border-neutral-300">
      <div className="container py-3 flex items-center justify-center gap-8 text-sm uppercase tracking-wide text-neutral-700">
        {sections.map((s) => (
          <Link key={s} href="#" className="hover:underline underline-offset-4">
            {s}
          </Link>
        ))}
      </div>
    </nav>
  );
}
