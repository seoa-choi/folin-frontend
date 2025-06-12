import Link from 'next/link';

const creators = [
  { roles: '전체' },
  { roles: '마케터' },
  { roles: '기획자' },
  { roles: '디자이너' },
  { roles: '커리어' },
  { roles: '콘텐츠' },
  { roles: 'F&B' },
  { roles: '공간' },
  { roles: '테크' },
];

export default function LinkerTab() {
  return (
    <ul className="flex flex-wrap justify-center gap-[4px] max-w-[386px] mx-auto">
      {creators.map((creator, i) => (
        // bg-[#00d48d]
        <li key={i} className="bg-white h-[48px] rounded-[6px]">
          <Link
            href=""
            className="block px-[16px] text-[18px] leading-[48px] font-bold"
          >
            {creator.roles}
          </Link>
        </li>
      ))}
    </ul>
  );
}
