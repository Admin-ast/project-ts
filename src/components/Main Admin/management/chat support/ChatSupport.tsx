import React from "react";

import Sidebar from "../../dashboard/Sidebar";
import ManagementNav from "../ManagementNav";

type Props = {};

const ChatSupport = (props: Props) => {
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
          <ManagementNav page="Management" />
        </div>
      </div>
    </div>
  );
};

export default ChatSupport;
