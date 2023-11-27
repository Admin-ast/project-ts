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
    <div className=" bg-gradient-to-b from-[#ffb04d] to-[#dd4327] bg-cover ">
      <Section>
        <div className=" flex h-[300px] items-center justify-center">
          <div className="    text-center">
            <p className="font-[georgia] text-3xl font-black text-white  lg:text-5xl">
              {text}
            </p>
            <p className="font-[georgia] text-[22px] font-black text-white lg:mt-[25px]">
              {subText}
            </p>
          </div>
        </div>
        {/* {icon && (
            <div className="col-span-3 mx-auto flex w-fit items-center lg:p-8">
              <Image
                src={icon}
                alt={"chat-icon"}
                width={383}
                height={295}
                loading={"lazy"}
                className="h-full w-full object-contain"
              />
            </div>
          )} */}
      </Section>
    </div>
  );
}

export default Hero;
