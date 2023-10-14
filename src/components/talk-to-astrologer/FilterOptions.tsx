import React from "react";

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

const FilterOptions = ({
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
  return (
    <div className="">
      <div className="flex  gap-[25px] font-[Roboto] text-[24px]  lg:px-16">
        <button className="text-[#DC6563]">Select All</button>
        <button className="text-[#DC6563]">Clear All</button>
      </div>
      <div className="flex gap-[12px]">
        <input type="checkbox" className="h-[22px] w-[22px] " />
        <p className="font-[Roboto] text-[24px]">{option1}</p>
      </div>
      <div className="flex gap-[12px]">
        <input type="checkbox" className="h-[22px] w-[22px] " />
        <p className="font-[Roboto] text-[24px]">{option2}</p>
      </div>
      <div className="flex gap-[12px]">
        <input type="checkbox" className="h-[22px] w-[22px] " />
        <p className="font-[Roboto] text-[24px]">{option3}</p>
      </div>
      <div className="flex gap-[12px]">
        <input type="checkbox" className="h-[22px] w-[22px] " />
        <p className="font-[Roboto] text-[24px]">{option4}</p>
      </div>
      <div className="flex gap-[12px]">
        <input type="checkbox" className="h-[22px] w-[22px] " />
        <p className="font-[Roboto] text-[24px]">{option5}</p>
      </div>
      <div className="flex gap-[12px]">
        <input type="checkbox" className="h-[22px] w-[22px] " />
        <p className="font-[Roboto] text-[24px]">{option6}</p>
      </div>
      <div className="flex gap-[12px]">
        <input type="checkbox" className="h-[22px] w-[22px] " />
        <p className="font-[Roboto] text-[24px]">{option7}</p>
      </div>
      <div className="flex gap-[12px]">
        <input type="checkbox" className="h-[22px] w-[22px] " />
        <p className="font-[Roboto] text-[24px]">{option8}</p>
      </div>
      <div className="flex gap-[12px]">
        <input type="checkbox" className="h-[22px] w-[22px] " />
        <p className="font-[Roboto] text-[24px]">{option9}</p>
      </div>
      <div className="flex gap-[12px]">
        <input type="checkbox" className="h-[22px] w-[22px] " />
        <p className="font-[Roboto] text-[24px]">{option10}</p>
      </div>
    </div>
  );
};

export default FilterOptions;
