import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'CryptoDesk Research',
    template: '%s | CryptoDesk Research'
  },
  description: 'CryptoDesk Research: professional crypto market intelligence and analysis.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
