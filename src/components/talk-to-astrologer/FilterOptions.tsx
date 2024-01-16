import React, { useState } from "react";
import OptionsPanel from "./OptionPanel";

const FilterOptions = () => {
  const [openOption, setOpenOption] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const openOptions = (option: string) => {
    setOpenOption(option);
    setSelectedOption(null); // Reset selected option when opening a new set of options
  };

  const closeOptions = () => {
    setOpenOption(null);
    setSelectedOption(null);
  };

  const selectOption = (index: number) => {
    setSelectedOption(index);
  };

  const generateOptions = (numOptions: number) => {
    const options = [];
    for (let i = 1; i <= numOptions; i++) {
      options.push(
        <button
          key={i}
          onClick={() => selectOption(i)}
          className={`m-2 p-2 ${
            selectedOption === i ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Option {i}
        </button>
      );
    }
    return options;
  };

  const optionContent = (content: string) => (
    <div className="p-4">
      <p>{content}</p>
      {generateOptions(9)}
    </div>
  );

  return (
    <div className="flex">
      <button
        onClick={() => openOptions("Option 1")}
        className="bg-blue-500 p-2 text-white"
      >
        Open Option 1
      </button>
      <button
        onClick={() => openOptions("Option 2")}
        className="bg-green-500 p-2 text-white"
      >
        Open Option 2
      </button>
      <button
        onClick={() => openOptions("Option 3")}
        className="bg-yellow-500 p-2 text-white"
      >
        Open Option 3
      </button>
      <button
        onClick={() => openOptions("Option 4")}
        className="bg-red-500 p-2 text-white"
      >
        Open Option 4
      </button>
      <OptionsPanel
        isOpen={openOption !== null}
        options={optionContent(openOption || "")}
        closePanel={closeOptions}
      />
    </div>
  );
};

export default FilterOptions;
