'use client';

import SearchArea from '@/app/components/search/SearchArea';
import SearchArticle from '@/app/components/search/SearchArticle';
import SearchLinker from '@/app/components/search/SearchLinker';
import SearchSeminar from '@/app/components/search/SearchSeminar';
import SearchSeries from '@/app/components/search/SearchSeries';
import SearchTab from '@/app/components/search/SearchTab';
import SearchVideo from '@/app/components/search/SearchVideo';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';

function H3Layout({ text, count }: { text: string; count: number }) {
  return (
    <div className="flex justify-between mb-[32px] text-[24px] pr-[16px] ">
      <div className="flex gap-[4px]">
        <h3 className="font-bold">{text}</h3>
        <p className="font-bold text-[#00aa73]">{count}</p>
      </div>
      {text !== '비디오' && text !== '세미나' && (
        <button type="button" className="text-[12px] underline font-normal">
          {text} 더보기
        </button>
      )}
    </div>
  );
}

type ContentsDb = {
  content_type: string;
  contents_id: number;
  create_at: string;
  img_url: string;
  linkers: string;
  sub_title: string;
  title: string;
  title_id: number;
  updated_at: string;
};

type ContentsDbNoLimit = {
  content_type: string;
  contents_id: number;
  create_at: string;
  img_url: string;
  linkers: string;
  sub_title: string;
  title: string;
  title_id: number;
  updated_at: string;
};

type LinkerDb = {
  affiliation: string;
  author: string;
  comment: string;
  created_at: string;
  image_url: string;
  keywords: string;
  linker_id: number;
};

type ProposalDb = {
  created_at: string;
  for_whom1: string;
  for_whom2: string;
  for_whom3: string;
  proposal_id: number;
  title: string;
  title_id: number;
  why: string;
};

type Counts = {
  contents: number;
  linker: number;
  proposal: number;
};

type TabOps = {
  tabs: {
    label: string;
    value: string;
  }[];
};

type SearchDb = {
  contentsDb: ContentsDb[];
  contentsDbNoLimit: ContentsDbNoLimit[];
  linkerDb: LinkerDb[];
  proposalDb: ProposalDb[];
  counts: Counts;
  tabOps: TabOps;
};

export default function SearchWrapper({
  searchData,
  keyword,
  page,
}: {
  searchData: SearchDb;
  keyword: string;
  page: number;
}) {
  const {
    contentsDb,
    contentsDbNoLimit,
    linkerDb,
    proposalDb,
    counts,
    tabOps,
  } = searchData;

  const newParams = new URLSearchParams();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  //  newKeyword: string, newPage: number
  function updateSearchParams(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (inputRef?.current?.value) {
      newParams.set('keyword', inputRef.current.value);
    } else {
      newParams.delete('page', '1');
    }
    // router.push(`?${newParams.toString()}`);
    router.replace(`?${newParams.toString()}`);
    // router.refresh();
  }

  // if (!proposalDb || !Array.isArray(proposalDb)) {
  //   return <p>시리즈 데이터를 불러올 수 없습니다.</p>;
  // }

  return (
    <div>
      {/* 검색 */}
      <div>
        <SearchArea
          keyword={keyword}
          updateSearchParams={updateSearchParams}
          ref={inputRef}
        />
        <h2 className="text-[28px] font-bold text-center mb-[32px]">
          <span className="text-[#00aa73]">{keyword}</span> 검색 결과
        </h2>
      </div>

      {/* 탭버튼 */}
      <div className="m-[32px_0_64px]">
        <SearchTab tabOps={tabOps} counts={counts} />
      </div>
      {/* 시리즈 */}
      <div>
        <H3Layout
          text="시리즈"
          count={counts?.proposal ?? proposalDb.length ?? 0}
        />
        {/* 처음 데이터 2개, 더보기 펼치면 15개 */}
        <SearchSeries
          proposalDb={proposalDb}
          contentsDbNoLimit={contentsDbNoLimit}
        />
      </div>

      {/* 아티클 */}
      <div>
        <H3Layout text="아티클" count={counts.contents} />
        {/* 처음 2열 3행, 더보기 15개 */}
        <SearchArticle contentsDb={contentsDb} />
      </div>

      {/* 비디오 */}
      <div>
        <H3Layout text="비디오" count={0} />
        {/* 아티클이랑 똑같으나 데이터 없음 처리 */}
        <SearchVideo />
      </div>

      {/* 세미나 */}
      <div>
        <H3Layout text="세미나" count={0} />
        {/* 처음 4개 펼치면 15개 */}
        <SearchSeminar />
      </div>

      {/* 링커 */}
      <div>
        <H3Layout text="링커" count={counts.linker} />
        {/* 처음 6개, 펼치면 24개 */}
        <SearchLinker linkerDb={linkerDb} />
      </div>
    </div>
  );
}
