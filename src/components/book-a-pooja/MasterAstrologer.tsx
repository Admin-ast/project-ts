import Image from "next/image";
import React from "react";
import { BsDot } from "react-icons/bs";

type Props = {
  name: string;
  role: string;
  desc1: string;
  desc2: string;
};

const MasterAstrologer = ({ name, role, desc1, desc2 }: Props) => {
  return (
    <div className="mt-[55px] border-t-[1px] border-[#D9D9D9] bg-[#FFF] px-6">
      <div className="py-6">
        <div className="flex items-center gap-[10px] ">
          <Image
            src="/assets/home/review.png"
            alt="astroler"
            width={74}
            height={74}
            className="rounded-full border-[5px] border-[#DC6563]"
          />
          <div className="">
            <p className="text-[22px] font-semibold">{name}</p>
            <p className="">{role}</p>
          </div>
        </div>
        <div className="text-justify">
          <div className="flex ">
            <BsDot />
            <p className="">{desc1} </p>
          </div>
          <div className="flex ">
            <BsDot />
            <p className="">{desc2} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterAstrologer;
