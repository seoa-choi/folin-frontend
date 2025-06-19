import SeriesTab from '@/app/components/series/SeriesTab';
import { use } from 'react';

export default function Series() {
  async function getSeries() {
    const res = await fetch('http://localhost:3001/series');
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  }
  const data = getSeries();
  const seriesData = use(data);
  // console.log(data);
  // console.log(seriesData);

  return (
    <main className="pt-[52px] px-[24px] max-w-[1248px] mx-auto max-sm:pt-[56px] max-sm:px-[8px]">
      <div className="">
        <SeriesTab seriesData={seriesData} />
      </div>
    </main>
  );
}
