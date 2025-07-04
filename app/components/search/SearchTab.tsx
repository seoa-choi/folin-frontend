import Link from 'next/link';

const searchDbTab = [
  { tab: '전체' },
  { tab: '시리즈' },
  { tab: '아티클' },
  { tab: '비디오' },
  { tab: '세미나' },
  { tab: '링커' },
];

export default function SearchTab() {
  return (
    <div className="flex">
      {searchDbTab.map((item) => (
        <div key={item.tab} className="flex items-center mr-[12px]">
          <Link href="" className="pr-[12px]">
            <span className="mr-[2px]">{item.tab}</span>
            <span className="text-[#00aa73]">000</span>
          </Link>
          <div className="w-[1px] h-[16px] border-r border-r-[#bfbfbf]"></div>
        </div>
      ))}
    </div>
  );
}
