'use client';

import SeriesList from '@/app/components/series/SeriesList';
import SeriesSlide from '@/app/components/series/SeriesSlide';
import SeriesTab from '@/app/components/series/SeriesTab';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

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

  // 페이지 렌더링될 때 URL에서 파라미터 값 가져옴, 읽기전용
  const searchParams = useSearchParams();
  const router = useRouter();

  // useSearchParams()가 반환한 객체에서 viewType 쿼리를 꺼내오는 메서드
  // 예: URL이 ?viewType=list라면  searchParams.get('viewType') === 'list'
  //  initialType - 위에서 꺼낸 viewType 값이 'list'이면 그대로 'list', 아니면 기본값으로 'slide'로 설정

  //  useSearchParams()  현재 URL 쿼리 읽기용 React 훅
  //  searchParams.get()  특정 쿼리값 추출 (viewType)
  //  initialType  쿼리 값으로 결정한 초기 상태값 (string)
  //  useState(initialType)  초기값 기반으로 실제 상태 생성

  const initialType =
    searchParams.get('viewType') === 'list' ? 'list' : 'slide';
  const [viewType, setViewType] = useState<'slide' | 'list'>(initialType);

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
    params.set('viewType', type);
    params.delete('page');
    router.push(`?${params.toString()}`);
  }

  return (
    <>
      <SeriesTab
        seriesTab={seriesTab}
        handleChangeComponent={handleChangeComponent}
        setPage={setPage}
        viewType={viewType}
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
