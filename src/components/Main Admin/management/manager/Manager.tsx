import React from "react";
import ManagerCard from "./ManagerCard";
import Sidebar from "../../dashboard/Sidebar";
import ManagementNav from "../ManagementNav";

type Props = {};

const Manager = (props: Props) => {
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
          <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            <ManagerCard
              name="Prerna Sharma"
              imageUrl="/assets/admin/manageicon.svg"
              place="Delhi,India"
              position="Position"
              positionName="Palm Reader"
              task="Task"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manager;
