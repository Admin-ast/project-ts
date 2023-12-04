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
    <div id="" className="flex w-full flex-row items-start">
      <div className=" bg-50%_50% flex flex w-full flex-col items-start  justify-center  bg-gradient-to-b from-[#ffd491]  to-[#aa6d34] bg-cover bg-no-repeat py-4 bg-blend-normal mix-blend-hard-light md:flex-row lg:px-20">
        <div className=" p-4 sm:w-full md:w-1/3">
          <div className=" text-center font-sans text-3xl font-bold text-white">
            15,462+
          </div>
          <div className="text-center font-sans text-xl font-bold text-white">
            Total Astrologers
          </div>
        </div>

        <div className="  p-4 sm:w-full  md:w-1/3">
          <div className=" text-center font-sans text-3xl font-bold text-white">
            15,462+
          </div>
          <div className="text-center font-sans text-xl font-bold text-white">
            Total Astrologers
          </div>
        </div>

        <div className="  p-4 sm:w-full  md:w-1/3">
          <div className=" text-center font-sans text-3xl font-bold text-white">
            15,462+
          </div>
          <div className="text-center font-sans text-xl font-bold text-white">
            Total Astrologers
          </div>
        </div>
      </div>
    </div>
  );
};

export default AstrologerCount;
