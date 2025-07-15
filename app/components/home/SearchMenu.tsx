import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';

const searchMenus = [
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
  handleSearchBar,
}: {
  handleSearchBar: () => void;
}) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [hasInput, setHasInput] = useState(false);

  const router = useRouter();

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setHasInput(e.target.value.trim().length > 0);
  }

  function handleClear() {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
    setHasInput(false);
  }

  function handleSearchSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const keyword = inputRef.current?.value?.trim() || '';
    if (!keyword) return;

    const params = new URLSearchParams();
    params.set('keyword', keyword);
    params.set('page', '1');

    router.replace(`/search?keyword=${encodeURIComponent(keyword)}&page=1`);
    // router.replace(`/search?${params.toString()}`);
    router.refresh();
  }

  // after로 검색메뉴 구분
  // absolute after:absolute after:left-0 after:top-0 after:bg-[#ebedec] after:w-full after:h-full after:-z-1 left-0 top-[52px] max-sm:mt-[8px]

  return (
    <div className="w-full mx-auto p-[4px] bg-[#00d48d] rounded-[6px] mt-[4px] ">
      <form
        className="py-[4px] pr-[12px] pl-[6px] w-full rounded-[6px] bg-[#f7f7f7]"
        onSubmit={handleSearchSubmit}
      >
        <fieldset className="flex items-center gap-x-[8px]">
          <legend>통합 검색창</legend>
          <button type="submit" className="w-[32px] h-[32px] bg-transparent">
            <Image src="/images/search.png" alt="검색" width={24} height={24} />
          </button>
          {/* caret 커서 색상 */}
          <input
            type="search"
            placeholder="성장의 경험을 찾습니다."
            className="w-[calc(100%-32px)] bg-transparent border-0 placeholder:text-[#666] placeholder:font-[Noto-Sans] h-[32px] caret-[#00d48d] p-0"
            ref={inputRef}
            onChange={handleInputChange}
          />
          <button
            type="button"
            className={`w-[24px] bg-transparent ${
              hasInput ? 'block' : 'hidden'
            }`}
            onClick={handleClear}
            disabled={!hasInput}
          >
            <Image
              src="/images/delete.png"
              alt="내용삭제"
              width={24}
              height={24}
            />
          </button>
        </fieldset>
      </form>
      <ul className="flex justify-center gap-x-[24px] gap-y-[16px] p-[18px] flex-wrap font-bold">
        {searchMenus.map((item) => (
          <li key={item.menu} onClick={handleSearchBar}>
            <Link href={`/search?keyword=${item.menu}&page=1`}>
              {item.menu}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
