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
    src: "/assets/home/service-1.webp",
  },
  {
    name: "Muhurat",
    src: "/assets/home/service-2.webp",
  },
  {
    name: "Palm Reading",
    src: "/assets/home/service-3.webp",
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
                <div className="h-[390px] rounded-3xl border-[10px] border-white p-6">
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={337}
                    height={348}
                    loading={"lazy"}
                    className="mx-auto h-full w-full object-contain"
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
