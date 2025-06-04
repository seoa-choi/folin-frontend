import { Noto_Sans_KR } from 'next/font/google';
import localFont from 'next/font/local';

// 변수형 폰트는 weight 지정안함
export const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  display: 'swap',
});

export const suite = localFont({
  src: [
    { path: '../../public/fonts/SUITE-Light.woff', weight: '300' },
    { path: '../../public/fonts/SUITE-Regular.woff', weight: '400' },
    { path: '../../public/fonts/SUITE-Medium.woff', weight: '500' },
    { path: '../../public/fonts/SUITE-SemiBold.woff', weight: '600' },
    { path: '../../public/fonts/SUITE-Bold.woff', weight: '700' },
    { path: '../../public/fonts/SUITE-ExtraBold.woff', weight: '800' },
    { path: '../../public/fonts/SUITE-Heavy.woff', weight: '900' },
  ],
  display: 'swap',
});
