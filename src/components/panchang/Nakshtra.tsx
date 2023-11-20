import React, { Key } from "react";
import Section from "../Section";

type Props = {};

// const nakshtraDetail: string[] = [
//   "Ashvini/Aswini",
//   "Bharani",
//   "Krittika/Krithika",
//   "Rohini",
//   "Mrigashirsha",
//   "Ardra",
//   "Punarvasu",
//   "Pushya",
//   "Ashlesha",
//   "Magha",
//   "Purva Phalguni",
//   "Uttara Phalguni",
//   "Hasta",
//   "Chitra",
//   "Swati",
//   "Vishakha",
//   "Anuradha",
//   "Jyeshtha",
//   "Mula",
//   "Purva Ashadha",
//   "Uttara Ashadha",
//   "Shravana",
//   "Dhanishtha",
//   "Shatabhisha",
//   "Purva Bhadrapada",
//   "Uttara Bhadrapada",
//   "Revati",
// ];

const Nakshtra = (props: Props) => {
  return (
    <div className="py-8  lg:py-[51px]">
      <Section>
        <div className="flex flex-col space-y-6">
          <p className=" text-center font-[georgia] text-2xl font-bold md:text-4xl">
            Nakshatra
          </p>
          <div className="flex flex-col gap-2 text-justify">
            <p>
              {` Nakshatra is a very popular term used in Vedic astrology and also can be easily found in the Panchang. Nakshatra in the Vedic astrology is basically used to refer to the Lunar mansion or the constellation. The term has been derived from the Naksha where Naksha means the map and the tara means star. It can thus be interpreted as the map of stars in the cosmos and there are 27 Nakshatras that take place at various times. When a person is born he/she is said to be born under the specific Nakshatra and accordingly, the zodiac sign for the person is determined. Moreover, in the Hindu culture, the Nakshatra timing can also be chosen for the happening of various auspicious events and ceremonies.`}
               
            </p>
          </div>
          {/* <div className="flex flex-col gap-2 text-justify">
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
          </div>  */}
        </div>
      </Section>
    </div>
  );
};

export default Nakshtra;
