import Image from "next/image";
import Link from "next/link";
import React, { Key } from "react";

import { Button } from "@/components/forms";
import Section from "../Section";

type Props = {
  headText: string;

  subText: string;
};
const cardDetails = [
  {
    name: "Taurus",
    img: "/assets/kundli/taurus.png",
    link: "",
    person: "Your Sign",
  },
  {
    name: "Virgo",
    img: "/assets/kundli/virgo.png",
    link: "",
    person: "Your Partner's Sign",
  },
];

const SideNavFooter = ({ headText, subText }: Props) => {
  return (
    <Section>
      <div className="mt-10 w-[216px] rounded-[10px] border-[2px] border-black py-4  ">
        <p className="text-center text-[12px] font-bold">{headText}</p>
        <div className="mt-[5px] text-center text-[12px] font-bold">
          {subText}
        </div>
        <div className="mt-[10px] flex justify-center  gap-[9px] ">
          {cardDetails.map((item: any, index: Key) => (
            <div key={index} className="">
              <p className="text-center text-[8px] font-bold">{item.person}</p>
              <Link
                href={item.link}
                className=" flex  flex-col justify-end rounded-[10px]   border-[2px] border-[#DC6563]  bg-white shadow-xl"
              >
                <div className="flex h-[78px]  w-[85px] items-center justify-center ">
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={55}
                    height={55}
                    loading={"lazy"}
                  />
                </div>
                <div className="h-[15px] w-[85px]">
                  <p className="rounded-[10px] bg-[#DC6563] text-center text-[10px]     font-bold text-white ">
                    {item.name}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="  mt-[23px] flex items-center justify-center">
          <button className="rounded-[5px] bg-gradient-to-b from-[#fb7038] to-[#df625b]  px-4 py-2 text-[10px] font-semibold text-white">
            {" "}
            Check Your Love Compatibility
          </button>
        </div>
      </div>
    </Section>
  );
};

export default SideNavFooter;
