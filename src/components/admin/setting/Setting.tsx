import React from "react";
import SettingCard from "./SettingCard";
import Sidebar from "../Sidebar";
import LogoutFromAllDevicesBtn from "./LogoutFromAllDevicesBtn";

type Props = {};

const Setting = (props: Props) => {
  return (
    <div className="">
      <div
        className="from-0%
     to-68% h-[78px]  w-full bg-gradient-to-b from-[#ee6522cc] to-[#d12627cc]"
      ></div>
      <div className="lg:flex">
        <div className="lg:w-1/4">
          {" "}
          <Sidebar />
        </div>
        <div className="mt-[45px] lg:w-3/4">
          <div className="grid  items-center justify-center gap-10 md:flex lg:flex ">
            <p className="flex items-center justify-center rounded-[43px] bg-[#DC6563] px-16  font-bold text-white lg:h-[63px] ">
              SETTINGS
            </p>
          </div>
          <div>
            <SettingCard />
          </div>
          <LogoutFromAllDevicesBtn />
        </div>
      </div>
    </div>
  );
};

export default Setting;
