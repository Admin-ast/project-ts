import React from "react";
import Sidebar from "../Sidebar";
import LiveEventsCard from "./LiveEventsCard";
import Btns from "./Btns";

type Props = {};

const LiveEvents = (props: any) => {
  return (
    <div className="">
      <div
        className="from-0%
       to-68% h-[78px] w-full bg-gradient-to-b  from-[#ee6522cc] to-[#d12627cc]"
      ></div>
      <div className="lg:flex">
        <div className="lg:w-1/4">
          {" "}
          <Sidebar />
        </div>
        <div className="mt-[45px] lg:w-3/4">
          <div className="flex items-center justify-center ">
            <p className="flex items-center justify-center rounded-[43px] bg-[#dc6563] px-16  font-bold text-white lg:h-[63px] lg:w-[400px]">
              LIVE EVENTS
            </p>
          </div>
          <div className="mt-[30px] grid gap-[15px] px-5 md:grid-cols-3 lg:grid-cols-4">
            <LiveEventsCard
              session="Live Session"
              time="10:19 PM "
              date="14 June 2023"
              status="FINISHED"
              name="A"
            />
            <LiveEventsCard
              session="Live Session"
              time="10:19 PM "
              date="14 June 2023"
              status="FINISHED"
              name="A"
            />
            <LiveEventsCard
              session="Live Session"
              time="10:19 PM "
              date="14 June 2023"
              status="FINISHED"
              name="A"
            />
            <LiveEventsCard
              session="Live Session"
              time="10:19 PM "
              date="14 June 2023"
              status="FINISHED"
              name="A"
            />
            <LiveEventsCard
              session="Live Session"
              time="10:19 PM "
              date="14 June 2023"
              status="FINISHED"
              name="A"
            />
            <LiveEventsCard
              session="Live Session"
              time="10:19 PM "
              date="14 June 2023"
              status="FINISHED"
              name="A"
            />
            <LiveEventsCard
              session="Live Session"
              time="10:19 PM "
              date="14 June 2023"
              status="FINISHED"
              name="A"
            />
            <LiveEventsCard
              session="Live Session"
              time="10:19 PM "
              date="14 June 2023"
              status="FINISHED"
              name="A"
            />
            <LiveEventsCard
              session="Live Session"
              time="10:19 PM "
              date="14 June 2023"
              status="FINISHED"
              name="A"
            />
            <LiveEventsCard
              session="Live Session"
              time="10:19 PM "
              date="14 June 2023"
              status="FINISHED"
              name="A"
            />
            <LiveEventsCard
              session="Live Session"
              time="10:19 PM "
              date="14 June 2023"
              status="FINISHED"
              name="A"
            />
            <LiveEventsCard
              session="Live Session"
              time="10:19 PM "
              date="14 June 2023"
              status="FINISHED"
              name="A"
            />
            <LiveEventsCard
              session="Live Session"
              time="10:19 PM "
              date="14 June 2023"
              status="FINISHED"
              name="A"
            />
            <LiveEventsCard
              session="Live Session"
              time="10:19 PM "
              date="14 June 2023"
              status="FINISHED"
              name="A"
            />
            <LiveEventsCard
              session="Live Session"
              time="10:19 PM "
              date="14 June 2023"
              status="FINISHED"
              name="A"
            />
            <LiveEventsCard
              session="Live Session"
              time="10:19 PM "
              date="14 June 2023"
              status="FINISHED"
              name="A"
            />
            <LiveEventsCard
              session="Live Session"
              time="10:19 PM "
              date="14 June 2023"
              status="FINISHED"
              name="A"
            />
            <LiveEventsCard
              session="Live Session"
              time="10:19 PM "
              date="14 June 2023"
              status="FINISHED"
              name="A"
            />
            <LiveEventsCard
              session="Live Session"
              time="10:19 PM "
              date="14 June 2023"
              status="FINISHED"
              name="A"
            />
          </div>
          <Btns />
        </div>
      </div>
    </div>
  );
};

export default LiveEvents;
