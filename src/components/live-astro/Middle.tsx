import Image from "next/image";
import React from "react";
import Icons from "./Icons";

type Props = {};

const Middle = (props: Props) => {
  return (
    <div className=" mt-[50px] rounded-[200%]  ">
      <div className="grid items-center  justify-center gap-[20px] bg-white py-8 shadow-xl md:flex lg:relative">
        <div className="flex  h-[132px] w-[100px] items-center justify-center rounded-[20px] bg-[#DC6563] lg:absolute lg:top-[10px] lg:right-[0px]">
          <Image
            src={"/assets/appointment/live-astro.png"}
            alt={"chat-icon"}
            width={91}
            height={91}
            loading={"lazy"}
            className=" rounded-[100%]  object-contain"
          />
        </div>

        <Image
          src={"/assets/appointment/live-astro.png"}
          alt={"chat-icon"}
          width={200}
          height={370}
          loading={"lazy"}
          className=" rounded-[100%]   object-contain"
        />
      </div>
      <Icons />
    </div>
  );
};

export default Middle;
