import React from "react";

type Props = {
  name: string;
  id: number;
  product: string;
  category: string;
  details: string;
  status: string;

  quantity: number;
  date: string;
  time: string;
  num: number;
};

const AstrosevaTalkHistorycard = ({
  name,
  details,
  id,
  num,
  product,
  category,
  status,
  quantity,
  date,
  time,
}: Props) => {
  return (
    <div className="rounded- mt-[25px] flex items-center justify-center rounded-[15px]  border-b-[7px] border-b-[#DC6563] shadow-md">
      <div className="px-5 py-5 ">
        <div className="flex justify-between">
          <p className="font-bold">{`${id}`}</p>
          <button className="border-[1px] border-red-700 px-5">
            {details}
          </button>
        </div>
        <div className="flex">
          <p className="">{name}</p>
          <p className="">({`${num}`})</p>
        </div>

        <div className="flex">
          <p className="font-bold">Product: </p>
          <span>{`${product}`}</span>
        </div>
        <div className="flex">
          <p className="font-bold">Category: </p>
          <span>{`${category}`}</span>
        </div>
        <div className="flex">
          <p className="font-bold">Quantity: </p>
          <span>{`${quantity}`}</span>
        </div>
        <div className="flex text-[#A9A9A9]">
          <p className="">{`${date}`} </p>
          <span>{`${time}`}</span>
        </div>
        <div className="flex">
          <p className="font-bold">Status: </p>
          <span className="text-[#3E5DAB]">{`${status}`}</span>
        </div>
      </div>
    </div>
  );
};

export default AstrosevaTalkHistorycard;
