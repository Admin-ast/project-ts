import React from "react";
import { BsDot } from "react-icons/bs";

type Props = {
  desc1: string;
  desc2: string;
  head: string;
};

const Benifits = ({ head, desc1, desc2 }: Props) => {
  return (
    <div className="mt-[55px] border-t-[1px] border-[#D9D9D9] bg-[#FFF] px-6 ">
      <div className="py-6">
        <p className="text-center text-[32px] font-bold">{head}</p>
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

export default Benifits;
