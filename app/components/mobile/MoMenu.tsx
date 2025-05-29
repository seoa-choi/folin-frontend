import Link from 'next/link';
import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import Find from '@/app/components/Find';

type Menus = {
  menu: string;
  link?: string;
  subMenu: {
    menuItem: string;
    path: string;
  }[];
};

export default function MoMenu({
  menus,
  moIsShow,
  setMoIsShow,
  animate,
  isShow,
}: {
  menus: Menus[];
  moIsShow: boolean;
  setMoIsShow: Dispatch<SetStateAction<boolean>>;
  animate: boolean;
  isShow: boolean;
}) {
  function handleMoMenuClose() {
    setMoIsShow(false);
  }

  // 애니메이션 처리 해야함
  return (
    <div className="fixed left-0 top-0 w-full h-full z-99">
      <div className="bg-[rgba(19,19,19,0.6)] backdrop-blur-[20px] w-full h-full"></div>
      <div
        className={`max-w-[360px] w-full h-[100vh] bg-white absolute top-0 right-0 transform duration-500 transition-transform ease-out ${
          moIsShow ? 'translate-x-[0]' : 'translate-x-[-360px]'
        } max-sm:max-w-none`}
      >
        <div className="w-full py-[20px] px-[18px] flex justify-between">
          <Link href="/">
            <Image
              src="images/ic-home.3f4bb4a3.svg"
              alt="홈"
              width={24}
              height={24}
            />
          </Link>
          <div>
            <button type="button" className="mr-[20px]">
              <Image
                src="images/ic-search.cf059c94.svg"
                alt="찾기"
                width={24}
                height={24}
              />
            </button>
            <button type="button">
              <Image
                src="images/ic-close.bd69da74.svg"
                alt="메뉴닫기"
                width={24}
                height={24}
                onClick={handleMoMenuClose}
              />
            </button>
          </div>
        </div>
        <div className="px-[20px] pt-[16px] pb-[56px]">
          <ul
            className="grid grid-cols-2 gap-x-[28px] gap-y-[40px]"
            onClick={handleMoMenuClose}
          >
            {menus.map((item) => (
              <li key={item.menu}>
                <h2
                  className="text-[18px] text-[#292A2E] font-bold mb-[16px] cursor-pointer"
                  onClick={() => (window.location.href = item.link ?? '/')}
                >
                  {item.menu}
                </h2>
                <ul>
                  {item.subMenu.map((sub) => (
                    <li key={sub.menuItem}>
                      <Link
                        href={sub.path}
                        className="text-[14px] text-[#4A4D55] font-normal"
                      >
                        {sub.menuItem}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative p-[20px] before:absolute before:top-0 before:left-0 before:right-0 before:w-[calc(100%-20px)] before-h-[1px] before:border-t-[1px] before:border-t-[#F2F3F4] before:mx-auto">
          <button
            type="button"
            className={`px-[16px] py-[9px] text-[16px] h-[40px] rounded-[100px] bg-white font-bold text-gray-600 border border-[#EAECF0] hover:bg-[#f6f6f6] mr-[8px]`}
          >
            제휴 문의
          </button>
          <button
            type="button"
            className={`px-[16px] py-[9px] text-[16px] h-[40px] rounded-[100px] bg-[#131313] font-bold text-white hover:bg-[rgba(19,19,19,0.8)]`}
          >
            앱 다운로드
          </button>
        </div>
      </div>
      {isShow ? <Find animate={animate} /> : null}
    </div>
  );
}
