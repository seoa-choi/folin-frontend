import type { Metadata } from 'next';
import './globals.css';
import { suite } from '@/app/components/fonts';
import TanStackProvider from '@/providers/TanStackProvider';
import ThemeProvider from '@/app/components/ThemeProvider';

export const metadata: Metadata = {
  title: {
    default: '폴인 - fol:in',
    template: '폴인 ',
  },
  description:
    '폴인, folin, 직장인, 성공, 인사이트, 트렌드, 브랜딩, 커리어, 멤버십, 구독, 마케팅',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <ThemeProvider>
        <body className={suite.className}>
          <TanStackProvider>{children}</TanStackProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}
