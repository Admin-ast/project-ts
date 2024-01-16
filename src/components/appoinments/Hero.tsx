import Image from "next/image";
import React from "react";

type Props = {
  icon: string;
  text: string;
};

function Hero({ icon, text }: Props) {
  return (
    <div className="relative flex items-center justify-center bg-gradient-to-b  from-[#ffb250] to-[#da3d27] bg-cover  md:h-[300px] lg:h-[340px] ">
      <div className=" justify-center lg:grid lg:grid-cols-12">
        <div className="col-span-3"></div>
        <div className="col-span-6 flex h-full flex-col items-center justify-center text-center">
          <p className="font-[georgia]  font-black text-white md:text-[40px] lg:mb-[29px] lg:text-[48px] ">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
