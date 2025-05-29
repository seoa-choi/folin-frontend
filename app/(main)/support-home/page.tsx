import KakaoCounsel from '@/app/components/KakaoCounsel';
import Image from 'next/image';
import Link from 'next/link';

const noticebtn = [
  {
    strong: '중요',
    title: '피스 개인정보처리방침 개정 안내 (24.10.08 시행)',
    date: '24.08.22',
  },
  {
    strong: '중요',
    title: '피스 서비스이용약관 변경 안내 (24.09.17 시행)',
    date: '24.08.14',
  },
];

const faqBtn = [
  { txt: '회원 및 계정' },
  { txt: '입출금' },
  { txt: '청약 및 분배' },
  { txt: '증권상품' },
  { txt: '투자자 보호' },
  { txt: '기타' },
];

export default function SupportHome() {
  return (
    <main className="pt-[80px]">
      <div>
        <div className="text-center py-[60px]">
          <p className="text-[#8C919F] text-[18px] mb-[24px] font-semibold max-sm:text-[14px] max-sm:mb-[16px]">
            고객센터
          </p>
          <p className="text-[#131313] text-[48px] font-bold leading-[64px] tracking-[-0.018em] max-sm:text-[28px] max-sm:leading-[40px] max-sm:font-semibold">
            마음 놓고 투자할 수 있도록
            <br />
            PIECE가 도와드릴게요
          </p>
        </div>
        <div className="w-full grid grid-cols-2 gap-[20px] py-[40px] px-[20px] max-sm:grid-cols-1">
          {/* 왼 */}
          <div className="max-w-[700px] w-full place-self-end p-[40px] rounded-[40px] bg-[linear-gradient(to_right,#EAECF0,#D4D7DD)] flex flex-col justify-between max-sm:p-[20px] max-sm:rounded-[32px]">
            <div className="mb-[68px] max-sm:mb-[32px]">
              <p className="text-[18px] leading-[24px] tracking-[-0.03em] mb-[16px] font-semibold max-sm:text-[16px] max-sm:leading-[22px] max-sm:text-center">
                공지사항
              </p>
              <p className="text-[28px] text-[#292A2E] leading-[40px] tracking-[-0.03em] font-semibold max-sm:text-[22px] max-sm:leading-[28px] max-sm:text-center">
                중요 내용
                <br /> 꼭 확인해 주세요
              </p>
            </div>
            <div className="flex flex-col gap-[8px]">
              {noticebtn.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center py-[12px] gap-[8px] px-[20px] rounded-[24px] bg-white max-sm:p-[20px] max-sm:flex-col max-sm:text-center hover:bg-[#f6f6f6]"
                >
                  <strong className="text-[16px] text-[#f65f5f] leading-[22px] tracking-[-0.03em] min-w-[48px] font-semibold max-sm:text-[14px]">
                    {item.strong}
                  </strong>
                  <p className="text-[16px] text-[#292a2e] leading-[22px] tracking-[-0.03em] w-full font-semibold max-sm:text-[16px]">
                    {item.title}
                  </p>
                  <span className="text-[14px] text-[#8c919f] font-normal leading-[20px] tracking-[-0.03em] max-sm:text-[13px]">
                    {item.date}
                  </span>
                </div>
              ))}
              <div className="w-max h-[40px] py-[9px] px-[16px] rounded-[20px] bg-[#131313] text-[16px] leading-[22px] tracking-[-0.03em] text-white max-sm:w-full max-sm:h-[48px] max-sm:py-[13px] max-sm:rounded-[24px] max-sm:mt-[24px] max-sm:text-center">
                공지사항 모두 보기
              </div>
            </div>
          </div>
          {/* 오 */}
          <div className="max-w-[700px] p-[40px] rounded-[40px] bg-[linear-gradient(to_right,#E7F3FF,#BDDFFF)] flex flex-col justify-between max-sm:p-[20px] max-sm:rounded-[32px]">
            <div className="mb-[68px] max-sm:mb-[32px]">
              <p className="text-[18px] leading-[24px] tracking-[-0.03em] mb-[16px] font-semibold max-sm:text-[16px] max-sm:leading-[22px] max-sm:text-center">
                FAQ
              </p>
              <p className="text-[28px] text-[#292A2E] leading-[40px] tracking-[-0.03em] font-semibold max-sm:text-[22px] max-sm:leading-[28px] max-sm:text-center">
                궁금함도 풀어드리고
                <br /> 더 나은 경험을 만들어 드려요
              </p>
            </div>
            <div className="flex flex-col gap-[8px]">
              <div className="flex py-[12px] gap-[8px] rounded-[24px] flex-wrap">
                {faqBtn.map((item) => (
                  <button
                    type="button"
                    key={item.txt}
                    className="w-max h-[40px] bg-white rounded-[20px] text-[#292a2e] text-[16px] leading-[22px] tracking-[-0.03em] py-[9px] px-[16px] font-semibold shrink-0 hover:bg-[#f6f6f6]"
                  >
                    {item.txt}
                  </button>
                ))}
              </div>
              <div className="w-max h-[40px] py-[9px] px-[16px] rounded-[20px] bg-[#131313] text-[16px] leading-[22px] tracking-[-0.03em] text-white max-sm:w-full max-sm:h-[48px] max-sm:py-[13px] max-sm:rounded-[24px] max-sm:mt-[24px] max-sm:text-center">
                FAQ 모두 보기
              </div>
            </div>
          </div>
        </div>
        <div className="py-[80px] px-[10px] max-sm:py-[40px] max-sm:px-[20px]">
          <p className="text-[#131313] text-[32px] text-center font-bold leading-[44px] mb-[40px] max-sm:text-[22px] max-sm:leading-[28px] max-sm:mb-[20px] max-sm:font-semibold">
            도움이 더 필요하신가요?
          </p>
          <div className="flex justify-center w-full gap-[20px] max-sm:flex-col">
            <KakaoCounsel
              className="max-w-[700px] w-full max-h-[176px] max-sm:max-h-[240px]"
              custom={'max-sm:flex-row max-sm:items-center max-sm:flex-wrap'}
              customImgSize={
                'max-sm:w-auto max-sm:h-[128px] max-sm:left-[55%] max-sm:-translate-x-[50%]'
              }
            />
            <div className="max-w-[700px] w-full py-[50px] px-[40px] bg-[#67D7FB] h-[176px] rounded-[40px_40px_0_40px] relative max-sm:h-[240px] max-sm:rounded-[32px_32px_0] max-sm:p-[32px]">
              <Image
                src="/images/img_supporthome_email.png"
                alt="이메일문의"
                width={640}
                height={320}
                className="absolute right-0 bottom-0 max-w-[320px] w-[calc(26.6667vw)] z-1 max-sm:left-[50%] max-sm:-translate-x-[50%] max-sm:w-[calc(71.1111vw)]"
              />
              <p className="text-[28px] text-[#292A2E] font-semibold mb-[10px] max-sm:text-[22px] max-sm:leading-[28px] max-sm:mb-[8px]">
                이메일 문의
              </p>
              <div className="flex items-center gap-[8px] z-10 max-sm:flex-wrap">
                <p className="text-[18px] text-[#292A2E] font-semibold z-10 max-sm:text-[16px] max-sm:leading-[22px]">
                  help@buysellstandards.com
                </p>
                <Link
                  href=""
                  className="w-[28px] h-[28px] py-[4px] px-[10px] bg-[#131313] bg-[url(/images/copy_thin_icon.7f22817c.svg)] bg-no-repeat bg-center rounded-[100px] text-white font-semibold z-10"
                ></Link>
              </div>
              <Link
                href=""
                className="w-[120px] h-[120px] absolute right-[-1px] bottom-[-1px] z-10"
              >
                <Image
                  src="/images/img_main_email_arrow.png"
                  alt="이메일문의"
                  width={120}
                  height={120}
                  className=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
