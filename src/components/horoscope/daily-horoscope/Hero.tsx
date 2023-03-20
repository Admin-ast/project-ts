import React from "react";

type Props = {};

function Hero({}: Props) {
  return (
    <div className="relative bg-[url('/assets/bg-inner-page.webp')] bg-cover py-8 lg:py-[121px]">
      <div className="col-span-6 flex h-full flex-col items-center justify-center text-center">
        <p className="mb-3 font-[georgia] text-lg font-black text-white lg:mb-[29px] lg:text-5xl">
          Daily Horoscope
        </p>
        <p className="mb-3 font-[georgia] text-lg font-black text-white lg:mb-[22px] lg:text-3xl">
          check your horoscope today
        </p>
      </div>
    </div>
  );
}

export default Hero;
