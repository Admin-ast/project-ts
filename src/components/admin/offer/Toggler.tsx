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
        className={`rounded-l-[10px]  py-2 px-5 font-bold text-white md:px-[100px] lg:px-[100px] ${
          activeBtn === "pending" ? "bg-[#DC6563]" : "bg-[#D9D9D9]"
        }`}
        onClick={handleToggle}
      >
        Call & Chat
      </button>
      <button
        className={`rounded-r-[10px] py-2 px-5 font-bold text-white md:px-[100px] lg:px-[100px] ${
          activeBtn === "completed" ? "bg-[#DC6563]" : "bg-[#D9D9D9]"
        }`}
        onClick={handleToggle}
      >
        Report
      </button>
    </div>
  );
};

export default Toggler;
