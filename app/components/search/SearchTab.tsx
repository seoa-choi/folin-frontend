import Link from 'next/link';

type Counts = {
  contents: number;
  linker: number;
  proposal: number;
};

export default function SearchTab({
  tabOps,
  counts,
}: {
  tabOps: { tabs: { label: string; value: string }[] };
  counts: Counts;
}) {
  return (
    <div className="flex">
      {tabOps.tabs.map((item, i) => (
        <div key={i} className="flex items-center mr-[12px] group">
          <Link href="" className="pr-[12px]">
            <span className="mr-[2px]">{item.label}</span>
            <span className="text-[#00aa73]">
              {counts[item.value as keyof Counts]}
            </span>
          </Link>

          <div className="w-[1px] h-[16px] border-r border-r-[#bfbfbf] group-last:border-r-0"></div>
        </div>
      ))}
    </div>
  );
}
