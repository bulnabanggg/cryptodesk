import Link from 'next/link';

const sections = ['Ethereum', 'Bitcoin', 'Markets', 'Research'];

export default function SectionNav() {
  return (
    <nav className="border-b border-gray-200">
      <div className="container py-3">
        <div className="flex justify-center gap-6 text-xs tracking-widest uppercase text-gray-700">
          {sections.map((s, i) => (
            <span key={s} className="flex items-center gap-6">
              <Link href="#" className="hover:underline underline-offset-4">
                {s}
              </Link>
              {i < sections.length - 1 && <span className="opacity-30">/</span>}
            </span>
          ))}
        </div>
      </div>
    </nav>
  );
}
