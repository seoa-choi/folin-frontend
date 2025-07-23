import { NextResponse } from 'next/server';

// API 엔드포인트 제공, 프론트로부터 요청(POST)을 받아 FastAPI로 전달 후 결과 응답
export async function POST(request: Request) {
  const { message } = await request.json();

  const res = await fetch(`${process.env.NEXT_PUBLIC_FASTAPI_URL}/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message }),
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error(`Server responded with ${res.status}: ${errorText}`);
    return NextResponse.json({ error: errorText }, { status: res.status });
  }

  const data = await res.json();
  return NextResponse.json(data);
}
