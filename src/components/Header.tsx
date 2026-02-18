import Link from 'next/link';

export default function Header() {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <header className="border-b border-neutral-300">
      <div className="container">
        <div className="flex items-center justify-between py-3 text-sm text-neutral-600">
          <span>{today}</span>
          <span>Subscribe to CryptoDesk Research</span>
        </div>
      </div>
      <div className="border-t border-neutral-300" />
      <div className="container py-6 text-center">
        <h1 className="font-serif text-[48px] tracking-tight text-neutral-900">CryptoDesk</h1>
        <div className="mt-2 text-xs uppercase tracking-[0.2em] text-neutral-600">
          Professional Crypto Research
        </div>
      </div>
      <div className="border-t border-neutral-300" />
    </header>
  );
}
