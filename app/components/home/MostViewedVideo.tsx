import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Slider.module.css';
import { Navigation } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';

const videos = [
  {
    img: '/images/videos/1748534369661_2222.jpg',
    title: '폴:인더스트리',
    color: '#a3cfff',
    idx: '8화',
    mainTit: '오프라인 전쟁: 올·다·무가 백화점 넘어선다?',
    person: '기묘한',
    path: '',
  },
  {
    img: '/images/videos/1748851952481_v_11246-m.jpg',
    etcImage: '/images/badge_new_32.b8394d86cbc9be710a5f1a8d417aeca0.svg',
    alt: '새로운 콘텐츠',
    title: '세미나 다시보기: 기획 비하인드',
    color: '#a3cfff',
    idx: '34화',
    mainTit: '"브랜드와 부동산은 하나" 힙한 브랜드의 공간 전략',
    person: '우창균',
    path: '',
  },
  {
    img: '/images/videos/1746595944117_v_10965-m.jpg',
    title: '세미나 다시보기: 기획 비하인드',
    color: '#a3cfff',
    idx: '33화',
    mainTit: '아무도 따라하지 못하는 내 기획 만드는 법',
    person: '조퇴계',
    path: '',
  },
  {
    img: '/images/videos/1747892661846_v_idm.jpg',
    title: 'AI시대의 마케팅',
    color: '#f2ec72',
    idx: '8화',
    mainTit: '오늘의집은 AI 어떻게 쓸까? 500만 플랫폼의 AI 활용법',
    person: '박원준 이강원',
    path: '',
  },
  {
    img: '/images/videos/1743655968741_v_10501-m.jpg',
    title: '세미나 다시보기: 기획 비하인드',
    color: '#a3cfff',
    idx: '32화',
    mainTit: '"한 번 사면 찐팬 된다" 베리시의 고객경험 기획법',
    person: '최현지',
    path: '',
  },
  {
    img: '/images/videos/1698833825207_v_id3-m.jpg',
    title: '폴인 워큐멘터리: 일이 길이 된 사람들',
    color: '#f2ec72',
    idx: '4화',
    mainTit: '마케터 손혜진: 주도권을 가져오면, 내 일이 달라진다',
    person: '손혜진',
    path: '',
  },
  {
    img: '/images/videos/1747321444726_home.jpg',
    etcImage: '/images/badge_free_32.eaac6f27aca1453cc740badbe492ab59.svg',
    alt: '무료 콘텐츠',
    title: "[LG myCup｜폴인] ESG, 고객경험에 '깊이'를 더하다",
    color: '#a45eeb',
    idx: '7화',
    mainTit: '스타벅스에 설치된 ‘그 기계’, LG가 만들었다?',
    person: '박상완 김미성 김민준',
    path: '',
  },
  {
    img: '/images/videos/1744726281468_팀장의승진2.jpg',
    title: '신수정의 트레이닝',
    color: '#f2ec72',
    idx: '5화',
    mainTit: '신수정의 트레이닝⑤ 영원한 팀장은 없다, 프로의 세계로 가라',
    person: '신수정',
    path: '',
  },
  {
    img: '/images/videos/1743963421621_20.jpg',
    title: '신수정의 트레이닝',
    color: '#f2ec72',
    idx: '2화',
    mainTit: '신수정의 트레이닝② 일 잘하면 승진 대신 일을 준다',
    person: '신수정',
    path: '',
  },
  {
    img: '/images/videos/1720091914488_kpop2.jpg',
    title: '폴:인더스트리',
    color: '#a3cfff',
    idx: '6화',
    mainTit: '하이브・SM・JYP, 시스템은 어떻게 비즈니스 성과를 만드나',
    person: '차우진',
    path: '',
  },
];

export default function MostViewedVideo() {
  return (
    <div className={`pb-[104px] ${styles['slide-video']} max-sm:pb-[64px]`}>
      <div className="flex justify-between">
        <h2 className="mb-[20px] text-[24px] font-bold">최근 많이 본 비디오</h2>
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
          {videos.map((item, i) => (
            <SwiperSlide key={i}>
              <Link
                href="/video"
                className="block h-full relative duration-[0.3s] hover:-translate-y-[16px] group max-md:hover:-translate-y-0 pt-[16px]"
              >
                <div className="w-[calc(100%-16px)] h-auto">
                  <div>
                    <div className="absolute left-[10px] top-[26px]">
                      <Image
                        src="/images/ico_list_video_32.68458d7a517eed81e85088b9730f61f9.svg"
                        alt="비디오"
                        width={32}
                        height={32}
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute left-[44px] top-[26px]">
                      {/* etcImage 있으면 */}
                      {item.etcImage && (
                        <Image
                          src={item.etcImage}
                          alt={item.alt}
                          width={51}
                          height={32}
                          loading="lazy"
                        />
                      )}
                    </div>
                    <Image
                      src={item.img}
                      alt={item.mainTit}
                      width={368}
                      height={276}
                      className="w-full h-full object-cover rounded-[6px]"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="bg-white rounded-[6px] w-[calc(100%-16px)] relative translate-x-[16px] -translate-y-[16px] p-[10px]">
                  <div className="flex gap-[2px]">
                    <div
                      className="border rounded-[6px] py-[6px] px-[8px] text-[12px] font-bold"
                      style={{
                        borderColor: `${item.color}`,
                        backgroundColor: `${item.color}`,
                      }}
                    >
                      {item.title}
                    </div>
                    <div
                      className="bg-white border rounded-[6px] py-[6px] px-[8px] text-[12px] font-bold"
                      style={{ borderColor: `${item.color}` }}
                    >
                      {item.idx}
                    </div>
                  </div>
                  <h3 className="mt-[10px] mb-[16px] text-[22px] font-bold leading-[30px] line-clamp-2 text-ellipsis group-hover:text-[#00aa73] max-md:group-hover:text-[#111] max-md:text-[18px] max-md:leading-[23px] ">
                    {item.mainTit}
                  </h3>
                  <p className="text-[12px] group-hover:text-[#00aa73] max-md:group-hover:text-[#111]">
                    {item.person}
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
