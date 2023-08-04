import React from "react";
import { FaUserAlt } from "react-icons/fa";

type Props = {
  className: string;
};

const CommonBtns = ({ className = "" }: Props) => {
  return (
    <div className="mt-[65px] grid grid-rows-2 gap-10 md:flex lg:flex">
      <button className={` py-2 font-bold lg:px-10 ${className}`}>
        Add New
      </button>
      <button className={` py-2 font-bold lg:px-10  ${className}`}>
        Bulk Delete
      </button>
    </div>
  );
};

export default CommonBtns;
