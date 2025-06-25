import Image from 'next/image';

type SeriesData = {
  title_id: number;
  series_title: string;
  proposal_id: number;
  why: string;
  for_whom1: string;
  for_whom2: string;
  for_whom3: string;
  created_at: string;
};

export default function SeriesDetailList({
  seriesId,
  seriesData,
}: {
  seriesId: string;
  seriesData: SeriesData[] | null;
}) {
  if (!seriesData) {
    return <div></div>;
  }

  const filteredId = seriesData.filter(
    (item) => String(item.proposal_id) === seriesId
  );

  // const date = new Date('2025-06-25T03:06:00Z');
  // console.log(date.getFullYear()); // 2025
  // console.log(date.getMonth() + 1); // 6 (0부터 시작하니까 1을 더해줘야 6월)
  // console.log(date.getDate()); // 25

  return (
    <div>
      {filteredId.map((item) => {
        // Date 객체 변환,  단순문자 -> 날짜 계산 가능한 형식
        // getFullYear 연도 4자리 getMonth 0부터 시작하기 때문에 +1
        // padStart 문자열 짧으면 앞에 0 채워서 두자리 만들기
        // getDate ~ '0') day 두자릿수로
        const date = new Date(item.created_at);
        const formattedDate = `${date.getFullYear()}.${(date.getMonth() + 1)
          .toString()
          .padStart(2, '0')}.${date.getDate().toString().padStart(2, '0')}`;
        const forWhom = [item.for_whom1, item.for_whom2, item.for_whom3].filter(
          Boolean
        );

        return (
          <div key={item.proposal_id} className="text-center">
            <div className="w-[588px] mx-auto py-[64px] border-b border-b-[#00d48d] max-sm:w-full">
              <p className="font-[SUITE]">{formattedDate}</p>
              <p className="text-[28px] font-bold mt-[23px] mb-[16px]">
                {item.series_title}
              </p>
              <button type="button">
                <Image
                  src="/images/share.png"
                  alt="공유"
                  width={24}
                  height={24}
                />
              </button>
            </div>
            <div className="w-[588px] mx-auto py-[32px] border-b border-b-[#00d48d] max-sm:w-full">
              <h3 className="text-[18px] font-bold mb-[16px]">
                왜 봐야 할까요?
              </h3>
              <p className="text-[18px] text-left whitespace-break-spaces">
                {item.why}
              </p>
            </div>
            <div className="w-[588px] mx-auto py-[40px] border-b border-b-[#00d48d] max-sm:w-full">
              <h3 className="text-[18px] font-bold mb-[16px]">
                누구를 위한 시리즈인가요?
              </h3>
              <ul className="text-left">
                {forWhom.map((val, i) => (
                  <li
                    key={i}
                    className="text-[18px] pl-[13px] mt-[10px] relative before:absolute before:left-0 before:top-[10px] before:w-[5px] before:h-[5px] before:bg-[#111] before:rounded-[50%]"
                  >
                    {val}
                  </li>
                ))}
              </ul>
            </div>
            <div className="py-[40px]">
              <h3 className="text-[18px] font-bold mb-[16px]">콘텐츠</h3>
              <p className="mb-[40px]">총 +</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
