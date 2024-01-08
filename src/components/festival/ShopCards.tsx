import Image from "next/image";
import React from "react";

type Props = {};

const ShopCards = (props: Props) => {
  return (
    <div className="mb-5 ">
      <div className=" mt-[10px] bg-white pb-[10px] shadow-xl">
        <div className="rounded-t-[3px] bg-[#DC6563] py-1 px-1">
          <p className="font-bold text-white">Buy Gemstones</p>
        </div>
        <div className="flex gap-[11px]">
          <div className="px-2 py-4">
            <div className=" rounded-[4px] border-[1px] border-[#DC6563] ">
              <Image
                src="/assets/shop/gemstone/15ratti.png"
                alt="Amethyst"
                width={61}
                height={100}
                className="h-full w-full"
              />
            </div>
          </div>
          <div className="mt-[10px]">
            <p className="font-bold">15 Ratti Amethyst</p>
            <p className="">
              Represent Magic | Mystery | Royalty | Good Judgment.
            </p>
            <div className="px-4">
              <button className="float-right rounded-[2px] bg-gradient-to-b from-[#fb7038] to-[#FF0600] px-2 text-[12px] font-semibold text-white">
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[10px] bg-white  pb-[10px] shadow-xl">
        <div className="rounded-t-[3px] bg-[#DC6563] py-1 px-1">
          <p className="font-bold text-white">Buy Love Score</p>
        </div>
        <div className="flex gap-[11px]">
          <div className=" px-2 py-4">
            <div className=" rounded-[4px] border-[1px] border-[#DC6563]">
              <Image
                src="/assets/shop/gemstone/love.png"
                alt="Amethyst"
                width={61}
                height={100}
                className="h-full w-full"
              />
            </div>
          </div>
          <div className="mt-[10px]">
            <p className="font-bold">Love Score</p>
            <p className="">How Do You Rate With Your Partner?</p>
            <div className="px-4">
              <button className="float-right rounded-[2px] bg-gradient-to-b from-[#fb7038] to-[#FF0600] px-2 text-[12px] font-semibold text-white">
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[10px] bg-white pb-[10px] shadow-xl">
        <div className="rounded-t-[3px] bg-[#DC6563] py-1 px-1">
          <p className="font-bold text-white">Buy Evil Eye</p>
        </div>
        <div className="flex gap-[11px]">
          <div className="px-2 py-4 ">
            <div className=" rounded-[4px] border-[1px] border-[#DC6563]">
              <Image
                src="/assets/shop/gemstone/evil.png"
                alt="Amethyst"
                width={61}
                height={100}
                className="h-full w-full"
              />
            </div>
          </div>
          <div className="mt-[10px]">
            <p className="font-bold">Evil Eye</p>
            <p className="">Evil Eye (Nazar Lagna)</p>
            <div className="px-4">
              <button className="float-right rounded-[2px] bg-gradient-to-b from-[#fb7038] to-[#FF0600] px-2 text-[12px] font-semibold text-white">
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[10px] bg-white pb-[10px] shadow-xl">
        <div className="rounded-t-[3px] bg-[#DC6563] py-1 px-1">
          <p className="font-bold text-white">Punit Pandey</p>
        </div>
        <div className="flex gap-[11px]">
          <div className="my-auto mx-auto">
            <div className=" rounded-[4px] border-[1px] border-[#DC6563]">
              <Image
                src="/assets/shop/gemstone/punit.png"
                alt="Amethyst"
                width={61}
                height={100}
                className="h-full w-full"
              />
            </div>
          </div>
          <div className="mt-[10px]">
            <p className="font-bold">Know Astrologer Punit Pandey</p>
            <p className=""></p>
            <div className="px-4">
              <button className="float-right rounded-[2px] bg-gradient-to-b from-[#fb7038] to-[#FF0600] px-2 text-[12px] font-semibold text-white">
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCards;
