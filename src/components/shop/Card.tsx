import React from "react";
import Section from "../Section";
import Link from "next/link";

const card = [
  {
    img: "/assets/shop/lovescore.svg",
    name: "Love Score",
    url: "",
  },
  {
    img: "/assets/shop/onlinepuja.svg",
    name: "Online Puja",
    url: "/shop/puja-product",
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
    url: "",
  },
  {
    img: "/assets/shop/kawach.svg",
    name: "Kawach",
    url: "",
  },
  {
    img: "/assets/shop/spell.svg",
    name: "Spell",
    url: "/shop/love-spell",
  },
  {
    img: "/assets/shop/healingoil.svg",
    name: "Healing Oil",
    url: "",
  },
  {
    img: "/assets/shop/evileye.svg",
    name: "Evil Eye",
    url: "",
  },
  {
    img: "/assets/shop/karmareport.svg",
    name: "Karma Report",
    url: "",
  },
  {
    img: "/assets/shop/cosmic.svg",
    name: "Cosmic Integration",
    url: "",
  },
  {
    img: "/assets/shop/thete.svg",
    name: "Theta Healing",
    url: "",
  },
  {
    img: "/assets/shop/puja.svg",
    name: "Puja",
    url: "",
  },
  {
    img: "/assets/shop/gemconsultion.svg",
    name: "Gem Consultation",
    url: "",
  },
  {
    img: "/assets/shop/palamistry.svg",
    name: "Palmistry",
    url: "",
  },
  {
    img: "/assets/shop/lovescore.svg",
    name: "Face Reading",
    url: "",
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
            <div className="] grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
              {card.map((item, index) => (
                <Link
                  key={index}
                  href={item?.url}
                  className="flex w-[280px]  flex-col rounded-t-xl border-2 border-black"
                >
                  <img className="h-[280px] w-full" src={item?.img} alt="" />
                  <p className="bg-black py-3 text-center text-2xl font-medium text-white">
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
