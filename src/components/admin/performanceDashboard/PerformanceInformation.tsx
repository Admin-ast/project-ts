import React, { useState } from "react";
import Popup from "./Popup";
import { AiOutlineQuestionCircle } from "react-icons/ai";

type Props = {};

const PerformanceInformation = (props: Props) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  return (
    <div className=" flex items-center justify-center">
      <button
        className="  rounded-md px-4 py-2 text-white"
        onClick={togglePopup}
      >
        <AiOutlineQuestionCircle className="text-[28px] text-[#CA2127] hover:bg-[#DC6563]" />
      </button>
      <Popup isOpen={isPopupOpen} onClose={togglePopup} />
      <div
        className={`fixed top-0 left-0 h-screen w-screen transition-opacity ${
          isPopupOpen ? "opacity-50" : "pointer-events-none opacity-0"
        } bg-gray-500`}
      ></div>
    </div>
  );
};

export default PerformanceInformation;
