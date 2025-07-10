import Link from 'next/link';

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

export default function SearchSeries({
  proposalDb,
}: {
  proposalDb: ProposalDb[];
}) {
  return (
    <div>
      {proposalDb.map((item, i) => (
        <div
          key={i}

          // className={`${isLast ? 'mb-0' : 'mb-[48px]'}`}
        >
          <Link
            href={`/series/${item.proposal_id}`}
            className="block h-full relative duration-[0.3s] hover:-translate-y-[16px] group max-md:hover:-translate-y-0"
          >
            <div className=" w-[calc(100%-16px)] relative">
              <div className="flex gap-[2px] mb-[4px]">
                <div
                  className={`border rounded-[6px] py-[8px] px-[12px] text-[15px] font-bold `}
                >
                  {item.title}
                  {/* ${color.bg} ${color.bd} */}
                  {/* {list.series_title} */}
                </div>

                <div
                  className={`bg-white border rounded-[6px] py-[8px] px-[12px] text-[15px] font-bold `}
                >
                  {/* ${color.bd} */}
                  {/* {`총 ${seriesLength}화`} */}
                </div>
              </div>

              <p className=" h-[56px] bg-white rounded-[6px] text-[18px] leading-[56px] line-clamp-1 px-[16px] group-hover:text-[#00aa73] max-md:group-hover:text-[#111]">
                {/* {list.why} */}
              </p>
            </div>
          </Link>
        </div>
      ))}

      {/* <Pagination
      page={page}
      totalPage={totalPage}
      handlePageChange={handlePageChange}
    /> */}
    </div>
  );
}
