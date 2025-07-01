'use client';

import SeriesList from '@/app/components/series/SeriesList';
import SeriesSlide from '@/app/components/series/SeriesSlide';
import SeriesTab from '@/app/components/series/SeriesTab';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
// import { pointColor } from '@/app/_lib/colorUtils';

type SeriesTab = {
  series_id: number;
  tit: string;
};
type GridSeries = {
  series_title: string;
  items: {
    contents_id: number;
    series_title: string;
    sub_title: string;
    linkers: string;
    img_url: string;
    content_type: string;
    created_at: string;
  }[];
};
type ListSeries = {
  series_title: string;
  proposal_id: number;
  why: string;
  for_whom1: string;
  for_whom2: string;
  for_whom3: string;
};

type InitialData = {
  seriesTab: SeriesTab[];
  gridSeries: GridSeries[];
  listSeries: ListSeries[];
  page: number;
  limit: number;
  totalGridCount: number;
  totalListCount: number;
};

export default function SeriesWrapper({
  initialData,
  initialPage,
}: {
  initialData: InitialData;
  initialPage: number;
}) {
  const seriesData = initialData;
  const [page, setPage] = useState(initialPage);
  const searchParams = useSearchParams();
  const router = useRouter();

  const [viewType, setViewType] = useState<'slide' | 'list'>('slide');

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
    <>
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
            // pointColor={pointColor}
            // viewType={viewType}
          />
        )}
        {viewType === 'list' && (
          <SeriesList
            listSeries={listSeries}
            gridSeries={gridSeries}
            page={page}
            setPage={setPage}
            limit={limit}
            totalCount={totalListCount}
            // pointColor={pointColor}
            // viewType={viewType}
          />
        )}
      </div>
    </>
  );
}
