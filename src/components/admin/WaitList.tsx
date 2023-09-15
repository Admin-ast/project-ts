import React from "react";
import WaitListCard from "./WaitListCard";
import Sidebar from "./Sidebar";

type Props = {};

const WaitList = (props: Props) => {
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
        <div className="min-h-screen lg:w-3/4">
          <div className="flex items-center justify-center">
            {" "}
            <span className="px:16px mt-[45px] rounded-[43px] bg-[#CF2927] py-4 px-10 text-xl font-bold text-white">
              WAIT-LIST
            </span>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 ">
            {/* <div className="  "> */}
            <WaitListCard
              name="Nikita"
              id={245674}
              date="23 Jul 2023"
              time="7:33PM"
              type="Call"
              token="1"
              status="Waiting"
              duration="5 min"
              btn1="Start Offline Session"
            />

            <WaitListCard
              name="Nikita"
              id={245674}
              date="23 Jul 2023"
              time="7:33PM"
              type="Call"
              token="1"
              status="Waiting"
              duration="5 min"
              btn1="Start Offline Session"
            />

            <WaitListCard
              name="Nikita"
              id={245674}
              date="23 Jul 2023"
              time="7:33PM"
              type="Call"
              token="1"
              status="Waiting"
              duration="5 min"
              btn1="Start Offline Session"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitList;
