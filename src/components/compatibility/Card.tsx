import Image from "next/image";
import Link from "next/link";
import React, { Key } from "react";
import Section from "../Section";

type Props = {};

type CardDetails = {
  img: string;
  name: string;
  link: string;
};
const cardDetails: CardDetails[] = [
  {
    name: "Love Compatibility",
    img: "/assets/compatibility/love-icon.png",
    link: "/compatibility/love",
  },
  {
    name: "Work Compatibility",
    img: "/assets/compatibility/work-icon.png",
    link: "/compatibility/work",
  },
  {
    name: "Chinese Compatibility",
    img: "/assets/compatibility/chinese-icon.png",
    link: "/chines-horoscope",
  },
];

const Card = (props: Props) => {
  return (
    <Section>
      <div className="space-y-6 py-8 lg:py-[50px]">
        <p>
          Find out how your compatibility compares with your lover, friends,
          family, and more with our compatibility reading for all zodiac signs.
        </p>
        <div className="mb-[42px] grid grid-cols-1 gap-6 lg:grid-cols-3">
          {cardDetails.map((item: CardDetails, index: Key) => (
            <Link
              href={item.link}
              key={index}
              className="overflow-hidden rounded-3xl border-[3px] border-[#Dc6563] bg-white"
            >
              <div className="mx-auto h-[275px] w-[150px]">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={150}
                  height={275}
                  loading={"lazy"}
                />
              </div>
              <p className="h-full whitespace-nowrap bg-[#DC6563] py-[14px]  text-center text-2xl text-white lg:text-[20px]">
                {item.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Card;
