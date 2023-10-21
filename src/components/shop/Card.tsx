import React from "react";
import Section from "../Section";
import Link from "next/link";

const card = [
  {
    img: "/assets/shop/lovescore.svg",
    name: "Love Score",
    url: "/shop/lovescore",
  },
  {
    img: "/assets/shop/onlinepuja.svg",
    name: "Online Puja",
    url: "/shop/online-puja",
  },
  {
    img: "/assets/shop/kundlimatching.svg",
    name: "Kundli Matching",
    url: "/shop/kundli-matchingProduct",
  },
  {
    img: "/assets/shop/gemstone.svg",
    name: "Gemstone",
    url: "/shop/gemstone",
  },
  {
    img: "/assets/shop/carreereport.svg",
    name: "Career Report",
    url: "/shop/career-report",
  },
  {
    img: "/assets/shop/kawach.svg",
    name: "Kawach",
    url: "/shop/kawach",
  },
  {
    img: "/assets/shop/spell.svg",
    name: "Spell",
    url: "/shop/love-spell",
  },
  {
    img: "/assets/shop/healingoil.svg",
    name: "Healing Oil",
    url: "/shop/healing",
  },
  {
    img: "/assets/shop/evileye.svg",
    name: "Evil Eye",
    url: "/shop/evil-eye",
  },
  {
    img: "/assets/shop/karmareport.svg",
    name: "Karma Report",
    url: "/shop/karma",
  },
  {
    img: "/assets/shop/cosmic.svg",
    name: "Cosmic Integration",
    url: "/shop/cosmic-integration",
  },
  {
    img: "/assets/shop/thete.svg",
    name: "Theta Healing",
    url: "/shop/theta-healing",
  },
  {
    img: "/assets/shop/puja.svg",
    name: "Puja",
    url: "/shop/puja-product",
  },
  {
    img: "/assets/shop/gemconsultion.svg",
    name: "Gem Consultation",
    url: "",
  },
  {
    img: "/assets/shop/palamistry.svg",
    name: "Palmistry",
    url: "/shop/palamistry",
  },
  {
    img: "/assets/shop/lovescore.svg",
    name: "Face Reading",
    url: "/shop/facereading",
  },
];

type Props = {};

const Card = (props: Props) => {
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

export default Card;
