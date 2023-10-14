// components/ReportBlockButton.tsx
import { useState } from "react";
// import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';
import { ChevronDownIcon, ChevronUpDownIcon } from "@heroicons/react/24/solid";
import { BsThreeDotsVertical } from "react-icons/bs";

const ThreeDots = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOptions = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative flex justify-end">
      <button
        onClick={toggleOptions}
        className="z-10    flex  rounded-lg py-2 text-white "
      >
        {isOpen ? (
          <BsThreeDotsVertical className="h-10 w-10 text-black  " />
        ) : (
          <BsThreeDotsVertical className="h-10 w-10 text-black " />
        )}
        <span>{isOpen ? "" : ""}</span>
      </button>
      {isOpen && (
        <div className="absolute top-12 right-10 z-10   flex h-[48px] w-[188px] items-center justify-center bg-[#D9D9D9] text-[24px] shadow-lg">
          {/* Replace this with your Report & Block options */}
          <div>Report & Block</div>
        </div>
      )}
    </div>
  );
};

export default ThreeDots;
