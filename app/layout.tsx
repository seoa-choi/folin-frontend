import type { Metadata } from 'next';
import './globals.css';
import { notoSansKR } from '@/app/components/fonts'; // suite
import TanStackProvider from '@/providers/TanStackProvider';
import ThemeProvider from '@/app/components/ThemeProvider';

export const metadata: Metadata = {
  title: {
    default: '폴인 - fol:in',
    template: '폴인 ',
  },

  keywords:
    '폴인, folin, 직장인, 성공, 인사이트, 트렌드, 브랜딩, 커리어, 멤버십, 구독, 마케팅',
  description: '일에 진심인 사람들을 위한 트렌드&커리어 콘텐츠',

  openGraph: {
    siteName: '폴인',
    title: '폴인 - fol:in',
    description: '일에 진심인 사람들을 위한 트렌드&커리어 콘텐츠',
    url: 'https://seoachoiaws.com',

    images: [
      {
        url: 'https://seoachoiaws.com/images/og_folin.jpg',
        width: 765,
        height: 400,
        alt: '폴인',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <ThemeProvider>
        <body className={notoSansKR.className}>
          <TanStackProvider>{children}</TanStackProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}
