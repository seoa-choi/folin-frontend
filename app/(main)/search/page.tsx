import SearchWrapper from '@/app/components/search/SearchWrapper';

export default async function Search({
  searchParams,
}: {
  searchParams: { page?: string; keyword?: string };
}) {
  const page = Number(searchParams.page) || 1;
  const keyword =
    typeof searchParams.keyword === 'string' ? searchParams.keyword.trim() : '';

  // `http://localhost:3001/search?keyword=${keyword}&page=${page}`
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/search?keyword=${keyword}&page=${page}`
  );
  const searchData = await res.json();
  console.log(searchData);

  return (
    <main className="pt-[52px] px-[24px] max-w-[1248px] mx-auto max-sm:pt-[56px] max-sm:px-[8px]">
      <SearchWrapper />
    </main>
  );
}
