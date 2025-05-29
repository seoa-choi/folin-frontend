'use client';

import DisclosureContents from '@/app/components/disclosure/DisclosureContents';
import DisclosureTab from '@/app/components/disclosure/DisclosureTab';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { use, useEffect, useRef, useState } from 'react';

type DisclosureData = {
  id: number;
  title: string;
  date: string;
};

export default function Disclosure({
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
    result: DisclosureData[];
    disclosure: DisclosureData[];
    total: number;
    mappedTab: string;
  }>({
    queryKey: ['disclosure', page, paramsObj.search, paramsObj.tab],
    queryFn: () => {
      return fetch(
        `http://localhost:9090/disclosure?page=${page}&search=${paramsObj.search}&tab=${paramsObj.tab}`
      ).then((res) => res.json());
    },
  });

  // useEffect(() => {
  //   console.log('응답 데이터:', data);
  //   console.log('올데이터', data?.disclosure);
  // }, [data]);

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

  // 탭
  const [selectedBtn, setSelectedBtn] = useState('투자공시');

  // mappedTab url반영
  useEffect(() => {
    if (data?.mappedTab) {
      const queryParams = new URLSearchParams({
        page: page.toString(),
        search: paramsObj.search,
        tab: data.mappedTab,
      });

      router.push(`?${queryParams.toString()}`);
    }
  }, [data]);

  function handleSelectedBtn(tit: string) {
    setSelectedBtn(tit);
    const mappedTab =
      tit === '투자공시' ? 'investmentDisclosure' : 'companyDisclosure';
    router.push(`?tab=${mappedTab}`);
  }

  return (
    <main className="pt-[80px]">
      <div className="pt-[60px] px-[20px] pb-[80px]">
        <div className="text-center py-[60px]">
          <p className="text-[#8C919F] text-[18px] mb-[24px] font-semibold max-sm:text-[14px] max-sm:mb-[16px]">
            공시
          </p>
          <p className="text-[#131313] text-[48px] font-bold leading-[64px] tracking-[-0.018em] max-sm:text-[28px] max-sm:leading-[40px] max-sm:font-semibold">
            투자에 필요한 정보를
            <br />
            알려드려요
          </p>
        </div>
        <DisclosureTab
          data={data}
          paramsObj={paramsObj}
          page={page}
          selectedBtn={selectedBtn}
          handleSelectedBtn={handleSelectedBtn}
        />

        <DisclosureContents
          handleSearch={handleSearch}
          ref={inputRef}
          paramsObj={paramsObj}
          data={data}
          isPending={isPending}
          isError={isError}
          error={error}
          page={page}
          setPage={setPage}
        />
      </div>
    </main>
  );
}
