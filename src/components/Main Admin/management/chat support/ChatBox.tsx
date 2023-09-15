import Image from "next/image";
import React from "react";

type Props = { name: string; lastMessage: string };

const ChatBox = ({ name, lastMessage }: Props) => {
  return (
    <div className="">
      <div className="mt-5 flex gap-5">
        <div className="">
          <Image
            src="/assets/admin/Dashboard_image.png"
            alt="chat image"
            height={39}
            width={39}
          />
        </div>
        <div className="">
          <p className="text-[18px]">{name}</p>
          <p className="text-base">{lastMessage}</p>
        </div>
      </div>
      <div className=" mt-5 border-b-[1px] border-[#D9D9D9]"></div>
    </div>
  );
};

export default ChatBox;
