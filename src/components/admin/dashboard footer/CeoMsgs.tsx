import { Textarea } from "@/components/forms";
import React from "react";

type Props = {};

const CeoMsgs = (props: Props) => {
  return (
    <div className=" rounded-[5px] border-[1px] border-[#D9D9D9]">
      <div className="bg-[#D9D9D9]  px-5">
        <p className="text-[16px] font-bold">Feedback to CEO Office!</p>
        <p className="text-[12px]">
          Please share your honest review to help us improve
        </p>
      </div>
      <div className="border-l-[20px] border-r-[20px] border-[#D9D9D9]">
        <Textarea placeholder="Type in here" />
      </div>
      <div className="flex flex-row-reverse bg-[#D9D9D9] py-2 px-4">
        <button className="rounded-[19px] bg-[#ca2127] px-4 py-1 text-white">
          Send Feedback
        </button>
      </div>
    </div>
  );
};

export default CeoMsgs;
