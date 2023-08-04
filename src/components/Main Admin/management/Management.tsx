import GridItem from "@/components/admin/GridItems";
import React from "react";
import Sidebar from "../dashboard/Sidebar";
// import ChatSupportCard from './chat support/ChatSupportCard'
import ManagementCard from "./ManagementCard";

type Props = {};

const Management = (props: Props) => {
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
        <div className="grid grid-cols-1  gap-4  px-10 md:grid-cols-3 lg:w-3/4 lg:grid-cols-5  ">
          <ManagementCard
            icon="/assets/admin/management/chat.png"
            text="Chat Support"
            className="bg-[#cbd3b2]"
          />
          <ManagementCard
            icon="/assets/admin/management/customerservice.png"
            text="Customer service manager"
            className="bg-[#FF6730]"
          />
          <ManagementCard
            icon="/assets/admin/management/group.png"
            text="Team Manager"
            className="bg-[#3E5DAB]"
          />
          <ManagementCard
            icon="/assets/admin/management/profile.png"
            text="Manager"
            className="bg-[#EED387]"
          />
          <ManagementCard
            icon="/assets/admin/management/user.png"
            text="Super admin"
            className="bg-[#FFCD57]"
          />
          <ManagementCard
            icon="/assets/admin/management/insta.png"
            text="Posts"
            className="bg-[#FF0009]"
          />
          <ManagementCard
            icon="/assets/admin/management/music.png"
            text="Media"
            className="bg-[#E48F93]"
          />
        </div>
      </div>
    </div>
  );
};

export default Management;
