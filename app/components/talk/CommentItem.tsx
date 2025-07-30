import StarRating from '@/app/components/talk/StarRating';
import Image from 'next/image';
import { Dispatch, SetStateAction, useState } from 'react';

type Cmt = {
  id: number;
  p: string;
  profile: string;
  name: string;
  rating: number;
};

export default function CommentItem({
  comments,
  setComments,
  comment,
}: {
  comments: Cmt[];
  setComments: Dispatch<SetStateAction<Cmt[]>>;
  comment: Cmt;
}) {
  const [, setRating] = useState(0);
  const [isEdit, setIsEdit] = useState(false);
  const [modify, setModify] = useState(comment.p);
  console.log(comments);

  function handleDelete() {
    setComments(comments.filter((co) => co.id !== comment.id));
  }

  function handleEdit() {
    if (modify.trim() === '') {
      alert('수정사항을 입력해 주세요');
      return;
    }
    if (!comment.id) return;

    if (isEdit) {
      setComments(
        comments.map((co) => (co.id === comment.id ? { ...co, p: modify } : co))
      );
    }
    setIsEdit(!isEdit);
  }

  return (
    <li className="border-t border-t-[#ebedec] py-[24px]">
      <div className="flex flex-col gap-[12px]">
        <StarRating rating={comment.rating} setRating={setRating} readonly />
        {isEdit ? null : <p>{comment.p}</p>}
        {isEdit && (
          <textarea
            value={modify}
            onChange={(e) => setModify(e.target.value)}
            className="bg-transparent"
          ></textarea>
        )}
        <div className="flex items-center justify-between">
          <div className="flex gap-[12px] items-center">
            <div>
              <Image
                src="/images/profile_n.png"
                alt="프로필"
                width={26}
                height={26}
                className="rounded-[50%]"
                loading="lazy"
              />
            </div>
            <div className="">
              <span className="block h-[26px]">{comment.name}</span>
            </div>
          </div>
          <div className="p-[7px_12px] flex gap-[12px]">
            <button
              type="button"
              className="bg-transparent text-[12px]"
              onClick={handleEdit}
            >
              {isEdit ? '완료' : '수정'}
            </button>
            <button
              type="button"
              className="bg-transparent text-[12px] text-[#e74c3c]"
              onClick={handleDelete}
            >
              삭제
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
