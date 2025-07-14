import Image from 'next/image';
import Link from 'next/link';

type LinkerDb = {
  affiliation: string;
  author: string;
  comment: string;
  created_at: string;
  image_url: string;
  keywords: string;
  linker_id: number;
};

export default function SearchLinker({ linkerDb }: { linkerDb: LinkerDb[] }) {
  return (
    <div className="mb-[104px]">
      <ul className="w-full grid grid-cols-6 gap-[40px_8px] max-sm:grid-cols-2">
        {linkerDb.map((item, i) => (
          <li key={i} className="w-[calc(100%-16px)]">
            <Link
              href={`/linker/${item.linker_id}`}
              className="flex flex-col items-center text-center gap-[16px_0]"
            >
              {/* {`http://localhost:3001/${item.image_url}`} */}
              <Image
                src={`${process.env.NEXT_PUBLIC_API_URL}/${item.image_url}`}
                alt={item.affiliation ? item.affiliation : item.author}
                width={96}
                height={96}
                priority
                className="rounded-[50%]"
              />
              <div>
                <p className="text-[18px] font-bold mb-[4px]">{item.author}</p>
                <p>{item.affiliation}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      {/* <Pagination
        page={page}
        totalPage={totalPage}
        handlePageChange={handlePageChange}
      /> */}
    </div>
  );
}
