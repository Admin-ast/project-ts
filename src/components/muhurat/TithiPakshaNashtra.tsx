import React from "react";
import Section from "../Section";

type Props = {};

const TithiPakshaNashtra = (props: Props) => {
  return (
    <div>
      <div className="flex flex-col gap-5 bg-[url('/horoscope-bg.svg')] bg-cover py-8 lg:py-[51px]">
        <div>
          <Section>
            <div className="flex flex-col space-y-6 text-justify">
              <p className="text-center text-[36px] font-bold">
                Panchang Tithi
              </p>
              <p>
                {` One of the first components in the Hindu calendar is the
                Panchang Tithi. However, knowing the date and the lucky moment
                is crucial at the same time. The time between the Moon's two
                phases as seen from Earth is known as a tithi. According to
                astrology, a month has 30 tithis; 15 of these fall under the
                Shukla Paksha and the other 15 falls under the Krishna Paksha.
                Sometimes a day will have two Tithi. "Vrishi Tithi" refers to
                the Tithi that lasts till two sunrises, while "Kshya Tithi"
                refers to the two Tithis that do not occur at dawn.`}
              </p>
            </div>
          </Section>
        </div>
        <div className="bg-[#FFF7E5]">
          <Section>
            <div className="flex flex-col space-y-6 py-8 text-justify">
              <p className="text-center text-[36px] font-bold">
                Name of pakshas:
              </p>
              <p>
                <span className="text-[22px] font-bold">
                  Krishna-Paksha Tithis -
                </span>{" "}
                Pratipada, Dwitiya, Tritiya, Chaturthi, Panchmi, Shashti,
                Saptami, Ashtami, Navmi, Dashmi, Ekadashi, Dwadashi, Trayodashi,
                Chaturdashi, Poornima, Amavasya.
              </p>
              <p>
                <span className="text-[22px] font-bold">
                  {" "}
                  Shukla-Paksha Tithis -
                </span>{" "}
                Pratipada, Dwitiya, Tritiya, Chaturthi, Panchmi, Shashti,
                Saptami, Ashtami, Navmi, Dashmi, Ekadashi, Dwadashi, Trayodashi,
                Chaturdashi, Poornima
              </p>
            </div>
          </Section>
        </div>
        <div>
          <Section>
            <div className="flex flex-col space-y-6 py-6 text-justify">
              <p className="text-center text-[36px] font-bold">Nakshatra</p>
              <p>
                According to astrology, Ashwani, Bharani, Kritika, Rohini,
                Mrigashira, Ardra, Punarvasu, Pushya, Ashlesha, Magha,
                Poorvaphalguni, Uttaraphalguni, Hasta, Chitra, Swati, Visakha,
                Anuradha, Jyeshtha, Mool, Purvashadha, Uttarashada, Shravan,
                Dhanishta, Shatabhisha, Uttara Purva Bhadrapada Bhadrapada and
                Revathi are the constellations.
              </p>
              <p className="text-[22px] font-semibold">
                Nakshatras Ruling Lord
              </p>
            </div>
            <div className="flex flex-col gap-2 px-4 py-2">
              <p>. Ketu - Ashwani, Magha, And Mool </p>
              <p>. Venus - Bharani, Poorva Phalguni , and Poorvashadha.</p>
              <p>. Sun - Kritika, Uttaraphalguni, and Uttarashada.</p>
              <p>. Moon - Rohini, Hasta, and Shravan.</p>
              <p>. Mars - Mrigashira, Chitra, and Dhanishtas lord.</p>
              <p>. Rahu - Ardra, Swati, and Satabhisha.</p>
              <p>. Jupiter - Punarvasu, Visakha, and Poorvabhadrapada.</p>
              <p>. Saturn - Pushya, Anuradha, and Uttarabhadrapada.</p>
              <p>. Mercury - Ashlesha, Jyestha, and Revati.</p>
              <p></p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
};

export default TithiPakshaNashtra;
