import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Slider.module.css';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import Link from 'next/link';

const folinUnderline = [
  {
    p: '다 울고 나면 그때부터 천천히 생각해요. 그 사람의 비판이 맞나, 틀리나? 연구는 기본적으로 모르는 걸 찾는 과정이니까요.',
    name: '이진형',
    person: '스탠퍼드대 생명공학과 교수',
    bg: 'bg-[#ff595f]',
  },
  {
    p: '어떻게든 엉덩이를 붙이고 있었더니 되더라고요. 결국 장학금을 받았어요. 그때 알았죠. 원하는 성적에 도달하는 법은 이거구나.',
    name: '오승훈',
    person: 'MBC 아나운서',
    bg: 'bg-[#e6c48a]',
  },
  {
    p: "'안 된다'를 습관처럼 되뇌이는 무리로부터 멀어지세요. 우물 안의 개구리에서 벗어나야죠. 인생 모든 게 세일즈에요. ",
    name: '윤미애',
    person: '한성자동차 영업전문이사',
    bg: 'bg-[#25aacf]',
  },
  {
    p: '공부보단 다른 데 열심이었어요. 현장 경험하겠다고 나돌아다니고, 여행 다니고. 이름은 들어봤는데 본 적은 없는 애로 불렸죠.',
    name: '차현지',
    person: 'TBS PD',
    bg: 'bg-[#a3cfff]',
  },
  {
    p: '무한도전 시절, 30대의 저는 마지막 방송 나가기 10초 전에 테이프를 넘긴 적도 있어요. 한 번 테이프를 넘기면 끝이니까요.',
    name: '김태호',
    person: "'TEO'PD",
    bg: 'bg-[#a45eeb]',
  },
  {
    p: '“리더라면, 마음을 쓰레기통처럼 해야죠.” 단계에만 집중하지 말고, 쓰레기통처럼 모든 의견을 받아들여야 한다는 의미예요.',
    name: '이승우',
    person: '길리어드코리아 대표',
    bg: 'bg-[#ff595f]',
  },
  {
    p: '사람은 모든 게 언어다. 가만히 있는 것도 언어다. 일로 먼저 다가가기보다, 팀원의 평소 습관이나, 관심사를 잘 살피려 해요.',
    name: '박준동',
    person: '토스 PO',
    bg: 'bg-[#e6c48a]',
  },
  {
    p: "신입은 아이디어를 내는 존재예요. '나는 신선한 아이디어를 낼 수 있는 사람'이구나. 주니어라 가능한 일을 맘껏 누리려고요.",
    name: '김하연',
    person: '문학동네 마케터',
    bg: 'bg-[#25aacf]',
  },
];

export default function FolinUnderline() {
  return (
    <div className={`pb-[104px] ${styles['slide-underline']} max-sm:pb-[64px]`}>
      <div className="flex justify-between">
        <h2 className="mb-[20px] text-[24px] font-bold">폴인 밑줄</h2>
        <div className="btn-wrap">
          <button className="underline-button-prev"></button>
          <button className="underline-button-next"></button>
        </div>
      </div>
      <div>
        <Swiper
          modules={[Navigation]}
          slidesPerView={4}
          spaceBetween={24}
          breakpoints={{
            0: { slidesPerView: 1.5, spaceBetween: 8 },
            767: { slidesPerView: 3, spaceBetween: 8 },
            1024: { slidesPerView: 4, spaceBetween: 24 },
          }}
          navigation={{
            nextEl: '.underline-button-next',
            prevEl: '.underline-button-prev',
          }}
        >
          {folinUnderline.map((item, i) => (
            <SwiperSlide key={i}>
              <Link
                href=""
                className={`flex flex-col justify-between p-[16px] rounded-[6px] aspect-[1/1.5] min-h-[360px] ${item.bg} relative duration-[0.3s] hover:-translate-y-[16px] group max-md:hover:-translate-y-0 max-md:aspect-auto`}
              >
                <div className="text-[24px] leading-[36px] font-bold text-ellipsis break-words max-md:text-[18px] max-md:leading-[27px]">
                  {item.p}
                </div>
                <div>
                  <p className="font-bold">{item.name}</p>
                  <p>{item.person}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
