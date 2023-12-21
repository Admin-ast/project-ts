"use client";
import React, { Key } from "react";
import WaitListCard from "./WaitListCard";
import Sidebar from "./Sidebar";

type Props = {
  calls:any
};

const WaitList = ({calls}: Props) => {

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
        <div className="min-h-screen lg:w-3/4">
          <div className="flex items-center justify-center">
            {" "}
            <span className="px:16px mt-[45px] rounded-[43px] bg-[#CF2927] py-4 text-xl font-bold text-white lg:px-[300px]">
              WAIT-LIST
            </span>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 ">
            {/* <div className="  "> */}
            
            {calls.map((item:any, index: Key) => (

            
            <WaitListCard
              name={item?.name}
              id={item?._id}
              date={item?.waitingStart.slice(0,10)}
              time={item?.waitingStart.slice(11,19)}
              type={item?.type}
              token="1"
              status={item?.status}
              duration={item?.duration} 
              btn1="Start Offline Session"
            />
            ))}
            <WaitListCard
              name="Nikita"
              id={245674}
              date="23 Jul 2023"
              time="7:33PM"
              type="Call"
              token="1"
              status="Waiting"
              duration="5 min"
              btn1="Start Offline Session"
            />

            <WaitListCard
              name="Nikita"
              id={245674}
              date="23 Jul 2023"
              time="7:33PM"
              type="Call"
              token="1"
              status="Waiting"
              duration="5 min"
              btn1="Start Offline Session"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitList;
