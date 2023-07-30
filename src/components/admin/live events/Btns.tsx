import React from "react";

type Props = {};

const Btns = (props: Props) => {
  return (
    <div className="mt-5 flex items-center justify-center gap-1 px-[30px]">
      <div className="flex w-full items-center justify-center bg-[#DC6563] py-2">
        <button className="font-bold text-white ">Schedule Event</button>
      </div>
      <div className="flex w-full items-center justify-center bg-[#DC6563] py-2">
        <button className="font-bold text-white">Go Live Now</button>
      </div>
    </div>
  );
};

export default Btns;
