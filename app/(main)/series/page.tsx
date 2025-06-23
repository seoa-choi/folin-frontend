'use client';

import SeriesList from '@/app/components/series/SeriesList';
import SeriesSlide from '@/app/components/series/SeriesSlide';
import SeriesTab from '@/app/components/series/SeriesTab';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Series() {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;

  const [seriesData, setSeriesData] = useState<any>(null);

  const [viewType, setViewType] = useState<'slide' | 'list'>('slide');

  useEffect(() => {
    async function getSeries() {
      const res = await fetch(`http://localhost:3001/series?page=${page}`);
      const data = await res.json();
      setSeriesData(data);
    }
    getSeries();
  }, [page]);

  if (!seriesData) return <div>...</div>;

  const { seriesTab, gridSeries, limit, totalCount } = seriesData;

  // 버튼 클릭 시 컴포넌트 전환
  function handleChangeComponent(type: 'slide' | 'list') {
    setViewType(type);
  }

  return (
    <main className="pt-[52px] px-[24px] max-w-[1248px] mx-auto max-sm:pt-[56px] max-sm:px-[8px] ">
      <div className="">
        <SeriesTab
          seriesTab={seriesTab}
          handleChangeComponent={handleChangeComponent}
        />
        {/* 뷰 스타일 - 그리드, 리스트 시리즈탭 버튼 조작 */}
        <div className="pt-[64px] max-sm:pt-[40px]">
          {viewType === 'slide' && (
            <SeriesSlide
              gridSeries={gridSeries}
              page={page}
              limit={limit}
              totalCount={totalCount}
            />
          )}
          {viewType === 'list' && <SeriesList />}
        </div>
      </div>
    </main>
  );
}
