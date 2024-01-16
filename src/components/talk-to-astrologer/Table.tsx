import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

type Props = {
  head: string;
  logo: React.ReactNode; // Add logo prop
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

const Table = ({ head, logo }: Props) => {
  return (
    <div className=" mb-[33px]  h-[324px]  rounded-[15px] bg-white shadow-xl ">
      <div className=" flex  items-center gap-2 rounded-t-[15px] bg-[#DC6563]">
        {/* Display the logo */}
        <p className="logo-container  ml-2 text-[22px] text-white">{logo}</p>
        <p className="font-roboto flex h-[56px] items-center justify-center text-[22px] font-semibold text-white">
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
