import Image from 'next/image';

export default function SeminarBar() {
  return (
    <div className="max-w-[1200px] mx-auto pt-[4px] z-1">
      <div className="w-full h-[48px] flex items-center justify-between bg-[#f2ec72] p-[8px] rounded-[6px] max-sm:py-[8px] max-sm:pr-[6px] max-sm:pl-[10px]">
        <p className="text-[15px] font-bold flex-grow">
          무신사·삼양·Meta·SM, 요즘 가장 압도적인 성과를 내는 마케터들을 한
          자리에서!
        </p>
        <button type="button" className="bg-[#f2ec72] shrink-0">
          <Image src="/images/x.png" alt="닫기" width={32} height={32} />
        </button>
      </div>
    </div>
  );
}
