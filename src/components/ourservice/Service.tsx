import React from "react";
import Section from "../Section";
import Link from "next/link";

type Props = {};
const card = [
  {
    img: "/assets/home/compatibility.png",
    name: "Compatibility",
    url: "/compatibility",
  },
  {
    img: "/assets/home/muhurat.png",
    name: "Muhurat",
    url: "/muhurat",
  },
  {
    img: "/assets/home/palmreading.png",
    name: "Palm Reading",
    url: "/",
  },
  {
    img: "/assets/service/panchang.png",
    name: "Panchang",
    url: "/",
  },
  {
    img: "/assets/service/freekundli.png",
    name: "Free Kundly",
    url: "/free-kundli",
  },
  {
    img: "/assets/service/horoscope.png",
    name: "Horoscope",
    url: "/horoscope/daily",
  },
  {
    img: "/assets/service/kundli.png",
    name: "Kundly Matching",
    url: "/kundli-matching",
  },
];
const Service = (props: Props) => {
  return (
    <div className="bg-[url('/assets/horoscope-bg.webp')] bg-cover bg-repeat py-8 lg:py-[51px]">
      <Section>
        <div>
          <div>
            <p className="py-6 text-center text-[36px] font-semibold">
              Shop Best Online Astrology Products And Services
            </p>
          </div>
          <div>
            <div className=" grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
              {card.map((item, index) => (
                <Link
                  key={index}
                  href={item?.url}
                  className="flex w-[280px] flex-col rounded-[10px] rounded-t-xl border-2 border-[#DC6563]"
                >
                  <img
                    className="h-full w-full object-contain"
                    src={item?.img}
                    alt=""
                  />
                  <p className="rounded-[10px] bg-[#DC6563] py-3 text-center text-2xl font-medium text-white">
                    {item?.name}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Service;
