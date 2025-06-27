'use client';

import { useQuery } from '@tanstack/react-query';
import { createColorAssigner } from '@/app/_lib/colorUtils';

type ArticleData = {
  title_id: number;
  contents_id: number;
  series_title: string;
  sub_title: string;
  content_type: string;
  img_url: string;
  linkers: string;
  created_at: string;
};

export default function ArticleDetail({ articleId }: { articleId: string }) {
  const { data, isLoading, isError } = useQuery<ArticleData[]>({
    queryKey: ['article', articleId],
    queryFn: async () => {
      const res = await fetch(`http://localhost:3001/article/${articleId}`);
      if (!res.ok) throw new Error('Failed to fetch article data');
      const json = await res.json();
      // console.log(json);
      return json.articleResult;
    },
  });

  // console.log(data);

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
    };
  });

  // console.log(indexedArticleSeries);

  const filteredId = indexedArticleSeries?.filter(
    (item) => String(item.contents_id) === articleId
  );
  // console.log(filteredId);

  return (
    <main className="pt-[52px] px-[24px] max-w-[1248px] mx-auto max-sm:pt-[56px] max-sm:px-[8px]">
      {filteredId?.map((item) => {
        const color = getColorForArticle(item.series_title);
        return (
          <div key={item.contents_id} className="w-[588px] pt-[64px] mx-auto">
            <div className="flex gap-[2px]">
              <div
                className={`border rounded-[6px] py-[6px] px-[8px] text-[12px] font-bold ${color.bg} ${color.bd}`}
              >
                {item.series_title}
              </div>
              <div
                className={`bg-transprent border rounded-[6px] py-[6px] px-[8px] text-[12px] font-bold ${color.bd}`}
              >
                {item.seriesIndex + '화'}
              </div>
            </div>
            <h3 className="text-[28px] font-bold leading-[36px]">
              {item.sub_title}
            </h3>
          </div>
        );
      })}
    </main>
  );
}
