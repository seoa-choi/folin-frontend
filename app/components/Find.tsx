import Image from 'next/image';

const btnList = [
  { menu: '상품 목록', url: '' },
  { menu: '청약 가이드', url: '' },
  { menu: '공지사항', url: '' },
];

export default function Find({ animate }: { animate: boolean }) {
  return (
    <div className="fixed left-0 w-full max-lg:h-[100vh] max-lg:bg-white z-90">
      <div
        className={`w-full h-[100vh] ${
          animate ? 'bg-[rgba(19,19,19,0.6)]' : 'bg-none'
        } max-lg:hidden`}
      ></div>
      <div
        className={`absolute z-10 top-0 w-full py-[80px] px-[20px] transition-transform transform duration-400 ease-in-out ${
          animate
            ? 'translate-y-0 bg-white border-t-1 border-t-[#E2E8F0]'
            : '-translate-y-full bg-none border-none'
        } max-lg:p-[20px] max-lg:top-[63px]`}
      >
        <div className="max-w-[1420px] mx-auto max-lg:w-full">
          <div className="w-[760px] mx-auto max-lg:w-full">
            <div className="w-full border-[3px] border-[#292a2e] rounded-[40px] p-[24px] h-[80px] flex items-center max-lg:border-[1px] max-lg:border-[#DADCE3] max-lg:h-[44px] max-lg:p-0 max-lg:pl-[20px] max-lg:pr-[12px]">
              <input
                type="search"
                placeholder="증권 상품을 검색해보세요!"
                className="w-full border-none text-[28px] text-center font-bold text-[#292a2e] leading-[40px] placeholder:font-bold placeholder:text-[#b8bcc8] p-0 max-lg:text-[16px] max-lg:text-left"
              />
              <button type="submit">
                <Image
                  src="/images/ic-search.cf059c94.svg"
                  alt="검색"
                  width={40}
                  height={32}
                  className="max-lg:w-[24px] max-lg:h-[20px]"
                />
              </button>
            </div>
            <div className="flex justify-center gap-[8px] mt-[24px] max-lg:justify-start flex-wrap">
              {btnList.map((btn, i) => (
                <button
                  type="button"
                  key={i}
                  className="px-[16px] py-[9px] text-[16px] h-[40px] rounded-[100px] text-gray-600 bg-[#f6f6f6]"
                  onClick={() => (window.location.href = btn.url)}
                >
                  {btn.menu}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
