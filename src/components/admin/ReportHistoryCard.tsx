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
        className={`rounded-[10px] rounded-r py-2 px-[100px] font-bold ${
          activeBtn === "pending" ? "bg-red-500" : "bg-gray-500"
        }`}
        onClick={handleToggle}
      >
        Pending
      </button>
      <button
        className={`rounded-[10px] rounded-l py-2 px-[100px] font-bold ${
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
