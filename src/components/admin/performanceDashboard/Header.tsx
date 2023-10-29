import Image from "next/image";
import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import PerformanceInformation from "./PerformanceInformation";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="">
      <div className="mt-[15px] flex items-center justify-center gap-2 ">
        <p className=" rounded-[43px]   font-[Roboto] text-[24px] font-bold  ">
          Performance Dashboard
        </p>
        <PerformanceInformation />
      </div>
      <div className="mt-[10px] flex items-center justify-center gap-1">
        <button className="rounded-[3px] bg-[#D9D9D9] px-2 py-[1px] text-[14px]">
          No Label
        </button>
        <p className="text-[12px] text-[#00AF1C]">How do i get this label?</p>
      </div>
      <div className="mt-[24px] flex items-center justify-center ">
        <button className="rounded-[11px] bg-[#E6999D] px-2 font-bold">
          Last 30 days availability
        </button>
      </div>
      <div className="mt-[45px] flex items-center justify-center gap-[41px]">
        <div className="flex gap-[1px]">
          <Image
            src="/assets/astrologer-admin/red.svg"
            alt="red"
            height={18}
            width={18}
          />
          <p className="text-[#A9A9A9]">Poor</p>
        </div>
        <div className="flex gap-[1px]">
          <Image
            src="/assets/astrologer-admin/yellow.svg"
            alt="red"
            height={18}
            width={18}
          />
          <p className="text-[#A9A9A9]">Average</p>
        </div>
        <div className="flex gap-[1px]">
          <Image
            src="/assets/astrologer-admin/green.svg"
            alt="red"
            height={18}
            width={18}
          />
          <p className="text-[#A9A9A9]">Excellent</p>
        </div>
      </div>
      <div className="px-4">
        <p className="text-[24px] font-bold">Profile Performance</p>
      </div>
    </div>
  );
};

export default Header;
