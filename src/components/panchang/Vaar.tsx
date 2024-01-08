import React from "react";
import Section from "../Section";

type Props = {};

const Vaar = (props: Props) => {
  return (
    <div className=" py-[30px]">
      <Section>
        <div className="flex flex-col space-y-6">
          <p className=" text-center font-[georgia] text-2xl font-bold md:text-4xl">
            Vaar
          </p>
          <div className="text-justify">
            <p>
              Vaar in the Panchang calendar and in the Vedic culture refers to
              the days that constitute the whole week. The vaar here are
              referred to the days and there are 7 vaars that comprise the week.
              The vaar proceeds in the sequence of Ravi Vaar, Som Vaar, Mangal
              Vaar, and so on till the Shani Vaar. These vaar are used as the
              Sunday, Monday till Saturday in the modern-day English or the
              Gregorian calendar. In the Panchang Hindu calendar, all the days
              are denoted in the framing of vaars.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Vaar;
