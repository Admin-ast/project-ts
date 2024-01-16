import React from "react";

type Props = {
  className: string;
};

const Btns = ({ className = "" }: Props) => {
  return (
    <div className="mt-[65px] grid grid-rows-2 gap-10 md:flex lg:flex">
      <button
        className={` border-[1px] border-[#DC6563] py-2 font-bold text-[#DC6563] lg:px-10 ${className}`}
      >
        Bulk Action
      </button>
      <button
        className={` border-[1px] border-[#DC6563] py-2 font-bold text-[#DC6563] lg:px-10 ${className}`}
      >
        Apply
      </button>
    </div>
  );
};

export default Btns;
