import { generatePagination2 } from '@/app/_lib/utils2';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function PiecePagination({
  page,
  setPage,
  totalPage,
}: {
  page: number;
  setPage: (num: number) => void;
  totalPage: number;
}) {
  const [pageArr, setPageArr] = useState<(number | string)[]>([]);

  useEffect(() => {
    const arr = generatePagination2(page, totalPage);
    setPageArr(arr);
  }, [page, totalPage]);

  return (
    <div className="mt-[40px]">
      <div className="flex items-center justify-center">
        <button
          type="button"
          className={`px-[14px] py-[12px] h-[40px] rounded-[8px] hover:bg-[#EDF2F7] ${
            page === 1 ? 'opacity-[0.4]' : 'opacity-100'
          }  shrink-0`}
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          <Image
            src="/images/ic-arrow-paging.6c2eda24.svg"
            alt="이전"
            width={16}
            height={16}
          />
        </button>
        <ol className="flex items-center gap-[4px]">
          {pageArr.map((item, i) => {
            if (item === '...') {
              return <span key={i}>...</span>;
            } else {
              return (
                <li key={i}>
                  <button
                    type="button"
                    className={`w-[32px] h-[40px] text-[16px] font-semibold leading-[16px] hover:text-[#292a2e]
                  ${page === item ? 'text-[#292a2e]' : 'text-[#b8bcc8]'}
                   max-sm:text-[15px] max-sm:w-[24px]`}
                    onClick={() => setPage(item as number)}
                  >
                    {item}
                  </button>
                </li>
              );
            }
          })}
        </ol>
        <button
          type="button"
          className={`px-[14px] py-[12px] h-[40px] rounded-[8px] hover:bg-[#EDF2F7] ${
            page === totalPage ? 'opacity-[0.4]' : 'opacity-100'
          } shrink-0`}
          onClick={() => setPage(page + 1)}
          disabled={page === totalPage}
        >
          <Image
            src="/images/ic-arrow-paging.6c2eda24.svg"
            alt="이전"
            width={16}
            height={16}
            className="transform rotate-[180deg]"
          />
        </button>
      </div>
    </div>
  );
}
