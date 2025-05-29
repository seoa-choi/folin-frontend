'use client';

import MagazineContents from '@/app/components/magazine/MagazineContents';
import MagazineTap from '@/app/components/magazine/MagazineTab';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { use, useEffect, useRef, useState } from 'react';

type Magazines = {
  id: number;
  title: string;
  img: string;
  postTitle: string;
  postSubTitle: string;
};

export default function Magazine({
  searchParams,
}: {
  searchParams: Promise<{ search: string; page: string; tab: string }>;
}) {
  const [page, setPage] = useState(1);
  const paramsObj = use(searchParams);
  const [params] = useState(new URLSearchParams(paramsObj));
  const inputRef = useRef<HTMLInputElement | null>(null);

  const router = useRouter();
  const { isPending, data, isError, error } = useQuery<{
    tabResult: Magazines[];
    searchResult: Magazines[];
    total: number;
    tabList: string[];
  }>({
    queryKey: ['magazine', page, paramsObj.search, paramsObj.tab],
    queryFn: () => {
      return fetch(
        `http://localhost:9090/magazine?page=${page}&search=${paramsObj.search}&tab=${paramsObj.tab}`
      ).then((res) => res.json());
    },
  });

  // 검색어 있, 없
  const displayedData = paramsObj.search
    ? { displayedData: data?.searchResult ?? [], total: data?.total ?? 0 }
    : { displayedData: data?.tabResult ?? [], total: data?.total ?? 0 };

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

  // 탭 변경 시 처리
  function handleTabChange(tabKey: string) {
    if (tabKey !== 'All') {
      params.set('tab', tabKey);
    } else {
      params.delete('tab');
    }
    params.delete('search');
    router.push(`?${params.toString()}`);
    setPage(1);
  }

  // url 업데이트
  useEffect(() => {
    params.set('page', page.toString());
    router.push(`?${params.toString()}`);
  }, [page]);

  return (
    <main className="pt-[80px]">
      <div>
        <div className="text-center py-[40px] px-[20px]">
          <p className="text-[#8C919F] text-[18px] mb-[24px] font-semibold max-sm:text-[14px] max-sm:mb-[16px]">
            매거진
          </p>
          <p className="text-[#131313] text-[48px] font-bold leading-[64px] tracking-[-0.03em] max-sm:text-[28px] max-sm:leading-[40px] max-sm:font-semibold">
            투자에 도움되는
            <br />
            금융지식 A to Z
          </p>
        </div>

        <MagazineTap
          data={data}
          page={page}
          paramsObj={paramsObj}
          handleTabChange={handleTabChange}
        />
        <MagazineContents
          data={displayedData}
          isPending={isPending}
          isError={isError}
          error={error}
          page={page}
          setPage={setPage}
          handleSearch={handleSearch}
          ref={inputRef}
          paramsObj={paramsObj}
        />
      </div>
    </main>
  );
}
