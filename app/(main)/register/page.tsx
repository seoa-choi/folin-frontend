import AgreementSection from '@/app/components/register/AgreementSection';
import InputField from '@/app/components/register/InputField';
import Image from 'next/image';
import Link from 'next/link';

export default function Register() {
  return (
    <main className="pt-[52px] px-[24px] max-w-[1248px] mx-auto max-sm:pt-[56px] max-sm:px-[8px]">
      <form className="w-[588px] mx-auto mt-[4px] pb-[40px] max-sm:w-full">
        <Image
          src="/images/freeBanner588.6dec0eaf2585d2426b79.png"
          alt="지금 가입하면 첫달 무료!"
          width={588}
          height={72}
        />
        <div className="mb-[40px]">
          <button
            type="button"
            className="flex gap-[7px] justify-center w-full max-w-[384px] p-[14px_16px] bg-[#fee500] mx-auto my-[8px] rounded-[6px] font-bold tracking-[-0.02em]"
          >
            <Image
              src="/images/kakao.png"
              alt="카카오로 3초만에 시작하기"
              width={24}
              height={24}
            />
            <span>카카오로 3초 만에 시작하기</span>
          </button>
          <div className="text-center pb-[24px] border-b border-b-[#fff]">
            <Link
              href=""
              className="block text-[13px] tracking-[-0.02em] p-[10px_12px]"
            >
              이미 폴인 회원이라면 <u>로그인</u>
            </Link>
          </div>
        </div>
        <h2 className="text-center text-[28px] font-bold mb-[32px]">
          이메일 회원가입
        </h2>
        <fieldset className="flex flex-col bg-white pt-[24px] px-[16px] pb-[8px] rounded-[6px] mb-[8px]">
          <legend className="">이메일 회원가입</legend>

          <InputField
            label="이메일(ID)"
            type="email"
            id="email"
            name="email"
            placeholder="이메일 주소"
            required
            className="mb-[8px]"
          />

          <InputField
            label="비밀번호"
            type="password"
            id="password"
            name="password"
            placeholder="8자 이상 영문자, 숫자 조합"
            required
            className="mb-[8px]"
          />
          <InputField
            label=""
            type="password"
            id="password"
            name="password"
            placeholder="비밀번호 확인"
            required
            className="mb-[8px]"
          />

          <InputField
            label="이름"
            type="name"
            id="name"
            name="name"
            placeholder="이름"
            required
            className="mb-[8px]"
          />

          <label htmlFor="" className="mb-[8px]">
            휴대폰번호
            <span className="text-[#ff5c40] align-middle leading-[22.5px]">
              {' '}
              *
            </span>
          </label>

          <div className="flex gap-[4px]">
            <input
              type="phone"
              id="phone"
              name="phone"
              placeholder="- 생략하고 입력"
              required
              className={`bg-[#f7f7f7] p-[12px_16px] rounded border border-[#f7f7f7] caret-[#00d48d] hover:border-[#00d48d] w-full`}
            />
            <button
              type="button"
              className="text-[13px] text-[#bfbfbf] border border-[#ebedec] bg-white px-[12px] rounded-[6px] min-w-[102px] whitespace-nowrap"
            >
              인증번호 전송
            </button>
          </div>
        </fieldset>
        <AgreementSection />
        <div>
          <button
            type="button"
            className="block bg-white rounded-[6px] w-full max-w-[384px] h-[48px]  mx-auto text-[#bfbfbf]"
          >
            완료
          </button>
        </div>
      </form>
    </main>
  );
}
