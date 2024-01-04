import React from "react";

type Props = {};

const TodayPanchng = (props: Props) => {
  return (
    <div className="w-[20%] bg-white py-[15px] shadow-xl">
      <div className="flex items-center justify-center rounded-t-[6px] bg-[#DC6563]">
        <p className="text-center font-bold text-white">Panchang</p>
      </div>
      <div className="text-center">
        <p className="py-[8px] text-[12px] font-bold">
          New Delhi, India (18 December, 2023)
        </p>
        <div className="border-b-[1px] border-[#D9D9D9]"></div>
        <div className="flex justify-center py-[8px]">
          <p className="text-[12px] font-bold">Tithi:</p>
          <p className="text-[12px] ">Shukla Shashti upto 15:15:40</p>
        </div>
        <div className="flex justify-center">
          <p className="text-[12px] font-bold">Month Amanta: </p>
          <p className="text-[12px] ">Shukla Shashti upto 15:15:40 </p>
        </div>
        <div className="flex justify-center py-[8px]">
          <p className="text-[12px] font-bold">Month Purnimata:</p>
          <p className="text-[12px] ">Shukla Shashti upto 15:15:40 </p>
        </div>
        <div className="flex justify-center pb-[8px]">
          <p className="text-[12px] font-bold">Day:</p>
          <p className="text-[12px] ">Shukla Shashti upto 15:15:40 </p>
        </div>
        <div className="border-b-[1px] border-[#D9D9D9]"></div>
        <div className="flex justify-center py-[8px]">
          <p className="text-[12px] font-bold">Tithi:</p>
          <p className="text-[12px] ">Shukla Shashti upto 15:15:40 </p>
        </div>
        <div className="flex justify-center">
          <p className="text-[12px] font-bold">Month Amanta: </p>
          <p className="text-[12px] ">Shukla Shashti upto 15:15:40 </p>
        </div>
        <div className="flex justify-center py-[8px]">
          <p className="text-[12px] font-bold">Month Purnimata:</p>
          <p className="text-[12px] ">Shukla Shashti upto 15:15:40 </p>
        </div>
        <div className="flex items-center justify-center">
          <button className="rounded-[2px] bg-gradient-to-b from-[#fb7038] to-[#FF0600] px-2 py-1 text-[12px] font-semibold text-white">
            Today Panchang
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodayPanchng;
