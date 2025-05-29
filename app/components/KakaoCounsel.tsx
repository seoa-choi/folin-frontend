import Link from 'next/link';
import Image from 'next/image';

export default function KakaoCounsel({
  className,
  custom,
  customImgSize,
}: {
  className: string;
  custom: string;
  customImgSize: string;
}) {
  return (
    <div
      className={`py-[50px] px-[40px] bg-[#FFE24A] h-auto rounded-[40px_40px_0_40px] relative max-sm:h-[240px] max-sm:rounded-[32px_32px_0] max-sm:p-[32px] ${className}`}
    >
      <Image
        src="/images/tidings/img_contact_bg_1.png"
        alt="카톡 상담하기"
        width={640}
        height={320}
        className={`absolute right-0 bottom-0 max-w-[320px] w-[calc(26.6667vw)] z-1 max-sm:left-[50%] max-sm:-translate-x-[50%] max-sm:w-[calc(71.1111vw)] ${customImgSize}`}
      />
      <p className="text-[28px] text-[#292A2E] font-semibold mb-[10px] max-sm:text-[22px] max-sm:leading-[28px] max-sm:mb-[8px]">
        카톡 상담하기
      </p>
      <div
        className={`flex items-center gap-[8px] z-10 max-sm:flex-col max-sm:items-start ${custom}`}
      >
        <p className="text-[18px] text-[#292A2E] font-semibold z-10 max-sm:text-[16px] max-sm:leading-[22px]">
          평일 오전 9:00 ~ 오후 5:30
        </p>
        <p className="text-[14px] py-[4px] px-[10px] bg-[#F65F5F] rounded-[100px] text-white font-semibold z-10">
          운영중
        </p>
      </div>
      <Link
        href=""
        className="w-[120px] h-[120px] absolute right-[-1px] bottom-[-1px] z-10"
      >
        <Image
          src="/images/tidings/img_contact_link_1.png"
          alt="카톡상담"
          width={120}
          height={120}
          className=""
        />
      </Link>
    </div>
  );
}
