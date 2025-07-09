// import Image from 'next/image';
import Link from 'next/link';

export default function SearchLinker() {
  return (
    <div>
      {' '}
      <ul className="w-full grid grid-cols-3 gap-[40px_8px] max-sm:grid-cols-2">
        {/* {noComment.map((item) => ( */}
        {/* key={item.linker_id}  */}
        <li className="w-[calc(100%-16px)]">
          {/* {`/linker/${item.linker_id}`} */}
          <Link
            href=""
            className="flex flex-col items-center text-center gap-[16px_0]"
          >
            {/* {`http://localhost:3001/${item.image_url}`}
              {item.author} */}
            {/* <Image
              src=""
              alt=""
              width={96}
              height={96}
              priority
              className="rounded-[50%]"
            /> */}
            <div>
              <p className="text-[18px] font-bold mb-[4px]">
                {/* {item.author} */}
              </p>
              <p>{/* {item.affiliation} */}</p>
            </div>
          </Link>
        </li>
        {/* ))} */}
      </ul>
      {/* <Pagination
        page={page}
        totalPage={totalPage}
        handlePageChange={handlePageChange}
      /> */}
    </div>
  );
}
