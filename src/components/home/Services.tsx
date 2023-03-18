import Image from "next/image";
import React, { Key } from "react";
import Button from "../common/Button";
import Section from "../Section";

type Props = {};

type Service = {
  name: string;
  src: string;
};

const services: Service[] = [
  {
    name: "Compatibility",
    src: "/assets/home/service-1.png",
  },
  {
    name: "Muhurat",
    src: "/assets/home/service-2.png",
  },
  {
    name: "Palm Reading",
    src: "/assets/home/service-3.png",
  },
];

function Services({}: Props) {
  return (
    <div className="bg-[#FFF7E5] py-12 lg:py-[38px]">
      <Section>
        <div className="">
          <h2 className="mb-[33px] text-center font-[georgia] text-xl font-semibold sm:text-2xl md:text-3xl lg:text-[40px]">
            Our Services
          </h2>
          <div className="mb-[42px] grid grid-cols-1 gap-6 lg:grid-cols-3">
            {services.map((item: Service, index: Key) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border-[3px] border-black"
              >
                <div className="rounded-3xl h-[390px] border-[10px] p-6 border-white">
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={337}
                    height={348}
                    loading={"lazy"}
                    className="object-contain mx-auto w-full h-full"
                  />
                </div>
                <p className="-mt-5 bg-black py-[14px] px-[90px] text-center font-[georgia] text-2xl text-white lg:text-[32px]">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
          <Button text="View More" className="mx-auto lg:text-[28px]" />
        </div>
      </Section>
    </div>
  );
}

export default Services;
