import Image from 'next/image';
import Link from 'next/link';

export default function SearchVideo() {
  return (
    <div>
      <ul className="grid grid-cols-3 gap-[24px] max-md:grid-cols-2 max-md:gap-[8px] max-sm:grid-cols-1 max-sm:gap-0">
        {/* {indexedArticleSeries.map((item) => {
          const color = getColorForSeries(item.series_title);
          // console.log(indexedArticleSeries); */}
        {/* return (key={item.contents_id} */}
        <li>
          {/* {`/article/${item.contents_id}`} */}
          <Link
            href=""
            className="block h-full relative duration-[0.3s] hover:-translate-y-[16px] group max-md:hover:-translate-y-0 pt-[16px]"
          >
            <div className="w-[calc(100%-16px)] h-auto">
              <div>
                {/* {`http://localhost:3001/${item.img_url}`}
                    {item.series_title} */}
                {/* <Image
                  src=""
                  alt=""
                  width={368}
                  height={276}
                  priority
                  className="w-full h-full object-cover rounded-[6px]"
                /> */}
              </div>
            </div>
            <div className="bg-white rounded-[6px] w-[calc(100%-16px)] relative translate-x-[16px] -translate-y-[16px] p-[10px]">
              <div className="flex gap-[2px]">
                <div
                  className={`border rounded-[6px] py-[6px] px-[8px] text-[12px] font-bold`}
                >
                  {/* ${color.bg} ${color.bd}
                      {item.series_title} */}
                </div>
                <div
                  className={`bg-white border rounded-[6px] py-[6px] px-[8px] text-[12px] font-bold `}
                >
                  {/* ${color.bd}
                      {item.seriesIndex + '화'} */}
                </div>
              </div>

              <h3 className="mt-[10px] mb-[16px] text-[22px] font-bold leading-[30px] line-clamp-2 text-ellipsis group-hover:text-[#00aa73] max-md:group-hover:text-[#111] max-md:text-[18px] max-md:leading-[23px] ">
                {/* {item.sub_title} */}
              </h3>
              <p className="text-[12px] group-hover:text-[#00aa73] max-md:group-hover:text-[#111]">
                {/* {item.linkers} */}
              </p>
            </div>
          </Link>
        </li>
        {/* ); */}
        {/* })} */}
      </ul>
      {/* <Pagination
        page={page}
        totalPage={totalPage}
        handlePageChange={handlePageChange}
      /> */}
    </div>
  );
}
