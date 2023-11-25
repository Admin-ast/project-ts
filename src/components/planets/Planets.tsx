import React from "react";
import Section from "../Section";
import Image from "next/image";

type Props = {};
const card = [
  {
    id: 1,
    src: "/assets/planet/sun.png",
    name: "Sun",
    sub: "Planet Of Self",
    url: "/",
  },
  {
    id: 2,
    src: "/assets/planet/moon.png",
    name: "Moon",
    sub: "Planet Of Emotions",
    url: "/",
  },
  {
    id: 3,
    src: "/assets/planet/mercury.png",
    name: "Mercury",
    sub: "Planet Of Communication",
    url: "/",
  },
  {
    id: 4,
    src: "/assets/planet/venus.png",
    name: "Venus",
    sub: "Planet Of Love & Money",
    url: "/",
  },
  {
    id: 5,
    src: "/assets/planet/mars.png",
    name: "Mars",
    sub: "Planet Of Passion",
    url: "/",
  },

  {
    id: 6,
    src: "/assets/planet/jupiter.png",
    name: "Jupiter",
    sub: "Planet Of Luck",
    url: "/",
  },
  {
    id: 7,
    src: "/assets/planet/saturn.png",
    name: "Saturn",
    sub: "Planet Of Karma",
    url: "/",
  },
  {
    id: 8,
    src: "/assets/planet/uranus.png",
    name: "Uranus",
    sub: "Planet Of Rebellion",
    url: "/",
  },
  {
    id: 9,
    src: "/assets/planet/neptune.png",
    name: "Neptune",
    sub: "Planet Of Illusion",
    url: "/",
  },
  {
    id: 10,

    src: "/assets/planet/pluto.png",
    name: "Pluto",
    sub: "Planet Of Power",
    url: "/",
  },
];

const Planets = (props: Props) => {
  return (
    <div className="bg-[url('/assets/horoscope-bg.webp')] py-[30px] shadow-xl">
      <Section>
        <div className="">
          <div className="text-justify font-[Roboto] ">
            <p className="">
              The sun and moon, the two luminaries, as well as the eight planets
              in our solar system are the most important component when it comes
              to understanding how astrology works.
            </p>
          </div>
          <div className="mt-[30px] grid gap-[30px] md:grid-cols-3 lg:grid-cols-5">
            {card.map((item, index) => (
              <div key={index} className="">
                <div className="h-[235px] rounded-[20px] border-r-[2px] border-b-[2px] border-[#DC6563] bg-white shadow-xl">
                  <div className="flex items-center justify-center ">
                    <img src={item.src} alt={item.name} className="" />
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="">
                      <p className="text-center text-[22px] font-semibold">
                        {item.name}
                      </p>
                      <p className="text-center">{item.sub}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Planets;
