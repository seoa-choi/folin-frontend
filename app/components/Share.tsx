import Image from 'next/image';
import { useEffect, useState } from 'react';

const spread = [
  { snsImg: '/images/facebook.png', alt: '페이스북', path: '' },
  { snsImg: '/images/katalk.png', alt: '카카오톡', path: '' },
  { snsImg: '/images/twitter.png', alt: '트위터', path: '' },
];

export default function Share({
  handleShowShare,
}: {
  handleShowShare: () => void;
}) {
  const [currentUrl, setCurentUrl] = useState('');
  const [copyMessage, setCopyMessage] = useState(false);

  // 현재 페이지 url 가져오기
  useEffect(() => {
    setCurentUrl(window.location.href);
  }, []);

  // react-toastify같은 라이브러리로도 모달창 처리 가능하다 함
  // 클립보드 복사 - promise 반환 비동기 함수임
  const handleCopyClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopyMessage(true);

      setTimeout(() => {
        setCopyMessage(false);
      }, 2000);
    } catch (error) {
      console.error('재시도 해주세요');
      alert('재시도 해주세요');
    }
  };

  return (
    <div className="fixed top-0 left-0 bg-[rgba(17,17,17,0.85)] w-full h-full z-100 flex items-center justify-center">
      <div className="fixed w-[288px] h-[199px] max-w-[406px] bg-white p-[12px] rounded-[6px] flex flex-col items-center">
        <div>
          <button
            type="button"
            className="bg-transparent absolute top-[12px] right-[12px] w-[32px] p-[4px]"
            onClick={handleShowShare}
          >
            <Image src="/images/xx.png" alt="close" width={64} height={64} />
          </button>
          <h2 className="my-[20px] text-center font-bold">공유하기</h2>
        </div>
        <div className="flex gap-[24px] mb-[24px]">
          {spread.map((item, i) => (
            <button key={i} type="button" className="bg-transparent">
              <Image src={item.snsImg} alt={item.alt} width={48} height={48} />
            </button>
          ))}
        </div>
        <div className="bg-[#f7f7f7] w-full p-[4px_8px]">
          <input
            className="bg-transparent w-[90%] text-[14px] rounded-[2px]"
            onChange={(e) => setCurentUrl(e.target.value)}
            value={currentUrl}
            readOnly
          />
          {/* outline-2 */}
          <button
            type="button"
            className="bg-transparent"
            onClick={handleCopyClipBoard}
          >
            <Image
              src="/images/clip.png"
              alt="urlIcon"
              width={24}
              height={24}
            />
          </button>
        </div>
        {/* 클립보드 복사 메시지 창 */}
        {copyMessage && (
          <div
            className={`w-full h-[64px] bg-[rgb(17,17,17)] rounded-[6px] text-white text-[12px] text-center leading-[64px] absolute left-[50%] top-[50%] translate-[-50%] transition-all duration-500 ${
              copyMessage ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
            }
`}
          >
            <p>링크가 복사되었습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
}
