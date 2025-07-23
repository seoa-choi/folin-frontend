import Image from 'next/image';

const stars: any[] = [];
for (let i = 1; i <= 5; i++) {
  stars.push(
    <Image src="/images/star.png" alt={`${i}`} width={32} height={32} key={i} />
  );
}

export default function Comments() {
  return (
    <div className="border-b border-b-[#00d48d] mb-[72px]">
      <div className="flex gap-[7px]">
        <h3>후기</h3>
        <span>개</span>
      </div>
      {/* 별점, 코멘트 */}
      <div className="pt-[16px] pb-[32px]">
        <div className="flex flex-col">
          <div className="mb-[8px]">{stars}</div>

          <div>
            <textarea
              rows={3}
              placeholder="콘텐츠에 대한 의견을 남겨주세요."
              className="h-[116px] w-full bg-[#ebedec] rounded-[6px] p-[12px_16px] outline-1 outline-[rgb(0,212,141)]"
            />
          </div>
          <div className="mt-[12px] ml-auto">
            <button className="text-[13px] text-[#bfbfbf] bg-[#ebedec] p-[7px_12px] rounded-[6px]">
              확인
            </button>
          </div>
        </div>
      </div>
      <div className="h-[100px]"></div>
    </div>
  );
}
