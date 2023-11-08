import React from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { RiDeleteBin3Line } from "react-icons/ri";

type Props = {
  Pending: string;
};

const GalleryImageCard = ({ Pending }: Props) => {
  return (
    <div className="mx-auto">
      <div className="">
        <img src="/assets/appointment/live-astro.png" alt="" className="" />
      </div>

      <div className="flex items-center  justify-between rounded-b-[15px] bg-[#DC6563] px-2 text-white">
        <div className="flex items-center gap-2">
          <p className="">{Pending}</p>
          <p className="text-red-700">
            <BsFillInfoCircleFill />
          </p>
        </div>
        <p className="">
          <RiDeleteBin3Line />
        </p>
      </div>
    </div>
  );
};

export default GalleryImageCard;
