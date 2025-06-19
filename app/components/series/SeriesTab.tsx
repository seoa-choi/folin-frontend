'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';

type SeriesTab = {
  series_id: number;
  tit: string;
};

export default function SeriesTab({ seriesData }: { seriesData: SeriesTab[] }) {
  const [activeBtn, setActiveBtn] = useState('시리즈로 보기');

  // 버튼 path 연결
  const tabConfigs = useMemo(
    () => ({
      '시리즈로 보기': { path: '/series', filter: null },
      '아티클만 보기': { path: '/article', filter: 'article' },
      '비디오만 보기': { path: '/video', filter: 'video' },
    }),
    []
  );

  const filterOptions = [
    { label: '최신순', value: 'latest' },
    { label: '인기순', value: 'popular' },
  ];

  function handleChangeBtn(tit: string) {
    setActiveBtn(tit);
  }
  return (
    <div className="pt-[4px] flex justify-between">
      {/* 버튼 정렬 */}
      <div className="flex gap-[0_4px]">
        {seriesData.map((btn) => {
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
              }`}
              onClick={() => handleChangeBtn(btn.tit)}
            >
              {btn.tit}
            </Link>
          );
        })}
      </div>
      {/* 최신, 인기순 정렬 및 그리드, 리스트 정렬 */}
      <div>
        <div>
          {filterOptions.map((ops) => (
            <button key={ops.value} type="button">
              {ops.label}
            </button>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
}
