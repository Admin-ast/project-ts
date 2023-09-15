import Link from "next/link";
import React, { useState } from "react";

type Props = {
  user: number;
  nums1: number;
  nums2: number;
};

const Details = ({ user, nums1, nums2 }: Props) => {
  const [guestOpen, setGuestOpen] = useState(false);
  const [allOpen, setAllOpen] = useState(false);
  const [lastOpen, setLastOpen] = useState(false);
  const toggleGuest = () => {
    setGuestOpen((prev) => !prev);
  };
  const toggleAll = () => {
    setAllOpen((prev) => !prev);
  };
  const toggleLast = () => {
    setLastOpen((prev) => !prev);
  };
  return (
    <div className="bg-[#B2AAAA0A] px-4 py-2 ">
      <div className="">
        <p className="text-[24px] font-bold">Users</p>
        <p className="text-[24px]">{user}</p>
      </div>
      <div className="mt-10">
        <div className="rounded-[5px] py-2 px-2 hover:bg-[#DC6563]">
          {" "}
          <p className="text-[18px] font-bold">Show All</p>
        </div>
        <div className="border-b-[1px] border-[#D9D9D9]"></div>

        <div className="mt-5 flex justify-between rounded-[5px] py-2 px-2 hover:bg-[#DC6563]">
          <p className="text-[18px] font-bold">Created Recently</p>
          <p className="text-[18px] font-bold">{nums1}</p>
        </div>
        <div className="border-b-[1px] border-[#D9D9D9]"></div>
        <div className="mt-5 flex justify-between rounded-[5px] py-2 px-2 hover:bg-[#DC6563]">
          <p className="text-[18px] font-bold">Updated Recently</p>
          <p className="text-[18px] font-bold">{nums2}</p>
        </div>
        <div className="border-b-[1px] border-[#D9D9D9]"></div>
        <div className=" mt-5 rounded-[5px]  px-2 hover:bg-[#DC6563]">
          <p className="text-[12px] font-bold text-[#D9D9D9]">USER TYPE</p>
          <button
            className="flex w-full  justify-between"
            onClick={toggleGuest}
          >
            <p className=" text-[18px] font-bold hover:bg-[#DC6563] ">Guest</p>
            <p className={guestOpen ? "text-[24px]" : "text-[24px]"}>&#9662;</p>
          </button>
          {guestOpen && (
            <ul className="">
              <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[20px] hover:bg-[#DC6563]">
                <Link href="/"></Link>
              </li>
              <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[20px] hover:bg-[#DC6563]">
                <Link href="/"></Link>
              </li>
            </ul>
          )}
        </div>
        <div className="border-b-[1px] border-[#D9D9D9]"></div>

        <div className=" mt-5 rounded-[5px]  px-2 hover:bg-[#DC6563]">
          <p className="text-[12px] font-bold text-[#D9D9D9]">METRO</p>
          <button className="flex w-full  justify-between" onClick={toggleAll}>
            <p className=" text-[18px] font-bold hover:bg-[#DC6563] ">All</p>
            <p className={allOpen ? "text-[24px]" : "text-[24px]"}>&#9662;</p>
          </button>
          {allOpen && (
            <ul className="">
              <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[20px] hover:bg-[#DC6563]">
                <Link href="/"></Link>
              </li>
              <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[20px] hover:bg-[#DC6563]">
                <Link href="/"></Link>
              </li>
            </ul>
          )}
        </div>
        <div className="border-b-[1px] border-[#D9D9D9]"></div>

        <div className=" mt-5 rounded-[5px]  px-2 hover:bg-[#DC6563]">
          <p className="text-[12px] font-bold text-[#D9D9D9]">Created ON</p>
          <button className="flex w-full  justify-between" onClick={toggleLast}>
            <p className=" text-[18px] font-bold hover:bg-[#DC6563] ">
              Last 24 hrs
            </p>
            <p className={lastOpen ? "text-[24px]" : "text-[24px]"}>&#9662;</p>
          </button>
          {lastOpen && (
            <ul className="">
              <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[20px] hover:bg-[#DC6563]">
                <Link href="/"></Link>
              </li>
              <li className="flex items-center justify-around border-b-[1px] border-[#D9D9D9] py-[5px] font-[Roboto] text-[20px] hover:bg-[#DC6563]">
                <Link href="/"></Link>
              </li>
            </ul>
          )}
        </div>
        <div className="border-b-[1px] border-[#D9D9D9]"></div>
      </div>
      <div className="flex items-center justify-center">
        <button className="mt-20 rounded-[6px] bg-[#DC6563] px-10 py-2 text-[16px] font-bold ">
          Apply Filter
        </button>
      </div>
    </div>
  );
};

export default Details;
