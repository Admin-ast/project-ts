// import React, { useState } from "react";

// type Props = {
//   option1: string;
//   option2: string;
//   option3: string;
//   option4: string;
//   option5: string;
//   option6: string;
//   option7: string;
//   option8: string;
//   option9: string;
//   option10: string;
// };

// const FilterOptions = ({
//   option1,
//   option2,
//   option3,
//   option4,
//   option5,
//   option6,
//   option7,
//   option8,
//   option9,
//   option10,
// }: Props) => {

//   return (
//     <div className="">
// <div className="flex  gap-[25px] font-[Roboto] text-[24px]  lg:px-16">
//   <button className="text-[#DC6563]">Select All</button>
//   <button className="text-[#DC6563]">Clear All</button>
// </div>
// <div className="flex gap-[12px]">
//   <input type="checkbox" className="h-[22px] w-[22px] " />
//   <p className="font-[Roboto] text-[24px]">{option1}</p>
// </div>
//       <div className="flex gap-[12px]">
//         <input type="checkbox" className="h-[22px] w-[22px] " />
//         <p className="font-[Roboto] text-[24px]">{option2}</p>
//       </div>
//       <div className="flex gap-[12px]">
//         <input type="checkbox" className="h-[22px] w-[22px] " />
//         <p className="font-[Roboto] text-[24px]">{option3}</p>
//       </div>
//       <div className="flex gap-[12px]">
//         <input type="checkbox" className="h-[22px] w-[22px] " />
//         <p className="font-[Roboto] text-[24px]">{option4}</p>
//       </div>
//       <div className="flex gap-[12px]">
//         <input type="checkbox" className="h-[22px] w-[22px] " />
//         <p className="font-[Roboto] text-[24px]">{option5}</p>
//       </div>
//       <div className="flex gap-[12px]">
//         <input type="checkbox" className="h-[22px] w-[22px] " />
//         <p className="font-[Roboto] text-[24px]">{option6}</p>
//       </div>
//       <div className="flex gap-[12px]">
//         <input type="checkbox" className="h-[22px] w-[22px] " />
//         <p className="font-[Roboto] text-[24px]">{option7}</p>
//       </div>
//       <div className="flex gap-[12px]">
//         <input type="checkbox" className="h-[22px] w-[22px] " />
//         <p className="font-[Roboto] text-[24px]">{option8}</p>
//       </div>
//       <div className="flex gap-[12px]">
//         <input type="checkbox" className="h-[22px] w-[22px] " />
//         <p className="font-[Roboto] text-[24px]">{option9}</p>
//       </div>
//       <div className="flex gap-[12px]">
//         <input type="checkbox" className="h-[22px] w-[22px] " />
//         <p className="font-[Roboto] text-[24px]">{option10}</p>
//       </div>
//     </div>
//   );
// };

// export default FilterOptions;

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
