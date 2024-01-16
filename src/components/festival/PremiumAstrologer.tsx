import Image from "next/image";
import React from "react";

type Props = {};

const PremiumAstrologer = (props: Props) => {
  return (
    <div className="bg-[#FFDCD1] pb-[15px]">
      <div className="">
        <Image
          src="/assets/festival/marry.png"
          alt="marry"
          width={300}
          height={0}
          className="  "
        />
      </div>
      <div className="mt-[14px] flex items-center justify-center">
        <p className="text-center">Facing Problems In Marraige</p>
      </div>
      <div className="mt-[10px] text-center">
        <p className="font-bold">Talk To Premium </p>
        <p className="text-[30px] font-bold">Astrologers</p>
      </div>
      <div className="mt-[22px] flex items-center justify-center">
        <button className="rounded-[6px] bg-gradient-to-b from-[#fb7038] to-[#FF0600] px-2 py-1 font-bold text-white">
          First Chat Free
        </button>
      </div>
    </div>
  );
};

export default PremiumAstrologer;
