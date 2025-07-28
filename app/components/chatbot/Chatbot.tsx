import Image from 'next/image';
import { Dispatch, SetStateAction, useEffect, useRef } from 'react';

export default function Chatbot({
  inputValue,
  setInputValue,
  messages,
  sendMessage,
  // isLoading,
  // handleClose,
  setIsClose,
}: {
  inputValue: string;
  setInputValue: (str: string) => void;
  messages?: { user: string; bot: string }[] | undefined;
  sendMessage: () => void;
  // isLoading: boolean;
  // handleClose: () => void;
  setIsClose: Dispatch<SetStateAction<boolean>>;
}) {
  const chatbotRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const chatbot = chatbotRef.current;
    if (chatbot) {
      // scrollHeight 실제 콘텐츠 높이
      chatbot.scrollTop = chatbot.scrollHeight;
    }
    return;
  }, [messages]);

  return (
    <div className="chatbot max-w-[400px] h-[500px] bg-[#ebedec] fixed w-full bottom-[50%] right-[12px] translate-y-[50%] rounded-[6px] z-1000000 border border-[#00d48d] overflow-hidden max-sm:w-[94%] max-sm:mx-auto">
      <div className="flex justify-between items-center p-[10px]">
        <h2 className="px-[12px]">OpenAi chatbot</h2>
        <button
          type="button"
          className="bg-white rounded-[50%]"
          onClick={() => setIsClose(false)}
        >
          <Image
            src="/images/x.png"
            alt="닫기"
            width={32}
            height={32}
            loading="lazy"
          />
        </button>
      </div>
      {/* 대화 */}
      <div
        ref={chatbotRef}
        className="overflow-y-scroll h-[calc(100%-70px)] pb-[60px]"
      >
        {messages?.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-end gap-[5px] px-[20px] mb-[10px] font-[SUITE]"
          >
            <p className="p-[4px_16px] bg-[#111] text-white rounded-[12px] break-words">
              {item.user}
            </p>
            <p className="p-[4px_20px] bg-[#00d48d] rounded-[12px] w-full h-auto">
              {item.bot}
            </p>
          </div>
        ))}
      </div>

      {/* 메시지 입력 부분 */}
      <form
        className={`absolute left-0 bottom-0 flex justify-between items-center px-[20px] py-[10px] w-full bg-white rounded-[0px_0px_6px_6px]}`}
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage();
        }}
      >
        <input
          type="text"
          placeholder="메시지를 입력해 주세요"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="h-[40px] w-[80%] border-none bg-white caret-[#00d48d] placeholder:text-[#111]"
        ></input>
        <button
          type="submit"
          className="w-[20%] h-[40px] bg-[#111] text-white rounded-[6px]"
        >
          전송
        </button>
      </form>
    </div>
  );
}
