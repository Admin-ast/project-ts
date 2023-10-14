import Image from "next/image";
import React from "react";

type Props = {};

const Middle = (props: Props) => {
  return (
    <div className="lg:width-[400px] mt-[100px] rounded-[200%] lg:h-[400px] lg:w-2/3">
      <div className="md:flex md:items-center md:justify-center ">
        <Image
          src={"/assets/appointment/live-astro.png"}
          alt={"chat-icon"}
          width={300}
          height={370}
          loading={"lazy"}
          className=" rounded-[50%]   object-contain"
        />
      </div>
    </div>
  );
};

export default Middle;
