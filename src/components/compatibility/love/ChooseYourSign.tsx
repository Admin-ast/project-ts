import Image from "next/image";
import Link from "next/link";
import React, { Key } from "react";
import Section from "../../Section";

type Props = {
  headText: string;
};

const ChooseSign = ({ headText }: Props) => {
  const cardDetails = [
    {
      name: "",
      img: "/assets/compatibility/love/shines-01_2.png",
      link: "",
    },
    {
      name: "",
      img: "/assets/compatibility/love/shines-02_1.png",
      link: "",
    },
    {
      name: "",
      img: "/assets/compatibility/love/shines-03_1.png",
      link: "",
    },
    {
      name: "",
      img: "/assets/compatibility/love/shines-04_1.png",
      link: "",
    },
    {
      name: "",
      img: "/assets/compatibility/love/shines-05_1.png",
      link: "",
    },
    {
      name: "",
      img: "/assets/compatibility/love/shines-06_1.png",
      link: "",
    },
    {
      name: "",
      img: "/assets/compatibility/love/shines-07_1.png",
      link: "",
    },
    {
      name: "",
      img: "/assets/compatibility/love/shines-08_1.png",
      link: "",
    },
    {
      name: "",
      img: "/assets/compatibility/love/shines-09_1.png",
      link: "",
    },
    {
      name: "",
      img: "/assets/compatibility/love/shines-10_1.png",
      link: "",
    },
    {
      name: "",
      img: "/assets/compatibility/love/shines-11_1.png",
      link: "",
    },
    {
      name: "",
      img: "/assets/compatibility/love/shines-12_1.png",
      link: "",
    },
  ];
  return (
    <Section>
      <div className="space-y-6 py-8  lg:py-[50px]">
        <div className="text-center text-[36px] font-bold">{headText}</div>
        <div className="mb-[42px] flex flex-wrap justify-center gap-5">
          {cardDetails.map((item: any, index: Key) => (
            <Link
              href={item.link}
              key={index}
              className="flex flex-col justify-end border-black bg-[#000000]"
            >
              <div className="mx-auto">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={171}
                  height={238}
                  loading={"lazy"}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ChooseSign;
