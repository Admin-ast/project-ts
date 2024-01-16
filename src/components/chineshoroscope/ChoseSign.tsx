import React from "react";
import Section from "../Section";

const card = [
  {
    src: "/assets/chineshoroscope/chinese horoscope-01.svg",
  },
  {
    src: "/assets/chineshoroscope/chinese horoscope-02.svg",
  },
  {
    src: "/assets/chineshoroscope/chinese horoscope-03.svg",
  },
  {
    src: "/assets/chineshoroscope/chinese horoscope-04.svg",
  },
  {
    src: "/assets/chineshoroscope/chinese horoscope-05.svg",
  },
  {
    src: "/assets/chineshoroscope/chinese horoscope-06.svg",
  },
  {
    src: "/assets/chineshoroscope/chinese horoscope-07.svg",
  },
  {
    src: "/assets/chineshoroscope/chinese horoscope-08.svg",
  },
  {
    src: "/assets/chineshoroscope/chinese horoscope-09.svg",
  },
  {
    src: "/assets/chineshoroscope/chinese horoscope-10.svg",
  },
  {
    src: "/assets/chineshoroscope/chinese horoscope-11.svg",
  },
  {
    src: "/assets/chineshoroscope/chinese horoscope-12.svg",
  },
];

type Props = {};

const ChoseSign = (props: Props) => {
  return (
    <div className="bg-[url('/assets/horoscope-bg.webp')] bg-cover bg-repeat py-8 lg:py-[35px]">
      <Section>
        <div className="flex flex-col items-center gap-6 text-gray-700">
          <p>
            What is your Chinese horoscope? We have got you covered! Here, you
            will find free daily horoscopes for all Chinese zodiac signs.
          </p>
          <p className="text-2xl font-bold text-black md:text-[32px]">
            Choose Your Sign
          </p>
        </div>
        <div className="py-8">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
            {card.map((item, index) => (
              <div key={index}>
                <img src={item?.src} alt="" className="rounded-md" />
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ChoseSign;
