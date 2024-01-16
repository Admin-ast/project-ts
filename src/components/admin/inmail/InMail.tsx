import React from "react";
import Sidebar from "../Sidebar";

type Props = {};

const InMail = (props: Props) => {
  return (
    <div className="">
      <div
        className="from-0%
     to-68% h-[78px] w-full bg-gradient-to-b  from-[#ee6522cc] to-[#d12627cc]"
      ></div>
      <div className="lg:flex">
        <div className="lg:w-1/4">
          {" "}
          <Sidebar />
        </div>
        <div className="mt-[45px] lg:w-3/4">
          <div className="flex items-center justify-center ">
            <p className="flex items-center justify-center rounded-[43px] bg-[#dc6563] px-16  font-bold text-white lg:h-[63px] lg:w-[400px]">
              IN MAIL
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InMail;
