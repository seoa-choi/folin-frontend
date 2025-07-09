import SeriesWrapper from '@/app/components/series/SeriesWrapper';
import { Suspense } from 'react';

export default async function Series({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const page = Number(searchParams.page) || 1;
  // `http://localhost:3001/series?page=${page}`

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/series?page=${page}`
  );
  const seriesData = await res.json();

  // const seriesData = use(
  //   fetch(`http://localhost:3001/series?page=${page}`, {
  //     // cache: 'no-store',
  //   }).then((res) => {
  //     if (!res.ok) throw new Error('Failed to fetch');
  //     return res.json();
  //   })
  // );
  // console.log(seriesData);

  return (
    <Suspense fallback={<div className="text-center">로딩 중...</div>}>
      <main className="pt-[52px] px-[24px] max-w-[1248px] mx-auto max-sm:pt-[56px] max-sm:px-[8px]">
        <SeriesWrapper initialData={seriesData} initialPage={page} />
      </main>
    </Suspense>
  );
}
