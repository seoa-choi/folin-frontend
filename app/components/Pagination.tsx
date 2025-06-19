import { generatePagination2 } from '@/app/_lib/utils2';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Pagination({
  page,
  totalPage,
  handlePageChange,
}: {
  page: number;
  totalPage: number;
  handlePageChange: (newPage: number) => void;
}) {
  const [pageArr, setPageArr] = useState<(number | string)[]>([]);

  useEffect(() => {
    const arr = generatePagination2(page, totalPage);
    setPageArr(arr);
  }, [page, totalPage]);

  return (
    <div className="mt-[104px] pb-[160px] max-sm:mt-[64px] max-sm:pb-[120px]">
      <div className="flex items-center justify-center">
        <button
          type="button"
          className={`p-[8px] h-[32px] rounded-[8px] hover:bg-[#EDF2F7] ${
            page === 1 ? 'opacity-[0.4]' : 'opacity-100'
          }  shrink-0`}
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          <Image
            src="/images/left_active_arrow.svg"
            alt="이전"
            width={16}
            height={16}
          />
        </button>
        <ol className="flex items-center gap-[8px] mx-[8px]">
          {pageArr.map((item, i) => {
            if (item === '...') {
              return <span key={i}>...</span>;
            } else {
              return (
                <li key={i}>
                  <button
                    type="button"
                    className={`min-w-[32px] h-[32px] text-[12px] py-[7px] px-[12px] leading-[16px] rounded-[6px] font-bold
                  ${page === item ? 'bg-[#00d48d]' : 'bg-none'}
                  max-sm:text-[12px] max-sm:w-[24px]`}
                    onClick={() => handlePageChange(item as number)}
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
          className={`p-[8px] h-[32px] rounded-[8px] hover:bg-[#EDF2F7] ${
            page === totalPage ? 'opacity-[0.4]' : 'opacity-100'
          } shrink-0`}
          onClick={() => handlePageChange(page + 1)}
          disabled={page === totalPage}
        >
          <Image
            src="/images/left_active_arrow.svg"
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
