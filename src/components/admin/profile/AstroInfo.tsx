import Image from "next/image";
import React from "react";
import Section from "../../Section";

type Props = {
  name: string;
  id: string;
  email: string;
};

const AstroInfo = ({ name, id, email }: Props) => {
  return (
    <div className="mt-[30px] ">
      <Section>
        <div className="gap-[100px] bg-white p-5 shadow-xl md:flex lg:flex">
          <div className="flex gap-[26px] ">
            <div className="">
              <Image
                src="/assets/home/review.png"
                alt="astrologer"
                width={107}
                height={107}
                className=" rounded-full border-[5px] border-[#DC6563]"
              />
            </div>
            <div className="">
              <div className="flex whitespace-nowrap md:flex">
                <p className="">Real Name:</p>
                <p className="font-bold">{name}</p>
                <p className="font-bold">(ID:{id})</p>
              </div>
              <div className="mt-[15px] flex">
                <p className="">Email ID:</p>
                <p className="font-bold">{email}</p>
              </div>
              <div className="mt-[15px] flex">
                <p className="">Email ID:</p>
                <p className="font-bold">{email}</p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex ">
              <p className="">Real Name:</p>
              <p className="font-bold">{name}</p>
              <p className="font-bold">(ID:{id})</p>
            </div>
            <div className="mt-[15px] flex">
              <p className="">Email ID:</p>
              <p className="font-bold">{email}</p>
            </div>
            <div className="mt-[15px] flex">
              <p className="">Email ID:</p>
              <p className="font-bold">{email}</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default AstroInfo;
