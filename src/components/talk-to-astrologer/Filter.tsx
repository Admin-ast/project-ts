import { useState } from "react";
import Popup from "./Popup";
import { FaFilter } from "react-icons/fa";

export default function Filter() {
  const [isPopupOpen, setPopupOpen] = useState(false);

  return (
    <div className="flex items-center justify-center ">
      <button
        onClick={() => setPopupOpen(true)}
        className=" hover-bg-blue-700 focus-outline-none rounded-full px-4 py-2 text-[#D9D9D9]"
      >
        Filter
      </button>
      <FaFilter className="text-[#D9D9D9]" />
      <Popup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)} />
    </div>
  );
}
