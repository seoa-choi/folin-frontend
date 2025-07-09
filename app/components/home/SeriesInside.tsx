import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Slider.module.css';
import { Navigation } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';

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

export default function SeriesInside() {
  const { data, isPending, isError } = useQuery<GridSeries[]>({
    queryKey: ['series'],
    queryFn: async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/series/main`);
      if (!res.ok) throw new Error('Failed to fetch series data');
      const json = await res.json();
      return json.gridSeries;
    },
  });
  // console.log(data);

  if (isPending)
    return (
      <p className="py-[52px] px-[24px] max-w-[1248px] mx-auto max-sm:pt-[56px] max-sm:px-[8px]"></p>
    );
  if (isError) return <p></p>;

  if (!data) return null;

  const filteredSeries = data?.filter(
    (item) => item.series_title === '쿠팡플레이 인사이드'
  );

  // console.log(filteredSeries);

  return (
    <div>
      {filteredSeries.map((item, i) => (
        <div
          key={i}
          className={`pb-[104px] ${styles['slide-series']} max-sm:pb-[64px]`}
        >
          <div className="flex justify-between">
            <Link
              href=""
              className="flex gap-[4px] items-center mb-[20px] relative hover:translate-x-[16px] duration-[0.3s] group max-md:hover:translate-x-0 max-sm:w-full"
            >
              {/* text-ellipsis whitespace-nowrap overflow-hidden 부모 width지정, flex-item none 처리 시 gap제거-gap은 상관 없는 듯 */}
              <h2 className="text-[24px] font-bold group-hover:text-[#00aa73] max-md:group-hover:text-[#111] leading-[30px] text-ellipsis whitespace-nowrap overflow-hidden max-sm:max-w-[calc(100%-56px)]">
                시리즈 | {item.series_title}
              </h2>
              <div className="w-[52px] h-[24px] bg-contain bg-no-repeat bg-center bg-[url(/images/gg.png)] group-hover:bg-[url(/images/green.png)] max-md:group-hover:bg-[url(/images/gg.png)]"></div>
            </Link>
            <div className="btn-wrap">
              <button className="video-button-prev"></button>
              <button className="video-button-next"></button>
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
                nextEl: '.video-button-next',
                prevEl: '.video-button-prev',
              }}
            >
              {item.items.map((int, idx) => {
                const reverseIndex = item.items.length - idx;

                return (
                  <SwiperSlide key={int.contents_id}>
                    <Link
                      href={`/article/${int.contents_id}`}
                      className="block h-full relative duration-[0.3s] hover:-translate-y-[16px] group max-md:hover:-translate-y-0 pt-[16px]"
                    >
                      <div className="w-[calc(100%-16px)] h-auto">
                        <div>
                          <Image
                            src={`http://localhost:3001/${int.img_url}`}
                            alt={int.series_title}
                            width={368}
                            height={276}
                            className="w-full h-full object-cover rounded-[6px]"
                          />
                        </div>
                      </div>
                      <div className="bg-white rounded-[6px] w-[calc(100%-16px)] relative translate-x-[16px] -translate-y-[16px] p-[10px]">
                        <div className="flex gap-[2px]">
                          <div className="border rounded-[6px] py-[6px] px-[8px] text-[12px] font-bold border-[#25aacf] bg-[#25aacf]">
                            {int.series_title}
                          </div>
                          <div className="bg-white border rounded-[6px] py-[6px] px-[8px] text-[12px] font-bold border-[#25aacf]">
                            {reverseIndex + '화'}
                          </div>
                        </div>
                        <h3 className="mt-[10px] mb-[16px] text-[22px] font-bold leading-[30px] line-clamp-2 text-ellipsis group-hover:text-[#00aa73] max-md:group-hover:text-[#111] max-md:text-[18px] max-md:leading-[23px] ">
                          {int.sub_title}
                        </h3>
                        <p className="text-[12px] group-hover:text-[#00aa73] max-md:group-hover:text-[#111]">
                          {int.series_title}
                        </p>
                      </div>
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      ))}
    </div>
  );
}
