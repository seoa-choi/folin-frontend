'use client';

import ArticleList from '@/app/components/article/ArticleList';
import SeriesTab from '@/app/components/series/SeriesTab';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ArticleWrapperCopy() {
  const [articleData, setArticleData] = useState<any>(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialPage = Number(searchParams.get('page')) || 1;

  const [page, setPage] = useState<number>(initialPage);

  useEffect(() => {
    async function getArticle() {
      const res = await fetch(`http://localhost:3001/article?page=${page}`);
      const data = await res.json();
      setArticleData(data);
      // console.log(data);
    }
    getArticle();
  }, [page]);

  if (!articleData)
    return (
      <div className="pt-[52px] px-[24px] max-w-[1248px] mx-auto max-sm:pt-[56px] max-sm:px-[8px] text-center"></div>
    );

  const { seriesTab, articleSeries, limit, totalCount } = articleData;

  return (
    <main className="pt-[52px] px-[24px] max-w-[1248px] mx-auto max-sm:pt-[56px] max-sm:px-[8px] ">
      <div className="">
        <SeriesTab seriesTab={seriesTab} setPage={setPage} />
        <div className="pt-[64px] max-sm:pt-[40px]">
          <ArticleList
            articleSeries={articleSeries}
            limit={limit}
            totalCount={totalCount}
          />
        </div>
      </div>
    </main>
  );
}
