// components/RatingCard.tsx
import React from "react";
import StarRating from "./StarRating";
import Image from "next/image";

interface RatingCardProps {
  rating: number;
  totalRating: number;
}

const RatingCard = ({ rating, totalRating }: RatingCardProps) => {
  const visual = [5,4,3,2,1];
  return (
    <div className="bg-white px-8">
      <p className="text-[30px] font-bold">Rating & Review</p>
      <div className="gap-[18px] md:flex lg:flex">
        <div className="">
          <p className="text-center text-[42px] font-bold">{rating}</p>

          <StarRating rating={rating} />

          <p className="text-center text-[#A9A9A9]">{totalRating} total</p>
        </div>
        <div className="">
          {visual.map((visualnumber) => 
          <div>
          {visualnumber === 1 ?
            <div className="flex gap-[13px] mt-1 ml-1">
            <p className="text-[24px] font-bold">{visualnumber}</p>
            <Image
              src= {Math.round(rating) === visualnumber ? "/assets/talk-to-astrologer/line5.png" : "/assets/talk-to-astrologer/line.png" } 
              alt="chat"
              width={265}
              height={15}
            />
          </div>
          :
          <div className="flex gap-[10px] mt-1 ">
            <p className="text-[24px] font-bold">{visualnumber}</p>
            <Image
              src= {Math.round(rating) === visualnumber ? "/assets/talk-to-astrologer/line5.png" : "/assets/talk-to-astrologer/line.png" } 
              alt="chat"
              width={265}
              height={15}
            />
          </div>
          }
          </div>
          )}
          
          
          
          
          
        </div>
      </div>
    </div>
  );
};

export default RatingCard;
