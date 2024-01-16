import React from "react";
import { BsFillCaretDownFill } from "react-icons/bs";
import { GoChevronDown } from "react-icons/go";
import { RiArrowUpSLine } from "react-icons/ri";

type Props = {};

const ProductCategories = (props: Props) => {
  return (
    <div className="mt-5">
      <div className="rounded-[5px] border-[1px]  border-[#A9A9A9] ">
        <div className="flex justify-between">
          <p className="px-2 font-bold">Product Categories</p>

          <div className="flex gap-2 text-[23px] ">
            <RiArrowUpSLine />
            <GoChevronDown />
            <BsFillCaretDownFill />
          </div>
        </div>
        <div className="border-b-[1px] border-[#A9A9A9] "></div>
        <div className="mt-2 flex gap-5 px-2">
          <button className="border-[1px] border-[#DC6563] px-5 text-base text-[#DC6563]">
            All Categories
          </button>
          <button className="border-[1px] border-[#DC6563] px-5 text-base text-[#DC6563]">
            Most Uesd
          </button>
        </div>
        <div className="py-2 px-5">
          <div className="flex gap-1 text-base">
            <input type="checkbox" name="" id="" />
            <p className="">Basic Category</p>
          </div>
          <div className="flex gap-1 py-1 text-base">
            <input type="checkbox" name="" id="" />
            <p className="">Expert Consultation</p>
          </div>
          <div className="flex gap-1 py-1 text-base">
            <input type="checkbox" name="" id="" />
            <p className="">Expert Consultation</p>
          </div>
          <div className="flex gap-1 py-1 text-base">
            <input type="checkbox" name="" id="" />
            <p className="">Expert Consultation</p>
          </div>
          <div className="flex gap-1 py-1 text-base">
            <input type="checkbox" name="" id="" />
            <p className="">Expert Consultation</p>
          </div>
          <div className="flex gap-1 py-1 text-base">
            <input type="checkbox" name="" id="" />
            <p className="">Expert Consultation</p>
          </div>
        </div>
        <div className="border-[1px] border-[#A9A9A9]"></div>
        <div className="flex justify-between p-2  text-base">
          <p className=" text-[#3E5DAB]">
            <span>+</span>Add New Category
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCategories;
