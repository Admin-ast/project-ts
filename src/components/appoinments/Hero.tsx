import Image from "next/image";
import React from "react";

type Props = {
  icon: string;
  text: string;
};

function Hero({ icon, text }: Props) {
  return (
    <div className="relative bg-[url('/assets/bg-inner-page.webp')] bg-cover py-8 lg:py-[35px]">
      <div className=" justify-center lg:grid lg:grid-cols-12">
        <div className="col-span-3"></div>
        <div className="col-span-6 flex h-full flex-col items-center justify-center text-center">
          <p className="font-[georgia] text-3xl font-black text-white lg:mb-[29px] lg:text-5xl">
            {text}
          </p>
        </div>
        <div className="col-span-3 mx-auto flex w-fit justify-center lg:p-20">
          <Image
            src={icon}
            alt={"chat-icon"}
            width={340}
            height={295}
            loading={"lazy"}
            className="h-full w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
