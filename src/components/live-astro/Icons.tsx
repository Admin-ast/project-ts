import Image from "next/image";
import React from "react";
import { BsMicMute } from "react-icons/bs";

type Props = {};

const Icons = (props: Props) => {
  return (
    <div className="z-10 mt-[123px] flex justify-center gap-[25px]">
      <div className="">
        <button className="rounded-[10px] bg-[#DC6563] py-1 px-2">
          <Image
            src="/assets/live-astrologer/mic.svg"
            alt="Mic"
            height={60}
            width={69}
          />
        </button>
      </div>
      <div className="">
        <button>
          <Image
            src="/assets/live-astrologer/callend.svg"
            alt="Mic"
            height={60}
            width={69}
          />
        </button>
      </div>
      <div className="">
        <button className="rounded-[10px] bg-[#DC6563] py-1 px-2">
          <Image
            src="/assets/live-astrologer/videocall.svg"
            alt="Mic"
            height={60}
            width={69}
          />
        </button>
      </div>
    </div>
  );
};

export default Icons;
