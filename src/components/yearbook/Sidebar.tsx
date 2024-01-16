import Image from "next/image";
import React from "react";
import User from "./User";
import Bottom from "./Bottom";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="">
      <div className="bg-[#FFDCD1] py-[20px]">
        <div className="">
          <div className="flex justify-center gap-[10px]">
            <p className="text-[24px] font-bold">$ 4.6 / 299 Rs</p>
            <div className="rounded-[100%] bg-[#DC6563] px-2 text-[12px] text-white">
              <p className="">70%</p>
              <p className="">Off</p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-center text-[#CA2127]">Price: $15.56 / Rs 999</p>
            <p className="">You Save: $10 / Rs 700 (70%)</p>
            <p className="text-[12px]">All Inclusive</p>
          </div>
          <div className="flex items-center justify-center ">
            <button className="rounded-[5px] bg-gradient-to-b from-[#fb7038] to-[#FF0600]  px-4 text-[24px] font-semibold text-white">
              Order Now
            </button>
          </div>
          <p className="text-center text-[12px]">
            (Delivered by email in 24hrs)
          </p>
        </div>
        <div className="">
          <div className=" flex items-center justify-center">
            <Image
              src="/assets/yearbook/line.png"
              alt="line"
              width={73}
              height={1}
              className=" test "
            />
            <p className="text-center font-bold">Testimonials</p>
            <Image
              src="/assets/yearbook/line.png"
              alt="line"
              width={73}
              height={1}
              className="test  "
            />
          </div>
          <div className="px-[20px] text-justify">
            <p className="">
              I was very curious about by fate this year because last year was a
              bit tough for me. Trikal Samhita has given me a lot to plan for
              this year. This report is really comprehensive and has every
              minute detail about me. I highly recommend this to everyone.
            </p>
            <p className="float-right ">~ Prakash Bhatia</p>
          </div>
          <div className="px-[20px]  pb-[30px] text-justify">
            <p className="pt-[30px]">
              I was quite impressed with the free report available at AstroSage
              and this forced me purchase Big Horoscope as well. Big Horoscope
              has a detailed analysis of each and every aspect of my life and I
              am really happy to have this.
            </p>
            <p className="float-right mt-[20px]">~ Hemant Bhargava</p>
          </div>
        </div>
        <div className="mt-[20px] border-b-[1px] border-[#D9D9D9] px-[20px]"></div>
        <div className="">
          <User />
        </div>
      </div>
      <Bottom />
    </div>
  );
};

export default Sidebar;
