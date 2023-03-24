import React from "react";
import Section from "../Section";

type Props = {};

const Vaar = (props: Props) => {
  return (
    <div className="py-8  lg:py-[51px]">
      <Section>
        <div className="flex flex-col space-y-6">
          <p className="text-center font-[georgia] text-2xl font-bold md:text-4xl">
            Vaar 
          </p>
          <div className="text-justify">
            <p>
              Vaar, also called Din, is the easiest thing to understand when
              considering Panchang reading. Vaar means the day of the week. Each
              day of the week does not just differ by its name but is also ruled
              by a different astrological planet. Knowing what planet is ruling
              what day helps you in understanding what kind of effect the day
              can have on you. Below are the names of the day and in the bracket
              is the planet that rules that particular day. 
            </p>
            <ul className="mx-4 flex list-disc flex-col gap-1">
              <li>Sunday (Sun)</li>
              <li>Monday (Moon)</li>
              <li>Tuesday (Mars)</li>
              <li>Wednesday (Mercury)</li>
              <li>Thursday (Jupiter)</li>
              <li>Friday (Venus)</li>
              <li>Saturday (Saturn)</li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Vaar;
