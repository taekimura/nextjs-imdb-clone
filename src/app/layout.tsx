import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Providers from './Providers';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'IMDb Clone',
  description: 'This is the IMDb clone website'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <Header />
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
