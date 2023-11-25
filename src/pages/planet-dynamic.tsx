import Section from "@/components/Section";
import Hero from "@/components/common/Hero";
import PlanetDynamic from "@/components/planets/PlanetDynamic";
import Store from "@/components/planets/Store";
import { HomeIcon } from "@heroicons/react/24/solid";
import React from "react";

type Props = {};

const planetDynamic = (props: Props) => {
  return (
    <div className="">
      <Hero text={`Sun`} icon={`/assets/planet/sun.png`} />
      <div className="bg-[#F5F5F5] py-2">
        <Section>
          <div className="flex items-center space-x-2">
            <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
            <p className="bg-[#Dc6563] p-1 px-4 text-[10px] font-medium text-white">
              Planets
            </p>
          </div>
        </Section>
      </div>
      <PlanetDynamic
        title="Sun: The Planet of Self"
        head="More Planets"
        text="As the sun puts forth light, so it brings forth life. This planet (also known as a luminary and a star) represents the self, one’s personality and ego, the spirit and what it is that makes the individual unique. It is our identity and our face to the world. The sun also speaks to creative ability and the power of the individual to meet the challenges of everyday life.
One’s natural father, husband and other male influences are ruled by the sun, as are children. The sun’s energy is a forceful one, and in its wake comes authority, the ability to lead and an individual’s essence, their core being. Through the will of this planet, we learn to manifest ourselves in the world.
The sun is majestic, and in keeping with its regal air, it rules royalty and higher office. This orb also lords over our health and well-being. The sun’s golden glow is a vital life force which imbues us with strength, energy, and a will to succeed. It is the sun that gives strength to the other planets, which is why this planet occupies a key role in astrology.
The sun spends about a month visiting each sign and takes a year to journey through the 12 signs of the zodiac. It is masculine energy and rules Leo and the fifth house."
      />
      <Store />
    </div>
  );
};

export default planetDynamic;
