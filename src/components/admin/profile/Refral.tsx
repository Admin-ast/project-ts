import React from "react";

type Props = {
  code: string;
};

const Refral = ({ code }: Props) => {
  return (
    <div className="flex items-center justify-center py-[25px]">
      <div className="">
        <p className="text-center font-bold text-[#A9A9A9]">
          YOUR REFERRAL CODE
        </p>
        <div className="flex h-[52px] w-[237px] items-center justify-center rounded-[43px] bg-[#eca9a9]">
          <p className="text-[#DC6563]">{code}</p>
        </div>
      </div>
    </div>
  );
};

export default Refral;
