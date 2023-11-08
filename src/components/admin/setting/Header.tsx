import Link from "next/link";
import React from "react";

type Props = {
  firstBtn: string;
  secondBtn: string;
  thirdBtn: string;
  className: string;
};

const Header = ({ firstBtn, secondBtn, thirdBtn, className = "" }: Props) => {
  return (
    <div className="flex gap-4  bg-[#D9D9D9] px-5 py-3 md:justify-between lg:justify-between">
      <div className="flex  gap-5">
        <div
          className={`rounded-[5px] bg-[#d12627cc] px-4 py-2 font-bold text-white ${className}`}
        >
          <button className="">{`${firstBtn}`}</button>
        </div>
        <div
          className={`rounded-[5px] border-[1px] border-[#d12627cc] bg-[#FFFFFF] px-4 py-2 font-bold ${className}`}
        >
          <Link href="/astrologeradmin/live-event-dp">
            <button className="">{`${secondBtn}`}</button>
          </Link>
        </div>
      </div>
      <div
        className={`rounded-[5px] border-[1px] border-[#d12627cc] bg-[#FFFFFF] px-4 py-2 font-bold  ${className}`}
      >
        <button className="">{`${thirdBtn}`}</button>
      </div>
    </div>
  );
};

export default Header;
