import { http, HttpResponse } from 'msw';
import articles from './articles.json';

let maxId = Math.max(...articles.map((item) => item.id));

export const articlesHandlers = [
  http.get('http://localhost:9090/articles', async ({ request }) => {
    await sleep(200);

    // request객체에는 searchParams가 없으므로 기본 js URL객체로 변환
    const url = new URL(request.url);
    const search = url.searchParams.get('search');
    // parseInt는 문자열만 허용하므로 Number로 변경
    const page = Number(url.searchParams.get('page'));

    // 페이지별 데이터 가져오기
    function getDataByPage(
      data: { id: number; title: string; content: string }[],
      page: number,
      limit: number
    ) {
      // 총페이지
      const totalPages = Math.ceil(data.length / limit);

      if (page < 1 || page > totalPages) {
        return []; // 잘못된 페이지 요청시 빈배열 반환
      }

      // 잘라낼 배열 시작 위치
      const start = (page - 1) * limit;
      // 끝 위치
      const end = start + limit;

      return {
        result: data.slice(start, end),
        total: data.length,
      };
    }

    // 검색어에 대한 데이터 필터링하여 보냄
    if (search !== 'undefined' && search) {
      const filterd = articles.filter((item) => {
        return item.title.toLowerCase().includes(search.toLowerCase());
      });
      const result = getDataByPage(filterd, page, 5);
      return HttpResponse.json(result);
    }

    // 검색어 없는 경우 모두 보냄
    const result = getDataByPage(articles, page, 5);
    return HttpResponse.json(result);
  }),
  http.get('http://localhost:9090/articles/:id', async ({ params }) => {
    await sleep(200);

    const { id } = params;
    // find는 배열요소 하나만 찾아줌
    const article = articles.find((item) => item.id === Number(id));

    return HttpResponse.json(article);
  }),
];

async function sleep(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

//
//
//
//
//
//
//
//
//
//
//

// new라는 키워드를 쓰면 인스턴스(복제본)를 만든다, 클래스 문법이 없었기 때문에 생성자 함수로 만들 때는(인스턴스를 만들 떄는) new 키워드를 만들었었음 (지금은 바뀌었을지도 모름?)

// 쿼리 파라미터가 값 다르고 동일한 이름으로 들어오는 경우 getAll 지금은 get 사용

// url은 string으로 들어오기 때문에 변환해줘야 하는데, searchParams는 스트링 또는 널로 판단하는데 parseInt는 쓸 수 없음 널을 판단할 수 없음 문자열만 받을 수 있기 때문 as ~ 쓸 수 있긴함
