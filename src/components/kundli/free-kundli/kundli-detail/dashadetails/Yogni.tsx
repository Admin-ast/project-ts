import Section from "@/components/Section";
import React from "react";
import { IoMdArrowDropright } from "react-icons/io";

type Props = {};

const Yogni = (props: Props) => {
  return (
    <div className="mb-20 space-y-20">
      <Section>
        <p className="pb-4">Dhanya</p>
        <div className="">
          <div className="w-full rounded-[10px] border-2 border-[#ccc] text-[#212529]">
            <div className=" flex w-full items-center justify-between rounded-t-[10px] bg-[#ffffe0]">
              <p className="w-[33.33%] border-r-2 border-b-2 border-[#ccc] pb-[10px] pr-[10px] pt-[10px] pl-4">
                Planet
              </p>
              <p className="w-[33.33%] border-r-2 border-b-2 border-[#ccc] pb-[10px] pr-[10px] pt-[10px] pl-4">
                Start Date
              </p>
              <p className="w-[33.33%] border-b-2 border-[#ccc] pb-[10px] pr-[10px] pt-[10px] pl-4">
                End Date
              </p>
            </div>
            <div className="flex w-full items-center justify-between rounded-[10px] rounded-t">
              <p className="w-[33.33%] border-r-2 border-b-2 border-[#ccc] pb-[10px] pr-[10px] pt-[10px] pl-4">
                DWH
              </p>
              <p className="w-[33.33%] border-r-2 border-b-2 border-[#ccc] pb-[10px] pr-[10px] pt-[10px] pl-4">
                20-12-2022
              </p>
              <p className="flex w-[33.33%] items-center justify-between border-b-2 border-[#ccc] pb-[10px] pr-[10px] pt-[10px] pl-4">
                <span>22-22-2000</span>
                <IoMdArrowDropright />
              </p>
            </div>
            <div className="flex w-full items-center justify-between rounded-[10px] rounded-t ">
              <p className="w-[33.33%] border-r-2 border-b-2 border-[#ccc] pb-[10px] pr-[10px] pt-[10px] pl-4">
                DWH
              </p>
              <p className="w-[33.33%] border-r-2 border-b-2 border-[#ccc] pb-[10px] pr-[10px] pt-[10px] pl-4">
                20-12-2022
              </p>
              <p className="flex w-[33.33%] items-center justify-between border-b-2 border-[#ccc] pb-[10px] pr-[10px] pt-[10px] pl-4">
                <span>22-22-2000</span>
                <IoMdArrowDropright />
              </p>
            </div>
            <div className="flex w-full items-center justify-between rounded-[10px] rounded-t ">
              <p className="w-[33.33%] border-r-2  border-[#ccc] pb-[10px] pr-[10px] pt-[10px] pl-4">
                DWH
              </p>
              <p className="w-[33.33%] border-r-2 border-[#ccc] pb-[10px] pr-[10px] pt-[10px] pl-4">
                20-12-2022
              </p>
              <p className="flex w-[33.33%] items-center justify-between  border-[#ccc] pb-[10px] pr-[10px] pt-[10px] pl-4">
                <span>22-22-2000</span>
                <IoMdArrowDropright />
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Yogni;
