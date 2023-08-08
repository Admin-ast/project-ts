import React from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import { FaToggleOn } from "react-icons/fa";
import Toggler from "../Toggler";

type Props = {};

const Icons = (props: Props) => {
  return (
    <div className="rounded-[5px] border-[1px] border-[#D9D9D9] shadow-xl ">
      <div className="flex items-center justify-center gap-4  py-4">
        <p className="rounded-[5px] bg-[#CA2127] py-1 px-10 text-base font-bold text-white">
          Auto boost your profile
        </p>
        <AiFillInfoCircle className="text-[30px]" />
      </div>
      <div className="flex items-center justify-between px-5 py-2">
        <div className="flex items-center gap-5">
          <img src="/assets/admin/call.png" alt="" />
          <p className="">Call</p>
        </div>

        <Toggler label="" />
      </div>
      <div className="border-b-[1px] border-[#D9D9D9]"></div>
      <div className="flex items-center justify-between px-5 py-2">
        <div className="flex items-center gap-5">
          <img src="/assets/admin/chat.png" alt="" />
          <p className="">Chat</p>
        </div>

        <Toggler label="" />
      </div>
      <div className="border-b-[1px] border-[#D9D9D9]"></div>
      <div className="flex items-center justify-between px-5 py-2">
        <div className="flex items-center gap-5">
          <img src="/assets/admin/report.png" alt="" />
          <p className="">Report</p>
        </div>

        <Toggler label="" />
      </div>
      <div className="border-b-[1px] border-[#D9D9D9]"></div>
    </div>
  );
};

export default Icons;
