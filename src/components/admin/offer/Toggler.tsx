import React, { useState } from "react";

type Props = {};

const Toggler = (props: Props) => {
  const [activeBtn, setActiveBtn] = useState<"pending" | "completed">(
    "pending"
  );

  const handleToggle = () => {
    setActiveBtn(activeBtn === "pending" ? "completed" : "pending");
  };
  return (
    <div className="flex ">
      <button
        className={`rounded-[10px] rounded-r py-2 px-5 font-bold text-white md:px-[100px] lg:px-[100px] ${
          activeBtn === "pending" ? "bg-red-500" : "bg-gray-500"
        }`}
        onClick={handleToggle}
      >
        Call & Chat
      </button>
      <button
        className={`rounded-[10px] rounded-l py-2 px-5 font-bold text-white md:px-[100px] lg:px-[100px] ${
          activeBtn === "completed" ? "bg-red-500" : "bg-gray-500"
        }`}
        onClick={handleToggle}
      >
        Report
      </button>
    </div>
  );
};

export default Toggler;
