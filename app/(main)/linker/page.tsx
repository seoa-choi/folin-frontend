import LinkerIntro from '@/app/components/linker/LinkerIntro';

export default function Linker() {
  async function getLinker() {
    const res = await fetch('http://localhost:3001/linker');

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  }
  const data = getLinker();
  // console.log(data);

  return (
    <main className="pt-[52px] px-[24px] max-w-[1248px] mx-auto max-sm:pt-[56px] max-sm:px-[8px]">
      <div className="max-w-[588px] mx-auto pt-[64px]">
        <div className="text-center">
          <h3 className="text-[36px] leading-[46px] font-bold mb-[24px]">
            폴인은 링커의 지식을
            <br />
            온·오프라인으로 전달합니다.
          </h3>
          <p className="mb-[40px]">
            스타트업 창업가부터 유명 벤처캐피털리스트, 글로벌 기업과 대기업의
            혁신가까지.
            <br />
            폴인에는 1,200여명의 링커가 모여 있습니다.
          </p>
        </div>
        <LinkerIntro />
      </div>
    </main>
  );
}
