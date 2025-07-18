'use client';

import { useQuery } from '@tanstack/react-query';
import { createColorAssigner } from '@/app/_lib/colorUtils';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Share from '@/app/components/Share';

type ArticleData = {
  contents_id: number;
  sub_title: string;
  img_url: string;
  created_at: string;
  series_title: string;
  detail: {
    sentence1: string;
    sentence2: string;
    sentence3: string;
    h3: string;
    p: string;
  };

  linkers: {
    linker_id: string;
    author: string;
    affiliation: string;
    image_url: string;
  }[];
};

const icons = [
  {
    icon: '/images/ico_review_default.svg',
    alt: 'comment',
    activeIcon: '/images/ico_review_active.svg',
  },
  {
    icon: '/images/like.png',
    alt: 'like',
    activeIcon: '/images/like_active.png',
  },
  {
    icon: '/images/bookmark.png',
    alt: 'scrap',
    activeIcon: '/images/bookmark_active.png',
  },
  {
    icon: '/images/share.png',
    alt: 'share',
    activeIcon: '/images/share_active.png',
  },
  { icon: '', alt: '', activeIcon: '' },
  {
    icon: '/images/gift.png',
    alt: 'gift',
    activeIcon: '/images/gift_active.png',
  },
];

// 분기점 수정 할거 확인 할것

export default function ArticleDetail({ articleId }: { articleId: string }) {
  // share컴포넌트 넌블럭 처리
  const [isShow, setIsShow] = useState(false);
  // 아이콘 마우스오버 액티브
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const { data, isLoading, isError } = useQuery<ArticleData[]>({
    queryKey: ['article', articleId],
    queryFn: async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/article/${articleId}`
      );
      if (!res.ok) throw new Error('Failed to fetch article data');
      const json = await res.json();
      // console.log(json);
      return json;
    },
  });

  if (isLoading)
    return (
      <p className="pt-[52px] px-[24px] max-w-[1248px] mx-auto max-sm:pt-[56px] max-sm:px-[8px]">
        Loading...
      </p>
    );

  if (isError) return <p></p>;

  const getColorForArticle = createColorAssigner();

  // 시리즈별 전체 개수 세기
  const seriesCountMap: { [key: string]: number } = {};
  data?.forEach((item) => {
    const title = item.series_title;
    seriesCountMap[title] = (seriesCountMap[title] || 0) + 1;
  });

  // 시리즈별 현재 위치 추적
  const seriesIndexMap: { [key: string]: number } = {};

  // 역순 인덱싱된 데이터 생성
  const indexedArticleSeries = data?.map((item) => {
    const title = item.series_title;
    seriesIndexMap[title] = (seriesIndexMap[title] || 0) + 1;

    return {
      ...item,
      // 전체 개수에서 현재 순서를 빼서 역순 인덱스 계산 기존데이터에 seriesIndex 추가
      seriesIndex: seriesCountMap[title] - seriesIndexMap[title] + 1,
      // 컬러 함수 호출
      seriesColor: getColorForArticle(title),
    };
  });

  // console.log(indexedArticleSeries);

  const filteredId = indexedArticleSeries?.filter(
    (item) => String(item.contents_id) === articleId
  );
  // console.log(filteredId);

  function handleMouseHover(idx: number | null) {
    setHoverIndex(idx);
  }

  function handleShowShare() {
    setIsShow(!isShow);
  }

  return (
    <main className="pt-[52px] px-[24px] max-w-[1248px] mx-auto max-sm:pt-[56px] max-sm:px-[8px]">
      {isShow && <Share handleShowShare={handleShowShare} />}
      {filteredId?.map((item, i) => (
        <div key={i} className="w-[588px] pt-[64px] mx-auto max-sm:w-full">
          <div className="mb-[64px]">
            <div className="flex gap-[2px]">
              <div
                className={`border rounded-[6px] py-[6px] px-[8px] text-[12px] font-bold ${item.seriesColor.bg} ${item.seriesColor.bd}`}
              >
                {item.series_title}
              </div>
              <div
                className={`bg-transprent border rounded-[6px] py-[6px] px-[8px] text-[12px] font-bold ${item.seriesColor.bd}`}
              >
                {item.seriesIndex + '화'}
              </div>
            </div>
            <h3 className="text-[28px] font-bold leading-[36px]">
              {item.sub_title}
            </h3>
            <div className="flex justify-end items-center gap-[8px] mt-[26px] mb-[28px]">
              {icons.map((ite, i) => (
                <button
                  key={ite.alt}
                  type="button"
                  className="group nth-[5]:border-r nth-[5]:h-[16px]"
                  onMouseEnter={() => handleMouseHover(i)}
                  onMouseLeave={() => handleMouseHover(null)}
                  // share버튼만 이벤트 처리
                  onClick={() => {
                    if (ite.alt === 'share') handleShowShare();
                  }}
                >
                  {ite.icon && (
                    <Image
                      src={hoverIndex === i ? ite.activeIcon : ite.icon}
                      alt={ite.alt}
                      width={24}
                      height={24}
                    />
                  )}
                </button>
              ))}
            </div>
            <div className="flex flex-col gap-y-[8px]">
              {item.linkers.map((linker) => (
                <Link href="" key={linker.linker_id} className="flex gap-[4px]">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_URL}/${linker.image_url}`}
                    alt={linker.author}
                    width={32}
                    height={32}
                    className="rounded-[50%]"
                  />
                  <strong className="font-bold">{linker.author}</strong>
                  <span>{linker.affiliation}</span>
                </Link>
              ))}
            </div>
          </div>
          {item.detail.sentence1 && (
            <div className="p-[24px_0] mb-[64px] border-t border-b border-[#00d48d]">
              <h3 className="mb-[8px] text-[13px] font-bold">3줄 요약</h3>
              <ul className="list-disc flex flex-col gap-[12px] ml-[13px] px-[8px]">
                <li>{item.detail.sentence1}</li>
                <li>{item.detail.sentence2}</li>
                <li>{item.detail.sentence3}</li>
              </ul>
            </div>
          )}
          <div className="mb-[40px] text-center px-[8px]">
            <h3 className="text-[24px]">
              {!item.detail.h3 ? item.sub_title : item.detail.h3}
            </h3>
            <figure className="mt-[36px]">
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}/${item.img_url}`}
                alt={!item.detail.p ? item.sub_title : item.detail.p}
                width={572}
                height={429}
                priority
              />
              <figcaption className="mt-[8px] text-[13px] text-left">
                {!item.detail.p ? item.series_title : item.detail.p}
              </figcaption>
            </figure>
          </div>
        </div>
      ))}
    </main>
  );
}
