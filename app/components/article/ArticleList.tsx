import Image from 'next/image';
import Link from 'next/link';

type ArticleSeries = {
  series_title: string;
  contents_id: number;
  sub_title: string;
  linkers: string;
  img_url: string;
  content_type: string;
  created_at: string;
};

const pointColor = [
  { bg: 'bg-[#a45eeb]', bd: 'border-[#a45eeb]' },
  { bg: 'bg-[#ff595f]', bd: 'border-[#ff595f]' },
  { bg: 'bg-[#e5c58a]', bd: 'border-[#e5c58a]' },
  { bg: 'bg-[#f2ec72]', bd: 'border-[#f2ec72]' },
  { bg: 'bg-[#a3cfff]', bd: 'border-[#a3cfff]' },
  { bg: 'bg-[#25aacf]', bd: 'border-[#25aacf]' },
];

// 시리즈 타이틀별 색상 매핑 객체
const seriesColorMap: { [key: string]: { bg: string; bd: string } } = {};
let colorIndex = 0;

function getColorForSeries(seriesTitle: string) {
  if (!seriesColorMap[seriesTitle]) {
    // 아직 매핑되지 않은 시리즈면 새로운 색상 할당
    seriesColorMap[seriesTitle] = pointColor[colorIndex % pointColor.length];
    colorIndex++;
  }
  return seriesColorMap[seriesTitle];
}

export default function ArticleList({
  articleSeries,
  limit,
  totalCount,
}: {
  articleSeries: ArticleSeries[];
  limit: number;
  totalCount: number;
}) {
  // 시리즈별 전체 개수 세기
  const seriesCountMap: { [key: string]: number } = {};
  articleSeries.forEach((item) => {
    const title = item.series_title;
    seriesCountMap[title] = (seriesCountMap[title] || 0) + 1;
  });

  // 시리즈별 현재 위치 추적
  const seriesIndexMap: { [key: string]: number } = {};

  // 역순 인덱싱된 데이터 생성
  const indexedArticleSeries = articleSeries.map((item) => {
    const title = item.series_title;
    seriesIndexMap[title] = (seriesIndexMap[title] || 0) + 1;

    return {
      ...item,
      // 전체 개수에서 현재 순서를 빼서 역순 인덱스 계산 기존데이터에 seriesIndex 추가
      seriesIndex: seriesCountMap[title] - seriesIndexMap[title] + 1,
    };
  });

  return (
    <div>
      <ul className="grid grid-cols-3 gap-[24px] max-md:grid-cols-2 max-md:gap-[8px] max-sm:grid-cols-1 max-sm:gap-0">
        {indexedArticleSeries.map((item) => {
          const color = getColorForSeries(item.series_title);
          // console.log(indexedArticleSeries);

          return (
            <li key={item.contents_id}>
              <Link
                href=""
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
                      {item.seriesIndex + '화'}
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
            </li>
          );
        })}
      </ul>
    </div>
  );
}
