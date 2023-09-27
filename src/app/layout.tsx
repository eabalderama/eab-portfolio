import './globals.css';
import type { Metadata } from 'next';
import { Roboto_Mono } from 'next/font/google';
import { ReactNode } from 'react';
import Navbar from './components/Navbar';
import Script from 'next/script';

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
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-F5H7S8MX7V" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-F5H7S8MX7V');
        `}
      </Script>
      <body className={`${robotoMono.className}`}>
        <Navbar />
        <div className="max-w-2xl mx-auto pt-12">{children}</div>
      </body>
    </html>
  );
}
