// components/ReportBlockButton.tsx
import { useState } from "react";
// import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';
import { ChevronDownIcon, ChevronUpDownIcon } from "@heroicons/react/24/solid";

const ThreeDots = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOptions = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleOptions}
        className="flex items-center space-x-2 rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none"
      >
        {isOpen ? (
          <ChevronDownIcon className="h-5 w-5" />
        ) : (
          <ChevronUpDownIcon className="h-5 w-5" />
        )}
        <span>{isOpen ? "Close" : "Report & Block"}</span>
      </button>
      {isOpen && (
        <div className="absolute top-10 right-0 z-10 rounded-lg border border-gray-300 bg-white p-4 shadow-lg">
          {/* Replace this with your Report & Block options */}
          <div>Report Option</div>
          <div>Block Option</div>
        </div>
      )}
    </div>
  );
};

export default ThreeDots;
