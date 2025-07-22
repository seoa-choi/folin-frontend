import { NextResponse } from 'next/server';

// API 엔드포인트 제공, 프론트로부터 요청(POST)을 받아 FastAPI로 전달 후 결과 응답
export async function POST(request: Request) {
  const { message } = await request.json();

  const res = await fetch('http://api.seoachoiaws.com/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message }),
  });

  const data = await res.json();
  return NextResponse.json(data);
}
