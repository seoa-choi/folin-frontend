import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Slider.module.css';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import Link from 'next/link';

const folinUnderline = [
  {
    p: '기회가 있는데 조직이 없다고 해서 그 일을 못 하리란 법은 없잖아요.',
    name: '김연정',
    person: '파리바게뜨 마케팅본부장',
    bg: 'bg-[#ff595f]',
    link: 'https://www.seoachoiaws.com/article/6',
  },
  {
    p: "'친절해야 한다.' 모두가 아는 원칙이죠. 하지만 이 원칙을 흔들림 없이 실천하는 건 다른 문제예요. 모든 고객이 환영받는다고 생각한다면? 결코 우연이 아닐 겁니다.",
    name: '김형준',
    person: '마일스톤 커피 대표',
    bg: 'bg-[#e6c48a]',
    link: 'https://www.seoachoiaws.com/article/11',
  },
  {
    p: '고객의 어떤 점들이 궁금하다고 찾아오면 함께 리서치 진행 여부와 방식에 관해 논의하고요. 리서치 진행한 이후 결과를 가지고 몇 차례 소통하죠. 모든 과정은 협업을 통해 이뤄집니다.',
    name: '김서연',
    person: '토스증권 UX 리서처',
    bg: 'bg-[#25aacf]',
    link: 'https://www.seoachoiaws.com/article/32',
  },
  {
    p: '저희 목표는 "미쳤다" 소리 듣는 거예요. 그렇잖아요. 진짜 재밌다, 퀄리티 너무 좋다 그러면 고상하게 반응 안 해요. "이거 미쳤다" 하죠.',
    name: '문동철',
    person: '쿠팡플레이 콘텐츠 사업 총괄 상무',
    bg: 'bg-[#a3cfff]',
    link: 'https://www.seoachoiaws.com/article/8',
  },
  {
    p: '브랜드가 알아서 탄생해주길 기다리는 소극적 태도론 안 돼요.',
    name: '박민재',
    person: '무신사 브랜드개발본부 실장',
    bg: 'bg-[#a45eeb]',
    link: 'https://www.seoachoiaws.com/article/4',
  },
  {
    p: '『행동은 불안을 이긴다』의 저자 롭 다이얼은 의지박약과 만성적 미루기의 원인을 딱 세 가지로 꼽아요. ①공포 ②자신에 대한 선입견 ③선명한 목표의 부족. 동시에 이를 극복하기 위한 행동 설계와 지속 방법을 제시하죠. ',
    name: '박초롱',
    person: '공공문화예술기획자·작가',
    bg: 'bg-[#ff595f]',
    link: 'https://www.seoachoiaws.com/article/33',
  },
  {
    p: '더 많은 사람이, 맛있는 커피를, 간편하게 마실 수 있게 한다. 이게 카누의 본질이자 동서식품 커피 비즈니스의 미션이에요. 여기에 집중해왔습니다.',
    name: '김대철',
    person: '동서식품 베버리지마케팅 1팀 팀장',
    bg: 'bg-[#e6c48a]',
    link: 'https://www.seoachoiaws.com/article/16',
  },
  {
    p: '10살 때 발레를 시작했어요. 당연하게도 발레리나의 꿈을 꿨죠. 고등학교 입학 후에 현대 무용을 처음 접했는데, 생경했어요. 발레는 완벽함을 추구해요. 머리도 틀어올려야 하고 딱딱한 토슈즈를 신어야 했죠. 그런 길에 권태기를 느낄 무렵 현대 무용을 시작한 거예요.',
    name: '차진엽',
    person: '안무가',
    bg: 'bg-[#25aacf]',
    link: 'https://www.seoachoiaws.com/article/22',
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
                href={`${item.link}`}
                className={`flex flex-col justify-between p-[16px] rounded-[6px] aspect-[1/1.5] min-h-[360px] ${item.bg} relative duration-[0.3s] hover:-translate-y-[16px] group max-md:hover:-translate-y-0 max-md:aspect-auto`}
              >
                <div className="text-[24px] leading-[36px] font-bold text-ellipsis break-words line-clamp-8 max-[1200px]:line-clamp-7 max-md:text-[18px] max-md:leading-[27px] ">
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
