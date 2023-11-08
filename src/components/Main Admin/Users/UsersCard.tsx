import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinLine, RiFlag2Fill } from "react-icons/ri";

type Props = {
  id: number;
  name: string;
  Name: string;
  service: string;
  date: string;
};

const UsersCard = ({ id, name, Name, service, date }: Props) => {
  return (
    <div className="mt-[25px] flex items-center justify-center rounded-[15px] border-b-[7px]  border-b-[#DC6563]  bg-white shadow-xl">
      <div className="px-5 py-5 ">
        <div className="flex ">
          <p className="font-bold">
            Order ID: <span className=""> {`${id}`}</span>
          </p>
          <div className="flex h-[54px] w-[54px] items-center justify-center rounded-[100%] bg-[#D9D9D9]">
            <p className="font-bold ">{name}</p>
          </div>
          <FaRegEdit className="text-[20px] text-[#A9A9A9]" />
        </div>
        <div className="">
          <p className="">{Name}</p>
        </div>
        <div className="flex gap-1">
          <p className="">Service:</p>
          <p className="font-bold">{`${service}`}</p>
        </div>
        <div className="mt-2 flex justify-between">
          <div className="flex gap-2">
            <p className="">
              <AiFillStar />
            </p>
            <p className="">
              <AiFillStar />
            </p>
            <p className="">
              <AiFillStar />
            </p>
            <p className="">
              <AiFillStar />
            </p>
            <p className="">
              <AiFillStar />
            </p>
            <p className="text-[#A9A9A9]">{`${date}`}</p>
          </div>
          <div className="text-[#A9A9A9]">
            <RiDeleteBinLine />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersCard;
