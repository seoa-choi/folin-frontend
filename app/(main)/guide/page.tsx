'use client';

import Balance from '@/app/components/guide/Balance';
import Subscription from '@/app/components/guide/Subscription';
import VirtualAccount from '@/app/components/guide/VirtualAccount';
import { useRef, useState } from 'react';

const guideList: {
  text: string;
  id: 'account' | 'deposit' | 'subscription';
}[] = [
  { text: '가상계좌 발급', id: 'account' },
  { text: '예치금 입출금', id: 'deposit' },
  { text: '청약 신청', id: 'subscription' },
];

export default function Guide() {
  const [isActive, setIsActive] = useState<string>('가상계좌 발급');
  // const firstRef = useRef<HTMLDivElement | null>(null);

  const refs = {
    account: useRef<HTMLDivElement | null>(null),
    deposit: useRef<HTMLDivElement | null>(null),
    subscription: useRef<HTMLDivElement | null>(null),
  };

  // 도달 위치보다 -50
  function handleScroll(
    activeText: string,
    sectionId: 'account' | 'deposit' | 'subscription'
  ): void {
    setIsActive(activeText);
    const targetRef = refs[sectionId].current;
    if (targetRef) {
      const offset = 50;
      const elementTop = targetRef.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementTop - offset,
        behavior: 'smooth',
      });
    }
  }

  return (
    <main className="pt-[80px]">
      <div className="">
        <div className="my-[60px] text-center max-sm:my-[40px]">
          <p className="text-[18px] text-[rgb(140,145,159)] font-bold mb-[24px] max-sm:text-[14px] max-sm:mb-[16px]">
            청약 가이드
          </p>
          <p className="text-[48px] text-[#131313] leading-[64px] tracking-[-0.018em] font-bold max-sm:text-[28px] max-sm:leading-[40px] max-sm:font-semibold max-sm:tracking-[-0.03em]">
            피스 앱 사용가이드를
            <br />
            알려드릴게요
          </p>
        </div>
        <div>
          <div>
            <div className="w-full h-[56px] sticky top-[79px] bg-[rgba(255,255,255,0.8)] backdrop-blur-[20px] z-10">
              <div className="flex gap-[24px] justify-center items-center h-full">
                {guideList.map((item) => (
                  <button
                    key={item.text}
                    type="button"
                    className={`h-full text-[18px] leading-[24px] tracking-[-0.03em] ${
                      isActive === item.text
                        ? 'text-[#292a2e] border-b-2 border-b-[#292a2e]'
                        : 'text-[#b8bcc8]'
                    } max-sm:text-[16px]`}
                    onClick={() => handleScroll(item.text, item.id)}
                  >
                    {item.text}
                  </button>
                ))}
              </div>
            </div>
            <VirtualAccount ref={refs.account} />
            <Balance ref={refs.deposit} />
            <Subscription ref={refs.subscription} />
          </div>
        </div>
      </div>
    </main>
  );
}

//
//
//
//
//
//
//

// function handleScroll(activeText: string) {
//   setIsActive(activeText);
//   if (firstRef.current) {
//     firstRef.current.scrollIntoView({ behavior: 'smooth' });
//   }
// }

// 페이지 이동 시 바로 이동
// useEffect(() => {
//   if (firstRef.current) {
//     firstRef.current.scrollIntoView({ behavior: 'smooth' });
//   }
// }, []);
