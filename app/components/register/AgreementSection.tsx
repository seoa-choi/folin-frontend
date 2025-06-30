'use client';

import { useState } from 'react';

const agreement = [
  { optional: '(필수)', title: '만 14세 이상입니다' },
  { optional: '(필수)', title: '이용약관' },
  { optional: '(필수)', title: '개인정보 수집 및 이용' },
  { optional: '(선택)', title: '무료 뉴스레터 및 이벤트/혜택 정보 수신 동의' },
];

export default function AgreementSection() {
  const [allChecked, setAllChecked] = useState(false);
  const [checkedList, setCheckedList] = useState(
    Array(agreement.length).fill(false)
  );

  function handleAllChecked() {
    const newValue = !allChecked;
    setAllChecked(newValue);
    setCheckedList(Array(agreement.length).fill(newValue));
  }
  // agreement.length 동의항목 몇개인지 계산 - 4개
  // Array(배열명.legnth) - 배열 길이만큼 비어있는 배열 만들기 [, , ,]
  // fill(newValue) 빈배열 newValue로 채우기 [true, true, true, true]
  // 세개 상태에 저장해서 개별 체크 상태 한꺼번에 바꾸기

  function handleIndividualCheck(i: number) {
    const newList = [...checkedList];
    newList[i] = !newList[i];
    setCheckedList(newList);
    // 전체 true인지 검사 후 전체 체크 active
    setAllChecked(newList.every(Boolean));
  }

  // checkedList 배열 복사 - [false, false, false, false]
  // every() - 모든 항목이 조건을 만족하는지 검사하는 매서드
  // Boolean - 값을 true/false로 변환해주는 JS 내장 함수

  return (
    <div className="mb-[8px]">
      {/* 전체 체크 */}
      <div className="bg-white p-[16px] rounded-[6px] mb-[4px]">
        <label className="flex pl-[32px] relative">
          <h3 className="font-bold">전체 동의</h3>
          <input
            type="checkbox"
            className="sr-only"
            // checked로 연결, checked 값은 true, false만 가능
            checked={allChecked}
            onChange={handleAllChecked}
          />
          <span
            className={`absolute left-0 top-[50%] -translate-y-[50%] w-[24px] h-[24px] bg-no-repeat bg-cover bg-center rounded-[50%] ${
              allChecked
                ? "bg-[url('/images/checkbox_w.png')] bg-[#00d48d]"
                : "bg-[url('/images/checkbox.png')] bg-[#ebedec]"
            } `}
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
              <input
                type="checkbox"
                className="sr-only"
                // 개별 항목일 경우 하나의 값만 넘겨야함
                checked={checkedList[i]}
                onChange={() => handleIndividualCheck(i)}
              />
              <span
                className={`absolute left-0 top-[50%] -translate-y-[50%] w-[24px] h-[24px] bg-no-repeat bg-center rounded-[50%] ${
                  checkedList[i]
                    ? "bg-[url('/images/checkbox_g.png')] "
                    : "bg-[url('/images/checkbox.png')]"
                }`}
                style={{ backgroundSize: '16px,cover' }}
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
