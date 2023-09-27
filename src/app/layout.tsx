import './globals.css';
import type { Metadata } from 'next';
import { Roboto_Mono } from 'next/font/google';
import { ReactNode } from 'react';
import Navbar from './components/Navbar';

const robotoMono = Roboto_Mono({ subsets: ['latin'] });

type LayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: 'E.A.Balderama',
  description: 'Developer portfolio by Edgar Alan Balderama',
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={`${robotoMono.className}`}>
        <Navbar />
        <div className="max-w-2xl mx-auto pt-12">{children}</div>
      </body>
    </html>
  );
}
