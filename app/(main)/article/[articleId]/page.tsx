import ArticleDetail from '@/app/components/article/ArticleDetail';

export default async function ArticleItem({
  params,
}: {
  params: Promise<{ articleId: string }>;
}) {
  const { articleId } = await params;
  // const res = await fetch(`http://localhost:3001/article/${articleId}`);
  // const articleData = await res.json();
  // console.log(articleData);

  // 클라이언트 컴포넌트로 보내서 useQuery로 받기
  return <ArticleDetail articleId={articleId} />;
}
