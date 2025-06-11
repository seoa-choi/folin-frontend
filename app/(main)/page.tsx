'use client';

import FolinShorts from '@/app/components/home/FolinShorts';
import FolinUnderline from '@/app/components/home/FolinUnderline';
import KeyWord from '@/app/components/home/KeyWord';
import MainContainer1 from '@/app/components/home/MainContainer1';
import MostViewedArticles from '@/app/components/home/MostViewedArticles';
import MostViewedVideo from '@/app/components/home/MostViewedVideo';
import NewSeries from '@/app/components/home/NewSeries';
import NextSeminar from '@/app/components/home/NextSeminar';
import SeminarBar from '@/app/components/home/SeminarBar';
import SeriesInside from '@/app/components/home/SeriesInside';
import WideSlider from '@/app/components/home/WideSlider';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init();
    }
  }, []);

  const [isClosed, setIsClosed] = useState(false);

  function handleClose(e?: React.MouseEvent<HTMLButtonElement>) {
    // e가 있을 때만
    if (e) e.preventDefault();
    setIsClosed(!isClosed);
  }

  return (
    <main className="pt-[52px] px-[24px] max-w-[1248px] mx-auto max-sm:pt-[56px] max-sm:px-[8px]">
      <div className="max-w-[1200px]">
        <SeminarBar isClosed={isClosed} handleClose={handleClose} />
        <MainContainer1 isClosed={isClosed} />
        <div>
          <NewSeries />
          <KeyWord />
          <FolinShorts />
          <MostViewedArticles />
          <MostViewedVideo />
          <SeriesInside />
          <WideSlider />
          <NextSeminar />
          <FolinUnderline />
        </div>
      </div>
    </main>
  );
}
