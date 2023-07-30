import React from "react";
import Sidebar from "../Sidebar";
import MyFollowerCard from "./MyFollowerCard";

type Props = {};

const MyFollower = (props: Props) => {
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
        <div className="mt-[45px] lg:w-3/4">
          <div className="grid items-center justify-center gap-2 gap-10 md:flex lg:flex ">
            <p className="border-[ border-2 bg-[#D9D9D9] px-5 py-2">
              Number of Followers:767
            </p>
            <p className="flex items-center justify-center rounded-[43px] bg-[#CF2927] px-16  font-bold text-white lg:h-[63px] lg:w-[400px]">
              MY FOLLOWERS
            </p>
          </div>
          <div className="mt-[30px] grid gap-[15px] px-5 md:grid-cols-3 lg:grid-cols-4">
            <MyFollowerCard name="Pri" id={1234567890} date="Apr 14,2023" />
            <MyFollowerCard name="Pri" id={1234567890} date="Apr 14,2023" />
            <MyFollowerCard name="Pri" id={1234567890} date="Apr 14,2023" />
            <MyFollowerCard name="Pri" id={1234567890} date="Apr 14,2023" />
            <MyFollowerCard name="Pri" id={1234567890} date="Apr 14,2023" />
            <MyFollowerCard name="Pri" id={1234567890} date="Apr 14,2023" />
            <MyFollowerCard name="Pri" id={1234567890} date="Apr 14,2023" />
            <MyFollowerCard name="Pri" id={1234567890} date="Apr 14,2023" />
            <MyFollowerCard name="Pri" id={1234567890} date="Apr 14,2023" />
            <MyFollowerCard name="Pri" id={1234567890} date="Apr 14,2023" />
            <MyFollowerCard name="Pri" id={1234567890} date="Apr 14,2023" />
            <MyFollowerCard name="Pri" id={1234567890} date="Apr 14,2023" />
            <MyFollowerCard name="Pri" id={1234567890} date="Apr 14,2023" />
            <MyFollowerCard name="Pri" id={1234567890} date="Apr 14,2023" />
            <MyFollowerCard name="Pri" id={1234567890} date="Apr 14,2023" />
            <MyFollowerCard name="Pri" id={1234567890} date="Apr 14,2023" />
            <MyFollowerCard name="Pri" id={1234567890} date="Apr 14,2023" />
            <MyFollowerCard name="Pri" id={1234567890} date="Apr 14,2023" />
            <MyFollowerCard name="Pri" id={1234567890} date="Apr 14,2023" />
            <MyFollowerCard name="Pri" id={1234567890} date="Apr 14,2023" />
            <MyFollowerCard name="Pri" id={1234567890} date="Apr 14,2023" />
            <MyFollowerCard name="Pri" id={1234567890} date="Apr 14,2023" />
            <MyFollowerCard name="Pri" id={1234567890} date="Apr 14,2023" />
            <MyFollowerCard name="Pri" id={1234567890} date="Apr 14,2023" />
            <MyFollowerCard name="Pri" id={1234567890} date="Apr 14,2023" />
            <MyFollowerCard name="Pri" id={1234567890} date="Apr 14,2023" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFollower;
