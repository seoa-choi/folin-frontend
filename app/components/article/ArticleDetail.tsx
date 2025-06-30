'use client';

import { useQuery } from '@tanstack/react-query';
import { createColorAssigner } from '@/app/_lib/colorUtils';
import Image from 'next/image';
import Link from 'next/link';

type ArticleData = {
  contents_id: number;
  sub_title: string;
  img_url: string;
  created_at: string;
  series_title: string;
  detail: {
    sentence1: string;
    sentence2: string;
    sentence3: string;
    h3: string;
    p: string;
  };

  linkers: {
    linker_id: string;
    author: string;
    affiliation: string;
    image_url: string;
  }[];
};

const icons = [
  { icon: '/images/ico_review_default.svg', alt: 'comment' },
  { icon: '/images/like.png', alt: 'like' },
  { icon: '/images/bookmark.png', alt: 'scrap' },
  { icon: '/images/share.png', alt: 'share' },
  { icon: '', alt: '' },
  { icon: '/images/gift.png', alt: 'gift' },
];

export default function ArticleDetail({ articleId }: { articleId: string }) {
  const { data, isLoading, isError } = useQuery<ArticleData[]>({
    queryKey: ['article', articleId],
    queryFn: async () => {
      const res = await fetch(`http://localhost:3001/article/${articleId}`);
      if (!res.ok) throw new Error('Failed to fetch article data');
      const json = await res.json();
      // console.log(json);
      return json;
    },
  });

  if (isLoading)
    return (
      <p className="pt-[52px] px-[24px] max-w-[1248px] mx-auto max-sm:pt-[56px] max-sm:px-[8px]">
        Loading...
      </p>
    );

  if (isError) return <p></p>;

  const getColorForArticle = createColorAssigner();

  // 시리즈별 전체 개수 세기
  const seriesCountMap: { [key: string]: number } = {};
  data?.forEach((item) => {
    const title = item.series_title;
    seriesCountMap[title] = (seriesCountMap[title] || 0) + 1;
  });

  // 시리즈별 현재 위치 추적
  const seriesIndexMap: { [key: string]: number } = {};

  // 역순 인덱싱된 데이터 생성
  const indexedArticleSeries = data?.map((item) => {
    const title = item.series_title;
    seriesIndexMap[title] = (seriesIndexMap[title] || 0) + 1;

    return {
      ...item,
      // 전체 개수에서 현재 순서를 빼서 역순 인덱스 계산 기존데이터에 seriesIndex 추가
      seriesIndex: seriesCountMap[title] - seriesIndexMap[title] + 1,
      // 컬러 함수 호출
      seriesColor: getColorForArticle(title),
    };
  });

  // console.log(indexedArticleSeries);

  const filteredId = indexedArticleSeries?.filter(
    (item) => String(item.contents_id) === articleId
  );
  console.log(filteredId);

  return (
    <main className="pt-[52px] px-[24px] max-w-[1248px] mx-auto max-sm:pt-[56px] max-sm:px-[8px]">
      <div className="w-[588px] pt-[64px] mx-auto">
        <div>
          {filteredId?.map((item, i) => (
            <div key={i}>
              <div className="flex gap-[2px]">
                <div
                  className={`border rounded-[6px] py-[6px] px-[8px] text-[12px] font-bold ${item.seriesColor.bg} ${item.seriesColor.bd}`}
                >
                  {item.series_title}
                </div>
                <div
                  className={`bg-transprent border rounded-[6px] py-[6px] px-[8px] text-[12px] font-bold ${item.seriesColor.bd}`}
                >
                  {item.seriesIndex + '화'}
                </div>
              </div>
              <h3 className="text-[28px] font-bold leading-[36px]">
                {item.sub_title}
              </h3>
              <div className="flex justify-end items-center gap-[8px] mt-[26px] mb-[28px]">
                {icons.map((ite) => (
                  <button
                    key={ite.alt}
                    type="button"
                    className="group nth-[5]:border-r nth-[5]:h-[16px]"
                  >
                    {ite.icon && (
                      <Image
                        src={ite.icon}
                        alt={ite.alt}
                        width={24}
                        height={24}
                      />
                    )}
                  </button>
                ))}
              </div>
              <div>
                {item.linkers.map((linker) => (
                  <Link href="" key={linker.linker_id} className="block">
                    <strong className="font-bold">{linker.author}</strong>
                    <span>{linker.affiliation}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
