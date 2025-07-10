import Link from 'next/link';

export default function SearchTab({
  tabOps,
}: {
  tabOps: { tabs: { label: string; value: string }[] };
}) {
  return (
    <div className="flex">
      {tabOps.tabs.map((item, i) => (
        <div key={i} className="flex items-center mr-[12px]">
          <Link href="" className="pr-[12px]">
            <span className="mr-[2px]">{item.label}</span>
            <span className="text-[#00aa73]">000</span>
          </Link>

          <div className="w-[1px] h-[16px] border-r border-r-[#bfbfbf]"></div>
        </div>
      ))}
    </div>
  );
}
