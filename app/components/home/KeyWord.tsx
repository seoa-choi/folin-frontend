import Link from 'next/link';

const KeyWordTabs = [
  { tabMenu: '기획' },
  { tabMenu: '커리어' },
  { tabMenu: 'AI' },
  { tabMenu: '브랜딩' },
  { tabMenu: '창업' },
  { tabMenu: '마케팅' },
  { tabMenu: '콘텐츠' },
];
const KeyWordTabs2 = [
  { tabMenu: '이직' },
  { tabMenu: '트렌드' },
  { tabMenu: '디자인' },
  { tabMenu: '리더십' },
  { tabMenu: '글쓰기' },
  { tabMenu: '공간' },
  { tabMenu: 'F&B' },
];
const KeyWordTabs3 = [
  { tabMenu: '조직문화' },
  { tabMenu: '프로' },
  { tabMenu: '테크' },
  { tabMenu: '롱런' },
  { tabMenu: '네트워킹' },
  { tabMenu: '협업' },
];

export default function KeyWord() {
  return (
    <div>
      <h2 className="mb-[40px] text-[24px] font-bold">키워드</h2>
      <div className="max-w-[1200px] mb-[104px]">
        <ul className="flex justify-center gap-[4px] flex-wrap mb-[4px]">
          {KeyWordTabs.map((item, i) => (
            <li key={i}>
              <Link
                href=""
                className="h-[48px] py-[16px] px-[32px] text-[18px] rounded-[6px] bg-white flex items-center font-bold hover:bg-point1"
              >
                {item.tabMenu}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex justify-center  gap-[4px] flex-wrap mb-[4px]">
          {KeyWordTabs2.map((item, i) => (
            <li key={i}>
              <Link
                href=""
                className="h-[48px] py-[16px] px-[32px] text-[18px] rounded-[6px] bg-white flex items-center font-bold hover:bg-point1"
              >
                {item.tabMenu}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex justify-center  gap-[4px] flex-wrap">
          {KeyWordTabs3.map((item, i) => (
            <li key={i}>
              <Link
                href=""
                className="h-[48px] py-[16px] px-[32px] text-[18px] rounded-[6px] bg-white flex items-center font-bold hover:bg-point1"
              >
                {item.tabMenu}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
