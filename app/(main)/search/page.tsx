import SearchWrapper from '@/app/components/search/SearchWrapper';

export default async function Search({
  searchParams,
}: {
  searchParams: Promise<{ page: number; keyword?: string }>;
}) {
  const { page, keyword } = await searchParams;

  const pageNumber = Number(page) || 1;
  const searchKeyword = typeof keyword === 'string' ? keyword.trim() : '';

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/search?keyword=${searchKeyword}&page=${pageNumber}`
  );
  const searchData = await res.json();
  // console.log(searchData);

  // 데이터 추가해서 page 늘리기
  return (
    <main className="pt-[52px] px-[24px] max-w-[1248px] mx-auto max-sm:pt-[56px] max-sm:px-[8px]">
      <SearchWrapper
        searchData={searchData}
        keyword={searchKeyword}
        // page={pageNumber}
      />
    </main>
  );
}

//
//
//
//
//
//
//
//
//
//
// import SearchWrapper from '@/app/components/search/SearchWrapper';

// export default async function Search({
//   searchParams,
// }: {
//   searchParams: { page?: string; keyword?: string };
// }) {
//   const page = Number(searchParams.page) || 1;
//   const keyword =
//     typeof searchParams.keyword === 'string' ? searchParams.keyword.trim() : '';

//   // `http://localhost:3001/search?keyword=${keyword}&page=${page}`
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/search?keyword=${keyword}&page=${page}`
//   );
//   const searchData = await res.json();
//   console.log(searchData);

//   return (
//     <main className="pt-[52px] px-[24px] max-w-[1248px] mx-auto max-sm:pt-[56px] max-sm:px-[8px]">
//       <SearchWrapper />
//     </main>
//   );
// }
