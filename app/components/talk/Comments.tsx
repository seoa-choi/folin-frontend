import CommentAdd from '@/app/components/talk/CommentAdd';
import CommentList from '@/app/components/talk/CommentList';
import { useState } from 'react';

type Cmt = {
  id: number;
  p: string;
  profile: string;
  name: string;
  rating: number;
};

export default function Comments() {
  const [comments, setComments] = useState<Cmt[]>([]);

  return (
    <div className="border-b border-b-[#00d48d] mb-[72px]">
      <div className="flex gap-[7px]">
        <h3>후기</h3>
        <span>{comments.length}개</span>
      </div>
      {/* 별점, 코멘트 */}
      <CommentAdd comments={comments} setComments={setComments} />
      <CommentList comments={comments} setComments={setComments} />
      <div className="h-[70px]"></div>
    </div>
  );
}
