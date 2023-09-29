import Image from "next/image";
import React from "react";

type Props = {};

const AlsoCheck = (props: Props) => {
  return (
    <div className="z-10 bg-white bg-[url('/assets/home/cloud.png')] px-4 ">
      <p className="text-center text-[36px] font-bold ">Also Check</p>
      <div className="mt-[30px]  grid grid-cols-2 items-center justify-center gap-[51px] md:grid-cols-3 lg:flex">
        <div className="flex h-[135px] w-[142px] items-center justify-center rounded-[10px] border-[3px] border-[#DC6563]">
          <div className=" ">
            <Image
              src="/assets/kundli/alsocheck1.png"
              alt="alsocheck1"
              width={80}
              height={78}
              className=""
            />
            <p className="">
              Tomorrow’s <br />
              Horoscope
            </p>
          </div>
        </div>
        <div className="flex h-[135px] w-[142px] items-center justify-center rounded-[10px] border-[3px] border-[#DC6563]">
          <div className=" ">
            <Image
              src="/assets/kundli/alsocheck2.png"
              alt="alsocheck1"
              width={80}
              height={78}
              className=""
            />
            <p className="text-justify">
              Yesterday’s <br />
              Horoscope
            </p>
          </div>
        </div>
        <div className="flex h-[135px] w-[142px] items-center justify-center rounded-[10px] border-[3px] border-[#DC6563]">
          <div className=" ">
            <Image
              src="/assets/kundli/alsocheck3.png"
              alt="alsocheck1"
              width={80}
              height={78}
              className=""
            />
            <p className="">
              Weekly <br />
              Horoscope
            </p>
          </div>
        </div>
        <div className="flex  h-[135px] w-[142px] items-center justify-center rounded-[10px] border-[3px] border-[#DC6563]">
          <div className=" ">
            <Image
              src="/assets/kundli/alsocheck4.png"
              alt="alsocheck1"
              width={80}
              height={78}
              className=""
            />
            <p className="">
              Monthly <br />
              Horoscope
            </p>
          </div>
        </div>
        <div className="flex  h-[135px] w-[142px] items-center justify-center rounded-[10px] border-[3px] border-[#DC6563]">
          <div className=" ">
            <Image
              src="/assets/kundli/alsocheck5.png"
              alt="alsocheck1"
              width={80}
              height={78}
              className=""
            />
            <p className="">
              Yearly <br />
              Horoscope
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlsoCheck;
