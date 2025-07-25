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
  // comments,
  // setComments,
  comment,
}: {
  comments: Cmt[];
  setComments: Dispatch<SetStateAction<Cmt[]>>;
  comment: Cmt;
}) {
  const [rating, setRating] = useState(0);

  return (
    <li className="border-t border-t-[#ebedec] py-[24px]">
      <div className="flex flex-col gap-[12px]">
        <StarRating rating={comment.rating} setRating={setRating} readonly />
        <p>{comment.p}</p>
        <div className="flex gap-[12px] items-center">
          <div>
            <Image
              src="/images/profile_n.png"
              alt="프로필"
              width={26}
              height={26}
              className="rounded-[50%]"
            />
          </div>
          <div className="">
            <span className="block h-[26px]">{comment.name}</span>
          </div>
        </div>
      </div>
    </li>
  );
}
