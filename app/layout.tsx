import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '12TenSystems',
  description: 'AI systems built to increase conversions and scale your business.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
