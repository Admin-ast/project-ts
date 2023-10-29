import React from "react";

type Props = {
  text: string;
  rank: number;
  score: number;
};

const Card = ({ text, rank, score }: Props) => {
  return (
    <div className={`rounded-[15px] bg-white px-4 py-2 shadow-xl `}>
      <div className="">
        <p className="font-bold">Average rating chat</p>
        <div className="flex">
          <div className="w-1/3 rounded-l-[17px] bg-[#CA2127]"></div>
          <div className="w-1/3  bg-[#FFD77E]"></div>
          <div className="w-1/3 rounded-r-[17px] bg-[#0F9825]">
            <p className="text-[#0F9825]">3</p>
          </div>
        </div>
      </div>
      <div className="mt-[12px] border-b-[1px] border-[#D9D9D9]"></div>
      <div className="">
        <div className="flex justify-between">
          <p className="font-bold">Your Score</p>
          <p className="">{score}</p>
        </div>
        <div className="mt-[5px] flex">
          <div className="w-1/2  bg-[#FFD77E]"></div>
          <div className="w-1/2 rounded-r-[17px] bg-[#D9D9D9]">
            <p className="text-[#D9D9D9]">3</p>
          </div>
        </div>
      </div>
      <div className="mt-[12px] text-justify font-[Roboto]">
        <p className="">{text}</p>
      </div>
      <div className="flex">
        <p className="text-[12px] font-bold">Rank:</p>
        <p className="text-[12px] font-bold">{rank}</p>
      </div>
    </div>
  );
};

export default Card;
