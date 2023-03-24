import React from "react";
import Section from "../Section";

type Props = {};

const Today = (props: Props) => {
  return (
    <div className="py-8 lg:py-[51px]">
      <Section>
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-6">
            <p className="text-center font-['georgia'] text-xl font-bold md:text-3xl">
              Today’s Panchang
            </p>
            <div className="text-justify">
              <p>
                {` Panchang is the astrological daily calendar based on the Indian
                calendar. Daily panchang is one of the most sought Vedic
                astrology concepts, which conceptualise the day's planetary
                position to determine auspicious tithis, timing, festivals,
                vrats, etc. Using this information, a person can choose whether
                or not to begin or accomplish a particular task after carefully
                studying the favourability or unfavorability of the planets
                ruling the particular task. It is a belief among people that
                doing a thing or two as per Today's panchang timings brings good
                luck and helps in the accomplishment of the tasks with ease.`}
              </p>
              <p>
                {`At AstrosevaTalk, a Panchang calendar is produced by a team of
                the best astrologers of India. The Daily Panchang details the
                various astrological elements of the day and based on the same,
                the level of auspiciousness and inauspiciousness is decided.
                Right from Today's sunrise time to today's sunset time, Panchang
                helps you find all of it as per your convenience. Majorly,
                Panchang is used to get detail of five aspects. These five
                aspects are - day of the week (vaar); tithi or the lunar day;
                nakshatra or the constellation; yoga; and karan. With the change
                in time and date, all of these compartments that make the
                panchang also change. And thus it’s necessary to keep oneself
                updated about them for various reasons.`}
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Today;
