import { useState } from "react";
import Popup from "./Popup";
import { FaFilter } from "react-icons/fa";
import FilterPanel from "./Popup";

export default function Filter() {
  // const [isPopupOpen, setPopupOpen] = useState(false);
  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);
  const openFilterPanel = () => {
    setIsFilterPanelOpen(true);
  };

  const closeFilterPanel = () => {
    setIsFilterPanelOpen(false);
  };

  return (
    <div className="flex items-center justify-center ">
      <button
        onClick={() => setIsFilterPanelOpen(true)}
        className=" hover-bg-blue-700 focus-outline-none rounded-full px-4 py-2 text-[#D9D9D9]"
      >
        Filter
      </button>
      <FaFilter className="text-[#D9D9D9]" />
      {/* <Popup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)} /> */}
      <FilterPanel isOpen={isFilterPanelOpen} onClose={closeFilterPanel} />
    </div>
  );
}
