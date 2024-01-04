import Image from "next/image";
import React from "react";

interface CardProps {
  imageSrc: string;
  content: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ imageSrc, content }) => {
  return (
    <div className="inset-0 flex rounded-[20px] bg-white px-2 py-1 shadow-xl">
      <div className="w-1/2  rounded-[15px] border-[3px] border-[#DC6563]">
        <Image
          src={imageSrc}
          alt="Card Image"
          width={164}
          height={180}
          className="h-full w-full rounded-[10px] object-cover  p-1"
        />
      </div>
      <div className="w-1/2 p-4">
        {content}
        <button className="float-right mt-4 rounded-[5px] bg-gradient-to-b from-[#fb7038] to-[#FF0600] px-2 font-semibold text-white">
          Know More
        </button>
      </div>
    </div>
  );
};

export default Card;
