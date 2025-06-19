import Image from 'next/image';
import Link from 'next/link';
import { Dispatch, SetStateAction, useEffect, useRef } from 'react';

const SearchMenus = [
  { menu: '마케팅' },
  { menu: '브랜딩' },
  { menu: '기획' },
  { menu: 'Ai' },
  { menu: '커리어' },
  { menu: '디자인' },
  { menu: '리더십' },
  { menu: '조직문화' },
  { menu: '콘텐츠' },
  { menu: '공간' },
];
export default function SearchMenu({
  setIsSearchOpen,
}: {
  setIsSearchOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const SearchRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!e.target) return;
      if (SearchRef.current && !SearchRef.current.contains(e.target as Node)) {
        setIsSearchOpen(false);
      }
    }

    // 서버 실행 방지
    if (typeof window !== 'undefined') {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, []);
  // ref={SearchRef} // 토글이 안되서 일단 주석처리
  return (
    <div className="w-full mx-auto p-[4px] bg-[#00d48d] rounded-[6px] mt-[4px] absolute after:absolute after:left-0 after:top-0 after:bg-[#ebedec] after:w-full after:h-full after:-z-1 left-0 top-[52px]">
      <form className="flex items-center gap-x-[8px] py-[4px] pr-[12px] pl-[6px] w-full rounded-[6px] bg-[#f7f7f7]">
        <button type="submit" className="w-[32px] h-[32px] bg-transparent">
          <Image src="/images/search.png" alt="검색" width={24} height={24} />
        </button>
        {/* caret 커서 색상 */}
        <input
          type="search"
          placeholder="성장의 경험을 찾습니다."
          className="w-[calc(100%-32px)] bg-transparent border-0 placeholder:text-[#666] placeholder:font-[Noto-Sans] h-[32px] caret-[#00d48d] p-0"
        />
      </form>
      <ul className="flex justify-center gap-x-[24px] gap-y-[16px] p-[18px] flex-wrap font-bold">
        {SearchMenus.map((item) => (
          <li key={item.menu}>
            <Link href="">{item.menu}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
