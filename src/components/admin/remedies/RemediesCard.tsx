import React from "react";

type Props = {
  categoryName: string;
  productName: string;
  name: string;
  performedBy: string;
  date: string;
  time: string;
  price: string;
  type: string;
  status: string;
  description: string;
  productNum: number;
  btn1: string;
};

const RemediesCard = ({
  categoryName,
  productName,
  name,
  performedBy,
  date,
  time,
  price,
  type,
  status,
  description,
  productNum,
  btn1,
}: Props) => {
  return (
    <div className=" rounded-[15px] border-b-[7px]  border-b-[#DC6563] shadow-md">
      <div className="px-5 py-5 ">
        <div className="flex gap-1">
          <p className="">Category name:</p>
          <p className="text-[#CDB06F]">{`${categoryName}`}</p>
        </div>

        <p className="text-sm  font-semibold">
          Product name:{" "}
          <span className="text-[#CDB06F]">{`${productName}`}</span>
        </p>

        <div className="flex gap-1">
          <p className="font-bold"> Name:</p>
          <p className="">{`${name}`}</p>
          <p className="">( {`${productNum}`})</p>
        </div>
        <div className="flex gap-1">
          <p className="font-bold">Performed By:</p>
          <p className="">{`${performedBy}`}</p>
        </div>
        <div className="flex gap-1">
          <p className="font-bold">{`${date}`}</p>
          <p className="">,</p>
          <p className="">{`${time}`}</p>
        </div>
        <div className="flex gap-1">
          <p className="font-bold">Type:</p>
          <p className="text-[#CA2127]">{`${type}`}</p>
        </div>
        <div className="flex gap-1">
          <p className="font-bold">Status:</p>
          <p className="text-[#CA2127]">{`${status}`}</p>
        </div>
        <div className="">
          <p className="text-justify">Description: {`${description}`}</p>
        </div>

        <div className="mt-[20px] text-start">
          <button className="rounded-[10px] border-[1px] bg-gradient-to-b from-[#fb7038] to-[#FF0600] px-10 py-2 font-semibold text-white">
            {btn1}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RemediesCard;
