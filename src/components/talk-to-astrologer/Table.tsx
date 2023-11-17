import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

type Props = {
  head: string;
};
const tableContent = [
  {
    id: 1,
    name: "Talk To Astrologer",
    url: "/",
  },
  {
    id: 2,
    name: "Talk To Astrologer",
    url: "/",
  },
  {
    id: 3,
    name: "Talk To Astrologer",
    url: "/",
  },
];
const Table = ({ head }: Props) => {
  return (
    <div className=" mb-[33px] rounded-[15px] shadow-xl ">
      <div className="flex  items-center justify-center rounded-t-[15px] bg-[#DC6563]">
        <p className="font-roboto text-[22px] font-semibold text-white">
          {head}
        </p>
      </div>
      {tableContent.map((item, index) => (
        <div
          key={index}
          className="flex border-b-[1px] border-[#D9D9D9] bg-white p-2"
        >
          <IoIosArrowRoundForward className="gap-[15px] text-[25px]" />
          <p className="font-[Roboto]">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Table;
