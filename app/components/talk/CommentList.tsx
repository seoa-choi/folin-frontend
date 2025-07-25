import CommentItem from '@/app/components/talk/CommentItem';
import { Dispatch, SetStateAction } from 'react';

type Cmt = {
  id: number;
  p: string;
  profile: string;
  name: string;
  rating: number;
};

export default function CommentList({
  comments,
  setComments,
}: {
  comments: Cmt[];
  setComments: Dispatch<SetStateAction<Cmt[]>>;
}) {
  return (
    <ul>
      {comments.map((cmt) => (
        <CommentItem
          key={cmt.id}
          comments={comments}
          setComments={setComments}
          comment={cmt}
        />
      ))}
    </ul>
  );
}
