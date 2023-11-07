import Sidebar from "@/components/admin/Sidebar";
import Card from "@/components/admin/performanceDashboard/Card";
import CardBoard from "@/components/admin/performanceDashboard/CardBoard";
import Header from "@/components/admin/performanceDashboard/Header";
import PerformanceInformation from "@/components/admin/performanceDashboard/PerformanceInformation";
import React from "react";

type Props = {};

const performanceDashboard = (props: Props) => {
  return (
    <div className="bg-[url('/assets/horoscope-bg.webp')]">
      <div
        className="h-[78px]
     w-full bg-[#d12627cc]"
      ></div>
      <div className="lg:flex">
        <div className="lg:w-1/4">
          <Sidebar />
        </div>
        <div className="mt-[45px] lg:w-3/4">
          <div className="grid  items-center justify-center gap-10 md:flex lg:flex ">
            <p className="flex items-center justify-center rounded-[43px] bg-[#CF2927] px-16 font-[Roboto] text-[18px] font-bold text-white md:text-[24px] lg:h-[63px] lg:text-[24px] ">
              Performance Dashboard
            </p>
          </div>
          <div className="w-full">
            <Header />
            <CardBoard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default performanceDashboard;
