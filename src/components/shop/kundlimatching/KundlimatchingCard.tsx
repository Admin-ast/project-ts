import React from "react";
import Section from "@/components/Section";
import Link from "next/link";

const card = [
  {
    img: "/assets/shop/puja/15 Ratti Amethyst.svg",
    name: "896",
    url: "",
  },
];

type Props = {};

const KundlimatchingCard = (props: Props) => {
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
                  className="flex gap-8 rounded-xl bg-white p-2 shadow-xl"
                >
                  <div className="rounded-[15px] border-2 border-[#DC6563]">
                    <Link href={item?.url}>
                      <img src={item?.img} alt="" />
                      <p className="rounded-b-[12px] bg-[#DC6563] text-center font-bold text-white">
                        Rs.{item?.name}
                      </p>
                    </Link>
                  </div>
                  <div className="flex flex-col justify-between">
                    <p className="py-4 font-bold">Kundali Matching</p>
                    <div className="  ml-24  flex justify-end">
                      <button className="rounded-md  bg-gradient-to-b from-[#fb7038] to-[#df625b] px-6 py-2 font-bold text-white hover:bg-[#F9B800]">
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

export default KundlimatchingCard;
