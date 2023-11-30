import React from "react";
import Section from "@/components/Section";
import Link from "next/link";
import Image from "next/image";

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
    url: "/",
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
    <div className="  ">
      <Section>
        <div>
          <div></div>
          <div>
            <div className="grid gap-4  md:grid-cols-2 md:gap-6 lg:grid-cols-3 ">
              {card.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-8 rounded-xl bg-white p-2 shadow-xl"
                >
                  <div className="mx-auto my-auto rounded-[15px] border-2 border-[#DC6563]">
                    <Link href={item?.url}>
                      {/* <img className="" src={item?.img} alt="" className="h-[170px]"/> */}
                      <Image
                        src={item.img}
                        alt={item.name}
                        width={200}
                        height={170}
                        className=" object-fill px-[5px] pt-[5px]"
                      />

                      <p className="rounded-b-[12px] bg-[#DC6563] text-center font-bold text-white">
                        Rs.{item?.name}
                      </p>
                    </Link>
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <p className="py-2 font-bold">{item?.para}</p>
                      {/* <p>{item?.para1}</p> */}
                    </div>
                    <div className="  ml-24  flex justify-end">
                      <button className="rounded-md bg-gradient-to-b from-[#fb7038] to-[#FF0600] px-6 py-2 font-bold text-white hover:bg-[#F9B800]">
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
