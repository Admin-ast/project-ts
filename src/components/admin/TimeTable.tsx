import Link from "next/link";
import React from "react";

type Props = {};

const TimeTable = (props: Props) => {
  return (
    <div className="mt-[30px]  grid grid-cols-1 gap-[27px]   px-2  md:grid-cols-2 lg:grid-cols-3">
      <div className="shadow-[0px 4px 4px 0px] h-[63px] rounded-[5px] bg-[#D9D9D9] hover:bg-red-700">
        <Link href="/">
          {" "}
          <p className="mt-5 text-center text-lg font-bold ">
            Weekly Time-Table
          </p>{" "}
        </Link>
      </div>
      { /*<div className="shadow-[0px 4px 4px 0px] h-[63px] rounded-[5px] bg-[#D9D9D9] hover:bg-red-700">
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
  </div> */}
    </div>
  );
};

export default TimeTable;
