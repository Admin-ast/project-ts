import React from "react";
import { BsFillCaretDownFill } from "react-icons/bs";
import { GoChevronDown } from "react-icons/go";
import { RiArrowUpSLine } from "react-icons/ri";

type Props = {};

const ProductTags = (props: Props) => {
  return (
    <div className="mt-5">
      <div className="rounded-[5px] border-[1px]  border-[#A9A9A9] ">
        <div className="flex justify-between">
          <p className="px-2 font-bold">Product Tags</p>

          <div className="flex gap-2 text-[23px] ">
            <RiArrowUpSLine />
            <GoChevronDown />
            <BsFillCaretDownFill />
          </div>
        </div>
        <div className="border-b-[1px] border-[#A9A9A9] "></div>
        <div className="mt-2 justify-between  md:flex lg:flex ">
          <input
            type="text"
            name=""
            id=""
            className="rounded-[5px] border-[1px] border-[#A9A9A9] px-5"
          />
          <button className="border-[1px] border-[#DC6563]  text-base text-[#DC6563]">
            Add
          </button>
        </div>
        <div className="px-3">
          <p className="mt-2">Separate tags with commas</p>

          <p className=" mt-5 mb-1 text-[#DC6563] underline">
            Choose from the most used
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductTags;
