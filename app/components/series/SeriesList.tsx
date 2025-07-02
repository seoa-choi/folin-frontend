'use client';

import Pagination from '@/app/components/Pagination';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { pointColor } from '@/app/_lib/colorUtils';

type ListSeries = {
  series_title: string;
  proposal_id: number;
  why: string;
  for_whom1: string;
  for_whom2: string;
  for_whom3: string;
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

export default function SeriesList({
  listSeries,
  page,
  setPage,
  limit,
  totalCount,
  gridSeries,
}: // pointColor,
// viewType,
{
  listSeries: ListSeries[];
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  limit: number;
  totalCount: number;
  gridSeries: GridSeries[];
  // pointColor: PointColor[];
  // viewType: 'list';
}) {
  const [totalPage, setTotalPage] = useState(0);

  const searchParams = useSearchParams();
  const router = useRouter();

  // 총 페이지 계산
  useEffect(() => {
    setTotalPage(Math.ceil(totalCount / limit));
  }, [totalCount, limit]);

  // page 쿼리스트링 업데이트
  function handlePageChange(newPage: number) {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', newPage.toString());
    router.push(`?${params.toString()}`);

    setPage(newPage);
  }
  // console.log('grid', gridSeries, 'list', listSeries);

  // 총 화 수정하기 0이 있으면 안됨
  return (
    <div>
      {listSeries.map((list, i) => {
        // i % 6 0~5 범위 값 반복
        const color = pointColor[i % pointColor.length];
        const isLast = i === listSeries.length - 1;
        const listLength = gridSeries.filter((item) => item.items.length);
        // 신수정의 트레이닝 3, 쿠팡플레이 인사이드 4 인데 1로 출력되어 임의로 넣기
        // const seriesLength = listLength[i]?.items.length ?? 0;
        let seriesLength = listLength[i]?.items.length ?? 0;

        if (i === 5) {
          seriesLength = 3;
        } else if (i === 6) {
          seriesLength = 4;
        }
        // gridSeries 배열에서 list 항목과 series_title이 같은 걸 찾아서 그 안의 items.legnth를 가져와, 못찾거나 없으면 0
        // const seriesLength =
        //   gridSeries.find((series) => series.series_title === list.series_title)
        //     ?.items.length || 0;

        // const titleToCountMap = {};

        // gridSeries.forEach((series) => {
        //   titleToCountMap[series.series_title] = series.items.length;
        // });
        // console.log(titleToCountMap);

        // Object.values(titleToCountMap)

        return (
          <div
            key={list.series_title}
            className={`${isLast ? 'mb-0' : 'mb-[48px]'}`}
          >
            <Link
              href={`/series/${list.proposal_id}`}
              className="block h-full relative duration-[0.3s] hover:-translate-y-[16px] group max-md:hover:-translate-y-0"
            >
              <div className=" w-[calc(100%-16px)] relative">
                <div className="flex gap-[2px] mb-[4px]">
                  <div
                    className={`border rounded-[6px] py-[8px] px-[12px] text-[15px] font-bold ${color.bg} ${color.bd}`}
                  >
                    {list.series_title}
                  </div>

                  <div
                    className={`bg-white border rounded-[6px] py-[8px] px-[12px] text-[15px] font-bold ${color.bd}`}
                  >
                    {`총 ${seriesLength}화`}
                  </div>
                </div>

                <p className=" h-[56px] bg-white rounded-[6px] text-[18px] leading-[56px] line-clamp-1 px-[16px] group-hover:text-[#00aa73] max-md:group-hover:text-[#111]">
                  {list.why}
                </p>
              </div>
            </Link>
          </div>
        );
      })}
      <Pagination
        page={page}
        totalPage={totalPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}
