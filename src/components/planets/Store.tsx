import React from "react";
import Section from "../Section";

const cards = [
  {
    name: "Carrer Report",
    src: "assets/compatibility/work/career.png",
  },
  {
    name: "Kawach",
    src: "assets/compatibility/work/kawach.png",
  },
  {
    name: "Spell",
    src: "assets/compatibility/work/spell.png",
  },
];

type Props = {};

const Store = (props: Props) => {
  return (
    <div className="mt-5 bg-white py-[30px] shadow-xl">
      <Section>
        <div className="flex flex-col items-center ">
          <p className="text-xl font-semibold">Store</p>
          <p className="mt-[10px] text-[30px] font-bold">
            Recommended Reports For You
          </p>
          <div className="mt-[30px] grid grid-cols-1 gap-8 md:grid-cols-3 ">
            {cards.map((item, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border-[3px] border-[#DC6563] bg-[#FFF7E5]"
              >
                <img
                  src={item.src}
                  alt={item.name}
                  className="mx-auto h-[289px] w-[296px]"
                />
                <p className=" bg-[#DC6563]  py-3 text-center text-[22px] text-white">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Store;
