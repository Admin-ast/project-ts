import Image from "next/image";
import React from "react";
import Section from "../Section";

type Props = {
  icon: string;
  icons: string;
  text?: string;
  subText?: string;
};

function Hero({ icon, icons, text, subText }: Props) {
  return (
    <div className=" bg-gradient-to-b from-[#ffb04d] to-[#dd4327] bg-cover  lg:h-[340px] ">
      <Section>
        <div className="items-center justify-center gap-[25px] md:flex lg:flex ">
          <div className="mt-[86px]">
            <Image
              src={icons}
              alt={"chat-icon"}
              width={383}
              height={295}
              loading={"lazy"}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="mt-[86px]">
            <p className="font-[Georgia] text-[40px] font-bold text-white">
              {text}
            </p>
            {/* <p className="">
              {subText}
            </p> */}
          </div>

          <div className=" mt-[86px]">
            <Image
              src={icon}
              alt={"chat-icon"}
              width={383}
              height={295}
              loading={"lazy"}
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Hero;
