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
