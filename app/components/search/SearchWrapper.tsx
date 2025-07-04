import SearchArea from '@/app/components/search/SearchArea';
import SearchArticle from '@/app/components/search/SearchArticle';
import SearchLinker from '@/app/components/search/SearchLinker';
import SearchSeminar from '@/app/components/search/SearchSeminar';
import SearchSeries from '@/app/components/search/SearchSeries';
import SearchTab from '@/app/components/search/SearchTab';
import SearchVideo from '@/app/components/search/SearchVideo';

function H3Layout({ text }: { text: string }) {
  return (
    <div className="flex justify-between mb-[32px] text-[24px] pr-[16px] ">
      <div className="flex gap-[4px]">
        <h3 className="font-bold">{text}</h3>
        <p className="font-bold text-[#00aa73]">count</p>
      </div>
      <button type="button" className="text-[12px] underline font-normal">
        {text} 더보기
      </button>
    </div>
  );
}

export default function SearchWrapper() {
  return (
    <div>
      {/* 검색 */}
      <div>
        <SearchArea />
        <h2 className="text-[28px] font-bold text-center mb-[32px]">
          <span className="text-[#00aa73]">키워드</span> 검색 결과
        </h2>
      </div>

      {/* 탭버튼 */}
      <div className="m-[32px_0_64px]">
        <SearchTab />
      </div>
      {/* 시리즈 */}
      <div>
        <H3Layout text="시리즈" />
        {/* 처음 데이터 2개, 더보기 펼치면 15개 */}
        <SearchSeries />
      </div>

      {/* 아티클 */}
      <div>
        <H3Layout text="아티클" />
        {/* 처음 2열 3행, 더보기 15개 */}
        <SearchArticle />
      </div>

      {/* 비디오 */}
      <div>
        <H3Layout text="비디오" />
        {/* 아티클이랑 똑같으나 데이터 없음 처리 */}
        <SearchVideo />
      </div>

      {/* 세미나 */}
      <div>
        <H3Layout text="세미나" />
        {/* 처음 4개 펼치면 15개 */}
        <SearchSeminar />
      </div>

      {/* 링커 */}
      <div>
        <H3Layout text="링커" />
        {/* 처음 6개, 펼치면 24개 */}
        <SearchLinker />
      </div>
    </div>
  );
}
