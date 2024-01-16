import React from "react";
import Sidebar from "../Sidebar";

type Props = {};

const LoyalClubMembers = (props: Props) => {
  return (
    <div className="">
      <div
        className="h-[78px]
     w-full bg-[#d12627cc]"
      ></div>
      <div className="lg:flex">
        <div className="lg:w-1/4">
          {" "}
          <Sidebar />
        </div>
        <div className="mt-[45px] bg-[url('/assets/horoscope-bg.webp')]  lg:w-3/4">
          <div className="flex items-center justify-center ">
            <p className="flex items-center justify-center rounded-[43px] bg-[#CF2927] px-16  font-bold text-white lg:h-[63px] lg:w-[400px]">
              LOYAL CLUB MEMBERS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoyalClubMembers;
