'use client';

import SeriesDetailList from '@/app/components/series/SeriesDetailList';
import SeriesDetailSlide from '@/app/components/series/SeriesDetailSlide';
import { useParams, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SeriesItem() {
  const params = useParams();
  const searchParams = useSearchParams();
  const viewType = searchParams.get('view') || 'slide';

  const seriesId = params.seriesId as string;

  const [seriesData, setSeriesData] = useState<any>(null);

  useEffect(() => {
    async function seriesIdData() {
      const res = await fetch(`http://localhost:3001/series/${seriesId}`);
      const data = await res.json();
      setSeriesData(data);
    }
    seriesIdData();
  }, [seriesId]);

  // if (!seriesData) {
  //   return (
  //     <div className="pt-[52px] px-[24px] max-w-[1248px] mx-auto max-sm:pt-[56px] max-sm:px-[8px] text-center">
  //       <p>. . .</p>
  //     </div>
  //   );
  // }

  return (
    <main className="pt-[52px] px-[24px] max-w-[1248px] mx-auto max-sm:pt-[56px] max-sm:px-[8px] ">
      <div className="">
        <div className="pt-[64px] max-sm:pt-[40px]">
          {viewType === 'slide' ? (
            <SeriesDetailSlide seriesId={seriesId} />
          ) : (
            <SeriesDetailList seriesId={seriesId} seriesData={seriesData} />
          )}
        </div>
      </div>
    </main>
  );
}
