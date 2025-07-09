import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';

type SeriesData = {
  result: {
    title_id: string;
    series_title: string;
    proposal_id: number;
    why: string;
    for_whom1: string;
    for_whom2: string;
    for_whom3: string;
    created_at: string;
  }[];

  articleResult: {
    series_title: string;
    contents_id: number;
    sub_title: string;
    linkers: string;
    img_url: string;
    content_type: string;
    created_at: string;
  }[];
};
export default function NewSeries() {
  // /(main) 페이지는 articleId가 없기 때문에 undefined가 나옴, 데이터를 articleId주소로 갖고와야 해서, article/[articleId] 라우터일때만 유효
  // const params = useParams();  - 라우터 :id 가져왔다가->메인으로 분리해서 처리했음
  // const articleId = params.articleId as string;

  const { data, isLoading, isError } = useQuery<SeriesData>({
    queryKey: ['article'],

    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/article/main`
      );
      if (!res.ok) throw new Error('Failed to fetch series data');
      const json = await res.json();
      // console.log(json);
      return { result: json.result, articleResult: json.articleResult };
    },
  });
  // console.log(data);

  if (isLoading)
    return (
      <p className="py-[52px] px-[24px] max-w-[1248px] mx-auto max-sm:pt-[56px] max-sm:px-[8px]"></p>
    );
  if (isError) return <p></p>;

  if (!data) return null;

  // contents_id로 연결하면 이동 함
  const articleItem = data.articleResult[3];
  const resultItem = data.result[0];

  const reversedItems = data.articleResult.slice(0, 3).reverse();

  return (
    <div>
      <div className="pt-[40px] max-w-[1200px] mx-auto flex gap-[24px] items-center mb-[104px] max-md:flex-col-reverse max-md:gap-y-0 max-md:max-w-[520px] max-md:mb-[72px] max-sm:mb-[64px]">
        {/* 1200기준 왼 */}
        <div className="w-[calc(50%-12px)] max-md:w-full">
          <div className="relative duration-[0.3s] hover:-translate-y-[16px] group max-md:hover:-translate-y-0">
            <Link
              href={`/article/${articleItem.contents_id}`}
              className="block h-full"
            >
              <div className="w-[calc(100%-16px)] h-auto">
                <div className="absolute left-[10px] top-[10px]">
                  <Image
                    src="/images/badge_new_32.b8394d86cbc9be710a5f1a8d417aeca0.svg"
                    alt="새로운 콘텐츠"
                    width={51}
                    height={32}
                  />
                </div>
                <div>
                  <Image
                    src={`http://localhost:3001/${articleItem.img_url}`}
                    alt={articleItem.sub_title}
                    width={800}
                    height={600}
                    priority
                    className="w-full h-full object-cover rounded-[6px]"
                  />
                </div>
              </div>
              <div className="bg-white rounded-[6px] w-[calc(100%-16px)] relative translate-x-[16px] -translate-y-[16px] p-[10px]">
                <div className="flex gap-[2px]">
                  <div className="bg-[#a45eeb] border border-[#a45eeb] rounded-[6px] py-[6px] px-[8px] text-[12px] font-bold">
                    {articleItem.series_title}
                  </div>
                  <div className="bg-white border border-[#a45eeb] rounded-[6px] py-[6px] px-[8px] text-[12px] font-bold">
                    1화
                  </div>
                </div>
                <h3 className="mt-[10px] mb-[16px] text-[22px] font-bold leading-[30px] group-hover:text-[#00aa73] max-md:group-hover:text-[#111]">
                  {articleItem.sub_title}
                </h3>
                <p className="text-[12px] group-hover:text-[#00aa73] max-md:group-hover:text-[#111]">
                  {articleItem.linkers}
                </p>
              </div>
            </Link>

            {/* 1024 미만 block */}
            <div className="hidden max-md:block">
              <ul className="pl-[16px]">
                {reversedItems.map((item, i) => (
                  <li
                    key={item.contents_id}
                    className="bg-white py-[8px] px-[10px] rounded-[6px] mb-[4px] relative nth-[3]:-translate-x-[16px] max-md:nth-[3]:hidden"
                  >
                    <Link
                      href={`/article/${item.contents_id}`}
                      className="flex gap-[8px] items-center"
                    >
                      <span className="bg-white border border-[#a45eeb] rounded-[6px] py-[6px] px-[8px] text-[12px] font-bold ">
                        {2 + i + '화'}
                      </span>
                      <span className="text-[18px] font-bold">
                        {item.sub_title}
                      </span>
                    </Link>
                  </li>
                ))}
                <li className="mt-[16px]">
                  <Link
                    href="/series"
                    className="flex items-center rounded-[6px] bg-white py-[8px] justify-center w-full"
                  >
                    <span className="text-[12px]">더보기</span>
                    <Image
                      src="/images/gg.png"
                      alt="더보기"
                      width={36}
                      height={17}
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 1200기준 오 */}
        <div className="w-[calc(50%-12px)]  max-md:w-full">
          <div className="pl-[16px]">
            <h3 className="mb-[26px] w-[156px] h-auto">
              <Image
                src="/images/newseries.png"
                alt="뉴시리즈"
                width={156}
                height={25}
                className="w-full h-full object-cover"
              />
            </h3>
            <Link href={`/article/${articleItem.contents_id}`}>
              <h4 className="text-[28px] mb-[8px] font-bold">
                {articleItem.series_title}
              </h4>
              <p className="line-clamp-3 text-[15px] mb-[48px] max-md:line-clamp-4 max-md:mb-[32px] max-md:pr-[16px]">
                {resultItem.why}
              </p>
            </Link>
          </div>

          {/* 1024 none */}
          <div className="max-md:hidden">
            <ul className="pl-[16px]">
              {reversedItems.map((item, i) => (
                <li
                  key={item.contents_id}
                  className="bg-white py-[8px] px-[10px] rounded-[6px] mb-[4px] relative nth-[3]:-translate-x-[16px] duration-[0.3s] hover:-translate-x-[16px] hover:nth-[3]:-translate-x-[32px] group"
                >
                  <Link
                    href={`/article/${item.contents_id}`}
                    className="flex gap-[8px] items-center"
                  >
                    <span className="bg-white border border-[#a45eeb] rounded-[6px] py-[6px] px-[8px] text-[12px] font-bold ">
                      {2 + i + '화'}
                    </span>
                    <span className="text-[18px] font-bold group-hover:text-[#00aa73]">
                      {item.sub_title}
                    </span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/series"
                  className="flex items-center w-[104px] rounded-[6px] bg-white py-[8px] justify-center hover:-translate-x-[16px] duration-[0.3s]"
                >
                  <span className="text-[12px]">더보기</span>
                  <Image
                    src="/images/gg.png"
                    alt="더보기"
                    width={36}
                    height={17}
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
