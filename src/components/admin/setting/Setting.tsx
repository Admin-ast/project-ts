import React from "react";
import SettingCard from "./SettingCard";
import Sidebar from "../Sidebar";
import LogoutFromAllDevicesBtn from "./LogoutFromAllDevicesBtn";

type Props = {};

const Setting = (props: Props) => {
  return (
    <div className="">
      <div
        className="h-[78px]
     w-full bg-[#d12627cc]"
      ></div>
      <div className="lg:flex">
        <div className="lg:w-1/4">
          {" "}
          <Sidebar />
        </div>
        <div className="mt-[45px] lg:w-3/4">
          <div className="grid  items-center justify-center gap-10 md:flex lg:flex ">
            <p className="flex items-center justify-center rounded-[43px] bg-[#CF2927] px-16  font-bold text-white lg:h-[63px] ">
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
