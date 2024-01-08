// pages/index.tsx
import React from "react";
import RatingCard from "./RatingCard";
import Section from "../Section";

type Props = {
  averagerating:number,
  totalrating:number
}
const Rating = ({averagerating,totalrating}:Props) => {
  return (
    <div className="">
      <div className="rounded-[15px] border-[1px] border-[#DC6563] py-4">
        <RatingCard rating={averagerating} totalRating={totalrating} />
      </div>
    </div>
  );
};

export default Rating;
