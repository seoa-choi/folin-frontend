import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Slider.module.css';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import Link from 'next/link';
import Image from 'next/image';

const wideImage = [
  {
    img: '/images/slide/1700447189814_mmb_b2b_pc.jpg',
    mImg: '/images/slide/1700447189815_mmb_b2b_mobile.jpg',
    alt: '새로운 기업 교육을 찾고 있다면?',
    path: '',
  },
  {
    img: '/images/slide/1710890898951_mmb_app_download_pc.jpg',
    mImg: '/images/slide/1710890898953_mmb_app_download_mw.jpg',
    alt: '폴인 앱 다운로드',
    path: '',
  },
  {
    img: '/images/slide/1718244222813_20240509_mmb_free_link_pc.jpg',
    mImg: '/images/slide/1718244222814_20240509_mmb_free_link_mw.jpg',
    alt: '폴인 아티클, 24시간 무료 링크로 공유해보세요!',
    path: '',
  },
  {
    img: '/images/slide/1747031516314_marketer_of_marketer-s3_mmb-pc_2400.jpg',
    mImg: '/images/slide/1747031516316_marketer_of_marketer-s3_mmb-mw_2014.jpg',
    alt: '폴인마케터클럽',
    path: '',
  },
];

export default function WideSlider() {
  return (
    <div className={`pb-[104px] ${styles['slide-wide']} max-sm:pb-[64px]`}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        navigation={{
          nextEl: '.wide-button-next',
          prevEl: '.wide-button-prev',
        }}
        // 1/4
        pagination={{
          el: '.fraction-pagination',
          type: 'fraction',
        }}
      >
        {wideImage.map((item, i) => (
          <SwiperSlide key={i}>
            <Link href="" className="block h-[120px] max-md:h-[232px]">
              {/* 1024 이상 */}
              <Image
                src={item.img}
                alt={item.alt}
                width={1200}
                height={120}
                className="rounded-[6px] max-md:hidden"
                loading="lazy"
              />
              {/* 1024 미만 */}
              <Image
                src={item.mImg}
                alt={item.alt}
                width={1024}
                height={232}
                className="rounded-[6px] hidden max-md:block h-full object-cover"
                loading="lazy"
              />
            </Link>
          </SwiperSlide>
        ))}
        <div className="btn-wrap">
          <button className="wide-button-prev"></button>
          <div className="fraction-pagination text-white text-[12px] leading-[16px]"></div>
          <button className="wide-button-next"></button>
        </div>
      </Swiper>
    </div>
  );
}
