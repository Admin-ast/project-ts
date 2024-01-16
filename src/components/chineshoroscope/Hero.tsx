import Image from "next/image";
import React from "react";
import Section from "../Section";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="relative bg-[url('/assets/chineshoroscope/chineshero.svg')] bg-cover py-8 lg:py-[70px]">
      <Section>
        <div className=" justify-center lg:grid lg:grid-cols-12">
          <div className="col-span-3"></div>
          <div className="col-span-6 flex h-full flex-col items-center justify-center text-center">
            <p className="font-[georgia] text-3xl font-black text-white lg:mb-[29px] lg:text-5xl">
              Daily Chinese Horoscope
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Hero;
