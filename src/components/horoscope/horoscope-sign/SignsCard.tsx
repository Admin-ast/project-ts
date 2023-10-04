import { Card } from "@/components/home/Horoscope";
import Section from "@/components/Section";
import Image from "next/image";
import Link from "next/link";
import React, { Key } from "react";

type Props = {};
const cardDetail = [
  {
    id: 1,
    src: "/assets/kundli/pieces.png",
    name: "Pieces",
    link: "/",
  },
  {
    id: 2,
    src: "/assets/kundli/taurus.png",
    name: "Taurus",
    link: "/",
  },
  {
    id: 3,
    src: "/assets/kundli/gemini.png",
    name: "Gemini",
    link: "/",
  },
  {
    id: 4,
    src: "/assets/kundli/cancer.png",
    name: "Cancer",
    link: "/",
  },
  {
    id: 5,
    src: "/assets/kundli/leo.png",
    name: "Leo",
    link: "/",
  },
  {
    id: 6,
    src: "/assets/kundli/virgo.png",
    name: "Virgo",
    link: "/",
  },
  {
    id: 7,
    src: "/assets/kundli/libra.png",
    name: "Libra",
    link: "/",
  },
  {
    id: 8,
    src: "/assets/kundli/scorpio.png",
    name: "Scorpio",
    link: "/",
  },
  {
    id: 9,
    src: "/assets/kundli/sagittarius.png",
    name: "Sagittarius",
    link: "/",
  },
  {
    id: 10,
    src: "/assets/kundli/capricorn.png",
    name: "Capricorn",
    link: "/",
  },
  {
    id: 11,
    src: "/assets/kundli/aquarius.png",
    name: "Aquarius",
    link: "/",
  },
  {
    id: 12,
    src: "/assets/kundli/pisces.png",
    name: "Pisces",
    link: "/",
  },
];

function SignsCard(props: Props) {
  return (
    <div className="py-8 lg:py-[45px]">
      <Section>
        <div className="">
          <div className="my-9">
            <h2 className="text-center font-[georgia] text-xl font-semibold sm:text-2xl md:text-3xl lg:text-4xl">
              Read For Other Signs
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-x-3 gap-y-[14px] md:grid-cols-4 lg:grid-cols-6 lg:gap-8">
            {cardDetail?.map((item, index) => (
              <div key={index} className="mx-auto">
                <Link href={item.link}>
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={168}
                    height={169}
                    loading={"lazy"}
                  />
                  <p className="flex items-center justify-center text-[24px] lg:text-[34px]">
                    {item.name}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}

export default SignsCard;
