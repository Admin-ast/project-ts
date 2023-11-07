import React from "react";
import ReportHistoryCard from "../ReportHistoryCard";
import Sidebar from "../Sidebar";

type Props = {};

const ReportHistory = (props: Props) => {
  return (
    <div className="">
      <div
        className="from-0%
     to-68% 
    
     h-[78px] w-full bg-gradient-to-b  from-[#ee6522cc] to-[#d12627cc] "
      ></div>
      <div className="lg:flex ">
        <div className="lg:w-1/4">
          <Sidebar />
        </div>
        <div className="min-h-screen lg:w-3/4">
          <div className="flex items-center justify-center">
            {" "}
            <span className="mt-[45px] rounded-[43px] bg-[#DC6563] px-16 py-4 text-xl font-bold text-white">
              REPORT HISTORY
            </span>
          </div>
          <div className="mt-[25px] flex items-center justify-center">
            <ReportHistoryCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportHistory;
