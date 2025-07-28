import Image from 'next/image';

export default function SeminarBar({
  isClosed,
  handleClose,
}: {
  isClosed: boolean;
  handleClose(): void;
}) {
  return (
    <div
      className={`fixed w-full left-0 top-[52px] z-90 ${
        isClosed ? 'hidden' : 'block'
      } my-[4px] px-[24px] max-sm:px-[8px] max-sm:pt-[4px]`}
    >
      <div
        className={`max-w-[1200px] mx-auto h-auto relative left-0 top-0 before:left-0 before:top-[-4px] before:absolute before:bg-[#ebedec] before:w-full before:h-[48px] before:-z-10 `}
      >
        <div className="w-full h-auto flex items-center justify-between bg-[#f2ec72] p-[8px] rounded-[6px] max-sm:py-[8px] max-sm:pr-[6px] max-sm:pl-[10px]">
          <p className="text-[15px] font-bold flex-grow w-[calc(100%-32px)]">
            무신사·삼양·Meta·SM, 요즘 가장 압도적인 성과를 내는 마케터들을 한
            자리에서!
          </p>
          <button
            type="button"
            className="bg-[#f2ec72] shrink-0"
            onClick={handleClose}
          >
            <Image
              src="/images/x.png"
              alt="닫기"
              width={32}
              height={32}
              loading="lazy"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
