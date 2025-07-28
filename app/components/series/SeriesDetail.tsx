import Share from '@/app/components/Share';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type SeriesData = {
  contents_id: string;
  for_whom1: string;
  for_whom2: string;
  for_whom3: string;
  created_at: string;
  img_url: string;
  linkers: string;
  proposal_id: number;
  sub_title: string;
  title: string;
  title_id: number;
  why: string;
};

export default function SeriesDetail({
  seriesId,
  seriesData,
}: {
  seriesId: string;
  seriesData: SeriesData[] | null;
}) {
  const [isShow, setIsShow] = useState(false);

  if (!seriesData) {
    return <div></div>;
  }

  // console.log(seriesData);

  const filteredId = seriesData.filter(
    (item) => String(item.proposal_id) === seriesId
  );

  // 안쪽 바깥으로 실행
  // filteredId.map(...) → 각 item을 [proposal_id, item] 형태로 바꿈
  // new Map(...) → 위에서 만든 배열을 넣어서 Map 객체 생성 (중복된 키는 나중 값으로 덮음)
  //  .values() → 중복 제거된 Map에서 값들만 꺼냄 (item 객체들)
  // Array.from(...) → 이터러블을 실제 배열로 변환
  const uniqueProposals = Array.from(
    new Map(filteredId.map((item) => [item.proposal_id, item])).values()
  );

  // console.log(uniqueProposals);

  // const date = new Date('2025-06-25T03:06:00Z');
  // console.log(date.getFullYear()); // 2025
  // console.log(date.getMonth() + 1); // 6 (0부터 시작하니까 1을 더해줘야 6월)
  // console.log(date.getDate()); // 25

  function handleShowShare() {
    setIsShow(!isShow);
  }
  console.log(filteredId);
  return (
    <>
      {isShow && <Share handleShowShare={handleShowShare} />}
      <div>
        {uniqueProposals.map((item, idx) => {
          // Date 객체 변환,  단순문자 -> 날짜 계산 가능한 형식
          // getFullYear 연도 4자리 getMonth 0부터 시작하기 때문에 +1
          // padStart 문자열 짧으면 앞에 0 채워서 두자리 만들기
          // getDate ~ '0') day 두자릿수로
          const date = new Date(item.created_at);
          const formattedDate = `${date.getFullYear()}.${(date.getMonth() + 1)
            .toString()
            .padStart(2, '0')}.${date.getDate().toString().padStart(2, '0')}`;
          const forWhom = [
            item.for_whom1,
            item.for_whom2,
            item.for_whom3,
          ].filter(Boolean);

          return (
            <div key={idx} className="text-center">
              <div className="w-[588px] mx-auto py-[64px] border-b border-b-[#00d48d] max-sm:w-full">
                <p className="font-[SUITE]">{formattedDate}</p>
                <p className="text-[28px] font-bold mt-[23px] mb-[16px]">
                  {item.title}
                </p>
                {/* 공유버튼  */}
                <button type="button" onClick={handleShowShare}>
                  <Image
                    src="/images/share.png"
                    alt="공유"
                    width={24}
                    height={24}
                    loading="lazy"
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
            </div>
          );
        })}
      </div>
      <div className="py-[40px]">
        <h3 className="text-[18px] text-center font-bold mb-[16px]">콘텐츠</h3>
        <p className="mb-[40px] text-center">총 {filteredId.length}화</p>

        {/*  */}
        <ul className="grid grid-cols-3 gap-[24px] max-md:grid-cols-2 max-md:gap-[8px] max-sm:grid-cols-1 max-sm:gap-0">
          {filteredId.map((it, i) => {
            let color;
            switch (it.title) {
              case '무신사 인사이드':
                color = '#a45eeb';
                break;
              case '마케터의 커리어 노트':
                color = '#ff595f';
                break;
              case '롱런 카페의 생존 전략':
                color = '#e5c58a';
                break;
              case '1등 브랜드의 비밀':
                color = '#f2ec72';
                break;
              case '사장의 멘탈 관리':
                color = '#a3cfff';
                break;
              case '신수정의 트레이닝':
                color = '#25aacf';
                break;
              default:
                color = '#a3cfff';
            }

            // const reverseIndex = filteredId.length - i;
            // console.log(reverseIndex);
            const index = i + 1;
            return (
              <li key={i}>
                <Link
                  href={`/article/${it.contents_id}`}
                  className="block h-full relative duration-[0.3s] hover:-translate-y-[16px] group max-md:hover:-translate-y-0 pt-[16px]"
                >
                  <div className="w-[calc(100%-16px)] h-auto">
                    <div>
                      <Image
                        src={`${process.env.NEXT_PUBLIC_API_URL}${it.img_url}`}
                        alt={it.sub_title}
                        width={368}
                        height={276}
                        priority
                        className="w-full h-full object-cover rounded-[6px]"
                      />
                    </div>
                  </div>
                  <div className="bg-white rounded-[6px] w-[calc(100%-16px)] relative translate-x-[16px] -translate-y-[16px] p-[10px]">
                    <div className="flex gap-[2px]">
                      <div
                        className={`border rounded-[6px] py-[6px] px-[8px] text-[12px] font-bold bg-[${color}] border-[${color}]`}
                      >
                        {it.title}
                      </div>
                      <div
                        className={`bg-white border rounded-[6px] py-[6px] px-[8px] text-[12px] font-bold border-[${color}]`}
                      >
                        {index + '화'}
                      </div>
                    </div>

                    <h3 className="mt-[10px] mb-[16px] text-[22px] font-bold leading-[30px] line-clamp-2 text-ellipsis group-hover:text-[#00aa73] max-md:group-hover:text-[#111] max-md:text-[18px] max-md:leading-[23px] ">
                      {it.sub_title}
                    </h3>
                    <p className="text-[12px] group-hover:text-[#00aa73] max-md:group-hover:text-[#111]">
                      {it.linkers}
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
