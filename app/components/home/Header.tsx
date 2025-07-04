'use client';

import Link from 'next/link';
import Image from 'next/image';
import Gnb from '@/app/components/home/Gnb';
import { useEffect, useState } from 'react';
import SearchMenu from '@/app/components/home/SearchMenu';

const menus = [
  {
    menu: '시리즈',
    path: '/series',
    menuItems: [
      { menuItem: '시리즈로 보기', path: '/series' },
      { menuItem: '아티클만 보기', path: '/article' },
      { menuItem: '비디오만 보기', path: '/video' },
    ],
  },
  {
    menu: '세미나',
    path: '/seminar',
  },
];
const menus2 = [
  {
    menu: '톡',
    path: '/talk',
  },
  { menu: '|', path: '' },
  {
    menu: 'B2B',
    path: '/b2b',
  },
];

const submenus = [
  { menu: '링커', path: '/linker' },
  { menu: '폴인 소개', path: '' },
  { menu: '단체구독·B2B문의', path: '' },
  { menu: '폴인레터 신청', path: '' },
];

const userMenu = [
  { menu: '멤버십 구독', path: '', color: 'text-white', bg: 'bg-[#111]' },
  { menu: '로그인', path: '', color: 'text-gray-600', bg: 'bg-white' },
];

export default function Header() {
  // 써치
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  // 서버 오류 방지 값 0
  const [windowWidth, setWindowWidth] = useState(0);
  // 클라이언트에서만 변경
  const [isMobile, setIsMobile] = useState(false);

  // 창 크기 변경 시 값을 저장
  function handleResize() {
    setWindowWidth(window.innerWidth);
    setIsMobile(window.innerWidth <= 767);
  }
  useEffect(() => {
    // 클라이언트 환경에서만 실행
    if (typeof window !== 'undefined') {
      // 초기 브라우저 너비
      setWindowWidth(window.innerWidth);
      // resize 이벤트
      window.addEventListener('resize', handleResize);
      // 클린 업
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth <= 767);
    }
  }, []);

  // console.log(userMenu);
  // console.log(userMenu.slice(1));
  // console.log(isMobile);

  function handleSearchBar() {
    setIsSearchOpen(!isSearchOpen);
  }

  return (
    <header
      className="fixed w-full left-0 top-0 px-[24px] max-sm:px-[8px] z-100"
      id="header"
    >
      <div className="max-w-[1200px] mx-auto pt-[4px] relative max-sm:pt-[8px]  before:left-0 before:top-0 before:absolute before:bg-[#ebedec] before:w-full before:h-[50px]">
        <nav className="w-full h-[48px] flex items-center justify-between p-[8px] bg-point1 rounded-[6px] relative">
          <div className="flex items-center gap-[10px]">
            <Gnb menus={menus} submenus={submenus} menus2={menus2} />
            <h1 className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] max-sm:static max-sm:translate-0 ">
              <Link
                href="/"
                className="block w-[86px] h-[29px] max-sm:w-[82px] max-sm:max-h-[83px]"
              >
                <Image
                  src="/images/folin.png"
                  alt="폴인"
                  width={86}
                  height={29}
                  className="w-full h-full object-cover"
                />
              </Link>
            </h1>
          </div>
          <div className="flex items-center justify-end gap-[4px]">
            {/* 767이하 0X, 1번 버튼만 */}
            {isMobile
              ? userMenu.slice(1).map((item) => (
                  <Link
                    href=""
                    key={item.menu}
                    className={`${item.bg} ${item.color} py-[6px] px-[10px] rounded-[6px] text-[12px] font-bold h-[27px] leading-[15px]`}
                  >
                    {item.menu}
                  </Link>
                ))
              : userMenu.map((item) => (
                  <Link
                    href=""
                    key={item.menu}
                    className={`${item.bg} ${item.color} py-[6px] px-[10px] rounded-[6px] text-[12px] font-bold h-[27px] leading-[15px]`}
                  >
                    {item.menu}
                  </Link>
                ))}
            {/* 검색 */}
            <button
              type="button"
              className="bg-transparent"
              onClick={handleSearchBar}
            >
              {!isSearchOpen ? (
                <Image
                  src="/images/search.png"
                  alt="검색"
                  width={32}
                  height={32}
                />
              ) : (
                <Image
                  src="/images/close.png"
                  alt="닫기"
                  width={32}
                  height={32}
                />
              )}
            </button>
          </div>
        </nav>
        {isSearchOpen && (
          <SearchMenu
            setIsSearchOpen={setIsSearchOpen}
            handleSearchBar={handleSearchBar}
          />
        )}
      </div>
    </header>
  );
}
