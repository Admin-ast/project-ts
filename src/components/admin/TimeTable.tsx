import Link from "next/link";
import React, { useState } from "react";
import WeeklyTimeTable from "./weekly-time-table/WeeklyTimeTable";

type Props = {};

const TimeTable = (props: Props) => {
  const [isTimeTableOpen, setIsTimeTableOpen] = useState(false);

  const toggleTimeTable = () => {
    setIsTimeTableOpen(!isTimeTableOpen);
  };
  return (
    <div className="mt-[30px] grid  cursor-pointer grid-cols-1 gap-[27px]   px-2  md:grid-cols-2 lg:grid-cols-3">
      <div
        onClick={toggleTimeTable}
        className="shadow-[0px 4px 4px 0px] h-[63px] rounded-[5px] bg-[#D9D9D9] hover:bg-red-700"
      >
        {" "}
        <p className="mt-5 text-center text-lg font-bold ">
          Weekly Time-Table
        </p>{" "}
        <WeeklyTimeTable
          isOpen={isTimeTableOpen}
          onClose={toggleTimeTable}
          time1=" 00:00 AM - 11:00 AM"
          time2=" 00:00 AM - 11:00 AM"
          time3=" 00:00 AM - 11:00 AM"
          time4=" 00:00 AM - 11:00 AM"
          day1="Monday"
          date1="October 20, 2023"
          day2="Tuesday"
          date2="October 20, 2023"
          day3="Monday"
          date3="October 20, 2023"
          day4="Monday"
          date4="October 20, 2023"
          day5="Monday"
          date5="October 20, 2023"
          day6="Monday"
          date6="October 20, 2023"
          day7="Monday"
          date7="October 20, 2023"
        />
        <div
          className={`fixed top-0 left-0 h-screen w-screen transition-opacity ${
            isTimeTableOpen ? "opacity-50" : "pointer-events-none opacity-0"
          } bg-gray-500`}
        ></div>
      </div>
      <div className="shadow-[0px 4px 4px 0px] h-[63px] rounded-[5px] bg-[#D9D9D9] hover:bg-red-700">
        <Link href="/">
          {" "}
          <p className="mt-5 text-center text-lg font-bold ">
            Weekly Time-Table
          </p>{" "}
        </Link>
      </div>
      <div className="shadow-[0px 4px 4px 0px] h-[63px] rounded-[5px] bg-[#D9D9D9] hover:bg-red-700">
        <Link href="/">
          {" "}
          <p className="mt-5 text-center text-lg font-bold ">
            Weekly Time-Table
          </p>{" "}
        </Link>
      </div>
      <div className="shadow-[0px 4px 4px 0px] h-[63px] rounded-[5px] bg-[#D9D9D9] hover:bg-red-700">
        <Link href="/">
          {" "}
          <p className="mt-5 text-center text-lg font-bold ">
            Weekly Time-Table
          </p>{" "}
        </Link>
      </div>
      <div className="shadow-[0px 4px 4px 0px] h-[63px] rounded-[5px] bg-[#D9D9D9] hover:bg-red-700">
        <Link href="/">
          {" "}
          <p className="mt-5 text-center text-lg font-bold ">
            Weekly Time-Table
          </p>{" "}
        </Link>
      </div>
    </div>
  );
};

export default TimeTable;
