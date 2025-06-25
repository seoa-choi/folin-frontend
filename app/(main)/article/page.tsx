import ArticleWrapper from '@/app/components/article/ArticleWrapper';

export default async function Article({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page } = await searchParams;
  const pageNumber = Number(page) || 1;

  const res = await fetch(`http://localhost:3001/article?page=${page}`);
  if (!res.ok) throw new Error('Failed to fetch');
  const articleData = await res.json();

  // console.log(articleData);

  return (
    <main className="pt-[52px] px-[24px] max-w-[1248px] mx-auto max-sm:pt-[56px] max-sm:px-[8px]">
      <ArticleWrapper data={articleData} initialPage={pageNumber} />
    </main>
  );
}
