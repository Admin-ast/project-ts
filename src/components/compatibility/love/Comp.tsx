import Image from "next/image";
import Link from "next/link";
import React, { Key } from "react";
import Section from "../../Section";
import { Button } from "@/components/forms";

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

const Comp = ({ headText, subText }: Props) => {
  return (
    <Section>
      <div className="space-y-6 py-8  lg:py-[50px]">
        <p className="">{subText}</p>
        <div className="text-center text-[36px] font-bold">{headText}</div>
        <div className="mb-[42px] flex flex-wrap justify-center gap-[145px] ">
          {cardDetails.map((item: any, index: Key) => (
            <div key={index} className="">
              <p className="mb-[10px] text-center font-[Roboto] text-[22px] font-bold">
                {item.person}
              </p>
              <Link
                href={item.link}
                className=" flex  w-full max-w-[400px] flex-col justify-end rounded-b-[20px] rounded-t-3xl  border-[3px] border-[#DC6563]  bg-white shadow-xl md:w-[278px]"
              >
                <div className="mx-auto h-[80%] py-5 ">
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={150}
                    height={275}
                    loading={"lazy"}
                  />
                </div>

                <p className="rounded-[10px] bg-[#DC6563]  py-[11px]  text-center font-bold text-white lg:text-[22px]">
                  {item.name}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center px-4 py-2">
        <Button
          btnText="Check Your Love Compatibility"
          className="bg-gradient-to-b from-[#fb7038] to-[#df625b] text-[22px] font-semibold text-white"
        />
      </div>
    </Section>
  );
};

export default Comp;
