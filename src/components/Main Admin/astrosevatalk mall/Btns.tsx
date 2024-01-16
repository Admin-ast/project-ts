import React from "react";

type Props = {};

const Btns = (props: Props) => {
  return (
    <div className="mt-[65px] grid grid-rows-2 gap-2 md:flex lg:flex">
      <button className="  rounded-[10px] border-[1px]  border-[#DA6468] py-2 font-bold hover:bg-[#DA6468] md:px-5 lg:px-10">
        Import
      </button>
      <button className="rounded-[10px] border-[1px] border-[#DA6468] py-2 font-bold hover:bg-[#DA6468] md:px-5 lg:px-10">
        Export
      </button>
    </div>
  );
};

export default Btns;
