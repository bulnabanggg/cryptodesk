import Link from 'next/link';

export default function Header() {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <header className="border-b border-gray-200">
      <div className="container">
        <div className="flex items-center justify-between py-3 text-sm text-gray-600">
          <span>{today}</span>
          <span>Subscribe to CryptoDesk Research</span>
        </div>
      </div>
      <div className="border-t border-gray-200" />
      <div className="container py-6 text-center">
        <h1 className="font-serif text-[52px] tracking-tight text-gray-900">CryptoDesk</h1>
        <div className="mt-2 text-xs uppercase tracking-[0.2em] text-gray-600">
          Professional Crypto Research
        </div>
      </div>
      <div className="border-t border-gray-200" />
    </header>
  );
}
