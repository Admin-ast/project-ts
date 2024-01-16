import React, { useState } from "react";
import SuggestRemedy from "./orderhistory/SuggestRemedy";

type Props = {
  New: string;
  country: string;
  offer: string;
  order: number;
  name: string;
  rs: number;
  gender: string;
  dob: string;

  pob: string;
  orderDate: string;
  orderTime: string;
  duration: string;
  rate: string;
  status: string;
  btn1: string;
  btn2: string;
  btn3: string;
  copy: string;
};

const HistoryCard = ({
  New,
  country,
  offer,
  order,
  name,
  rs,
  gender,
  dob,
  pob,
  copy,
  orderDate,
  orderTime,
  duration,
  rate,
  status,
  btn1,
  btn2,
  btn3,
}: Props) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  return (
    <div className="rounded-[15px]  border-b-[7px]  border-b-[#DC6563]">
      <div className="px-5 py-5 ">
        <div className="flex gap-[2px]">
          <p className="text-blue-700">{`${New}`}</p>
          <p className="text-blue-700 ">({country})</p>
        </div>

        <p className="text-left text-[#FF7646]">{offer}</p>
        <p className="text-left font-bold">
          Order ID: <span>{`${order}`}</span>
        </p>
        <div className="flex justify-between">
          <p className="font-bold">
            Name: <span>{`${name}`}</span>
          </p>
          <p className="mr-5 font-bold">
            Rs <span>{`${rs}`}</span>
          </p>
        </div>
        <div className="flex">
          <p className="font-bold">Gender: </p>
          <span>{`${gender}`}</span>
        </div>
        <div className="flex">
          <p className="font-bold">DOB: </p>
          <span>{`${dob}`}</span>
        </div>

        <div className="flex justify-between gap-1">
          <div className="flex">
            <p className="font-bold">POB:</p>
            <span>{`${pob}`}</span>
          </div>
          <button className="rounded-[10px] border-[1px] border-[#FF0600] px-1 py-[1px]">
            {copy}
          </button>
        </div>
        <div className="flex gap-2">
          <p className="font-bold">Order Time: </p>
          <p className=" ">{`${orderTime}`}</p>
        </div>
        <div className="flex">
          <p className="font-bold">Duration: </p>
          <span>{`${duration}`}</span>
        </div>
        <div className="flex">
          <p className="font-bold">Rate: </p>
          <span>{`${rate}`}</span>
        </div>
        <div className="flex">
          <p className="font-bold">Status: </p>
          <span className="text-green-700">{`${status}`}</span>
        </div>
        <div className="flex">
          <button
            onClick={togglePopup}
            className=" rounded-[10px] border-[1px] border-[#FF0600]  px-5 py-2  font-semibold"
          >
            {btn1}
          </button>
          <SuggestRemedy
            heading="Suggest Remedy"
            isOpen={isPopupOpen}
            onClose={togglePopup}
          />
          <div
            className={`fixed top-0 left-0 h-screen w-screen transition-opacity ${
              isPopupOpen ? "opacity-50" : "pointer-events-none opacity-0"
            } bg-gray-500`}
          ></div>
        </div>

        <div className="mt-[20px] flex gap-10">
          <button className="rounded-[10px] border-[1px] border-[#FF0600] bg-[#FF7646] px-2 py-2 font-semibold text-white">
            {btn2}
          </button>
          <button className="rounded-[10px] border-[1px] border-[#FF0600] px-2 py-2 font-semibold">
            {btn3}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;
