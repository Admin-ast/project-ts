import React from "react";

import Sidebar from "../dashboard/Sidebar";
import ManagementNav from "../management/ManagementNav";
import ArchiveChats from "./ArchiveChats";
import Header from "./Header";
import PersonChat from "./PersonChat";
import ChatLayout from "./ChatLayout";
import Queue from "./Queue";

type Props = {};

const ChatSupport = (props: Props) => {
  return (
    <div className="">
      <div
        className="from-0%
   to-68% h-[78px] w-full bg-gradient-to-b  from-[#ee6522cc] to-[#d12627cc]"
      ></div>
      <div className="lg:flex ">
        <div className="lg:w-1/3">
          <Sidebar />
        </div>
        <div className="lg:w-8/9 min-h-screen px-4 md:px-10 lg:px-10">
          <ManagementNav page="Management" />
          <Header />
          <div className="grid  lg:flex   ">
            <div className="mt-10 rounded-[10px] border-[1px] border-[#D9D9D9] lg:flex lg:w-full">
              <div className="lg:w-1/2">
                <ArchiveChats />
              </div>
              <div className="lg:w-3/4 ">
                <PersonChat name="Prerna Sharma" number={+123} />
                <ChatLayout />
              </div>
            </div>

            <div className="px-4">
              <Queue />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSupport;
