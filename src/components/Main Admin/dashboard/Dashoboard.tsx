import React from "react";
import Sidebar from "./Sidebar";
import HeaderCard from "./HeaderCard";

type Props = {};

const Dashoboard = (props: Props) => {
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
        <div className="">
          <HeaderCard />
        </div>
      </div>
    </div>
  );
};

export default Dashoboard;
