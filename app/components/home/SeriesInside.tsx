import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Slider.module.css';
import { Navigation } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';

const series = [
  {
    img: '/images/series/1730868293633_v_id-m2.jpg',
    etcImage: '/images/ico_list_video_32.68458d7a517eed81e85088b9730f61f9.svg',
    alt: '비디오',
    idx: '6화',
    mainTit: '[영상] "시스템? 없어요" 업계 문법 부순 돌고래유괴단의 팀십',
    person: '신우석 이성헌 이주형 이민섭 변종현',
    path: '',
  },
  {
    img: '/images/series/1730351404024_a_9425-m2.jpg',
    idx: '5화',
    mainTit: '돌고래유괴단 인사이드④ 채용→데뷔, "절벽에서 걷어차는 거죠"',
    person: '이민섭 변종현',
    path: '',
  },
  {
    img: '/images/series/1730818332993_a_9424-1.jpg',
    idx: '4화',
    mainTit: '돌고래유괴단 인사이드③ 돌고래유괴단의 광고·MV는 왜 다를까?',
    person: '이주형',
    path: '',
  },
  {
    img: '/images/series/1730351438661_a_9423-m.jpg',
    idx: '3화',
    mainTit: '돌고래유괴단 인사이드② "유명한데 돈이 없었다" 이성헌 부대표',
    person: '이성헌',
    path: '',
  },
  {
    img: '/images/series/1730530826452_a_9422-m2.jpg',
    idx: '2화',
    mainTit: '돌고래유괴단 인사이드① 신우석 "이건 실패한 인터뷰가 될 것"',
    person: '신우석',
    path: '',
  },
];

export default function SeriesInside() {
  return (
    <div className={`pb-[104px] ${styles['slide-series']} max-sm:pb-[64px]`}>
      <div className="flex justify-between">
        <Link
          href=""
          className="flex gap-[4px] items-center mb-[20px] relative hover:translate-x-[16px] duration-[0.3s] group max-md:hover:translate-x-0 max-sm:w-full"
        >
          {/* text-ellipsis whitespace-nowrap overflow-hidden 부모 width지정, flex-item none 처리 시 gap제거-gap은 상관 없는 듯 */}
          <h2 className="text-[24px] font-bold group-hover:text-[#00aa73] max-md:group-hover:text-[#111] leading-[30px] text-ellipsis whitespace-nowrap overflow-hidden max-sm:max-w-[calc(100%-56px)]">
            시리즈 | 돌고래유괴단 인사이드
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
          {series.map((item, i) => (
            <SwiperSlide key={i}>
              <Link
                href=""
                className="block h-full relative duration-[0.3s] hover:-translate-y-[16px] group max-md:hover:-translate-y-0 pt-[16px]"
              >
                <div className="w-[calc(100%-16px)] h-auto">
                  <div>
                    <div className="absolute left-[10px] top-[26px]">
                      {/* etcImage 있으면 */}
                      {item.etcImage && (
                        <Image
                          src={item.etcImage}
                          alt={item.alt}
                          width={32}
                          height={32}
                        />
                      )}
                    </div>
                    <Image
                      src={item.img}
                      alt={item.mainTit}
                      width={368}
                      height={276}
                      className="w-full h-full object-cover rounded-[6px]"
                    />
                  </div>
                </div>
                <div className="bg-white rounded-[6px] w-[calc(100%-16px)] relative translate-x-[16px] -translate-y-[16px] p-[10px]">
                  <div className="flex gap-[2px]">
                    <div className="border rounded-[6px] py-[6px] px-[8px] text-[12px] font-bold border-[#25aacf] bg-[#25aacf]">
                      돌고래유괴단 인사이드
                    </div>
                    <div className="bg-white border rounded-[6px] py-[6px] px-[8px] text-[12px] font-bold border-[#25aacf]">
                      {item.idx}
                    </div>
                  </div>
                  <h3 className="mt-[10px] mb-[16px] text-[22px] font-bold leading-[30px] line-clamp-2 text-ellipsis group-hover:text-[#00aa73] max-md:group-hover:text-[#111] max-md:text-[18px] max-md:leading-[23px] ">
                    {item.mainTit}
                  </h3>
                  <p className="text-[12px] group-hover:text-[#00aa73] max-md:group-hover:text-[#111]">
                    {item.mainTit}
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
