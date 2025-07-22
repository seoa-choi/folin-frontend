'use client';

import Chatbot from '@/app/components/chatbot/Chatbot';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';

// 사용자 UI렌더링, 사용자의 입력을 받아 route.ts에 요청하고, 응답을 받아 화면에 출력
export default function ChatPage() {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<{ user: string; bot: string }[]>([]);
  const [isClose, setIsClose] = useState(false);

  const mutation = useMutation({
    mutationFn: async (message: string) => {
      const res = await fetch('api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });
      return res.json();
    },
    onSuccess: (data) => {
      // 전송된 메시지와 응답을 함께 기록
      setMessages((prev) => [
        ...prev,
        { user: inputValue, bot: data.response },
      ]);
      // 입력창 초기화
      setInputValue('');
    },
    onError: (error) => {
      console.error('error', error);
    },
  });

  function sendMessage() {
    if (!inputValue.trim()) return;
    mutation.mutate(inputValue);
  }

  function handleClose() {
    setIsClose(!isClose);
  }
  return (
    <>
      <button
        type="button"
        className="fixed bottom-[12px] right-[12px] w-[50px] h-[50px] bg-[url(/images/icon_144.png)] bg-cover bg-no-repeat rounded-[6px] z-10000000"
        onClick={handleClose}
      ></button>
      {isClose && (
        <Chatbot
          inputValue={inputValue}
          setInputValue={setInputValue}
          messages={messages}
          sendMessage={sendMessage}
          isLoading={mutation.isPending}
          handleClose={handleClose}
        />
      )}
    </>
  );
}
