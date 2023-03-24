import React from "react";
import Section from "../Section";

type Props = {};

const Tithi = (props: Props) => {
  return (
    <div className="bg-[#FFF7E5] py-8">
      <Section>
        <div className="flex flex-col space-y-6">
          <p className="text-center font-[georgia] text-2xl font-bold md:text-4xl">
            {" "}
            Tithi 
          </p>
          <div className="text-justify">
            <p>
              Tithi (along with Paksha) is the day according to the Hindu lunar
              calendar. An astrologer would tell you that the Hindu lunar
              calendar consists of a dark and a bright fortnight also called
              paksha. When the moon completes 12 degrees of its movement on the
              Sun, it is called a Tithi or Hindu lunar day. 
            </p>
            <p>
              All in all, there are as many as 30 tithis in a lunar month. When
              considering Tithis, they either belong to Shukl Paksha or Krishna
              paksha. In astrology, the beginning and end of a Tithi depends
              upon the degree of the Moon from that of the Sun. Hence a tithi
              can start or end at any time of the day. There are several rituals
              associated with Tithis. Most of the festivals fall on the new moon
              day (Amavasya) or the full moon day (Poornima).
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Tithi;
