'use client';

import MainContainer1 from '@/app/components/home/MainContainer1';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init();
    }
  }, []);

  return (
    <main className="pt-[52px] px-[24px] max-w-[1248px] mx-auto">
      <div className="mt-[56px] max-w-[1200px]">
        <MainContainer1 />
      </div>
    </main>
  );
}
