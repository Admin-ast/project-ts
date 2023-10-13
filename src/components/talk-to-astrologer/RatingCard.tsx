// components/RatingCard.tsx
import React from "react";
import StarRating from "./StarRating";
import Image from "next/image";

interface RatingCardProps {
  rating: number;
  totalRating: number;
}

const RatingCard = ({ rating, totalRating }: RatingCardProps) => {
  return (
    <div className="bg-white px-8">
      <p className="text-[36px] font-bold">Rating & Review</p>
      <div className="gap-[108px] md:flex lg:flex">
        <div className="">
          <p className="text-center text-[42px] font-bold">{rating}</p>

          <StarRating rating={rating} />

          <p className="text-center text-[#A9A9A9]">{totalRating} total</p>
        </div>
        <div className="">
          <div className="flex gap-[10px]">
            <p className="text-[24px] font-bold">5</p>
            <Image
              src="/assets/talk-to-astrologer/line5.png"
              alt="chat"
              width={265}
              height={15}
            />
          </div>
          <div className="mt-[23px] flex gap-[10px]">
            <p className="text-[24px] font-bold">4</p>
            <Image
              src="/assets/talk-to-astrologer/line.png"
              alt="chat"
              width={265}
              height={15}
            />
          </div>
          <div className="mt-[23px] flex gap-[10px]">
            <p className="text-[24px] font-bold">3</p>
            <Image
              src="/assets/talk-to-astrologer/line.png"
              alt="chat"
              width={265}
              height={15}
            />
          </div>
          <div className="mt-[23px] flex gap-[10px]">
            <p className="text-[24px] font-bold">2</p>
            <Image
              src="/assets/talk-to-astrologer/line.png"
              alt="chat"
              width={265}
              height={15}
            />
          </div>
          <div className="mt-[23px] flex gap-[10px]">
            <p className="text-[24px] font-bold">1</p>
            <Image
              src="/assets/talk-to-astrologer/line.png"
              alt="chat"
              width={265}
              height={15}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingCard;
