import Section from "@/components/Section";
import React from "react";

type Props = {};

const Amavsya = (props: Props) => {
  return (
    <div className="bg-[#FFF7E5] py-8">
      <Section>
        <div className="flex flex-col space-y-6">
          <p className=" font-[georgia] text-2xl font-bold md:text-4xl">
            {" "}
            ● Amavsya
          </p>
          <div className="text-justify">
            <p>
              Amavsya is the prominent event that happens each month when
              Purnima is ruled by the moon. This day is dedicated to the Pirtua
              {`devas'`} remembrance by the way of worshipping them. It is the
              ideal day to please the Pitru deva to get their blessings and free
              yourself from all types of Pitra doshas. The day is highly
              prominent even in Vedic astrology and all its beliefs and
              principles. There are various other practices that take place on
              this day and also the day before or on the night of Amavsya. In
              the Panchang calendar, one can check out the precise day of
              Amavsya in a smooth manner.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Amavsya;
