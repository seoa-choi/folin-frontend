import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import styles from './Slider.module.css';
import 'swiper/css';
import Link from 'next/link';

const articles = [
  {
    title: '직장인의 무기: 말·글·태도',
    color: '#f2ec72',
    idx: '9화',
    mainTit: "마케터 숭, 16년간 일터에서 무기 된 '질문 노트' 공개하다",
    person: '이승희',
  },
  { title: '', color: '', idx: '', mainTit: '', person: '' },
  { title: '', color: '', idx: '', mainTit: '', person: '' },
  { title: '', color: '', idx: '', mainTit: '', person: '' },
  { title: '', color: '', idx: '', mainTit: '', person: '' },
  { title: '', color: '', idx: '', mainTit: '', person: '' },
  { title: '', color: '', idx: '', mainTit: '', person: '' },
  { title: '', color: '', idx: '', mainTit: '', person: '' },
];

export default function MostViewedArticles() {
  return (
    <div className={`pb-[104px] ${styles['slide-articles']} text-[]`}>
      <div>
        <h2 className="mb-[36px] text-[24px] font-bold">최근 많이 본 아티클</h2>
        <div>
          <button className="swiper-button-prev"></button>
          <button className="swiper-button-next"></button>
        </div>
      </div>
      <div>
        <Swiper
          modules={[Navigation]}
          slidesPerView={3}
          spaceBetween={24}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
        >
          <SwiperSlide>
            <Link href="" className="block h-full">
              <div className="w-[calc(100%-16px)] h-auto">
                <div className="absolute left-[10px] top-[10px]">
                  <Image
                    src="/images/badge_new_32.b8394d86cbc9be710a5f1a8d417aeca0.svg"
                    alt="새로운 콘텐츠"
                    width={51}
                    height={32}
                  />
                </div>
                <div>
                  <Image
                    src="/images/1748823667478_a_11461-m.jpg"
                    alt="당신이 미루는 이유, 게으름 때문 아니다?  의지박약 극복법"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover rounded-[6px]"
                  />
                </div>
              </div>
              <div className="bg-white rounded-[6px] w-[calc(100%-16px)] relative translate-x-[16px] -translate-y-[16px] p-[10px]">
                <div className="flex gap-[2px]">
                  <div className="bg-[#a3cfff] border border-[#a3cfff] rounded-[6px] py-[6px] px-[8px] text-[12px] font-bold">
                    폴인이 고른 책
                  </div>
                  <div className="bg-white border border-[#a3cfff] rounded-[6px] py-[6px] px-[8px] text-[12px] font-bold">
                    47화
                  </div>
                </div>
                <h3 className="mt-[10px] mb-[16px] text-[22px] font-bold leading-[30px] group-hover:text-[#00aa73] max-md:group-hover:text-[#111]">
                  당신이 미루는 이유, 게으름 때문 아니다? 의지박약 극복법
                </h3>
                <p className="text-[12px] group-hover:text-[#00aa73] max-md:group-hover:text-[#111]">
                  박초롱
                </p>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

//    breakpoints {
// // when window width is >= 320px
// 320: {
//   slidesPerView: 2,
//   spaceBetween: 20
// },
// // when window width is >= 480px
// 480: {
//   slidesPerView: 3,
//   spaceBetween: 30
// },
// // when window width is >= 640px
// 640: {
//   slidesPerView: 4,
//   spaceBetween: 40
// }
