import { useState } from "react";

const Header = () => {
  const [activeButton, setActiveButton] = useState<"live" | "history">("live");

  const handleButtonClick = (button: "live" | "history") => {
    setActiveButton(button);
  };

  return (
    <div className="mt-10 flex px-5 ">
      <button
        className={`${
          activeButton === "live" ? "bg-[#dc6563]" : "bg-[#D9D9D9]"
        } rounded py-4 text-[24px] font-bold md:w-1/2 lg:w-1/2`}
        onClick={() => handleButtonClick("live")}
      >
        Live Conversation
      </button>
      <button
        className={`${
          activeButton === "history" ? " bg-[#dc6563]" : "bg-[#D9D9D9]"
        } rounded py-4 text-[24px] font-bold md:w-1/2 lg:w-1/2`}
        onClick={() => handleButtonClick("history")}
      >
        History
      </button>
    </div>
  );
};

export default Header;
