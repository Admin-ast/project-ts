import React from "react";
import Sidebar from "./Sidebar";

type Props = {
  name: string;
  id: number;
  date: string;
  time: string;
  type: string;
  token: string;

  status: string;
  duration: string;
  btn1: string;
};

const WaitListCard = ({
  name,
  id,
  date,
  time,
  type,
  token,
  status,
  duration,
  btn1,
}: Props) => {
  return (
    <div className="mt-[25px] flex items-center justify-center rounded-[15px] border-b-[7px]  border-b-[#DC6563]  shadow-md">
      <div className="px-5 py-5 ">
        <p className="">
          {name} <span className="">(Id: {`${id}`})</span>
        </p>
        <p className="">
          {date} <span className="">{time}</span>
        </p>
        <p className="font-bold">
          Type: <span>{`${type}`}</span>
        </p>

        <p className="font-bold">
          Token no: <span>{`${token}`}</span>
        </p>

        <p className="font-bold text-[#D3B160]">
          Status: <span>{`${status}`}</span>
        </p>
        <p className="font-bold">
          Duration: <span>{`${duration}`}</span>
        </p>

        <button className="rounded-[10px] border-[1px] border-[#FF0600] bg-[#FF7646] px-10 py-2 font-semibold">
          {btn1}
        </button>
      </div>
    </div>
  );
};

export default WaitListCard;
