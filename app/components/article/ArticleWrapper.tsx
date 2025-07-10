'use client';

import ArticleList from '@/app/components/article/ArticleList';
import SeriesTab from '@/app/components/series/SeriesTab';
import { useState } from 'react';

type SeriesTab = {
  series_id: number;
  tit: string;
};

type ArticleSeries = {
  series_title: string;
  contents_id: number;
  sub_title: string;
  linkers: string;
  img_url: string;
  content_type: string;
  created_at: string;
};

type Data = {
  seriesTab: SeriesTab[];
  articleSeries: ArticleSeries[];
  page: number;
  limit: number;
  totalCount: number;
};

export default function ArticleWrapper({
  data,
  initialPage,
}: {
  data: Data;
  initialPage: number;
}) {
  const articleData = data;
  const [page, setPage] = useState(initialPage);

  const { seriesTab, articleSeries, limit, totalCount } = articleData;

  return (
    <div className="">
      <SeriesTab seriesTab={seriesTab} setPage={setPage} />
      <div className="pt-[64px] max-sm:pt-[40px]">
        <ArticleList
          articleSeries={articleSeries}
          limit={limit}
          totalCount={totalCount}
          page={page}
          setPage={setPage}
        />
      </div>
    </div>
  );
}
