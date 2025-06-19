'use client';

import LinkerTab from '@/app/components/linker/LinkerTab';
import Pagination from '@/app/components/Pagination';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

type Linker = {
  linker_id: number;
  comment: string;
  occupation: string;
  author: string;
  affiliation: string;
  created_at: string;
  image_url: string;
  author_info: string;
};

// 원 포인트 컬러
const pointBg = [
  { bg: 'bg-[#ff595f]' },
  { bg: 'bg-[#e5c58a]' },
  { bg: 'bg-[#f2ec72]' },
  { bg: 'bg-[#a3cfff]' },
  { bg: 'bg-[#25aacf]' },
  { bg: 'bg-[#a45eeb]' },
];

const occupationList = [
  { roles: '전체', bg: 'bg-[#00d48d]' },
  { roles: '마케터', bg: 'bg-[#ff595f]' },
  { roles: '기획자', bg: 'bg-[#e5c58a]' },
  { roles: '디자이너', bg: 'bg-[#f2ec72]' },
  { roles: '커리어', bg: 'bg-[#a3cfff]' },
  { roles: '콘텐츠', bg: 'bg-[#25aacf]' },
  { roles: 'F&B', bg: 'bg-[#a45eeb]' },
  { roles: '공간', bg: 'bg-[#ff595f]' },
  { roles: '테크', bg: 'bg-[#e5c58a]' },
];

export default function LinkerIntro() {
  const [withComment, setWithComment] = useState<Linker[]>([]);
  const [noComment, setNoComment] = useState<Linker[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);
  // 기본값 설정
  const [randomBg, setRandomBg] = useState(pointBg[0]);
  const [totalPage, setTotalPage] = useState(0);

  const searchParams = useSearchParams();
  const router = useRouter();

  const [occupation, setOccupation] = useState('전체');
  const [page, setPage] = useState(1);

  useEffect(() => {
    setOccupation(searchParams.get('occupation') || '전체');
  }, [searchParams]);

  useEffect(() => {
    const query = new URLSearchParams();
    // 페이지 번호 추가
    query.set('page', page.toString());
    // 직군 필터 추가
    query.set('occupation', occupation);

    fetch(`http://localhost:3001/linker?${query.toString()}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Server Error: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log('API 응답:', data);

        setWithComment(data.withComment || []);
        setNoComment(data.noComment || []);
        setTotalCount(data.totalCount);
        setTotalPage(Math.ceil(data.totalCount / 12));
      })
      .catch((error) => console.error('Fetch Error:', error));
  }, [occupation, page]);

  const filteredLinkers =
    occupation === '전체'
      ? withComment
      : withComment.filter((linker) => linker.occupation === occupation);

  // 랜덤 id 렌더링
  const randomId =
    filteredLinkers.length > 0
      ? filteredLinkers[Math.floor(Math.random() * filteredLinkers.length)]
          .linker_id
      : null;

  function handleOccupationChange(role: string, color: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set('occupation', role);

    params.set('page', '1');
    router.push(`?${params.toString()}`);

    setPage(1);
    setRandomBg({ bg: color });
  }

  function handlePageChange(newPage: number) {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', newPage.toString());
    router.push(`?${params.toString()}`);

    setPage(newPage);
  }

  return (
    <>
      <LinkerTab
        occupationList={occupationList}
        activeOccupation={occupation}
        handleOccupationChange={handleOccupationChange}
      />
      <div className="my-[104px] w-[486px] h-[486px] mx-auto relative max-md:my-[72px] max-md:w-[386px] max-md:h-[386px] max-[800px]:h-auto max-[420px]:w-full max-[420px]:h-auto">
        <Link
          href=""
          className={`block relative w-full h-full overflow-hidden rounded-[100%] ${randomBg.bg}`}
        >
          {filteredLinkers.map((item) => (
            <Image
              key={item.linker_id}
              // 서버 퍼블릭
              src={`http://localhost:3001/${item.image_url}`}
              alt={item.author}
              width={972}
              height={972}
              priority
              className={` ${item.linker_id === randomId ? 'block' : 'hidden'}`}
            />
          ))}
        </Link>
        {filteredLinkers
          .filter((item) => item.linker_id === randomId)
          .map((item) => (
            <div
              key={item.linker_id}
              className="absolute right-0 bottom-[50%] translate-y-[50%] translate-x-[80%] max-w-[306px] max-h-[388px] flex flex-col flex-wrap justify-center max-md:max-w-[248px] max-[800px]:static max-[800px]:translate-0 max-[800px]:max-w-full max-[800px]:text-center max-[800px]:mt-[16px] max-[800px]:max-h-auto"
            >
              <p className="text-[24px] font-bold">{item.comment}</p>
              <h3 className="text-[18px] font-bold mt-[24px]">{item.author}</h3>
              <p>{item.affiliation}</p>
            </div>
          ))}
      </div>
      <ul className="w-full grid grid-cols-3 gap-[40px_8px] max-sm:grid-cols-2">
        {noComment.map((item) => (
          <li key={item.linker_id} className="w-[calc(100%-16px)]">
            <Link
              href=""
              className="flex flex-col items-center text-center gap-[16px_0]"
            >
              <Image
                src={`http://localhost:3001/${item.image_url}`}
                alt={item.author}
                width={96}
                height={96}
                priority
                className="rounded-[50%]"
              />
              <div>
                <p className="text-[18px] font-bold mb-[4px]">{item.author}</p>
                <p>{item.affiliation}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <Pagination
        page={page}
        totalPage={totalPage}
        handlePageChange={handlePageChange}
      />
    </>
  );
}
