import { Input } from "@/components/forms";
import Image from "next/image";
import React from "react";
import ChatBox from "./ChatBox";

type Props = {};

const ArchiveChats = (props: Props) => {
  return (
    <div className="mt-10 px-4  ">
      <div className="flex items-center justify-center">
        <button className="w-3/4 rounded-[5px] border-[1px] border-[#da6468] py-2 text-[24px] font-bold">
          Agent Status
        </button>
      </div>
      <div className="mt-5 flex items-center justify-center">
        <input
          placeholder="Search"
          className="w-3/4 rounded-[28px] bg-[#D9D9D9] py-3 "
        />
      </div>
      <div className="mt-16">
        <p className="text-[24px] font-bold">Archive Chats</p>
        <div className="border-r-[2px] border-[#D9D9D9]">
          <ChatBox
            name="Prerna Sharma"
            lastMessage="Last message last message"
          />
          <ChatBox
            name="Prerna Sharma"
            lastMessage="Last message last message"
          />
          <ChatBox
            name="Prerna Sharma"
            lastMessage="Last message last message"
          />
          <ChatBox
            name="Prerna Sharma"
            lastMessage="Last message last message"
          />
          <ChatBox
            name="Prerna Sharma"
            lastMessage="Last message last message"
          />
        </div>
      </div>
    </div>
  );
};

export default ArchiveChats;
