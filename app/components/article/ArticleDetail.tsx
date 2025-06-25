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
    queryFn: () =>
      fetch(`http://localhost:3001/article/${articleId}`).then((res) =>
        res.json()
      ),
  });

  if (isLoading)
    return (
      <p className="pt-[52px] px-[24px] max-w-[1248px] mx-auto max-sm:pt-[56px] max-sm:px-[8px]">
        Loading...
      </p>
    );
  if (isError) return <p></p>;

  const filteredId = data?.filter(
    (item) => String(item.contents_id) === articleId
  );

  const getColorForArticle = createColorAssigner();

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
                {/* {item.seriesIndex + '화'} */}
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
