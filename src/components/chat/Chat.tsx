import React from "react";
import Section from "../Section";

type Props = {
  className: string;
};

const Chat = ({ className }: Props) => {
  return (
    <div className="{`mt-[36px] ${className}`} px-16 lg:w-2/3">
      <div className=" flex gap-[24px]">
        <div className="flex h-[49px] w-[49px] items-center justify-center rounded-full bg-[#DC6563]">
          <p className="font-[Roboto] text-[30px] font-bold text-white ">A</p>
        </div>
        <div className="bg-[#DC6563]">
          <p className="text-white">Chat Content</p>
        </div>
      </div>
    </div>
  );
};

export default Chat;
