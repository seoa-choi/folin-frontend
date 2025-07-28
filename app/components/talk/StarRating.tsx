import Image from 'next/image';
import { useState } from 'react';

export default function StarRating({
  rating,
  setRating,
  readonly = false,
}: {
  rating: number;
  setRating: (rating: number) => void;
  readonly?: boolean | undefined;
}) {
  const [hoveredStar, setHoveredStar] = useState(0);

  const totalStar = 5;

  return (
    <div className="flex cursor-pointer">
      {Array.from({ length: totalStar }, (_, index) => {
        const starNumber = index + 1;
        const isFilled = starNumber <= (hoveredStar || rating);

        return (
          <Image
            key={starNumber}
            src={isFilled ? '/images/star_g.png' : '/images/star.png'}
            alt={`star${starNumber}`}
            width={32}
            height={32}
            loading="lazy"
            onMouseEnter={() => !readonly && setHoveredStar(starNumber)}
            onMouseLeave={() => !readonly && setHoveredStar(0)}
            onClick={() => !readonly && setRating(starNumber)}
          />
        );
      })}
    </div>
  );
}
