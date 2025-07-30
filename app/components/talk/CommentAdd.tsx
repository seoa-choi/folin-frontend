import StarRating from '@/app/components/talk/StarRating';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

type Cmt = {
  id: number;
  p: string;
  profile: string;
  name: string;
  rating: number;
};

export default function CommentAdd({
  // comments,
  setComments,
}: {
  comments: Cmt[];
  setComments: Dispatch<SetStateAction<Cmt[]>>;
}) {
  const idRef = useRef(0);
  const [txt, setTxt] = useState('');
  const [bd, setBd] = useState(false);
  const [bt, setBt] = useState(false);
  const [rating, setRating] = useState(0);

  const isDisabled = txt.length === 0 && rating < 1;

  function handleAdd() {
    if (txt.trim() && rating > 0) {
      idRef.current++;
      const newComment: Cmt = {
        id: idRef.current,
        p: txt,
        rating,
        profile: '/images/profile_n.png',
        name: 'guest' + idRef.current,
      };
      setComments((prev) => [...prev, newComment]);
      setTxt('');
      setBt(false);
      setRating(0);
    } else if (rating < 1) {
      alert('별점을 추가해주세요');
    } else {
      alert('내용을 입력해주세요');
    }
  }

  function handleEnter(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter') handleAdd();
  }

  // 텍스트, 별점 0 이상이면 버튼 활성화
  useEffect(() => {
    setBt(txt.length > 0 && rating > 0);
  }, [txt, rating]);

  return (
    <div className="pt-[16px] pb-[32px]">
      <div className="flex flex-col">
        <div className="mb-[8px] bg-transparent mr-auto">
          {/* 별점 */}
          <StarRating rating={rating} setRating={setRating} />
        </div>

        <div>
          <textarea
            rows={3}
            placeholder="콘텐츠에 대한 의견을 남겨주세요."
            className={`h-[116px] w-full placeholder-[#8e8e8e] placeholder:font-semibold bg-[#f7f7f7] rounded-[6px] p-[12px_16px] outline-1 ${
              bd ? 'outline-[rgb(0,212,141)]' : 'outline-none'
            }`}
            // onChange={(e) => setTxt(e.target.value)}
            onKeyUp={handleEnter}
            onMouseEnter={() => setBd(true)}
            onMouseLeave={() => setBd(false)}
            value={txt} // 상태 바인딩
            onChange={(e) => {
              const value = e.target.value;
              setTxt(value);
              // 텍스트 입력 시 버튼 활성화
              // setBt(value.length > 0);
            }}
          />
        </div>
        <div className="mt-[12px] ml-auto">
          <button
            className={`text-[13px] p-[7px_12px] rounded-[6px] ${
              bt ? 'bg-[#00d48d] text-black' : 'bg-[#ebedec] text-[#bfbfbf]'
            } ${isDisabled ? 'cursor-default' : 'cursor-pointer'}`}
            onClick={handleAdd}
            disabled={isDisabled}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
}
