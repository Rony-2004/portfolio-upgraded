import './globals.css';
import type { Metadata } from 'next';
import { DotGothic16, Press_Start_2P } from 'next/font/google';

const dotGothic = DotGothic16({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-dotgothic'
});

const pressStart = Press_Start_2P({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-press-start'
});

export const metadata: Metadata = {
  title: 'Mowazzem Uddin Ahmed - Portfolio',
  description: 'Full Stack Developer | DevOps | Cloud Engineer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${dotGothic.variable} ${pressStart.variable} font-sans`}>{children}</body>
    </html>
  );
}
