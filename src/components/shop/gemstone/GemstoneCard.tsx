import React from "react";
import Section from "@/components/Section";
import Link from "next/link";

const card = [
  {
    img: "/assets/shop/gemstone/Amethyst.svg",
    name: "896",
    url: "",
  },
  {
    img: "/assets/shop/onlinepuja.svg",
    name: "222",
    url: "",
  },
  {
    img: "/assets/shop/kundlimatching.svg",
    name: "222",
    url: "",
  },
  {
    img: "/assets/shop/gemstone.svg",
    name: "222",
    url: "",
  },
  {
    img: "/assets/shop/carreereport.svg",
    name: "222",
    url: "",
  },
  {
    img: "/assets/shop/kawach.svg",
    name: "222",
    url: "",
  },
  {
    img: "/assets/shop/spell.svg",
    name: "222",
    url: "",
  },
  {
    img: "/assets/shop/healingoil.svg",
    name: "222",
    url: "",
  },
  {
    img: "/assets/shop/evileye.svg",
    name: "564",
    url: "",
  },
  {
    img: "/assets/shop/karmareport.svg",
    name: "458",
    url: "",
  },
  {
    img: "/assets/shop/cosmic.svg",
    name: "44",
    url: "",
  },
  {
    img: "/assets/shop/thete.svg",
    name: "333",
    url: "",
  },
  {
    img: "/assets/shop/puja.svg",
    name: "222",
    url: "",
  },
  {
    img: "/assets/shop/gemconsultion.svg",
    name: "222",
    url: "",
  },
  {
    img: "/assets/shop/palamistry.svg",
    name: "222",
    url: "",
  },
  {
    img: "/assets/shop/lovescore.svg",
    name: "222",
    url: "",
  },
];

type Props = {};

const GemstoneCard = (props: Props) => {
  return (
    <div className="bg-[url('/assets/horoscope-bg.webp')] bg-cover bg-repeat py-8 lg:py-[51px]">
      <Section>
        <div>
          <div></div>
          <div>
            <div className="grid gap-4  md:grid-cols-2 md:gap-6 lg:grid-cols-3 ">
              {card.map((item, index) => (
                <div
                  key={index}
                  className=" h-[189px] w-[381px] rounded-[15px] bg-[#FFF7E5]"
                >
                  <div className="flex  items-center justify-between gap-4">
                    <Link
                      href={item?.url}
                      className="flex  h-[167px] w-[180px] flex-col rounded-[15px] border-2 border-black"
                    >
                      <img
                        className="h-[162px] w-[149px] rounded-t-[15px]"
                        src={item?.img}
                        alt=""
                      />
                      <p className="rounded-xl bg-black py-2 text-center font-medium text-white">
                        rs. {item?.name}
                      </p>
                    </Link>
                    <div className="flex flex-col gap-2  px-2">
                      <p className="font-semibold">15 Ratti Amethyst</p>
                      <p className="font-medium">
                        Represent Magic | Mystery | Royalty | Good Judgment.
                      </p>
                      <div className=" mt-4 flex  justify-end">
                        <button className="rounded-md border-2 border-black bg-[#EED387] px-6 py-2 font-bold hover:bg-[#F9B800]">
                          BUY
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default GemstoneCard;
