'use client';

import Pagination from '@/app/components/StringPagination';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { use, useEffect, useRef, useState } from 'react';

type Article = {
  id: number;
  title: string;
  content: string;
};

// 검색어 볼드처리
function Boldtext({ text, keyword }: { text: string; keyword: string }) {
  // split후 기준문자가 포함되려면 정규표현식 그룹 () 사용
  // 정규표현식 내부에 변수 사용 시 RegExp객체 사용
  // 'gi'는 옵션이며 g는 global, 문자열 전체 검색(문자열이 여러줄이더라도 전체에서 검색한다 ?)
  // i는 ignore case 대소문자 구분안함
  const parts = text.split(new RegExp(`(${keyword})`, 'gi'));

  // split된 문자 배열 중 검색어와 같으면 <b>로 감아주고 아니면 그냥 리턴
  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === keyword?.toLowerCase() ? (
          <b key={index}>{part}</b>
        ) : (
          part
        )
      )}
    </>
  );
}

export default function Articles({
  searchParams,
}: {
  searchParams: Promise<{ search: string; page: string }>;
}) {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const paramsObj = use(searchParams);
  // 프라미스 해제된 검색 파라메터 객체를 URLSearchParams의 인스턴스로 복제
  const [params] = useState(new URLSearchParams(paramsObj));
  const inputRef = useRef<HTMLInputElement | null>(null);

  const router = useRouter();
  // console.log(paramsObj.search);

  const { isPending, data, isError, error } = useQuery<{
    result: Article[];
    total: number;
  }>({
    queryKey: ['articles', page, paramsObj.search],
    queryFn: () => {
      return fetch(
        `http://localhost:9090/articles?page=${page}&search=${paramsObj.search}`
      ).then((res) => res.json());
    },
  });

  // data 변경 시 totalpage 계산
  useEffect(() => {
    if (data) {
      setTotalPage(Math.ceil(data?.total / 5) || 0);
    }
  }, [data]);

  // 페이지 변경 시 쿼리 파라미터 추가
  useEffect(() => {
    params.set('page', page.toString());
    router.push(`?${params.toString()}`);
  }, [page]);

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // console.log('검색 실행');
    if (inputRef?.current?.value) {
      params.set('search', inputRef.current.value);
    } else {
      params.delete('search');
    }
    router.push(`?${params.toString()}`);
    setPage(1);
  }

  return (
    <main className="p-[54px]">
      <h2 className="text-[26px] font-bold mb-[20px]">뉴스 기사</h2>
      <form onSubmit={handleSearch} className="flex gap-x-[10px]">
        <input
          type="search"
          placeholder="검색어를 입력하세요"
          ref={inputRef}
          autoComplete="off"
          defaultValue={paramsObj.search}
          className="border border-gray-300 w-full"
        />
        <button type="submit" className="btn shrink-0">
          검색
        </button>
      </form>
      {isPending && <p>Loading ... </p>}
      {isError && <p>{error.message}</p>}
      {data && data?.result?.length > 0 && (
        <ul className="space-y-[10px] mt-[20px] mb-[20px]">
          {data.result.map((article) => (
            <li key={article.id}>
              <Link href={`/articles/${article.id}`}>
                {/* 검색어 볼드 처리 */}
                <Boldtext text={article.title} keyword={paramsObj.search} />
              </Link>
            </li>
          ))}
        </ul>
      )}
      {!isPending && data?.result?.length === undefined && (
        <p className="text-gray-500 my-[40px] text-center">
          검색결과가 없습니다.
        </p>
      )}

      {data && data?.result?.length > 0 && (
        <Pagination page={page} setPage={setPage} totalPage={totalPage} />
      )}
    </main>
  );
}
