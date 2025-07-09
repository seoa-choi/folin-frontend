import Image from 'next/image';
import Link from 'next/link';

export default function NextSeminar() {
  return (
    <div className="pb-[104px] max-sm:pb-[64px]">
      {/* 상 */}
      <Link
        href=""
        className="max-w-[792px] mx-auto mb-[64px] flex items-center gap-[24px] group max-md:max-w-full max-md:gap-[8px] max-md:mx-0 max-sm:flex-col max-sm:gap-[24px] relative max-sm:pt-[64px]"
      >
        {/* 왼 */}
        <div className="w-[50%] overflow-hidden rounded-[6px] max-md:w-full max-sm:w-[246px]">
          <Image
            src="/images/1747029938972_marketer_of_marketer-s3_key_last.jpg"
            alt="[오프라인] 폴인 마케터클럽 시즌3"
            width={600}
            height={800}
            className="group-hover:scale-[1.05] duration-[0.3s] max-md:group-hover:scale-[1]"
          />
        </div>
        {/* 오 */}
        <div className="px-[24px] w-[calc(100%/2-24px)] max-md:w-full max-sm:px-0">
          <div className="mb-[40px]">
            {/* 767이하 상단으로 */}
            <h3 className="mt-[10px] mb-[40px] max-sm:absolute max-sm:left-0 max-sm:top-0">
              <Image
                src="/images/newseminar.png"
                alt="nextseminaricon"
                width={198}
                height={25}
              />
            </h3>
            <h3 className="mb-[16px] text-[28px] font-bold leading-[36px] group-hover:text-[#00d48d] max-md:group-hover:text-[#111]">
              [오프라인] 폴인 마케터클럽 시즌3
            </h3>
            <div className="mb-[48px] max-sm:mb-[24px]">
              <strong className="text-[24px] font-bold inline-block mr-[4px] group-hover:text-[#00d48d] max-md:group-hover:text-[#111]">
                김윤정
              </strong>
              <span className="text-[15px] text-ellipsis whitespace-nowrap group-hover:text-[#00d48d] max-md:group-hover:text-[#111]">
                무신사 글로벌브랜드비즈니스본부 실장
              </span>
              <span className="block group-hover:text-[#00d48d] max-md:group-hover:text-[#111]">
                외 5명
              </span>
            </div>
            <div className="group-hover:text-[#00d48d] max-md:group-hover:text-[#111]">
              2025.06.20 (금) 09:20
            </div>
          </div>
          <button
            type="button"
            className="py-[12px] px-[16px] bg-point1 font-bold text-[15px] rounded-[6px] block w-full font-[Noto-Sans]"
          >
            자세히 보기
          </button>
        </div>
      </Link>
      {/* 하 */}
      <Link
        href=""
        className="max-w-[792px] mx-auto flex items-center gap-[24px] group max-md:max-w-full max-md:gap-[8px] max-md:mx-0 max-sm:flex-col-reverse max-sm:gap-[24px] relative max-sm:pt-[64px]"
      >
        {/* 왼 */}
        <div className="px-[24px] w-[calc(100%/2-24px)] max-md:w-full max-sm:px-0">
          <div className="mb-[40px]">
            {/* 767이하 상단으로 */}
            <h3 className="mt-[10px] mb-[40px] max-sm:absolute max-sm:left-0 max-sm:top-0">
              <Image
                src="/images/newseminar.png"
                alt="nextseminaricon"
                width={198}
                height={25}
              />
            </h3>
            <h3 className="mb-[16px] text-[28px] font-bold leading-[36px] group-hover:text-[#00d48d] max-md:group-hover:text-[#111]">
              &quot;토스는 유저에게 &apos;이렇게&apos; 묻는다&quot; UX 리서치
              전략
            </h3>
            <div className="mb-[48px] max-sm:mb-[24px]">
              <strong className="text-[24px] font-bold inline-block mr-[4px] group-hover:text-[#00d48d] max-md:group-hover:text-[#111]">
                김서연
              </strong>
              <span className="text-[15px] text-ellipsis whitespace-nowrap group-hover:text-[#00d48d] max-md:group-hover:text-[#111]">
                토스증권 UX 리서처
              </span>
            </div>
            <div className="group-hover:text-[#00d48d] max-md:group-hover:text-[#111]">
              2025.06.26 (목) 20:00
            </div>
          </div>
          <button
            type="button"
            className="py-[12px] px-[16px] bg-point1 font-bold text-[15px] rounded-[6px] block w-full font-[Noto-Sans]"
          >
            자세히 보기
          </button>
        </div>
        {/* 오 */}
        <div className="w-[50%] overflow-hidden rounded-[6px] max-md:w-full max-sm:w-[246px]">
          <Image
            src="/images/1749517154795.jpg"
            alt="토스는 유저에게 '이렇게' 묻는다"
            width={600}
            height={800}
            className="group-hover:scale-[1.05] duration-[0.3s] max-md:group-hover:scale-[1]"
          />
        </div>
      </Link>
    </div>
  );
}
