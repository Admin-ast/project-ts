// pages/index.tsx
import React from "react";
import RatingCard from "./RatingCard";
import Section from "../Section";

const Rating = () => {
  return (
    <div className="">
      <div className="rounded-[15px] border-[1px] border-[#DC6563] py-4">
        <RatingCard rating={4.93} totalRating={1178} />
      </div>
    </div>
  );
};

export default Rating;
