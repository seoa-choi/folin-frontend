import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import styles from './Slider.module.css';
import 'swiper/css';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { createColorAssigner } from '@/app/_lib/colorUtils';

// const articles = [
//   {
//     img: '/images/articles/1748329146502_a_11450-m.jpg',
//     title: '직장인의 무기: 말·글·태도',
//     color: '#f2ec72',
//     idx: '9화',
//     mainTit: "마케터 숭, 16년간 일터에서 무기 된 '질문 노트' 공개하다",
//     person: '이승희',
//     path: '',
//   },
//   {
//     img: '/images/articles/sp_main.04eb92b7.png',
//     title: '번아웃 생존기',
//     color: '#f2ec72',
//     idx: '4화',
//     mainTit: '"기분 나쁜데 정색하긴 애매" 직장에서 미세공격 당했다면',
//     person: '남대희',
//     path: '',
//   },
//   {
//     img: '/images/articles/1748823667478_a_11461-m.jpg',
//     title: '폴인이 고른 책',
//     color: '#a3cfff',
//     idx: '47화',
//     mainTit: '당신이 미루는 이유, 게으름 때문 아니다?  의지박약 극복법',
//     person: '박초롱',
//     path: '',
//   },
//   {
//     img: '/images/articles/1747965092325_a_11438-m.jpg',
//     title: '창업의 맛',
//     color: '#ff595f',
//     idx: '43화',
//     mainTit: "'7년차 매출 1000억' 93년생 앳홈 대표의 사업 생존기",
//     person: '양정호',
//     path: '',
//   },
//   {
//     img: '/images/articles/1747970985204_a_11435-m.jpg',
//     title: '폴인 PICK 요즘 이 브랜드 2.0',
//     color: '#e6c48a',
//     idx: '26화',
//     mainTit: '"저속노화, 그다음은?" 정희원 교수×CJ햇반 협업 비하인드',
//     person: '정희원 김숙진 김유림',
//     path: '',
//   },
//   {
//     img: '/images/articles/1748397601146_a_11453-m_02.png',
//     title: '초개인화: 오직 1명을 위한 경험 설계',
//     color: '#25aacf',
//     idx: '3화',
//     mainTit: "'1년 만에 200만명 돌파' 제타가 1020 사로잡은 전략은",
//     person: '박상예',
//     path: '',
//   },
//   {
//     img: '/images/articles/1747718931245_a_11422-m.jpg',
//     title: '마케터의 커리어 노트',
//     color: '#ff595f',
//     idx: '3화',
//     mainTit: '"디지털마케팅, 광고만 돌리면 안돼"이케아·다이슨 성공시킨 비결',
//     person: '이승복',
//     path: '',
//   },
//   {
//     img: '/images/articles/1693932588686_a_5094.jpg',
//     title: '번아웃 생존기',
//     color: '#f2ec72',
//     idx: '2화',
//     mainTit: '“오프(Off)가 불가능” 전 스몰브랜더 대표의 번아웃',
//     person: '최수현',
//     path: '',
//   },
// ];

type SeriesData = {
  result: {
    title_id: string;
    series_title: string;
    proposal_id: number;
    why: string;
    for_whom1: string;
    for_whom2: string;
    for_whom3: string;
    created_at: string;
  }[];

  articleResult: {
    series_title: string;
    contents_id: number;
    sub_title: string;
    linkers: string;
    img_url: string;
    content_type: string;
    created_at: string;
  }[];
};

export default function MostViewedArticles() {
  const { data, isLoading, isError } = useQuery<SeriesData>({
    queryKey: ['article'],
    queryFn: async () => {
      const res = await fetch(`http://localhost:3001/article/main`);
      if (!res.ok) throw new Error('Failed to fetch series data');
      const json = await res.json();
      console.log(json);
      return { result: json.result, articleResult: json.articleResult };
    },
  });
  // console.log(data);

  if (isLoading)
    return (
      <p className="py-[52px] px-[24px] max-w-[1248px] mx-auto max-sm:pt-[56px] max-sm:px-[8px]"></p>
    );
  if (isError) return <p></p>;

  if (!data) return null;

  const getColorForArticles = createColorAssigner();

  const reversedItems = data?.articleResult.slice(-8).reverse();
  // console.log(reversedItems);

  // 시리즈별 전체 개수 세기
  const seriesCountMap: { [key: string]: number } = {};
  reversedItems?.forEach((item) => {
    const title = item.series_title;
    seriesCountMap[title] = (seriesCountMap[title] || 0) + 1;
  });

  // 시리즈별 현재 위치 추적
  const seriesIndexMap: { [key: string]: number } = {};

  // 역순 인덱싱된 데이터 생성
  const indexedArticleSeries = reversedItems?.map((item) => {
    const title = item.series_title;
    seriesIndexMap[title] = (seriesIndexMap[title] || 0) + 1;

    return {
      ...item,
      // 전체 개수에서 현재 순서를 빼서 역순 인덱스 계산 기존데이터에 seriesIndex 추가
      seriesIndex: seriesCountMap[title] - seriesIndexMap[title] + 1,
    };
  });

  return (
    <div className={`pb-[104px] ${styles['slide-articles']} max-sm:pb-[64px]`}>
      <div className="flex justify-between">
        <h2 className="mb-[20px] text-[24px] font-bold">최근 많이 본 아티클</h2>
        <div className="btn-wrap">
          <button className="article-button-prev"></button>
          <button className="article-button-next"></button>
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
            nextEl: '.article-button-next',
            prevEl: '.article-button-prev',
          }}
        >
          {indexedArticleSeries?.map((article) => {
            const color = getColorForArticles(article.series_title);

            return (
              <SwiperSlide key={article.contents_id}>
                <Link
                  href={`/article/${article.contents_id}`}
                  className="block h-full relative duration-[0.3s] hover:-translate-y-[16px] group max-md:hover:-translate-y-0 pt-[16px]"
                >
                  <div className="w-[calc(100%-16px)] h-auto">
                    <div>
                      <Image
                        src={`http://localhost:3001//${article.img_url}`}
                        alt={article.series_title}
                        width={368}
                        height={276}
                        className="w-full h-full object-cover rounded-[6px]"
                      />
                    </div>
                  </div>
                  <div className="bg-white rounded-[6px] w-[calc(100%-16px)] relative translate-x-[16px] -translate-y-[16px] p-[10px]">
                    <div className="flex gap-[2px]">
                      <div
                        className={`border rounded-[6px] py-[6px] px-[8px] text-[12px] font-bold ${color.bg} ${color.bd}`}
                      >
                        {article.series_title}
                      </div>
                      <div
                        className={`bg-white border rounded-[6px] py-[6px] px-[8px] text-[12px] font-bold ${color.bd}`}
                      >
                        {article.seriesIndex + '화'}
                      </div>
                    </div>
                    <h3 className="mt-[10px] mb-[16px] text-[22px] font-bold leading-[30px] line-clamp-2 text-ellipsis group-hover:text-[#00aa73] max-md:group-hover:text-[#111] max-md:text-[18px] max-md:leading-[23px] ">
                      {article.sub_title}
                    </h3>
                    <p className="text-[12px] group-hover:text-[#00aa73] max-md:group-hover:text-[#111]">
                      {article.sub_title}
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
