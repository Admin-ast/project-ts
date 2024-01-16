import Image from "next/image";
import React from "react";

type Props = {
  name: string;
  number: number;
};

const PersonChat = ({ name, number }: Props) => {
  return (
    <div className="">
      <div className="mt-10 flex ">
        <Image
          src="/assets/admin/Dashboard_image.png"
          alt="chat person"
          width={39}
          height={39}
        />
        <div className="">
          <p className="text-[20px] font-semibold">{name}</p>
          <p className="lg:text-[18px]">+{number}</p>
        </div>
      </div>
      <div className=" mt-5 border-b-[1px] border-[#D9D9D9]"></div>
    </div>
  );
};

export default PersonChat;
