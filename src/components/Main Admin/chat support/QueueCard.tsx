import React from "react";
import { BsWhatsapp } from "react-icons/bs";

type Props = {
  conversation: string;
  engage: string;
  msg: string;
  msgContent: string;
  date: string;
  time: string;
};

const QueueCard = ({
  conversation,
  engage,
  msg,
  msgContent,
  date,
  time,
}: Props) => {
  return (
    <div className="w-8/9 rounded-[10px] bg-white px-4 py-2 shadow-xl ">
      <div className="flex gap-10">
        <p className="">{conversation}</p>
        <button className="rounded-[5px] bg-[#DC6563] px-8 text-white">
          {engage}
        </button>
      </div>
      <div className="mt-3 border-b-[1px] border-[#D9D9D9]"></div>
      <div className="">
        <p className="text-[24px] text-[#3E5DAB]">{msg}</p>
        <p className="">{msgContent}</p>
      </div>
      <div className="mt-10 flex justify-between">
        <p className="">{date}</p>
        <p className="">{time}</p>
        <div className="flex gap-5 text-green-700">
          <BsWhatsapp />
          <BsWhatsapp />
          <BsWhatsapp />
        </div>
      </div>
    </div>
  );
};

export default QueueCard;
