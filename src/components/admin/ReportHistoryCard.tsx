"use client";
import { useState } from "react";

const ReportHistoryCard = () => {
  const [activeBtn, setActiveBtn] = useState<"pending" | "completed">(
    "pending"
  );

  const handleToggle = () => {
    setActiveBtn(activeBtn === "pending" ? "completed" : "pending");
  };

  return (
    <div className="flex ">
      <button
        className={`rounded-l-[10px]  py-2 px-10 font-bold md:px-[100px] lg:px-[100px] ${
          activeBtn === "pending" ? "bg-red-500" : "bg-gray-500"
        }`}
        onClick={handleToggle}
      >
        Pending
      </button>
      <button
        className={`rounded-r-[10px]  py-2 px-10 font-bold md:px-[100px] lg:px-[100px] ${
          activeBtn === "completed" ? "bg-red-500" : "bg-gray-500"
        }`}
        onClick={handleToggle}
      >
        Completed
      </button>
    </div>
  );
};

export default ReportHistoryCard;
