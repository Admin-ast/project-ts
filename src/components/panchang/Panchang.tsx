import React from "react";
import Section from "../Section";

type Props = {};

const Panchang = (props: Props) => {
  return (
    <div className="">
      <Section>
        <div>
          <p className="text-center text-3xl font-bold">
            PANCHANG CALENDAR WITH THE TITHIS, TIMINGS OF AUSPICIOUS PERIODS{" "}
          </p>
          <p className="mt-5 text-justify text-[18px]">
            Presenting the Panchang or the Indian Hindu calendar at
            Astrosevatalk to get daily updates on all the Hindu religious
            calendar events. Panchang is the closest and identical calendar to
            Vedic astrology. This calendar brings the systematic schedule of all
            the Hindu events such as the Hindu festivals, auspicious tithis,
            timings, varts, lunar eclipse, monthly Ekadashi date, and timings,
            etc.{" "}
          </p>
          <p className="mt-5 text-justify text-[18px]">
            The calendar is thus highly recommended for every Hindu religious
            individual who {`doesn't`} want to miss out on any Hindu religious
            event ahead. At Astrosevatalk we are committed to serving our
            visitors with the most updated and accurate day-to-day Panchang
            calendar. One can visit the Astrosevatalk to get the daily Panchang
            updates on a day-to-day basis in one single place.
          </p>

          <p className="mt-5 text-justify text-2xl font-bold">
            Panchang Calendar with its Origin
          </p>
          <p className="mt-5 text-justify text-[18px]">
            The panchang calendar holds its roots in the Vedic calendar from the
            ancient Indian era and has been in use since then. It is a different
            kind of calendar from the modern-day Gregorian calendar in all
            aspects. Panchang is the Hindu calendar which is solely dedicated to
            Hindu religious events. This calendar works in the integration of
            Vedic astrology since it defines the dates of all Hindu religious
            events in accordance with the celestial bodies in the cosmos.{" "}
          </p>
          <p className="mt-5 text-justify text-[18px]">
            Panchang Hindu calendar also involves and is based upon astronomical
            phenomena and spherical geometry. The calendar thus shows the
            planetary position of the sun, Moon, Mars, and all other planets in
            the tabular form. Referring to the Panchang calendar one can check
            out the planetary position on all these planets on the day to day
            basis throughout the year.
          </p>
        </div>
      </Section>
    </div>
  );
};

export default Panchang;
