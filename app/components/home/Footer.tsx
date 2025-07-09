'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const fMenus = [
  { menu: '이용약관', path: '' },
  { menu: '개인정보처리방침', path: '', className: 'font-bold' },
  { menu: '공지사항', path: '' },
  { menu: 'FAQ', path: '' },
  { menu: '1:1문의', path: '' },
];

const fIcon = [
  {
    icon: '/images/icon1.png',
    link: 'https://www.youtube.com/@folin_co',
    active: '/images/icon1_g.png',
    alt: '유튜브',
  },
  {
    icon: '/images/icon2.png',
    link: 'https://www.instagram.com/folin_co/',
    active: '/images/icon2_g.png',
    alt: '인스타',
  },
  {
    icon: '/images/icon3.png',
    link: 'https://pf.kakao.com/_xofQmC',
    active: '/images/icon3_g.png',
    alt: '카카오톡',
  },
];

const fooApp = [
  {
    img: '/images/app1.png',
    txtImg: '/images/app1.svg',
    alt: '앱스토어',
    w: 51,
    h: 11,
  },
  {
    img: '/images/app2.png',
    txtImg: '/images/app2.svg',
    alt: '구글플레이',
    w: 64,
    h: 12,
  },
];

export default function Footer() {
  const [isHover, setIsHover] = useState<number | null>(null);

  function handleActive(index: number) {
    setIsHover(index);
  }

  // 서버 오류 방지 값 0
  const [, setWindowWidth] = useState(0);
  // 클라이언트에서만 변경
  const [isMobile, setIsMobile] = useState(false);
  function handleResize() {
    setWindowWidth(window.innerWidth);
    setIsMobile(window.innerWidth <= 635);
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
      setIsMobile(window.innerWidth <= 635);
    }
  }, []);

  return (
    <footer className="px-[24px] max-sm:px-[8px] relative z-10">
      <div className="pt-[12px] px-[16px] pb-[64px] bg-white rounded-[6px_6px_0_0]">
        <ul className="flex gap-[16px] border-b-1 border-b-[#00d48d] pb-[9px] max-sm:flex-wrap max-sm:gap-y-[8px]">
          {fMenus.map((item) => (
            <li key={item.menu}>
              <Link href="" className={`${item.className} text-[13px]`}>
                {item.menu}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-[16px] mb-[8px] flex justify-between">
          <p className="text-[13px] font-bold">중앙일보(주)</p>
          <ul className="flex gap-[14px]">
            {fIcon.map((item, i) => (
              <li key={item.link}>
                <Link
                  href={item.link}
                  onMouseEnter={() => handleActive(i)}
                  onMouseLeave={() => setIsHover(null)}
                >
                  <Image
                    src={isHover === i ? item.active : item.icon}
                    alt={item.alt}
                    width={24}
                    height={24}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-[24px] text-[13px]">
          <p className="max-sm:tracking-[-0.025em]">
            사업자등록번호 : 110-81-00999 {!isMobile ? ' | ' : <br />}
            통신판매업신고 : 2020-서울마포-3802 {!isMobile ? ' | ' : <br />}
            개인정보책임자 : 김성진
          </p>
          <p className="max-sm:tracking-[-0.025em]">
            서울특별시 마포구 상암산로 48-6 {!isMobile ? ' | ' : <br />}
            대표이사 : 박장희
          </p>
        </div>
        <div className="text-[13px]">
          <p className="max-sm:tracking-[-0.025em]">
            fol:in의 모든 콘텐트는 저작권법의 보호를 받은바,
            {isMobile && <br />}무단 전재, 복사・배포 및 AI 학습・활용을
            금합니다.
          </p>
          <p className="max-sm:tracking-[-0.025em]">
            Copyright by JoongAng Ilbo Co., Ltd.{isMobile && <br />}All Rights
            Reserved
          </p>
        </div>
        <div className="flex gap-[4px] mt-[32px] max-sm:justify-center">
          {fooApp.map((item, i) => (
            <button
              key={i}
              className="bg-[#ebedec] w-[128px] h-[32px] rounded-[6px] px-[8px] flex items-center justify-center gap-[4px]"
            >
              <Image src={item.img} alt={item.alt} width={16} height={16} />
              <Image
                src={item.txtImg}
                alt={item.alt}
                width={item.w}
                height={item.h}
              />
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}
