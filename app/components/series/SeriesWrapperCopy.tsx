'use client';

import SeriesList from '@/app/components/series/SeriesList';
import SeriesSlide from '@/app/components/series/SeriesSlide';
import SeriesTab from '@/app/components/series/SeriesTab';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const pointColor = [
  { bg: 'bg-[#a45eeb]', bd: 'border-[#a45eeb]' },
  { bg: 'bg-[#ff595f]', bd: 'border-[#ff595f]' },
  { bg: 'bg-[#e5c58a]', bd: 'border-[#e5c58a]' },
  { bg: 'bg-[#f2ec72]', bd: 'border-[#f2ec72]' },
  { bg: 'bg-[#a3cfff]', bd: 'border-[#a3cfff]' },
  { bg: 'bg-[#25aacf]', bd: 'border-[#25aacf]' },
];

export default function Series() {
  const [seriesData, setSeriesData] = useState<any>(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialPage = Number(searchParams.get('page')) || 1;

  const [page, setPage] = useState<number>(initialPage);

  const [viewType, setViewType] = useState<'slide' | 'list'>('slide');

  // 페이지, 뷰타입 바뀔 때 마다 데이터 가져오기
  useEffect(() => {
    async function getSeries() {
      const res = await fetch(`http://localhost:3001/series?page=${page}`);
      const data = await res.json();
      setSeriesData(data);
      // console.log(data);
    }
    getSeries();
  }, [page, viewType]);

  if (!seriesData)
    return (
      <div className="pt-[52px] px-[24px] max-w-[1248px] mx-auto max-sm:pt-[56px] max-sm:px-[8px] text-center"></div>
    );

  const {
    seriesTab,
    gridSeries,
    listSeries,
    limit,
    totalGridCount,
    totalListCount,
  } = seriesData;
  // console.log(seriesData);

  // 버튼 클릭 시 컴포넌트 전환
  function handleChangeComponent(type: 'slide' | 'list') {
    setViewType(type);
    setPage(1);

    const params = new URLSearchParams(searchParams.toString());
    params.delete('page');
    router.push(`?${params.toString()}`);
  }
  // 뒤로가기 처리 해야함

  return (
    <main className="pt-[52px] px-[24px] max-w-[1248px] mx-auto max-sm:pt-[56px] max-sm:px-[8px] ">
      <div className="">
        <SeriesTab
          seriesTab={seriesTab}
          handleChangeComponent={handleChangeComponent}
          setPage={setPage}
        />
        {/* 뷰 스타일 - 그리드, 리스트 시리즈탭 버튼 조작 */}
        {/* viewType으로 seriesId 구분 */}
        <div className="pt-[64px] max-sm:pt-[40px]">
          {viewType === 'slide' && (
            <SeriesSlide
              gridSeries={gridSeries}
              page={page}
              setPage={setPage}
              limit={limit}
              totalCount={totalGridCount}
              pointColor={pointColor}
              viewType={viewType}
            />
          )}
          {viewType === 'list' && (
            <SeriesList
              listSeries={listSeries}
              page={page}
              setPage={setPage}
              limit={limit}
              totalCount={totalListCount}
              pointColor={pointColor}
              viewType={viewType}
            />
          )}
        </div>
      </div>
    </main>
  );
}
