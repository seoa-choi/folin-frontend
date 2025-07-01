'use client';

import SeriesDetail from '@/app/components/series/SeriesDetail';
import { useQuery } from '@tanstack/react-query';
import { use } from 'react';

export default function SeriesItem({
  params,
}: {
  params: Promise<{ seriesId: string }>;
}) {
  const { seriesId } = use(params);
  const {
    data: seriesData,
    isPending,
    isError,
  } = useQuery({
    queryKey: ['series', seriesId],
    queryFn: async () => {
      const res = await fetch(`http://localhost:3001/series/${seriesId}`);
      if (!res.ok) throw new Error('Failed data');
      const data = await res.json();
      // console.log('api', data);
      return data;
    },
  });

  if (isPending) return <p className="text-center pt-[54px]">로딩 중 ..</p>;
  if (isError)
    return (
      <p className="text-center pt-[54px]">데이터를 불러오지 못했습니다.</p>
    );

  return (
    <main className="pt-[52px] px-[24px] max-w-[1248px] mx-auto max-sm:pt-[56px] max-sm:px-[8px] ">
      <SeriesDetail seriesId={seriesId} seriesData={seriesData} />
    </main>
  );
}
