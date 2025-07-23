'use client';

import Header from '@/app/components/home/Header';
import Footer from '@/app/components/home/Footer';
import Membership from '@/app/components/home/Membership';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import ChatPage from '@/app/chat/page';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const header = document.querySelector('header');
      const headerHeight = header ? header.offsetHeight : 0;

      // 푸터 위치 감지
      const footer = document.querySelector('footer');
      const footerTop = footer ? footer.offsetTop : document.body.scrollHeight;

      // 푸터 상단도달 sticky 해제
      const isSticky =
        window.scrollY >= headerHeight &&
        window.scrollY + window.innerHeight < footerTop;

      setIsSticky(isSticky);
      // console.log(isSticky);
    }

    window.addEventListener('scroll', handleScroll);
    return function () {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      {children}
      {/* 멤버십 - 메인만 적용 */}
      {/* {pathname === '/' && <Membership isSticky={isSticky} />} */}
      {['/', '/series', '/seminar'].includes(pathname) && (
        <Membership isSticky={isSticky} />
      )}

      <Footer />
      <ChatPage />
    </>
  );
}

// 1. offsetHeight - 요소 전체 높이
// - 요소 전체 높이(padding+border포함, margin제외)
// - 반환 값: 요소의 픽셀 높이 number, display:none이면 0

// 2. offsetTop - 요소의 위치(위쪽 거리)
// - 해당 요소가 부모 요소(가장 가까운 relative, absolute등을 가진 요소 기준)으로 얼마나 떨어져 있는지, (margin 제외)
// - 반환 값: 요소의 top 위치 픽셀 값 number
// static인 경우 부모 컨테이너 기준으로 계산 됨

// scrollHeight 실제 콘텐츠 높이
