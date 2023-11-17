import React from "react";
import Header from "../chat support/Header";
import ManagementNav from "../ManagementNav";
import Sidebar from "../../dashboard/Sidebar";
import Details from "./Details";
import Table from "./Table";

type Props = {};

const CustomerService = (props: Props) => {
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
        <div className=" lg:w-3/4  ">
          <ManagementNav page="Management" />

          <div className="mt-10 rounded-[10px] border-[1px] border-[#D9D9D9]  lg:flex">
            <div className="lg:w-1/4">
              <Details user={243567} nums1={456} nums2={456} />
            </div>
            <div className="px-4 lg:w-3/4">
              <Table />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerService;
