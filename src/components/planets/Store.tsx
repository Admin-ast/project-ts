import React from "react";
import Section from "../Section";

const cards = [
  {
    name: "Love Score",
    src: "assets/store/Love.svg",
  },
  {
    name: "Carrer Report",
    src: "assets/store/carrer.svg",
  },
  {
    name: "Gem",
    src: "assets/store/carrer.svg",
  },
];

type Props = {};

const Store = (props: Props) => {
  return (
    <div className="bg-[#FFF7E5] py-8">
      <Section>
        <div className="flex flex-col items-center space-y-6">
          <p className="text-xl font-semibold">Store</p>
          <p className="text-4xl font-bold">Recommended Reports For You</p>
          <div className="mb-[42px] grid grid-cols-1 gap-8 md:grid-cols-3">
            {cards.map((item, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border-[3px] border-black bg-[#FFF7E5]"
              >
                <img
                  src={item.src}
                  alt={item.name}
                  className="mx-auto h-[319px] w-[296px]"
                />
                <p className=" bg-black  py-3 text-center text-[22px] text-white">
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
