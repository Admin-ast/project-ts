import Image from "next/image";
import React, { Key } from "react";
import Button from "../common/Button";
import Section from "../Section";

type Props = {};

type ShoppingList = {
  name: string;
  src: string;
};

const shoppingList: ShoppingList[] = [
  {
    name: "Love Score",
    src: "/assets/home/shop-01.webp",
  },
  {
    name: "Career Report",
    src: "/assets/home/shop-02.webp",
  },
  {
    name: "Gem",
    src: "/assets/home/shop-03.webp",
  },
];

function Shop({}: Props) {
  return (
    <div className="bg-[#FFF7E5] py-12 lg:py-[38px]">
      <Section>
        <div className="">
          <h2 className="mb-[33px] text-center font-[georgia] text-xl font-semibold sm:text-2xl md:text-3xl lg:text-[40px]">
            Shop
          </h2>
          <div className="mb-[42px] grid grid-cols-1 gap-6 lg:grid-cols-3">
            {shoppingList.map((item: ShoppingList, index: Key) => (
              <div
                key={index}
                className="overflow-hidden rounded-3xl border-[3px] border-black"
              >
                <div className="h-[390px] rounded-t-3xl border-[10px] !border-b-0 border-white">
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={366}
                    height={618}
                    loading={"lazy"}
                    className="h-full w-full object-contain"
                  />
                </div>
                <p className="bg-black py-[14px] px-[90px] text-center font-[georgia] text-2xl text-white lg:text-[32px]">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
          <Button text="View More" className="mx-auto lg:text-[28px]" />
        </div>
      </Section>
    </div>
  );
}

export default Shop;
