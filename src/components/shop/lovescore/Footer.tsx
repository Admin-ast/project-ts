import Section from "@/components/Section";
import { Button } from "@/components/forms";
import Image from "next/image";

import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className=" ">
      <Section>
        <div className="rounded-b-[20px] border-[2px] border-[#A9A9A9] p-5">
          <div className="">
            <p className="text-center font-[Georgia] text-[22px] font-bold">
              Bundles & Save
            </p>
          </div>

          <div className="gap-[20px] md:flex lg:flex ">
            <div className="h-[20%] rounded-[20px] border-[3px] border-black md:w-[40%] ">
              <Image
                src="/assets/shop/lovescore.svg"
                alt="raashi"
                width={330}
                height={156}
                loading={"lazy"}
                className=" rounded-[20px]  object-contain"
              />
            </div>
            <div className="">
              <p className="font-[Georgia] text-[16px] font-bold ">
                Love Compatibility Report
              </p>
              <p className="font-[Georgia]  text-[16px] ">
                ARE YOU COMPATIBLE?
              </p>
              <p className="font-[Georgia]  text-[16px] ">
                Check out the love potential between you and your partner (or
                potential love interest). Discover how to build a healthy and
                sincere bond. This report takes you one step further in an
                accurate compatibility assessment by analyzing each {`person's`}
                Natal Chart. This easy-to-understand report will help you get
                the love you desire. ADD FOR Rs ***
              </p>

              <div className="mb-[43px] mt-[20px] flex items-center justify-center gap-[21px] lg:mt-[103px]">
                <Button
                  btnText="Add To Cart"
                  className="rounded-[10px] bg-[#D9D9D9] text-white md:px-[100px] lg:px-[100px] "
                />
                <Button
                  btnText="Buy Now"
                  className="bg-gradient-to-b from-[#fb7038] to-[#df625b] text-white md:px-[100px] lg:px-[100px]"
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Footer;
