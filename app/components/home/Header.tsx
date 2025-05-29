import Link from 'next/link';
import Image from 'next/image';
import Gnb from '@/app/components/home/Gnb';

const menus = [
  {
    menu: '시리즈',
    path: '/series',
    menuItems: [
      { menuItem: '시리즈로 보기', path: '/series' },
      { menuItem: '아티클만 보기', path: '/article' },
      { menuItem: '비디오만 보기', path: '/video' },
    ],
  },
  {
    menu: '세미나',
    path: '/seminar',
  },
];
const menus2 = [
  {
    menu: '톡',
    path: '/talk',
  },
  { menu: '|', path: '' },
  {
    menu: 'B2B',
    path: '/b2b',
  },
];

const submenus = [
  { menu: '링커', path: 'linker' },
  { menu: '폴인 소개', path: '' },
  { menu: '단체구독·B2B문의', path: '' },
  { menu: '폴인레터 신청', path: '' },
];

const userMenu = [
  { menu: '멤버십 구독', path: '', color: 'text-white', bg: 'bg-[#111]' },
  { menu: '로그인', path: '', color: 'text-gray-600', bg: 'bg-white' },
];

export default function Header() {
  return (
    <header className="fixed w-full left-0 top-0 px-[24px]">
      <div className="max-w-[1200px] mx-auto pt-[4px] relative">
        <nav className="w-full h-[48px] flex items-center justify-between p-[8px] bg-point1 rounded-[6px]">
          <Gnb menus={menus} submenus={submenus} menus2={menus2} />
          <h1 className="basis-[calc(100%/3)] justify-items-center">
            <Link href="/" className="block w-[86px] h-[29px]">
              <Image
                src="/images/folin.png"
                alt="폴인"
                width={86}
                height={29}
                className="w-full h-full object-cover"
              />
            </Link>
          </h1>
          <div className="flex items-center justify-end gap-[4px] basis-[calc(100%/3)]">
            {userMenu.map((item) => (
              <Link
                href=""
                key={item.menu}
                className={`${item.bg} ${item.color} py-[6px] px-[10px] rounded-[6px] text-[12px] font-bold leading-[15px]`}
              >
                {item.menu}
              </Link>
            ))}
            <Image src="/images/search.png" alt="검색" width={32} height={32} />
          </div>
        </nav>
      </div>
      <div className="max-w-[1200px] mx-auto pt-[4px]">
        <div className="w-full h-[48px] flex items-center justify-between bg-[#f2ec72] p-[8px] rounded-[6px]">
          <p className="text-[15px] font-bold">
            무신사·삼양·Meta·SM, 요즘 가장 압도적인 성과를 내는 마케터들을 한
            자리에서!
          </p>
          <button type="button" className="bg-[#f2ec72] ">
            <Image src="/images/x.png" alt="닫기" width={32} height={32} />
          </button>
        </div>
      </div>
    </header>
  );
}
