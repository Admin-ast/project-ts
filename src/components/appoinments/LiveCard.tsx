import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  detail: {
    name: string;
  };
};

function LiveCard({ detail }: Props) {
  return (
    <>
      <div className="relative  mx-auto h-96  cursor-pointer items-center rounded-3xl">
        <Image
          src={"/assets/appointment/live-astro.png"}
          alt={"chat-icon"}
          width={300}
          height={370}
          loading={"lazy"}
          className="h-full w-full object-contain"
        />

        <div className="absolute bottom-14 w-full text-[24px] font-bold">
          <p className="py-2 text-center font-bold text-white">{detail.name}</p>
        </div>
      </div>
    </>
  );
}

export default LiveCard;
