import Link from 'next/link';
import { createColorAssigner } from '@/app/_lib/colorUtils';

type ProposalDb = {
  created_at: string;
  for_whom1: string;
  for_whom2: string;
  for_whom3: string;
  proposal_id: number;
  title: string;
  title_id: number;
  why: string;
};

type ContentsDbNoLimit = {
  content_type: string;
  contents_id: number;
  create_at: string;
  img_url: string;
  linkers: string;
  sub_title: string;
  title: string;
  title_id: number;
  updated_at: string;
};

export default function SearchSeries({
  proposalDb,
  contentsDbNoLimit,
}: {
  proposalDb: ProposalDb[];
  contentsDbNoLimit: ContentsDbNoLimit[];
}) {
  const getColorForSeries = createColorAssigner();

  return (
    <div className="mb-[104px]">
      {proposalDb.map((item, i) => {
        const color = getColorForSeries(item.title);

        // title만 count하기
        // accumulator 누적합계, current 현재숫자, <-기본값 두개랑 초기값 넣기(선택)
        const titleCounts = contentsDbNoLimit.reduce(
          (acc: Record<string, number>, cur) => {
            const title = cur.title;
            //  title이 이미 있으면 기존 값에 1 더하고, 없으면 0부터 시작해서 1 더함
            acc[title] = (acc[title] || 0) + 1;

            return acc;
          },
          {}
        );

        // Object.keys(titleCounts) 키
        // Object.values(titleCounts) 값
        // Object.entries(titleCounts) 키,값

        const count = titleCounts[item.title] || 0;
        const isLast = i === proposalDb.length - 1;
        return (
          <div key={i} className={`${isLast ? 'mb-0' : 'mb-[48px]'}`}>
            <Link
              href={`/series/${item.proposal_id}`}
              className="block h-full relative duration-[0.3s] hover:-translate-y-[16px] group max-md:hover:-translate-y-0"
            >
              <div className=" w-[calc(100%-16px)] relative">
                <div className="flex gap-[2px] mb-[4px]">
                  <div
                    className={`border rounded-[6px] py-[8px] px-[12px] text-[15px] font-bold ${color.bg} ${color.bd}`}
                  >
                    {item.title}
                  </div>

                  <div
                    className={`bg-white border rounded-[6px] py-[8px] px-[12px] text-[15px] font-bold ${color.bd}`}
                  >
                    {`총 ${count}화`}
                  </div>
                </div>

                <p className=" h-[56px] bg-white rounded-[6px] text-[18px] leading-[56px] line-clamp-1 px-[16px] group-hover:text-[#00aa73] max-md:group-hover:text-[#111]">
                  {item.why}
                </p>
              </div>
            </Link>
          </div>
        );
      })}

      {/* <Pagination
      page={page}
      totalPage={totalPage}
      handlePageChange={handlePageChange}
    /> */}
    </div>
  );
}
