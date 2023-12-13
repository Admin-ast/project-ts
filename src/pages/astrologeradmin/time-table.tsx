import Sidebar from "@/components/admin/Sidebar";
import Timetable from "@/components/admin/Time-Table/Table";
import React from "react";

type Props = {};

const TimeTable = (props: Props) => {
  return (
    <div className="">
      <div
        className="from-0%
 to-68% h-[78px] w-full bg-gradient-to-b  from-[#ee6522cc] to-[#d12627cc]"
      ></div>
      <div className="bg-[url('/assets/horoscope-bg.webp')] md:flex lg:flex">
        <Sidebar />
        <Timetable />
      </div>
    </div>
  );
};

export default TimeTable;
