import React from "react";
import Section from "@/components/Section";
import Link from "next/link";

const card = [
  {
    img: "/assets/shop/gemstone/Amethyst.svg",
    name: "896",
    url: "/shop/gemstone-details",
    para: "15 Ratti Amethyst",
    para1: "Represent Magic | Mystery | Royalty | Good Judgment.",
  },
  {
    img: "/assets/shop/onlinepuja.svg",
    name: "222",
    url: "",
    para: "15 Ratti Amethyst",
    para1: "Represent Magic | Mystery | Royalty | Good Judgment.",
  },
  {
    img: "/assets/shop/kundlimatching.svg",
    name: "222",
    url: "",
    para: "15 Ratti Amethyst",
    para1: "Represent Magic | Mystery | Royalty | Good Judgment.",
  },
  {
    img: "/assets/shop/gemstone.svg",
    name: "222",
    url: "",
    para: "15 Ratti Amethyst",
    para1: "Represent Magic | Mystery | Royalty | Good Judgment.",
  },
  {
    img: "/assets/shop/carreereport.svg",
    name: "222",
    url: "",
    para: "15 Ratti Amethyst",
    para1: "Represent Magic | Mystery | Royalty | Good Judgment.",
  },
  {
    img: "/assets/shop/kawach.svg",
    name: "222",
    url: "",
    para: "15 Ratti Amethyst",
    para1: "Represent Magic | Mystery | Royalty | Good Judgment.",
  },
  {
    img: "/assets/shop/spell.svg",
    name: "222",
    url: "",
    para: "15 Ratti Amethyst",
    para1: "Represent Magic | Mystery | Royalty | Good Judgment.",
  },
  {
    img: "/assets/shop/healingoil.svg",
    name: "222",
    url: "",
    para: "15 Ratti Amethyst",
    para1: "Represent Magic | Mystery | Royalty | Good Judgment.",
  },
  {
    img: "/assets/shop/evileye.svg",
    name: "564",
    url: "",
    para: "15 Ratti Amethyst",
    para1: "Represent Magic | Mystery | Royalty | Good Judgment.",
  },
  {
    img: "/assets/shop/karmareport.svg",
    name: "458",
    url: "",
    para: "15 Ratti Amethyst",
    para1: "Represent Magic | Mystery | Royalty | Good Judgment.",
  },
  {
    img: "/assets/shop/cosmic.svg",
    name: "44",
    url: "",
    para: "15 Ratti Amethyst",
    para1: "Represent Magic | Mystery | Royalty | Good Judgment.",
  },
  {
    img: "/assets/shop/thete.svg",
    name: "333",
    url: "",
    para: "15 Ratti Amethyst",
    para1: "Represent Magic | Mystery | Royalty | Good Judgment.",
  },
  {
    img: "/assets/shop/puja.svg",
    name: "222",
    url: "",
    para: "15 Ratti Amethyst",
    para1: "Represent Magic | Mystery | Royalty | Good Judgment.",
  },
  {
    img: "/assets/shop/gemconsultion.svg",
    name: "222",
    url: "",
    para: "15 Ratti Amethyst",
    para1: "Represent Magic | Mystery | Royalty | Good Judgment.",
  },
  {
    img: "/assets/shop/palamistry.svg",
    name: "222",
    url: "",
    para: "15 Ratti Amethyst",
    para1: "Represent Magic | Mystery | Royalty | Good Judgment.",
  },
  {
    img: "/assets/shop/lovescore.svg",
    name: "222",
    url: "",
    para: "15 Ratti Amethyst",
    para1: "Represent Magic | Mystery | Royalty | Good Judgment.",
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
                  className="flex gap-8 rounded-xl bg-[#FFF7E5] p-2"
                >
                  <div className="rounded-[15px] border-2 border-black">
                    <Link href={item?.url}>
                      <img
                        className="h-[163px] w-[149px]"
                        src={item?.img}
                        alt=""
                      />
                      <p className="rounded-b-[12px] bg-black text-center font-bold text-white">
                        rs.{item?.name}
                      </p>
                    </Link>
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <p className="py-2 font-bold">{item?.para}</p>
                      {/* <p>{item?.para1}</p> */}
                    </div>
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

export default GemstoneCard;
