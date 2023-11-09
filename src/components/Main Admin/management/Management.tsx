import GridItem from "@/components/admin/GridItems";
import React from "react";
import Sidebar from "../dashboard/Sidebar";
// import ChatSupportCard from './chat support/ChatSupportCard'
import ManagementCard from "./ManagementCard";
import Link from "next/link";

type Props = {};

const Management = (props: Props) => {
  const styles = {
    backgroundImage: "linear-gradient(90deg, #FF0000 50%, #00FF00 50%)",
  };
  return (
    <div className="">
      <div
        className="from-0%
   to-68% h-[78px] w-full bg-gradient-to-b  from-[#ee6522cc] to-[#d12627cc]"
      ></div>
      <div className="lg:flex ">
        <div className="lg:w-1/4">
          <Sidebar />
        </div>
        <div className="grid grid-cols-1  gap-4  px-10 md:grid-cols-3 lg:w-3/4 lg:grid-cols-5  ">
          <Link href="/admin/management/chatsupport">
            {" "}
            <ManagementCard
              icon="/assets/admin/management/chat.png"
              text="Chat Support"
              className="bg-gradient-to-b from-[#cbd3b2] to-[#72B4D7] "
            />
          </Link>
          <Link href="/admin/management/customerservice">
            <ManagementCard
              icon="/assets/admin/management/customerservice.png"
              text="Customer service manager"
              className="bg-gradient-to-b from-[#FF6730] to-[#E48F93] "
            />
          </Link>
          <Link href="/admin/management/teammanager">
            <ManagementCard
              icon="/assets/admin/management/group.png"
              text="Team Manager"
              className="bg-gradient-to-b from-[#3E5DAB] to-[#72B4D7] "
            />
          </Link>
          <Link href="/admin/management/manager">
            <ManagementCard
              icon="/assets/admin/management/profile.png"
              text="Manager"
              className="bg-gradient-to-b from-[#EED387] to-[#CA2127] "
            />
          </Link>
          <Link href="/">
            <ManagementCard
              icon="/assets/admin/management/user.png"
              text="Super admin"
              className="bg-gradient-to-b from-[#00AF1C] to-[#FFCD57] "
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Management;
