import React, { useState } from "react";

type Props = {
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  option5: string;
  option6: string;
  option7: string;
  option8: string;
  option9: string;
  option10: string;
};

const SortByOptions = ({
  option1,
  option2,
  option3,
  option4,
  option5,
  option6,
  option7,
  option8,
  option9,
  option10,
}: Props) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleOptionClick = (option: string) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.includes(option)
        ? prevSelected.filter((opt) => opt !== option)
        : [...prevSelected, option]
    );
  };

  return (
    <div className="">
      {[
        option1,
        option2,
        option3,
        option4,
        option5,
        option6,
        option7,
        option8,
        option9,
        option10,
      ].map((option) => (
        <div key={option} className="flex items-center gap-[12px]">
          <input
            type="checkbox"
            id={option}
            className="hidden h-[22px] w-[22px]"
            checked={selectedOptions.includes(option)}
            onChange={() => handleOptionClick(option)}
          />
          <label
            htmlFor={option}
            className={`flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border ${
              selectedOptions.includes(option)
                ? "border-[#DC6563] bg-[#DC6563]"
                : "border-[#DC6563]"
            }`}
          >
            {selectedOptions.includes(option) && (
              <svg
                className="h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
            )}
          </label>
          <p className="font-[Roboto] text-[24px]">{option}</p>
        </div>
      ))}
    </div>
  );
};

export default SortByOptions;
