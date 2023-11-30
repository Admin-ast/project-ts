import React from "react";
import Section from "@/components/Section";
import Link from "next/link";
import Image from "next/image";

const card = [
  {
    img: "/assets/shop/puja/15 Ratti Amethyst.svg",
    name: "896",
    url: "",
  },
];

type Props = {};

const KarmaCard = (props: Props) => {
  return (
    <div className=" py-[30px]">
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
                      <Image
                        src={item.img}
                        alt={item.name}
                        width={200}
                        height={170}
                        className=" px-[5px] pt-[5px] "
                      />
                      <p className="rounded-b-[12px] bg-[#DC6563] text-center font-bold text-white">
                        Rs.{item?.name}
                      </p>
                    </Link>
                  </div>
                  <div className="flex flex-col justify-between">
                    <p className="py-4 font-bold">Karma Report</p>
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

export default KarmaCard;
