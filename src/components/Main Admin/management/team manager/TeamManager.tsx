import React from "react";
import Sidebar from "../../dashboard/Sidebar";
import ManagementNav from "../ManagementNav";
import PersonCard from "./PersonCard";

type Props = {};

const TeamManager = (props: Props) => {
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
            <PersonCard
              name="Prerna Sharma"
              imageUrl="/assets/admin/manageicon.svg"
              place="Delhi,India"
              position="Position"
              positionName="Palm Reader"
              task="Task"
            />
            <PersonCard
              name="Prerna Sharma"
              imageUrl="/assets/admin/manageicon.svg"
              place="Delhi,India"
              position="Position"
              positionName="Palm Reader"
              task="Task"
            />
            <PersonCard
              name="Prerna Sharma"
              imageUrl="/assets/admin/manageicon.svg"
              place="Delhi,India"
              position="Position"
              positionName="Palm Reader"
              task="Task"
            />
            <PersonCard
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

export default TeamManager;
