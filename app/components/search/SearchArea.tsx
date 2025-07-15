import Image from 'next/image';
import { FormEvent, RefObject } from 'react';

export default function SearchArea({
  keyword,
  updateSearchParams,
  ref,
}: {
  keyword: string;
  // newKeyword: string, newPage: number
  updateSearchParams: (e: FormEvent<HTMLFormElement>) => void;
  ref: RefObject<HTMLInputElement | null>;
}) {
  return (
    <div className="w-[588px] m-[64px_auto_48px] max-sm:w-full">
      <form
        // action={`/search?keyword=${keyword}&page=1`}
        // method="GET"
        className="py-[4px] pr-[12px] pl-[16px] w-full rounded-[6px] bg-[#f7f7f7]"
        onSubmit={updateSearchParams}
      >
        <fieldset className="flex items-center gap-x-[8px]">
          <legend>통합 검색창</legend>
          <button type="submit" className="w-[32px] h-[32px] bg-transparent">
            <Image
              src="/images/searchpage.png"
              alt="검색"
              width={24}
              height={24}
            />
          </button>
          <input
            type="search"
            placeholder="성장의 경험을 찾습니다."
            className="w-[calc(100%-32px)] bg-transparent border-0 placeholder:text-[#c5c5c5] placeholder:font-[Noto-Sans] h-[56px] caret-[#00d48d] p-0"
            ref={ref}
            defaultValue={keyword}
          />
          <button
            type="button"
            //${ hasInput ? 'block' : 'hidden'}
            className={`w-[24px] bg-transparent`}
            // onClick={handleClear}
            // disabled={!hasInput}
          >
            <Image
              src="/images/delete.png"
              alt="내용삭제"
              width={24}
              height={24}
            />
          </button>
        </fieldset>
      </form>
    </div>
  );
}
