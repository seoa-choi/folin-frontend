// 색상 목록 상수
export const pointColor = [
  { bg: 'bg-[#a45eeb]', bd: 'border-[#a45eeb]' },
  { bg: 'bg-[#ff595f]', bd: 'border-[#ff595f]' },
  { bg: 'bg-[#e5c58a]', bd: 'border-[#e5c58a]' },
  { bg: 'bg-[#f2ec72]', bd: 'border-[#f2ec72]' },
  { bg: 'bg-[#a3cfff]', bd: 'border-[#a3cfff]' },
  { bg: 'bg-[#25aacf]', bd: 'border-[#25aacf]' },
];

// 색상 매핑 함수 생성기
export function createColorAssigner() {
  const seriesColorMap: { [key: string]: { bg: string; bd: string } } = {};
  let colorIndex = 0;

  return function getColorForSeries(seriesTitle: string) {
    if (!seriesColorMap[seriesTitle]) {
      seriesColorMap[seriesTitle] = pointColor[colorIndex % pointColor.length];
      colorIndex++;
    }
    return seriesColorMap[seriesTitle];
  };
}
