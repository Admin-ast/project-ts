import { Card } from "@/components/home/Horoscope";
import Image from "next/image";
import React from "react";

type Props = {
  activeSign: Card;
};

function Hero({ activeSign }: Props) {
  return (
    <div className="relative grid grid-cols-12 bg-[url('/assets/bg-inner-page.webp')] bg-cover py-8 lg:py-[35px]">
      <div className="col-span-3"></div>
      <div className="col-span-6 flex h-full flex-col items-center justify-center text-center">
        <p className="mb-3 font-[georgia] text-lg font-black text-white lg:mb-[29px] lg:text-5xl">
          {activeSign.name} Daily Horoscope
        </p>
        <p className="mb-3 font-[georgia] text-lg font-black text-white lg:mb-[29px] lg:text-3xl">
          28 February 2023
        </p>
      </div>
      <div className="col-span-3">
        <Image
          src={activeSign.icon}
          alt={activeSign.id}
          width={240}
          height={307}
          loading={"lazy"}
        />
      </div>
    </div>
  );
}

export default Hero;
