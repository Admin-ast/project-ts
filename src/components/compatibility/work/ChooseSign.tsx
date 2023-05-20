import Image from "next/image";
import Link from "next/link";
import React, { Key } from "react";
import Section from "../../Section";

type Props = {
  headText: string;
  cardDetails: any;
  subText: string;
};

const ChooseSign = ({ headText, cardDetails, subText }: Props) => {
  return (
    <Section>
      <div className="space-y-6 py-8  lg:py-[50px]">
        <div className="text-center text-[36px] font-bold">{headText}</div>
        <div className="mb-[42px] flex flex-wrap justify-center gap-5">
          {cardDetails.map((item: any, index: Key) => (
            <Link
              href={item.link}
              key={index}
              className=" flex w-full max-w-[400px] flex-col justify-end rounded-b-[20px]  rounded-t-3xl border-black  bg-[#000000] md:w-[278px]"
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
              <p className="rounded-[10px] bg-color_gold py-[11px]  text-center font-bold text-black lg:text-[22px]">
                {item.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <div>{subText}</div>
    </Section>
  );
};

export default ChooseSign;
