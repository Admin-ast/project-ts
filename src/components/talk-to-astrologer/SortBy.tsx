import { useState } from "react";
import Popup from "./Popup";
import { FaFilter } from "react-icons/fa";
import SortPopup from "./SortPopup";
import { AiOutlineBars } from "react-icons/ai";

export default function SortBy() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  return (
    <div className="flex items-center justify-center ">
      <button
        onClick={() => setPopupOpen(true)}
        className=" hover-bg-blue-700 focus-outline-none whitespace-nowrap  rounded-full px-4 py-2  font-bold text-[#D9D9D9]"
      >
        Sort by
      </button>
      <AiOutlineBars className="text-[#D9D9D9]" />
      <SortPopup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)} />
    </div>
  );
}
