import React, { Key } from "react";
import Section from "../Section";

type Props = {};

const nakshtraDetail: string[] = [
  "Ashvini/Aswini",
  "Bharani",
  "Krittika/Krithika",
  "Rohini",
  "Mrigashirsha",
  "Ardra",
  "Punarvasu",
  "Pushya",
  "Ashlesha",
  "Magha",
  "Purva Phalguni",
  "Uttara Phalguni",
  "Hasta",
  "Chitra",
  "Swati",
  "Vishakha",
  "Anuradha",
  "Jyeshtha",
  "Mula",
  "Purva Ashadha",
  "Uttara Ashadha",
  "Shravana",
  "Dhanishtha",
  "Shatabhisha",
  "Purva Bhadrapada",
  "Uttara Bhadrapada",
  "Revati",
];

const Nakshtra = (props: Props) => {
  return (
    <div className="py-8  lg:py-[51px]">
      <Section>
        <div className="flex flex-col space-y-6">
          <p className="text-center font-[georgia] text-2xl font-bold md:text-4xl">
            Nakshatra
          </p>
          <div className="flex flex-col gap-2 text-justify">
            <p>
              {` Another important constituent of Today's panchang is Nakshatra.
              For the unaware, nakshatras are nothing but constellations donning
              the sky. There are as many as 27 Nakshatras in astrology and all
              of them are ruled by some God. Naksahstra were invented by the
              Vedic astrologer to simply further divide the 12 zodiac signs into
              27 parts for better reading and categorising their different
              aspects. Nakshatra most of the time is considered the most
              important element of Panchang reading.`}
               
            </p>
            <p>
              When we divide the 12 zodiac signs into 27 nakshatras, each
              nakshatra contains thirteen degrees and twenty minutes of the
              zodiac. You could be born in any of the 27 nakshatras as
              nakshatras change every one day. Nakshatra are divided into three
              types: Deva, Manuj and Rakshas. As the name suggests, Rakshas
              nakshatras and inauspicious while the remaining bring auspicious
              results for the native most of the time.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-justify">
            <div className="flex flex-col gap-2">
              <p className="font-semibold">
                Here are the names of all 27 nakshatras in astrology:
              </p>
              <p> No. English Name Devanagari</p>
            </div>
            <ul className="grid grid-cols-5 gap-2">
              {nakshtraDetail.map((item: string, index: Key) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Nakshtra;
