import React from "react";
import Hero from "@/components/common/Hero";
import Section from "@/components/Section";
import { HomeIcon } from "@heroicons/react/24/solid";
import KundlimatchingCard from "@/components/shop/kundlimatching/KundlimatchingCard";

type Props = {};

const kundlimatchingProduct = (props: Props) => {
  return (
    <div>
      <Hero text="Kundali-matching Products" icon="" />
      <Section>
        <div className="flex items-center space-x-2">
          <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
          <p className="bg-[#C6A65A] p-1 px-4 text-[10px] font-medium">
            Kundali-matching Products
          </p>
        </div>
      </Section>
      <KundlimatchingCard />
    </div>
  );
};

export default kundlimatchingProduct;
