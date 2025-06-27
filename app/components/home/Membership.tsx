import Image from 'next/image';
import Link from 'next/link';

export default function Membership({ isSticky }: { isSticky: boolean }) {
  return (
    <div
      className={`${
        isSticky
          ? 'sticky bottom-[4px] max-md:bottom-0'
          : 'relative bottom-[-4px] max-md:bottom-0'
      } max-w-[1200px] mx-auto text-center bg-[#00d48d] rounded-[6px] left-0  z-10 max-md:rounded-none`}
    >
      <Link href="/register" className="block py-[18px] px-[2px] ">
        <div className="mb-[4px]">
          <Image
            src="/images/membership.png"
            alt="멤버십"
            width={204}
            height={31}
          />
        </div>
        <div className="flex justify-center items-center gap-x-[9px] max-md:flex-col">
          <p className="font-bold tracking-[-0.025em]">
            지금 첫 달 무료로 커리어 성장하기
          </p>
          <Image
            src="/images/gg.png"
            alt="지금 첫 달 무료로 커리어 성장하기"
            width={41}
            height={15}
          />
        </div>
      </Link>
    </div>
  );
}
