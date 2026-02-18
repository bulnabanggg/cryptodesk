import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'CryptoDesk',
    template: '%s | CryptoDesk'
  },
  description: 'CryptoDesk: SEO-first crypto research and analysis.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
