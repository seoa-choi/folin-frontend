'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';

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
}: {
  seriesTab: SeriesTab[];
  handleChangeComponent: (viewType: 'slide' | 'list') => void;
}) {
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
  }

  function handleBtnBlock() {
    setIsBlock(!isBlock);
  }

  function handleSortOption(sortName: string) {
    setSortOption(sortName);
    setIsBlock(false);
  }

  function handleChangeView(selectedImg: string) {
    setViewMode(selectedImg);
  }

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
            className={`w-full border border-[#00d48d] rounded-[6px] bg-white absolute left-0 top-[34px] ${
              isBlock ? 'block' : 'hidden'
            }`}
          >
            {filterOptions.map((ops) => (
              <button
                key={ops.value}
                type="button"
                className={`w-full text-left text-[12px] h-[32px] bg-transparent p-[0_16px_0_12px] flex items-center gap-[4px] before:block before:w-[16px] before:h-[16px] before:bg-[url('/images/checked.png')] before:bg-no-repeat before:bg-cover ${
                  sortOption === ops.label ? 'before:block' : 'before:hidden'
                }`}
                onClick={() => handleSortOption(ops.label)}
              >
                <span>{ops.label}</span>
              </button>
            ))}
          </div>
        </div>
        {/* 그리드, 리스트 */}
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
                  handleChangeComponent(item.alt === 'grid' ? 'slide' : 'list');
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
