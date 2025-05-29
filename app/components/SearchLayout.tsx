import Image from 'next/image';
import { FormEvent, RefObject } from 'react';

// 서브페이지 검색창
export default function SearchLayout({
  placeTxt,
  handleSearch,
  ref,
  paramsObj,
}: {
  placeTxt: string;
  handleSearch: (e: FormEvent<HTMLFormElement>) => void;
  ref: RefObject<HTMLInputElement | null>;
  paramsObj: {
    search: string;
    page: string;
  };
}) {
  return (
    <form className="max-w-[320px] relative" onSubmit={handleSearch}>
      <input
        type="search"
        placeholder={placeTxt}
        className="w-full h-[48px] border-1 border-[#DADCE3] text-[16px] rounded-[100px] pr-[40px] pl-[16px] font-semibold"
        ref={ref}
        defaultValue={paramsObj.search}
      ></input>

      <button
        type="submit"
        className="w-[48px] h-[48px] flex items-center justify-center absolute top-0 right-0"
      >
        <Image
          src="/images/ic-search.cf059c94.svg"
          alt="검색"
          width={20}
          height={20}
        />
      </button>
    </form>
  );
}
