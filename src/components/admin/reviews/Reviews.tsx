import React from "react";
import Sidebar from "../Sidebar";
import ReviewCard from "./ReviewCard";
import DetailBox from "./DetailBox";

type Props = {};

const Reviews = (props: Props) => {
  return (
    <div className="">
      <div
        className="h-[78px]
     w-full bg-[#d12627cc]"
      ></div>
      <div className="lg:flex ">
        <div className="lg:w-1/4">
          <Sidebar />
        </div>
        <div className="min-h-screen px-10 lg:w-3/4">
          <div className="mt-[45px] grid items-center justify-center gap-[81px] md:flex lg:flex">
            {" "}
            <button className="rounded-[6px] border-[1px] border-red-700 py-2 lg:px-10">
              Show all reviews
            </button>
            <span className=" rounded-[43px] bg-[#CF2927] px-16 py-4 text-xl font-bold text-white lg:px-[200px]">
              MY REWIES
            </span>
            <button className="rounded-[6px] border-[1px] border-red-700 py-2 lg:px-10">
              My Reviews
            </button>
          </div>
          <DetailBox
            nums={23}
            missNums={10}
            useNums={33 / 60}
            note=" System gives you maximum 60 flags (inclusive the count of missed call & chat) for your review every month. Used balance will get reset every 1st day of the month"
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 ">
            <ReviewCard
              id={123456789}
              name="A"
              Name="Apoorva Mishra"
              service="CALL"
              date="Jul 25,2023"
              desc=""
              text="Reply to this review"
            />
            <ReviewCard
              id={123456789}
              name="A"
              Name="Apoorva Mishra"
              service="CALL"
              date="Jul 25,2023"
              desc="thank you so much mam. i got clarity on this your prediction is true and good sorry balance got over"
              text="Reply to this review"
            />
            <ReviewCard
              id={123456789}
              name="A"
              Name="Apoorva Mishra"
              service="CALL"
              date="Jul 25,2023"
              desc=""
              text="Reply to this review"
            />
            <ReviewCard
              id={123456789}
              name="A"
              Name="Apoorva Mishra"
              service="CALL"
              date="Jul 25,2023"
              desc=""
              text="Reply to this review"
            />
            <ReviewCard
              id={123456789}
              name="A"
              Name="Apoorva Mishra"
              service="CALL"
              date="Jul 25,2023"
              desc=""
              text="Reply to this review"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
