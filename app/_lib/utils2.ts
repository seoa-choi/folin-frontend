export function formatDate(date: Date): string {
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  });
}
export function generatePagination2(currentPage: number, totalPages: number) {
  // 7페이지 이하일 때는 모든 페이지를 보여준다.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // 7페이지 초과일 때는 현재 페이지를 기준으로 앞뒤로 2페이지씩 보여준다.
  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }

  // 마지막 페이지에 가까울 때는 마지막 3페이지를 보여준다.
  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  // 중간 페이지일 때는 앞뒤 페이지만 보여준다
  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
}

// { length: totalPages } 길이만 있는 유사 배열을 생성 (예: length: 5)
// (_, i) => i 매핑 함수 인자
// 첫번째 인자 _는 배열 요소 자체, 값이 없기 때문에 무시하고 _로
// 두번째 인자 i는 각 요소의 인덱스 (0부터 시작)
// i + 1 → 0부터 시작하는 인덱스를 사람이 읽는 1부터 시작하는 페이지 번호로 바꿔줌
