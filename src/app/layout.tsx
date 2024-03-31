'use client';

import { ReactNode } from 'react';

import './globals.css';
import { Providers } from '@/lib/featurues/provider';

type LayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
