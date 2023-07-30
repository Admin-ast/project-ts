import React from "react";

type Props = {
  session: string;
  time: string;
  date: string;
  status: string;
  name: string;
};

const LiveEventsCard = ({ session, time, date, status, name }: Props) => {
  return (
    <div className=" flex justify-around rounded-[15px] bg-[url('/assets/admin/bg.png')] bg-cover bg-center bg-no-repeat py-5 px-2">
      <div className="">
        <p className="text-[#F9D101]">{`${session}`}</p>
        <p className="text-white">{`${time}`}(IST)</p>
        <p className="text-[#F9D101]">on {`${date}`}(IST)</p>
        <p className="text-white">Status: {`${status}`}(IST)</p>
      </div>
      <div className="mt-[10px] flex h-[54px] w-[54px] items-center justify-center rounded-[100%] bg-[#D9D9D9]">
        <p className="font-bold ">{name}</p>
      </div>
    </div>
  );
};

export default LiveEventsCard;
