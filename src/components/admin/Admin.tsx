import React from "react";
import Sidebar from "./Sidebar";
import Card from "./Card";
import Table from "./Table";
import TimeTable from "./TimeTable";

import MultipleWork from "./MultipleWork";
import CeoMsgs from "./dashboard footer/CeoMsgs";
import Icons from "./dashboard footer/Icons";

const Admin = () => {
  return (
    <div className="">
      <div
        className="from-0%
     to-68% h-[78px] w-full bg-gradient-to-b  from-[#ee6522cc] to-[#d12627cc]"
      ></div>
      <div className="lg:flex ">
        <div className="lg:w-1/4">
          <Sidebar />
        </div>
        <div className="mt-[30px] h-screen  overflow-y-auto px-4 lg:w-3/4">
          <Card />
          <Table />

          <div className="border-b-[2px] border-[#D9D9D9] p-2"></div>
          <TimeTable />
          <MultipleWork />
          <div className="lg:flex  ">
            <div className="lg:w-2/3">
              <CeoMsgs />
            </div>
            <div className="px-5 lg:w-1/3">
              {" "}
              <Icons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
