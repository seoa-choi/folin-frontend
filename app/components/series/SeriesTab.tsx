'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from 'react';

type SeriesTab = {
  series_id: number;
  tit: string;
};

const filterOptions = [
  { label: '최신순', value: 'latest' },
  { label: '인기순', value: 'popular' },
];

const sorted_img = [
  { img: '/images/grid.png', activeImg: '/images/grid_g.png', alt: 'grid' },
  { img: '/images/list.png', activeImg: '/images/list_g.png', alt: 'list' },
];

export default function SeriesTab({
  seriesTab,
  handleChangeComponent,
  setPage,
}: {
  seriesTab: SeriesTab[];
  handleChangeComponent?: (viewType: 'slide' | 'list') => void;
  setPage?: Dispatch<SetStateAction<number>>;
}) {
  const pathname = usePathname();

  // 왼 버튼
  const [activeBtn, setActiveBtn] = useState('시리즈로 보기');
  // 오 - 왼 버튼
  const [isBlock, setIsBlock] = useState(false);
  const [sortOption, setSortOption] = useState('최신순');
  // 오- 오 버튼
  const [viewMode, setViewMode] = useState('/images/grid_g.png');

  // 버튼 path 연결
  const tabConfigs = useMemo(
    () => ({
      '시리즈로 보기': { path: '/series', filter: null },
      '아티클만 보기': { path: '/article', filter: 'article' },
      '비디오만 보기': { path: '/video', filter: 'video' },
    }),
    []
  );

  function handleChangeBtn(tit: string) {
    setActiveBtn(tit);
    setPage?.(1);
  }

  function handleBtnBlock() {
    setIsBlock(!isBlock);
  }

  function handleSortOption(sortName: string) {
    setSortOption(sortName);
    setIsBlock(false);
    setPage?.(1);
  }

  function handleChangeView(selectedImg: string) {
    setViewMode(selectedImg);
  }

  // 현재 브라우저 주소에 해당하는 탭을 자동으로 골라서 액티브 처리
  useEffect(() => {
    const matchedTab = seriesTab?.find(
      (tab) => tabConfigs[tab.tit as keyof typeof tabConfigs]?.path === pathname
    );

    if (matchedTab) {
      setActiveBtn(matchedTab.tit);
    }
  }, [pathname, seriesTab, tabConfigs]);
  // 의존성 배열에 (pathname, seriesTab, tabConfigs) 중 하나라도 변경되면 내부 로직이 실행
  // URL이 바뀌거나 (경로 이동), 탭 데이터가 새로 들어오거나 (비동기 fetch 등),탭 설정 객체가 변할 경우
  // seriesTab 배열을 순회하면서 tab.tit을 키로 사용해 tabConfigs에서 대응되는 path를 꺼냄
  // 그 path가 현재 URL 경로(pathname)랑 같으면 일치하는 탭(matchedTab) 발견
  // 그 탭의 tit을 activeBtn으로 설정해서,렌더링 시 activeBtn === btn.tit 조건을 만족하는 탭만 액티브

  return (
    <div className="pt-[4px] flex justify-between max-[850px]:flex-col max-[850px]:gap-y-[4px]">
      {/* 버튼 정렬 */}
      <div className="flex gap-[0_4px]">
        {seriesTab.map((btn) => {
          const config = tabConfigs[btn.tit as keyof typeof tabConfigs] || {
            path: '/',
            filter: null,
          };
          return (
            <Link
              href={config.path}
              key={btn.series_id}
              className={`w-[171px] h-[48px] bg-white rounded-[6px] leading-[48px] text-center ${
                activeBtn === btn.tit
                  ? 'border border-[#00d48d]'
                  : 'border-none'
              }  max-[850px]:w-full`}
              onClick={() => handleChangeBtn(btn.tit)}
            >
              {btn.tit}
            </Link>
          );
        })}
      </div>

      {/* 최신, 인기순 정렬 및 그리드, 리스트 정렬 */}
      <div className="flex gap-[16px] z-20 max-[850px]:justify-between">
        {/* 최신순, 인기순 */}
        <div className="relative w-[calc(100%-88px)]">
          <button
            type="button"
            className={`w-[180px] h-[32px] rounded-[6px] bg-white p-[0_16px] flex justify-between items-center ${
              isBlock ? 'border border-[#00d48d]' : 'border-none'
            } max-[850px]:w-full`}
            onClick={() => handleBtnBlock()}
          >
            <p className="text-[12px] text-left">{sortOption}</p>
            <Image
              src="/images/sorted.png"
              alt="정렬"
              width={16}
              height={16}
              priority
              className={`${isBlock ? 'rotate-180' : 'rotate-0'}`}
            />
          </button>
          <div
            className={`w-[180px] border border-[#00d48d] rounded-[6px] bg-white absolute left-0 top-[34px] ${
              isBlock ? 'block' : 'hidden'
            }`}
          >
            {filterOptions.map((ops) => (
              <button
                key={ops.value}
                type="button"
                className={`w-full text-left text-[12px] h-[32px] bg-transparent p-[0_16px_0_12px] flex items-center gap-[4px] before:block before:w-[16px] before:h-[16px] before:bg-[url('/images/checkbox_g.png')] before:bg-no-repeat before:bg-cover ${
                  sortOption === ops.label ? 'before:block' : 'before:hidden'
                }`}
                onClick={() => handleSortOption(ops.label)}
              >
                <span>{ops.label}</span>
              </button>
            ))}
          </div>
        </div>
        {/* 그리드, 리스트 - 시리즈로 보기만 */}
        {pathname === '/series' && (
          <div className="h-fit">
            {sorted_img.map((item) => (
              <button key={item.alt} className="first:pr-[8px]">
                <Image
                  src={viewMode === item.activeImg ? item.activeImg : item.img}
                  alt={item.alt}
                  width={32}
                  height={32}
                  priority
                  onClick={() => {
                    handleChangeView(item.activeImg);
                    handleChangeComponent?.(
                      item.alt === 'grid' ? 'slide' : 'list'
                    );
                  }}
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
