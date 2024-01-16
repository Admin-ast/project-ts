import React from "react";

type Props = {
  nums: number;
  missNums: number;
  useNums: number;
  note: string;
};

const DetailBox = ({ nums, missNums, useNums, note }: Props) => {
  return (
    <div className="mt-[30px] rounded-[15px] bg-[#DA6361] p-5">
      <div className="flex justify-between">
        <p className="text-white">Flagged Reviews</p>
        <p className="text-white">{`${nums}`}</p>
      </div>
      <div className="flex justify-between">
        <p className="text-white">Missed call and chat</p>
        <p className="text-white">{`${missNums}`}</p>
      </div>
      <div className="flex justify-between">
        <p className="font-bold text-white">Used Balence</p>
        <p className="text-white">{`${useNums}`}</p>
      </div>
      <div className="flex ">
        <p className="text-white ">Note:{`${note}`}</p>
      </div>
    </div>
  );
};

export default DetailBox;
