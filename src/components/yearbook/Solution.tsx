import Image from "next/image";
import React from "react";
import BirthDetail from "./BirthDetail";
import Payment from "./Payment";

type Props = {};

const Solution = (props: Props) => {
  return (
    <div className="mt-[30px] bg-white px-[20px] pb-[30px] shadow-xl">
      <p className="py-[20px] text-[20px] font-bold">
        Step 1...2...3... And Your Solution in Your Hands{" "}
      </p>
      <div className="flex w-full gap-[33px]">
        <div className="">
          <div className="flex items-center">
            <Image
              src="/assets/yearbook/line.png"
              alt="line"
              width={95}
              height={1}
              className=" md:w-[64px] lg:w-[95px] "
            />
            <div className="flex h-[32px] w-[32px] items-center justify-center rounded-[100%] border-[1px] border-[#D9D9D9]">
              1
            </div>
            <Image
              src="/assets/yearbook/line.png"
              alt="line"
              width={95}
              height={1}
              className=" md:w-[64px] lg:w-[95px] "
            />
          </div>
          <div className="">
            <p className="text-center">Enter your birth details</p>
          </div>
          <div className="mt-[34px]">
            <Image
              src="/assets/yearbook/birth.png"
              alt="customer"
              width={254}
              height={243}
              className=" h-[143px] "
            />
          </div>
        </div>
        <div className="">
          <div className="flex items-center">
            <Image
              src="/assets/yearbook/line.png"
              alt="line"
              width={95}
              height={1}
              className="  md:w-[64px] lg:w-[95px]"
            />
            <div className="flex h-[32px] w-[32px] items-center justify-center rounded-[100%] border-[1px] border-[#D9D9D9]">
              2
            </div>
            <Image
              src="/assets/yearbook/line.png"
              alt="line"
              width={95}
              height={1}
              className=" md:w-[64px] lg:w-[95px]"
            />
          </div>
          <div className="">
            <p className="text-center">Choose your payments methods securely</p>
          </div>
          <div className="mt-[64px]">
            <Image
              src="/assets/yearbook/card.png"
              alt="customer"
              width={254}
              height={143}
              className=" h-[143px] "
            />
          </div>
        </div>
        <div className="">
          <div className="flex items-center">
            <Image
              src="/assets/yearbook/line.png"
              alt="line"
              width={95}
              height={1}
              className="  md:w-[64px] lg:w-[95px]"
            />
            <div className="flex h-[32px] w-[32px] items-center justify-center rounded-[100%] border-[1px] border-[#D9D9D9]">
              3
            </div>
            <Image
              src="/assets/yearbook/line.png"
              alt="line"
              width={95}
              height={1}
              className="  md:w-[64px]lg:w-[95px]"
            />
          </div>
          <div className="">
            <p className="text-center">Get your report within 24 hours</p>
          </div>
          <div className="mt-[64px]">
            <Image
              src="/assets/yearbook/delievery.png"
              alt="customer"
              width={254}
              height={143}
              className=" h-[143px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
