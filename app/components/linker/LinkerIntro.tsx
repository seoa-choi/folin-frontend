import Image from 'next/image';
import Link from 'next/link';
import { use } from 'react';

type Linker = {
  linker_id: number;
  comment: string;
  author: string;
  affiliation: string;
  created_at: string;
  image_url: string;
};

export default function LinkerIntro({ data }: { data: Promise<Linker[]> }) {
  // use로 promise해제
  const linkers = use(data);
  // console.log(linkers);

  // 코멘트 있는 링커만
  const filteredLinkers = linkers.filter((linker) => linker.comment);

  // 랜덤 index로
  // const randomIndex = Math.floor(Math.random() * filteredLinkers.length);

  // 랜덤 id로
  const randomId =
    filteredLinkers.length > 0
      ? filteredLinkers[Math.floor(Math.random() * filteredLinkers.length)]
          .linker_id
      : null;

  return (
    <div className="pb-[100px]">
      <div className="mt-[104px] w-[486px] h-[486px] mx-auto">
        <Link href="" className="block relative w-full h-full border">
          {filteredLinkers.map((item) => (
            <Image
              key={item.linker_id}
              src={`http://localhost:3001/${item.image_url}`}
              alt={item.author}
              width={972}
              height={972}
              className={` ${item.linker_id === randomId ? 'block' : 'hidden'}`}
            />
          ))}
        </Link>
        {filteredLinkers
          .filter((item) => item.linker_id === randomId)
          .map((item) => (
            <div key={item.linker_id}>
              <p>{item.comment}</p>
              <h3>{item.author}</h3>
              <p>{item.affiliation}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
