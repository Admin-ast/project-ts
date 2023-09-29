import Image from "next/image";
import React from "react";

type Props = {
  icon: string;
  text: string;
};

function Hero({ icon, text }: Props) {
  return (
    <div className="relative flex items-center justify-center bg-gradient-to-b  from-[#ffb250] to-[#da3d27] bg-cover py-8 lg:h-[490px] lg:py-[35px]">
      <div className=" justify-center lg:grid lg:grid-cols-12">
        <div className="col-span-3"></div>
        <div className="col-span-6 flex h-full flex-col items-center justify-center text-center">
          <p className="font-[georgia] text-3xl font-black text-white lg:mb-[29px] lg:text-5xl">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
