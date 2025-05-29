import Link from 'next/link';

const introMenus = [
  {
    title: '아티클·비디오',
    path: '/series',
    svgColor: '#00D48D',
    countNum: 2759,
    count: '개',
  },
  {
    title: '세미나',
    path: '/seminar',
    svgColor: '#ff595f',
    countNum: 194,
    count: '개',
  },
  {
    title: '링커',
    path: '/linker',
    svgColor: '#25aacf',
    countNum: 1550,
    count: '명',
  },
];

export default function MainContainer1() {
  return (
    <div className="py-[24px] px-[8px] bg-point1 rounded-[6px]">
      <div className="max-w-[588px] mx-auto">
        <div className="text-center">
          <div>
            <h3 className="text-[24px] font-bold mb-[8px] leading-[31.2px]">
              성장의 경험을 나눕니다, 폴인
            </h3>
            <p className="text-[15px] mb-[24px]">
              폴인은 일에 진심인 사람들을 위한 콘텐츠 구독 서비스입니다.
              <br />
              현업 전문가 '링커(Linker)'의 경험과 인사이트로 내 커리어의
              전성기를 만들어 보세요.
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center items-center gap-[16px]">
          {introMenus.map((item) => (
            <Link
              href={item.path}
              key={item.title}
              className="w-full h-[88px] bg-white rounded-[6px] pt-[5px] px-[8px] pb-[8px]"
            >
              <div className="flex justify-between items-center mb-[5px]">
                <p className="text-[15px]">{item.title}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z"
                    fill={item.svgColor}
                  ></path>
                  <path
                    d="M16 11.5L16 20.5M20.5 16L11.5 16"
                    stroke="#111111"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </div>
              <div className="flex justify-center items-center gap-[4px] font-bold">
                <span className="text-[28px]">{item.countNum}</span>
                <span className="text-[24px]">{item.count}</span>
              </div>
            </Link>
          ))}
        </div>
        <div>
          <Link
            href=""
            className="block max-w-[384px] bg-gray-600 rounded-[6px] text-white pt-[14px] px-[16px] pb-[15px] text-center mx-auto mt-[16px] leading-[19.5px]"
          >
            멤버십 구독
          </Link>
        </div>
      </div>
    </div>
  );
}
