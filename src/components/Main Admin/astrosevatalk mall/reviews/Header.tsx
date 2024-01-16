import React from "react";

type Props = {
  aquant: number;
  pquant: number;
  apquant: number;
  squant: number;
  tquant: number;
};

const Header = ({ aquant, pquant, apquant, squant, tquant }: Props) => {
  return (
    <div className="grid grid-cols-2 md:flex md:gap-5 lg:flex lg:gap-5">
      <div className="flex text-base font-bold">
        <p className="">All</p>
        <p className="">({`${aquant}`})</p>
        <p className="px-4">|</p>
      </div>
      <div className="flex text-base font-bold">
        <p className="">Pending</p>
        <p className="">({`${pquant}`})</p>
        <p className="px-4">|</p>
      </div>
      <div className="flex text-base font-bold">
        <p className="">Approved</p>
        <p className="">({`${apquant}`})</p>
        <p className="px-4">|</p>
      </div>
      <div className="flex text-base font-bold">
        <p className="">Spam</p>
        <p className="">({`${squant}`})</p>
        <p className="px-4">|</p>
      </div>
      <div className="flex text-base font-bold">
        <p className="">Trash</p>
        <p className="">({`${tquant}`})</p>
        <p className="px-4">|</p>
      </div>
    </div>
  );
};

export default Header;
