import React, {Key, useState} from "react";
import HistoryCard from "../HistoryCard";
import Sidebar from "../Sidebar";
import { getFetcher } from "@/service";
import { useEffect } from "react";


type Props = {
  getusercalls:any;
};
const CallingHistory = ({getusercalls}: Props) => {
    


  return (
    <div className="">
      <div
        className="h-[78px]
     w-full bg-[#d12627cc]"
      ></div>
      <div className="lg:flex">
        <div className="lg:w-1/4">
          <Sidebar />
        </div>
        <div className="mt-[45px] text-center lg:w-3/4">
          {" "}
          <span className="mt-[45px] rounded-[43px] bg-[#CF2927]  px-16 py-4 text-xl font-bold text-white lg:px-[300px]">
            CALLING HISTORY
          </span>
          <div className="mt-[30px] grid gap-[45px] md:grid-cols-2 lg:grid-cols-3 ">
            {console.log(getusercalls[0].start.slice(0,10))}
            
          {getusercalls.map((item: any, index: Key) => (
           

                
<div className="shadow-2xl ">
              <HistoryCard
              key={index}
                New="New"
                country={item?.country}
                offer="Offer Applied"
                order={item?._id}
                name={item?.name}
                rs={item?.amount}
                gender={item?.gender}
                dob={item?.dateofbirth}
                pob={item?.birthplace}
                copy="copy"
                orderDate={item?.start.slice(0,10)}
                orderTime={item?.start.slice(11,19)}
                duration={item?.duration}
                rate={item?.rate}
                status={item?.status}
                btn1="Suggest Remedy"
                btn2="Refund Amount"
                btn3="Open Kundli"
              />
            
                  </div>
             
            
            ))};
            
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallingHistory;
