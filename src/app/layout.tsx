import { Inter } from 'next/font/google';

import type { Metadata } from 'next';

import Providers from '@/components/providers';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MJ Next App',
  description: 'MJ Next App',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <body className={inter.className}>
      <Providers>{children}</Providers>
    </body>
  </html>
);

export default RootLayout;
