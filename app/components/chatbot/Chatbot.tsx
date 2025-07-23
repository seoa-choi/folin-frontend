import Image from 'next/image';

export default function Chatbot({
  inputValue,
  setInputValue,
  messages,
  sendMessage,
  // isLoading,
  handleClose,
}: {
  inputValue: string;
  setInputValue: (str: string) => void;
  messages?: { user: string; bot: string }[] | undefined;
  sendMessage: () => void;
  // isLoading: boolean;
  handleClose: () => void;
}) {
  return (
    <div className="max-w-[400px] h-[500px] bg-white fixed w-full bottom-[102px] right-[12px] rounded-[6px] z-1000000 border border-[#00d48d] overflow-hidden overflow-y-scroll scroll pr-[10px] scroll-p-0">
      <div className="flex justify-between items-center p-[10px]">
        <h2 className="px-[12px] text-[20px] font-semibold font-[SUITE]">
          궁금한게 있으신가요?
        </h2>
        <button type="button" className="bg-white" onClick={handleClose}>
          <Image src="/images/x.png" alt="닫기" width={32} height={32} />
        </button>
      </div>
      {/* 대화 */}
      {messages?.map((item, i) => (
        <div
          key={i}
          className="flex flex-col items-end gap-[5px] px-[20px] mb-[10px] font-[SUITE]"
        >
          <p className="p-[4px_16px] bg-[#111] text-white rounded-[12px]">
            {item.user}
          </p>
          <p className="p-[4px_20px] bg-[#00d48d] rounded-[12px] w-full h-auto">
            {item.bot}
          </p>
        </div>
      ))}

      {/* 메시지 입력 부분 */}
      <form
        className="absolute left-0 bottom-0 flex justify-between items-center p-[10px] w-full bg-white rounded-[0px_0px_6px_6px]"
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage();
        }}
      >
        <input
          type="text"
          placeholder="메시지를 입력해 주세요 💬"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="h-[40px] w-[80%] border-none bg-white caret-[#00d48d] placeholder:text-[#111]"
        ></input>
        <button
          type="submit"
          className="w-[18%] h-[40px] bg-[#111] text-white rounded-[6px]"
        >
          전송
        </button>
      </form>
    </div>
  );
}
