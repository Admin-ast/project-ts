import Image from "next/image";
import React from "react";

type Props = {
  detail: {
    name: string;
  };
};

function LiveCard({ detail }: Props) {
  return (
    <div className="relative mx-auto h-96 w-[300px] cursor-pointer items-center rounded-3xl">
      <Image
        src={"/assets/appointment/live-astro.png"}
        alt={"chat-icon"}
        width={300}
        height={370}
        loading={"lazy"}
        className="h-full w-full object-contain"
      />

      <div className="absolute top-6 left-4 flex items-center justify-center space-x-2 rounded-full bg-[#CDB06F] py-1 px-3">
        <p className="text-center font-bold">Live</p>
        <div className="h-[10px] w-[10px] rounded-full bg-red-900"></div>
      </div>
      <div className="absolute bottom-14 w-full bg-black/50">
        <p className="py-2 text-center font-bold text-white">{detail.name}</p>
      </div>
    </div>
  );
}

export default LiveCard;
