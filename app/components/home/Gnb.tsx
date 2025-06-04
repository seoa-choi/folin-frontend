'use client';

import Link from 'next/link';
import Image from 'next/image';
import BurgerMenu from '@/app/components/home/BurgerMenu';
import { useState } from 'react';

export default function Gnb({
  menus,
  submenus,
  menus2,
}: {
  menus: {
    menu: string;
    path: string;
    menuItems?: {
      menuItem: string;
      path: string;
    }[];
  }[];
  submenus: {
    menu: string;
    path: string;
  }[];
  menus2: {
    menu: string;
    path: string;
  }[];
}) {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  function handleToggleMenu() {
    setIsDropDownOpen(!isDropDownOpen);
  }

  return (
    <div className="flex justify-start gap-[24px]">
      <button type="button" className="bg-point1">
        <Image
          src={`${
            !isDropDownOpen ? '/images/menubar.png' : '/images/close.png'
          }`}
          alt="메뉴버튼"
          width={32}
          height={32}
          onClick={handleToggleMenu}
        />
      </button>
      {!isDropDownOpen ? (
        <div className="flex gap-[24px] max-sm:hidden">
          <ul className="flex gap-[26px] items-center">
            {menus.map((item) => (
              <li key={item.menu} className="">
                <Link
                  href={item.path}
                  className="block text-[18px] text-gray-600 font-bold "
                >
                  {item.menu}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex gap-[16px] items-center">
            {menus2.map((item) => (
              <li key={item.menu}>
                <Link
                  href={item.path}
                  className="block text-[18px] text-gray-600 font-bold "
                >
                  {item.menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        // 드롭다운
        <BurgerMenu menus={menus} submenus={submenus} />
      )}
    </div>
  );
}
