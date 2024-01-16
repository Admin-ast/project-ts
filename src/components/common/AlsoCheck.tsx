import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

const AlsoCheck = (props: Props) => {
  return (
    <div className=" mt-[5px] bg-white  bg-[url('/assets/home/cloud.png')] py-[30px]  px-4 shadow-md ">
      <p className="text-center text-[30px] font-bold ">Also Check</p>
      <div className="mt-[30px]  grid grid-cols-2 items-center justify-center gap-[51px] md:grid-cols-3 lg:flex">
        <div className="flex h-[135px] w-[142px] items-center justify-center rounded-[10px] border-[3px] border-[#DC6563]">
          <Link href="/horoscope/tomorrow">
            <div className=" ">
              <Image
                src="/assets/kundli/alsocheck1.png"
                alt="alsocheck1"
                width={80}
                height={78}
                className=""
              />
              <p className="text-center">
                Tomorrow’s <br />
                Horoscope
              </p>
            </div>
          </Link>
        </div>
        <Link href="/horoscope/yesterday">
          <div className="flex h-[135px] w-[142px] items-center justify-center rounded-[10px] border-[3px] border-[#DC6563]">
            <div className=" ">
              <Image
                src="/assets/kundli/alsocheck2.png"
                alt="alsocheck1"
                width={80}
                height={78}
                className=""
              />
              <p className="text-center">
                Yesterday’s <br />
                Horoscope
              </p>
            </div>
          </div>
        </Link>
        <Link href="/horoscope/weekly">
          <div className="flex h-[135px] w-[142px] items-center justify-center rounded-[10px] border-[3px] border-[#DC6563]">
            <div className=" ">
              <Image
                src="/assets/kundli/alsocheck3.png"
                alt="alsocheck1"
                width={80}
                height={78}
                className=""
              />
              <p className="text-center">
                Weekly <br />
                Horoscope
              </p>
            </div>
          </div>
        </Link>
        <Link href="/horoscope/monthly">
          <div className="flex  h-[135px] w-[142px] items-center justify-center rounded-[10px] border-[3px] border-[#DC6563]">
            <div className=" ">
              <Image
                src="/assets/kundli/alsocheck4.png"
                alt="alsocheck1"
                width={80}
                height={78}
                className=""
              />
              <p className="text-center">
                Monthly <br />
                Horoscope
              </p>
            </div>
          </div>
        </Link>
        <Link href="horoscope/yearly">
          <div className="flex  h-[135px] w-[142px] items-center justify-center rounded-[10px] border-[3px] border-[#DC6563]">
            <div className=" ">
              <Image
                src="/assets/kundli/alsocheck5.png"
                alt="alsocheck1"
                width={80}
                height={78}
                className=""
              />
              <p className="text-center">
                Yearly <br />
                Horoscope
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AlsoCheck;
