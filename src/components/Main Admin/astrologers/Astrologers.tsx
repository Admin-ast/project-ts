import React from "react";
import UsersCard from "../Users/UsersCard";
import ViewMore from "../ViewMore";
import CommonBtns from "../CommonBtns";
import Sidebar from "../dashboard/Sidebar";
import { FaUserAlt } from "react-icons/fa";

type Props = {};

const Astrologers = (props: Props) => {
  return (
    <div className="">
      <div
        className="h-[78px]
   w-full bg-[#d12627cc]"
      ></div>
      <div className="lg:flex ">
        <div className="lg:w-1/4">
          <Sidebar />
        </div>
        <div className="min-h-screen px-10 lg:w-3/4">
          <div className="flex gap-10">
            <div className="mt-12 flex items-center justify-center gap-4">
              <FaUserAlt className="h-[55px] w-[49px] text-[#a9a9a9]" />
              <p className="text-[20px] font-bold">Astrologers</p>
            </div>
            <div className="">
              <CommonBtns />
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 ">
            <UsersCard
              id={123456789}
              name="A"
              Name="Apoorva Mishra"
              service="Tarot Card Reader"
              date="Jul 25,2023"
            />
            <UsersCard
              id={123456789}
              name="A"
              Name="Apoorva Mishra"
              service="Tarot Card Reader"
              date="Jul 25,2023"
            />
            <UsersCard
              id={123456789}
              name="A"
              Name="Apoorva Mishra"
              service="Tarot Card Reader"
              date="Jul 25,2023"
            />
            <UsersCard
              id={123456789}
              name="A"
              Name="Apoorva Mishra"
              service="Tarot Card Reader"
              date="Jul 25,2023"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Astrologers;
