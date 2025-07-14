import Image from 'next/image';
import Link from 'next/link';
import { createColorAssigner } from '@/app/_lib/colorUtils';

type ContentsDb = {
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

export default function SearchArticle({
  contentsDb,
}: {
  contentsDb: ContentsDb[];
}) {
  const getColorForSeries = createColorAssigner();

  const articleCountMap: { [key: string]: number } = {};
  contentsDb.forEach((item) => {
    const title = item.title;
    articleCountMap[title] = (articleCountMap[title] || 0) + 1;
  });

  const articleIndexMap: { [key: string]: number } = {};

  const indexedArticleSeries = contentsDb.map((item) => {
    const title = item.title;
    articleIndexMap[title] = (articleIndexMap[title] || 0) + 1;

    return {
      ...item,
      articleIndex: articleCountMap[title] - articleIndexMap[title] + 1,
    };
  });

  return (
    <div className="mb-[88px]">
      <ul className="grid grid-cols-3 gap-[24px] max-md:grid-cols-2 max-md:gap-[8px] max-sm:grid-cols-1 max-sm:gap-0">
        {indexedArticleSeries.map((item) => {
          const color = getColorForSeries(item.title);

          return (
            <li key={item.contents_id}>
              <Link
                href={`/article/${item.contents_id}`}
                className="block h-full relative duration-[0.3s] hover:-translate-y-[16px] group max-md:hover:-translate-y-0 pt-[16px]"
              >
                <div className="w-[calc(100%-16px)] h-auto">
                  <div>
                    {/* {`http://localhost:3001/${item.img_url}`} */}

                    <Image
                      src={`${process.env.NEXT_PUBLIC_API_URL}/${item.img_url}`}
                      alt={item.title}
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
                      className={`border rounded-[6px] py-[6px] px-[8px] text-[12px] font-bold ${color.bg} ${color.bd}`}
                    >
                      {item.title}
                    </div>
                    <div
                      className={`bg-white border rounded-[6px] py-[6px] px-[8px] text-[12px] font-bold ${color.bd}`}
                    >
                      {item.articleIndex + '화'}
                    </div>
                  </div>

                  <h3 className="mt-[10px] mb-[16px] text-[22px] font-bold leading-[30px] line-clamp-2 text-ellipsis group-hover:text-[#00aa73] max-md:group-hover:text-[#111] max-md:text-[18px] max-md:leading-[23px] ">
                    {item.sub_title}
                  </h3>
                  <p className="text-[12px] group-hover:text-[#00aa73] max-md:group-hover:text-[#111]">
                    {item.linkers}
                  </p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
      {/* <Pagination
        page={page}
        totalPage={totalPage}
        handlePageChange={handlePageChange}
      /> */}
    </div>
  );
}
