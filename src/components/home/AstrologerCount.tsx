import React from "react";

type Props = {
  count1: string;
  total1: string;
  count2: string;
  total2: string;
  count3: string;
  total3: string;
};

const AstrologerCount = ({
  count1,
  total1,
  count2,
  total2,
  count3,
  total3,
}: Props) => {
  return (
    <div className="mt-[50px] flex items-center justify-center bg-gradient-to-b from-[#ffd491] to-[#aa6d34] py-2 md:gap-[50px] lg:gap-[141px] ">
      <div className="">
        <p className="text-[20px] font-bold text-white md:text-[36px] lg:text-[50px]">
          {count1}
        </p>
        <p className="font-bold text-white md:text-[22px] lg:text-[30px]">
          {total1}
        </p>
      </div>
      <div className="">
        <p className="text-[20px] font-bold text-white md:text-[36px] lg:text-[50px]">
          {count2}
        </p>
        <p className="font-bold text-white md:text-[22px] lg:text-[30px]">
          {total2}
        </p>
      </div>
      <div className="">
        <p className="text-[20px] font-bold text-white md:text-[36px] lg:text-[50px]">
          {count3}
        </p>
        <p className="font-bold text-white md:text-[22px]  lg:text-[30px]">
          {total3}
        </p>
      </div>
    </div>
  );
};

export default AstrologerCount;
