import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import styles from './Slider.module.css';
import 'swiper/css';
import Link from 'next/link';

const FolinShorts = [
  {
    img: '/images/main-shorts/174407118090.jpg',
    alt: '&quot;사진 찍고 끝? 그럼 실패&quot; 용산 리테일 공간 기획기',
    shorts: '3uqGyZgfZlc',
  },
  {
    img: '/images/main-shorts/1743721284133.jpg',
    alt: '취향 확고한 여성 타깃?” 베리시의 CX 전략',
    shorts: 'nC-z590Mji0',
  },

  {
    img: '/images/main-shorts/1744330983738.jpg',
    alt: '가방에 &#39;밴드&#39; 넣고 다녀요 구글 출신 부사장의 스낵운동법',
    shorts: 'EKi6OyoHVHA',
  },
  {
    img: '/images/main-shorts/1744675653304_.jpg',
    alt: '&quot;한 단계 위의 일을 배우세요&quot; 승진 루트의 정석',
    shorts: 'jn93bZAutC0',
  },
  {
    img: '/images/main-shorts/1744933884541.jpg',
    alt: '&quot;처절하게 행복한 길&quot; 19년차 편집자의 &#39;사업일기&#39;',
    shorts: 'gsDX3WzmcQY',
  },
  {
    img: '/images/main-shorts/1746748222805.jpg',
    alt: '매출 29만 원 → 1400만 원 독립 출판사의 수익화 비결',
    shorts: 'qCFepvNXm1I',
  },
  {
    img: '/images/main-shorts/1747640404647.jpg',
    alt: '‘가전 1등‘ LG가 텀블러 세척기를 만든다면? #마이컵 #폴인#lg전자',
    shorts: 'Y775BXyOwHY',
  },
  {
    img: '/images/main-shorts/1748233888619.jpg',
    alt: '500만 유저가 반응한 오늘의집 AI활용법',
    shorts: '_YjISn5XhdU',
  },
];

export default function FolinShortsSlider() {
  return (
    <>
      <div className={`${styles['slide-button']}`}>
        <button className="shots-button-prev"></button>
        <button className="shots-button-next"></button>
      </div>
      <Swiper
        className={`${styles['slide-shorts']}`}
        modules={[Navigation]}
        slidesPerView={4}
        spaceBetween={24}
        breakpoints={{
          0: { slidesPerView: 1.5, spaceBetween: 8 },
          600: { slidesPerView: 3, spaceBetween: 16 },
          1023: { slidesPerView: 4, spaceBetween: 24 },
        }}
        navigation={{
          nextEl: '.shots-button-next',
          prevEl: '.shots-button-prev',
        }}
      >
        {/* 스와이퍼랩퍼가 이미지 두배였는데 aspect-auto하니까 줄어듦 */}
        {FolinShorts.map((item, i) => (
          <SwiperSlide key={i}>
            <Link href={`https://www.youtube.com/embed/${item.shorts}`}>
              <Image
                src={item.img}
                alt={item.alt}
                width={280}
                height={960}
                className="w-full h-full object-cover rounded-[6px] aspect-auto max-h-[600px]"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
