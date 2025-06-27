const agreement = [
  { optional: '(필수)', title: '만 14세 이상입니다' },
  { optional: '(필수)', title: '이용약관' },
  { optional: '(필수)', title: '개인정보 수집 및 이용' },
  { optional: '(선택)', title: '무료 뉴스레터 및 이벤트/혜택 정보 수신 동의' },
];

export default function AgreementSection() {
  return (
    <div className="mb-[8px]">
      {/* 전체 체크 */}
      <div className="bg-white p-[16px] rounded-[6px] mb-[4px]">
        <label className="flex pl-[32px] relative">
          <h3 className="font-bold">전체 동의</h3>
          <input type="checkbox" />
          <span
            className="absolute left-0 top-[50%] -translate-y-[50%] w-[24px] h-[24px] bg-[url('/images/checkbox.png')] bg-[#ebedec] bg-no-repeat bg-cover bg-center rounded-[50%]"
            style={{ backgroundSize: '16px' }}
          ></span>
        </label>
      </div>

      {/* 개별 체크 */}
      <div className="bg-white p-[16px] rounded-[6px]">
        {agreement.map((item, i) => (
          <div key={i} className="py-[8px]">
            <label className="flex justify-between pl-[32px] relative">
              <h3 className="">
                <span
                  className={`${
                    item.optional === '(필수)' ? 'text-[#ff5c40]' : ''
                  }`}
                >
                  {item.optional}
                </span>{' '}
                {item.title}
              </h3>
              <input type="checkbox" />
              <span
                className="absolute left-0 top-[50%] -translate-y-[50%] w-[24px] h-[24px] bg-[url('/images/checkbox.png')] bg-[#ebedec] bg-no-repeat bg-cover bg-center rounded-[50%]"
                style={{ backgroundSize: '16px' }}
              ></span>
              {i !== 0 && (
                <button
                  type="button"
                  className="underline bg-transparent p-[1px_6px] text-[12px]"
                >
                  내용보기
                </button>
              )}
            </label>
            {item.optional === '(선택)' && (
              <div className="mt-[4px] pl-[32px]">
                <p className="text-[12px] text-[#8e8e8e]">
                  뉴스레터를 구독하면 콘텐츠 큐레이션을 받을 수 있습니다.
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
