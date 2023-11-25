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
    // <div className="lg:py-[30px] flex items-center justify-center bg-gradient-to-b from-[#ffd491] to-[#aa6d34] py-2 md:gap-[50px] lg:gap-[141px] ">
    //   <div className="">
    //     <p className="text-[20px] font-bold text-white md:text-[30px] lg:text-[30px]">
    //       {count1}
    //     </p>
    //     <p className="font-bold text-white md:text-[20px] lg:text-[20px]">
    //       {total1}
    //     </p>
    //   </div>
    //   <div className="">
    //     <p className="text-[20px] font-bold text-white md:text-[30px] lg:text-[30px]">
    //       {count2}
    //     </p>
    //     <p className="font-bold text-white md:text-[20px] lg:text-[20px]">
    //       {total2}
    //     </p>
    //   </div>
    //   <div className="">
    //     <p className="text-[20px] font-bold text-white md:text-[30px] lg:text-[30px]">
    //       {count3}
    //     </p>
    //     <p className="font-bold text-white md:text-[20px]  lg:text-[20px]">
    //       {total3}
    //     </p>
    //   </div>
    // </div>

    <div id="NewRootRoot" className="flex w-full flex-row items-start">
      <div className="bg-50%_50% flex h-32 w-full flex-row items-start justify-center gap-[203px] bg-gradient-to-b from-[#ffd491] to-[#aa6d34] bg-cover bg-no-repeat pt-8 bg-blend-normal mix-blend-hard-light">
        <div className=" flex w-1/6 flex-col items-start gap-1">
          <div className="ml-8 text-center font-sans text-3xl font-bold text-white">
            15,462+
          </div>
          <div className="text-center font-sans text-xl font-bold text-white">
            Total Astrologers
          </div>
        </div>
        <div className=" flex w-1/6 flex-col items-start gap-1">
          <div className="ml-8 text-center font-sans text-3xl font-bold text-white">
            15,462+
          </div>
          <div className="text-center font-sans text-xl font-bold text-white">
            Total Astrologers
          </div>
        </div>
        <div className=" flex w-1/6 flex-col items-start gap-1">
          <div className="ml-8 text-center font-sans text-3xl font-bold text-white">
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
