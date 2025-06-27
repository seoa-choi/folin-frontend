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

// seriesColorMap 색상 매핑 저장소 - 시리즈 제목을 키로, 어떤 색상 할당 됐는지 저장하는 객체
// 예)
// seriesColorMap = {
//   "무신사 인사이드": { bg: "...", bd: "..." },
//   "마케터의 커리어 노트":      { bg: "...", bd: "..." }
// };

// colorIndex 다음에 할당할 색상의 인덱스 추적
// -> 두개는 내부 상태로 유지됨

// getColorForSeries - seriesTitle를 키값으로 색상 배정하는 내부 함수
// seriesTitle이 처음 들어오면 색상이 없으니 pointColor에서 하나 할당
// colorIndex % pointColor.length 색상 배열 반복해서 재사용 가능 (나머지로 계속 반복)
// 이미 들어온 시리즈면 기존 저장 색상 그대로 반환

// 컴포넌트 내부 코드 썼던 거
// // 시리즈 타이틀별 색상 매핑 객체
// const seriesColorMap: { [key: string]: { bg: string; bd: string } } = {};
// let colorIndex = 0;

// function getColorForSeries(seriesTitle: string) {
//   if (!seriesColorMap[seriesTitle]) {
//     // 아직 매핑되지 않은 시리즈면 새로운 색상 할당
//     seriesColorMap[seriesTitle] = pointColor[colorIndex % pointColor.length];
//     colorIndex++;
//   }
//   return seriesColorMap[seriesTitle];
// }
