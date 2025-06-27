'use client';

import Pagination from '@/app/components/Pagination';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { createColorAssigner } from '@/app/_lib/colorUtils';

type ArticleSeries = {
  series_title: string;
  contents_id: number;
  sub_title: string;
  linkers: string;
  img_url: string;
  content_type: string;
  created_at: string;
};

export default function ArticleList({
  articleSeries,
  limit,
  totalCount,
  page,
  setPage,
}: {
  articleSeries: ArticleSeries[];
  limit: number;
  totalCount: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}) {
  const [totalPage, setTotalPage] = useState(0);

  const searchParams = useSearchParams();
  const router = useRouter();

  // 색상 매핑 함수 호출
  const getColorForSeries = createColorAssigner();

  useEffect(() => {
    setTotalPage(Math.ceil(totalCount / limit));
  }, [totalCount, limit]);

  // page 쿼리스트링 업데이트
  function handlePageChange(newPage: number) {
    const params = new URLSearchParams(searchParams.toString());
    // 기존 searchParams를 복사 params로 새로운 URLSearchParams 객체만듦
    params.set('page', newPage.toString());
    // url 업데이트, 페이지 반영
    router.push(`?${params.toString()}`);

    // 내부 상태 바꾸기
    setPage(newPage);
  }

  // searchParams read-only 객체,
  // .get()으로 값을 읽을 수 있으나 .set()이나 .delete() 같은 수정은 직접 못함
  // 수정 가능한 복사본 만들어서 처리하기

  // 시리즈별 전체 개수 세기
  const seriesCountMap: { [key: string]: number } = {};
  articleSeries.forEach((item) => {
    const title = item.series_title;
    seriesCountMap[title] = (seriesCountMap[title] || 0) + 1;
  });

  // 시리즈별 현재 위치 추적
  const seriesIndexMap: { [key: string]: number } = {};

  // 역순 인덱싱된 데이터 생성
  const indexedArticleSeries = articleSeries.map((item) => {
    const title = item.series_title;
    seriesIndexMap[title] = (seriesIndexMap[title] || 0) + 1;

    return {
      ...item,
      // 전체 개수에서 현재 순서를 빼서 역순 인덱스 계산 기존데이터에 seriesIndex 추가
      seriesIndex: seriesCountMap[title] - seriesIndexMap[title] + 1,
    };
  });

  return (
    <div>
      <ul className="grid grid-cols-3 gap-[24px] max-md:grid-cols-2 max-md:gap-[8px] max-sm:grid-cols-1 max-sm:gap-0">
        {indexedArticleSeries.map((item) => {
          const color = getColorForSeries(item.series_title);

          // console.log(indexedArticleSeries);

          return (
            <li key={item.contents_id}>
              <Link
                href={`/article/${item.contents_id}`}
                className="block h-full relative duration-[0.3s] hover:-translate-y-[16px] group max-md:hover:-translate-y-0 pt-[16px]"
              >
                <div className="w-[calc(100%-16px)] h-auto">
                  <div>
                    <Image
                      src={`http://localhost:3001/${item.img_url}`}
                      alt={item.series_title}
                      width={368}
                      height={276}
                      priority
                      className="w-full h-full object-cover rounded-[6px]"
                    />
                  </div>
                </div>
                <div className="bg-white rounded-[6px] w-[calc(100%-16px)] relative translate-x-[16px] -translate-y-[16px] p-[10px]">
                  <div className="flex gap-[2px]">
                    <div
                      className={`border rounded-[6px] py-[6px] px-[8px] text-[12px] font-bold ${color.bg} ${color.bd}`}
                    >
                      {item.series_title}
                    </div>
                    <div
                      className={`bg-white border rounded-[6px] py-[6px] px-[8px] text-[12px] font-bold ${color.bd}`}
                    >
                      {item.seriesIndex + '화'}
                    </div>
                  </div>

                  <h3 className="mt-[10px] mb-[16px] text-[22px] font-bold leading-[30px] line-clamp-2 text-ellipsis group-hover:text-[#00aa73] max-md:group-hover:text-[#111] max-md:text-[18px] max-md:leading-[23px] ">
                    {item.sub_title}
                  </h3>
                  <p className="text-[12px] group-hover:text-[#00aa73] max-md:group-hover:text-[#111]">
                    {item.linkers}
                  </p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
      <Pagination
        page={page}
        totalPage={totalPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}
