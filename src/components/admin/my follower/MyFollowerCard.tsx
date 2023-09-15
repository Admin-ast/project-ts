import Image from "next/image";
import React from "react";

type Props = {
  name: string;
  id: number;
  date: string;
};

const MyFollowerCard = ({ name, id, date }: Props) => {
  return (
    <div className="flex items-center justify-center rounded-[15px] border-b-[7px] border-[#DC6563] shadow-md">
      <div className="h-16 w-16   ">
        <Image
          src="/assets/admin/Dashboard_image.png"
          alt="card-image"
          height={39}
          width={39}
          className="   rounded-[100%] border-[1px] border-[#DC6563]"
        />
      </div>
      <div className="ml-4">
        <p className="text-xl font-bold">
          {name}
          <span className="">({id})</span>
        </p>
        <p className="text-gray-500">{date}</p>
      </div>
    </div>
  );
};

export default MyFollowerCard;
