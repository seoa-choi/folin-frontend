import Link from 'next/link';
import Image from 'next/image';
import ProductFirstSlide from '@/app/components/product-home/ProductFirstSlide';
import ProductSecondSlide from '@/app/components/product-home/ProductSecondSlide';

export default function ProductHome() {
  return (
    <main className="pt-[80px]">
      <div className="max-w-[1921px]">
        <div className="text-center py-[40px] px-[20px]">
          <p className="text-[#8C919F] text-[18px] mb-[24px] font-semibold max-sm:text-[14px] max-sm:mb-[16px]">
            상품
          </p>
          <p className="text-[#131313] text-[48px] font-bold leading-[64px] tracking-[-0.03em] max-sm:text-[28px] max-sm:leading-[40px] max-sm:font-semibold">
            Let's PIECE!
          </p>
        </div>
        <div>
          <ProductFirstSlide />
          <div>
            <Link
              href="/product-progress"
              className="block bg-[#131313] py-[12px] px-[20px] rounded-[100px] text-white text-[16px] tracking-[-0.03em] text-center mx-auto w-fit"
            >
              전체 상품 더보기
            </Link>
            <div className="flex gap-[2px] justify-center mt-[20px]">
              <Image
                src="images/ic_exclamation_circle.60ed7afa.svg"
                alt="작은경고문구"
                width={17}
                height={16}
                priority
              />
              <p className="text-[14px] text-[#8C919F] leading-[20px]">
                과거 수익률이 미래의 수익률을 보장하는 것은 아닙니다.
              </p>
            </div>
          </div>
        </div>
        <ProductSecondSlide />
        <div className="max-w-[1420px] mx-auto py-[80px] px-[20px] max-sm:py-[40px]">
          <div className="flex flex-col items-center gap-[20px]">
            <div>
              <Image
                src="/images/product/img_producthome_guide.png"
                alt="청약가이드 이미지"
                width={320}
                height={320}
                className="max-sm:w-[160px] max-sm:h-[160px]"
              />
            </div>

            <p className="text-[48px] text-[#131313] leading-[64px] font-bold max-sm:text-[22px] max-sm:leading-[28px] max-sm:font-semibold">
              청약 가이드 살펴보세요
            </p>

            <Link
              href="/guide"
              className="block bg-[#131313] py-[12px] px-[20px] rounded-[100px] text-white text-[16px] tracking-[-0.03em] text-center mx-auto w-fit"
            >
              청약 가이드 보기
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
