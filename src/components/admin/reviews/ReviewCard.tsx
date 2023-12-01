import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { RiFlag2Fill } from "react-icons/ri";
import ReplyAnjali from "./ReplyAnjali";

type Props = {
  id: number;
  name: string;
  Name: string;
  service: string;
  date: string;
  desc: string;
  text: string;
};

const ReviewCard = ({ id, name, Name, service, date, desc, text }: Props) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  return (
    <div className="mt-[25px]  flex  min-h-[231px] items-center  rounded-[15px] border-b-[7px]  border-b-[#DC6563]  shadow-xl">
      <div className="px-5 py-5 ">
        <div className="just flex">
          <p className="font-bold">
            Order ID: <span className=""> {`${id}`}</span>
          </p>
          <div className="flex h-[54px] w-[54px] items-center justify-center rounded-[100%] bg-[#D9D9D9]">
            <p className="font-bold ">{name}</p>
          </div>
          <div className="flex justify-end">
            <RiFlag2Fill className="text-[20px] text-[#A9A9A9]" />
          </div>
        </div>
        <div className="">
          <p className="">{Name}</p>
        </div>
        <div className="flex gap-1">
          <p className="">Service:</p>
          <p className="font-bold">{`${service}`}</p>
        </div>
        <div className="flex gap-1">
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
        <div className="">
          <p className="text-justify">{`${desc}`}</p>
        </div>

        <div className="cursor-pointer">
          <p onClick={togglePopup} className="text-[16px] text-[#00AF1C]">
            {text}
          </p>
        </div>
        <ReplyAnjali
          heading="Replay ANJALI review for CHAT"
          isOpen={isPopupOpen}
          onClose={togglePopup}
        />
      </div>
    </div>
  );
};

export default ReviewCard;
