import React from "react";
import Section from "@/components/Section";
import Link from "next/link";

const card = [
  {
    img: "/assets/shop/carreereport.svg",
    name: "Career Report",
    url: "",
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
];

type Props = {
  title: string;
};

const Card = ({ title }: Props) => {
  return (
    <div className="mt-[35px] shadow-2xl lg:py-[51px]">
      <Section>
        <div>
          <div className="">
            <p className="text-center text-[20px] font-bold">Store</p>
          </div>
          <div>
            <p className="py-6 text-center text-[36px] font-semibold">
              {title}
            </p>
          </div>
          <div>
            <div className="m-auto grid justify-center gap-[46px] md:flex lg:flex">
              {card.map((item, index) => (
                <Link
                  key={index}
                  href={item?.url}
                  className="flex w-[280px]  flex-col rounded-[10px] rounded-t-xl border-2 border-[#DC6563]"
                >
                  <img className=" object-contain " src={item?.img} alt="" />
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
