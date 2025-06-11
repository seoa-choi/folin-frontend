import Image from 'next/image';
import Link from 'next/link';

const seriesBook = [
  {
    i: '45화',
    title: '피드백도, 칭찬도 두렵다면? 일잘러 위협하는 가면 증후군 극복법',
  },
  {
    i: '46화',
    title: '스트레스를 활용해 최고의 성과를 만드는 법',
  },
  {
    i: '47화',
    title: '당신이 미루는 이유, 게으름 때문 아니다?  의지박약 극복법',
  },
];

export default function NewSeries() {
  return (
    <div className="pt-[40px] max-w-[1200px] mx-auto flex gap-[24px] items-center mb-[104px] max-md:flex-col-reverse max-md:gap-y-0 max-md:max-w-[520px] max-md:mb-[72px] max-sm:mb-[64px]">
      {/* 1200기준 왼 */}
      <div className="w-[calc(50%-12px)] max-md:w-full">
        <div className="relative duration-[0.3s] hover:-translate-y-[16px] group max-md:hover:-translate-y-0">
          <Link href="" className="block h-full">
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
                  src="/images/1748823667478_a_11461-m.jpg"
                  alt="당신이 미루는 이유, 게으름 때문 아니다?  의지박약 극복법"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover rounded-[6px]"
                />
              </div>
            </div>
            <div className="bg-white rounded-[6px] w-[calc(100%-16px)] relative translate-x-[16px] -translate-y-[16px] p-[10px]">
              <div className="flex gap-[2px]">
                <div className="bg-[#a3cfff] border border-[#a3cfff] rounded-[6px] py-[6px] px-[8px] text-[12px] font-bold">
                  폴인이 고른 책
                </div>
                <div className="bg-white border border-[#a3cfff] rounded-[6px] py-[6px] px-[8px] text-[12px] font-bold">
                  47화
                </div>
              </div>
              <h3 className="mt-[10px] mb-[16px] text-[22px] font-bold leading-[30px] group-hover:text-[#00aa73] max-md:group-hover:text-[#111]">
                당신이 미루는 이유, 게으름 때문 아니다? 의지박약 극복법
              </h3>
              <p className="text-[12px] group-hover:text-[#00aa73] max-md:group-hover:text-[#111]">
                박초롱
              </p>
            </div>
          </Link>

          {/* 1024 미만 block */}
          <div className="hidden max-md:block">
            <ul className="pl-[16px]">
              {seriesBook.map((item) => (
                <li
                  key={item.i}
                  className="bg-white py-[8px] px-[10px] rounded-[6px] mb-[4px] relative nth-[3]:-translate-x-[16px] max-md:nth-[3]:hidden"
                >
                  <Link href="" className="flex gap-[8px] items-center">
                    <span className="bg-white border border-[#a3cfff] rounded-[6px] py-[6px] px-[8px] text-[12px] font-bold ">
                      {item.i}
                    </span>
                    <span className="text-[18px] font-bold">{item.title}</span>
                  </Link>
                </li>
              ))}
              <li className="mt-[16px]">
                <Link
                  href=""
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
          <Link href="">
            <h4 className="text-[28px] mb-[8px] font-bold">폴인이 고른 책</h4>
            <p className="line-clamp-3 text-[15px] mb-[48px] max-md:line-clamp-4 max-md:mb-[32px] max-md:pr-[16px]">
              다양한 업계의 트렌드와 일하는 사람들을 위한 콘텐츠를 쉴틈없이
              소비하는 폴인 에디터의 책 추천 코너! 쏟아지는 경제경영, 자기계발
              도서들 중 보석같은 책들을 소개합니다. 일을 대하는 태도와 삶을
              바라보는 관점을 바꾸고 싶다면 10분만 투자해보세요.
            </p>
          </Link>
        </div>

        {/* 1024 none */}
        <div className="max-md:hidden">
          <ul className="pl-[16px]">
            {seriesBook.map((item) => (
              <li
                key={item.i}
                className="bg-white py-[8px] px-[10px] rounded-[6px] mb-[4px] relative nth-[3]:-translate-x-[16px] duration-[0.3s] hover:-translate-x-[16px] hover:nth-[3]:-translate-x-[32px] group"
              >
                <Link href="" className="flex gap-[8px] items-center">
                  <span className="bg-white border border-[#a3cfff] rounded-[6px] py-[6px] px-[8px] text-[12px] font-bold ">
                    {item.i}
                  </span>
                  <span className="text-[18px] font-bold group-hover:text-[#00aa73]">
                    {item.title}
                  </span>
                </Link>
              </li>
            ))}
            <li>
              <Link
                href=""
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
  );
}
