import Link from 'next/link';

export default function Products() {
  const productId = 100;

  return (
    <main className="p-[30px]">
      <h2 className="text-[26px] font-bold">products</h2>
      <ul>
        <li>
          <Link href="/products/1">product 1</Link>
        </li>
        <li>
          <Link href="/products/2">product 2</Link>
        </li>
        <li>
          {/* 현재페이지 경로에 추가되지 않음, 뒤로가기 시 전전페이지 이동 replace */}
          <Link href="/products/3" replace>
            product 3
          </Link>
        </li>
        <li>
          <Link href={`/productId/${productId}`}>product {productId}</Link>
        </li>
      </ul>
    </main>
  );
}
