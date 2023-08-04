import React from "react";

type Props = {};

const ReviewNav = (props: Props) => {
  return (
    <div className="mt-2 gap-2 md:flex lg:flex">
      <div className="rounded-[5px] border-[1px] border-[#A9A9A9] px-2">
        <select>
          <option value="all">All types</option>
        </select>
      </div>
      <div className="rounded-[5px] border-[1px] border-[#A9A9A9] px-2">
        <select>
          <option value="all">All rating</option>
        </select>
      </div>
      <div className="w-1/4 rounded-[5px] border-[1px] border-[#A9A9A9] px-2">
        <select>
          <option value="all">Search for product</option>
        </select>
      </div>
      <div className="rounded-[5px] border-[1px] border-[#A9A9A9] px-2">
        <p className="">Filter</p>
      </div>
    </div>
  );
};

export default ReviewNav;
