import React from "react";

import Sidebar from "../../dashboard/Sidebar";
import ManagementNav from "../ManagementNav";
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
        className="h-[78px]
   w-full bg-[#d12627cc]"
      ></div>
      <div className="lg:flex ">
        <div className="lg:w-1/3">
          <Sidebar />
        </div>
        <div className="lg:w-8/9 min-h-screen px-4 md:px-10 lg:px-10">
          <ManagementNav page="Management" />
          <Header />
          <div className="grid  lg:flex  lg:w-full ">
            <div className="mt-10 rounded-[10px] border-[1px] border-[#D9D9D9] lg:flex lg:w-5/6">
              <div className="lg:w-1/2">
                <ArchiveChats />
              </div>
              <div className="w-1/2">
                <PersonChat name="Prerna Sharma" number={+123456789} />
                <ChatLayout />
              </div>
            </div>

            <div className="">
              <Queue />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSupport;
