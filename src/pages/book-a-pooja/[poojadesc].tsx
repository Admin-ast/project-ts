import Section from "@/components/Section";
import Benifits from "@/components/book-a-pooja/Benifits";
import MasterAstrologer from "@/components/book-a-pooja/MasterAstrologer";
import AstrosevatalkPromisses from "@/components/common/AstrosevatalkPromisses";
import Review from "@/components/home/Review";
import { HomeIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

type Props = {};

const poojadesc = (props: Props) => {
  return (
    <div className="bg-[url('/assets/horoscope-bg.webp')] ">
      <div className="bg-[#F5F5F5] py-2">
        <Section>
          <div className="flex items-center space-x-2">
            <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
            <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium text-white">
              BOOK-A-POOJA
            </p>
          </div>
        </Section>
      </div>
      <Section>
        <div className="mt-[81px] gap-[39px] lg:flex">
          <div className="">
            <Image
              src="/assets/book-a-pooja/maha-arti1.png"
              alt="arti"
              width={346}
              height={373}
              className="rounded-[15px] border-[3px] border-[#DC6563]"
            />
          </div>
          <div className="">
            <p className="text-[32px] font-bold">Mahalaxmi Aarti</p>
            <p className="text-[22px] ">
              Attract Wealth, Achieve Success in Career and Business!
            </p>
            <button className="mt-[44px] w-full rounded-[10px] bg-gradient-to-b from-[#FF7646] to-[#FF0600] py-2 text-[22px] font-bold text-white">
              Book Now
            </button>
          </div>
        </div>
      </Section>
      <Section>
        <div className="grid gap-[53px] md:grid-cols-2 lg:grid-cols-2">
          <MasterAstrologer
            name="Anupama"
            role="Master Asrology"
            desc1="Amethyst is a powerful and protective stone. It is a natural tranquiliser, relieves stress and strain, soothes irritability, balances mood swings, dispels anger, rage, fear and anxiety. It alleviates sadness and grief, and dissolves negativity."
            desc2="Amethyst is a powerful and protective stone. It is a natural tranquiliser, relieves stress and strain, soothes irritability, balances mood swings, dispels anger, rage, fear and anxiety. It alleviates sadness and grief, and dissolves negativity."
          />
          <Benifits
            head="What are its Benefits?"
            desc1="Amethyst is a powerful and protective stone. It is a natural tranquiliser, relieves stress and strain, soothes irritability, balances mood swings, dispels anger, rage, fear and anxiety. It alleviates sadness and grief, and dissolves negativity."
            desc2="Amethyst is a powerful and protective stone. It is a natural tranquiliser, relieves stress and strain, soothes irritability, balances mood swings, dispels anger, rage, fear and anxiety. It alleviates sadness and grief, and dissolves negativity."
          />
        </div>
        <div className="grid gap-[53px] md:grid-cols-2 lg:grid-cols-2">
          <Benifits
            head="How will it happen?"
            desc1=" Input your Name and Surname/Gotra for Sankalp"
            desc2=" Book the Pooja"
          />
          <Benifits
            head="Do you need to arrange anything?
"
            desc1=" Input your Name and Surname/Gotra for Sankalp"
            desc2=" Book the Pooja"
          />
        </div>
      </Section>
      <div className="mt-[60px]">
        <Review />
      </div>
      <AstrosevatalkPromisses />
    </div>
  );
};

export default poojadesc;
