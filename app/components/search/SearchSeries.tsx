import Link from 'next/link';

export default function SearchSeries() {
  return (
    <div>
      <div

      // className={`${isLast ? 'mb-0' : 'mb-[48px]'}`}
      >
        {/* {`/series/${list.proposal_id}`} */}
        <Link
          href=""
          className="block h-full relative duration-[0.3s] hover:-translate-y-[16px] group max-md:hover:-translate-y-0"
        >
          <div className=" w-[calc(100%-16px)] relative">
            <div className="flex gap-[2px] mb-[4px]">
              <div
                className={`border rounded-[6px] py-[8px] px-[12px] text-[15px] font-bold `}
              >
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

      {/* <Pagination
      page={page}
      totalPage={totalPage}
      handlePageChange={handlePageChange}
    /> */}
    </div>
  );
}
