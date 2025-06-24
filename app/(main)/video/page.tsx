'use client';

import SeriesTab from '@/app/components/series/SeriesTab';
import { useEffect, useState } from 'react';

export default function video() {
  const [videoData, setVideoData] = useState<any>(null);

  useEffect(() => {
    async function getVideo() {
      const res = await fetch(`http://localhost:3001/video`);
      const data = await res.json();
      setVideoData(data);
      // console.log(data);
    }
    getVideo();
  }, []);

  if (!videoData)
    return (
      <div className="pt-[52px] px-[24px] max-w-[1248px] mx-auto max-sm:pt-[56px] max-sm:px-[8px] text-center">
        <p className="py-[50px]">loading . . . </p>
      </div>
    );

  const { seriesTab, videoSeries, limit, totalCount } = videoData;

  return (
    <main className="pt-[52px] px-[24px] max-w-[1248px] mx-auto max-sm:pt-[56px] max-sm:px-[8px] ">
      <div className="">
        <SeriesTab seriesTab={seriesTab} />
        <div className="pt-[64px] max-sm:pt-[40px]">
          <p className="pt-[100px] pb-[200px] text-center">비디오가 없습니다</p>
        </div>
      </div>
    </main>
  );
}
