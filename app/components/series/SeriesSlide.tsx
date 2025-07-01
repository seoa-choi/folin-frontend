'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../home/Slider.module.css';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import Link from 'next/link';
import Image from 'next/image';
import Pagination from '@/app/components/Pagination';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { pointColor } from '@/app/_lib/colorUtils';

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

// type PointColor = {
//   bg: string;
//   bd: string;
// };
// [];

export default function SeriesSlide({
  gridSeries,
  page,
  setPage,
  limit,
  totalCount,
}: // pointColor,
// viewType,
{
  gridSeries: GridSeries[];
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  limit: number;
  totalCount: number;
  // pointColor: PointColor[];
  // viewType: 'slide';
}) {
  const [totalPage, setTotalPage] = useState(0);

  const searchParams = useSearchParams();
  const router = useRouter();

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

  return (
    <div>
      {gridSeries.map((series, i) => {
        // 포인트 컬러 반복
        const color = pointColor[i % pointColor.length];
        // 마지막 슬라이드만 true
        const isLast = i === gridSeries.length - 1;

        return (
          <div
            key={i}
            className={`${styles['slide-subseries']} ${
              isLast ? 'pb-0' : 'pb-[104px] max-sm:pb-[64px]'
            }`}
          >
            <div className="flex justify-between">
              <div className="flex items-center gap-[4px] mb-[20px]">
                <h2 className="text-[24px] font-bold">{series.series_title}</h2>
                <div className="w-[52px] h-[24px] bg-contain bg-no-repeat bg-center bg-[url(/images/gg.png)] group-hover:bg-[url(/images/green.png)] max-md:group-hover:bg-[url(/images/gg.png)]"></div>
              </div>
              <div className="btn-wrap">
                <button className={`subseries-button-prev${i}`}></button>
                <button className={`subseries-button-next${i}`}></button>
              </div>
            </div>
            <div>
              <Swiper
                modules={[Navigation]}
                slidesPerView={3}
                spaceBetween={24}
                breakpoints={{
                  0: { slidesPerView: 1.5, spaceBetween: 8 },
                  767: { slidesPerView: 2, spaceBetween: 16 },
                  1023: { slidesPerView: 3, spaceBetween: 24 },
                }}
                navigation={{
                  nextEl: `.subseries-button-next${i}`,
                  prevEl: `.subseries-button-prev${i}`,
                }}
              >
                {series.items.map((item, idx) => {
                  const reverseIndex = series.items.length - idx;

                  return (
                    <SwiperSlide key={item.contents_id}>
                      {/* 시리즈가 아티클 묶음이기 때문에 아티클링크가 맞음 */}
                      {/* `/article/${item.contents_id}`
                      `/series/${item.contents_id}?view=${viewType}` */}
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
                              {reverseIndex + '화'}
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
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
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
