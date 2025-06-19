import Link from 'next/link';

export default function BurgerMenu({
  menus,
  submenus,
  handleClose,
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
  handleClose: () => void;
}) {
  return (
    <div
      className="max-w-[1200px] absolute left-0 top-[52px]"
      onClick={handleClose}
    >
      <div className="w-[226px] bg-point1 py-[24px] px-[16px] rounded-[6px] max-md:w-[256px]">
        <ul>
          {menus.map((item) => (
            <li key={item.menu}>
              <Link
                href={item.path}
                className="block text-[18px] font-bold leading-[24px] pb-[16px]"
              >
                {item.menu}
              </Link>
              <ul>
                {item.menuItems?.map((subItem) => (
                  <li key={subItem.menuItem} className="pl-[16px]">
                    <Link
                      href={subItem.path}
                      className="block leading-[20px] pb-[16px]"
                    >
                      {subItem.menuItem}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
          <li>
            <Link
              href="/talk"
              className="block text-[18px] font-bold leading-[24px] pb-[16px]"
            >
              톡
            </Link>
          </li>
        </ul>
        <ul className="pt-[24px] border-t-1">
          {submenus.map((item) => (
            <li key={item.menu}>
              <Link href={item.path} className="block leading-[20px] pb-[16px]">
                {item.menu}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
