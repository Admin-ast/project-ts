import React from "react";
import Section from "@/components/Section";
import Link from "next/link";

const card = [
  {
    img: "/assets/shop/puja/15 Ratti Amethyst.svg",
    name: "896",
    url: "",
  },
  {
    img: "/assets/shop/puja/15 Ratti Amethyst.svg",
    name: "896",
    url: "",
  },
  {
    img: "/assets/shop/puja/15 Ratti Amethyst.svg",
    name: "896",
    url: "",
  },
  {
    img: "/assets/shop/puja/15 Ratti Amethyst.svg",
    name: "896",
    url: "",
  },
  {
    img: "/assets/shop/puja/15 Ratti Amethyst.svg",
    name: "896",
    url: "",
  },
  {
    img: "/assets/shop/puja/15 Ratti Amethyst.svg",
    name: "896",
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
];

type Props = {};

const LovespellCard = (props: Props) => {
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
                  className="flex gap-8 rounded-xl bg-[#FFF7E5] p-2"
                >
                  <div className="rounded-[15px] border-2 border-black">
                    <Link href={item?.url}>
                      <img src={item?.img} alt="" />
                      <p className="rounded-b-[12px] bg-black text-center font-bold text-white">
                        rs.{item?.name}
                      </p>
                    </Link>
                  </div>
                  <div className="flex flex-col justify-between">
                    <p className="py-4 font-bold">Love Honey Spell</p>
                    <div className="  ml-24  flex justify-end">
                      <button className="rounded-md border-2 border-black bg-[#EED387] px-6 py-2 font-bold hover:bg-[#F9B800]">
                        BUY
                      </button>
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

export default LovespellCard;
