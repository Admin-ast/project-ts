import Image from "next/image";
import React from "react";
import Section from "../Section";

type Props = {
  icon?: string;
  text?: string;
  subText?: string;
};

function Hero({ icon, text, subText }: Props) {
  return (
    <div className="relative h-[300px] bg-gradient-to-b from-[#ffb04d] to-[#dd4327] bg-cover ">
      <Section>
        <div className=" justify-center  lg:grid lg:grid-cols-12">
          <div className="col-span-3"></div>
          <div className="col-span-6 flex h-full flex-col items-center justify-center  text-center">
            <p className="font-[georgia] text-3xl font-black text-white lg:mt-[121px] lg:text-5xl">
              {text}
            </p>
            <p className="font-[georgia] text-[22px] font-black text-white lg:mt-[25px]">
              {subText}
            </p>
          </div>
          {icon && (
            <div className="col-span-3 mx-auto flex w-fit justify-center lg:p-8">
              <Image
                src={icon}
                alt={"chat-icon"}
                width={383}
                height={295}
                loading={"lazy"}
                className="h-full w-full object-contain"
              />
            </div>
          )}
        </div>
      </Section>
    </div>
  );
}

export default Hero;
