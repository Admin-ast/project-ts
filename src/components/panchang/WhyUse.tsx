import React from "react";
import Section from "../Section";

type Props = {};

const WhyUse = (props: Props) => {
  return (
    <div className="bg-[url('/assets/cloud-bg.webp')] bg-cover py-8">
      <Section>
        <div className="flex flex-col space-y-6 text-white">
          <p className="text-center font-[georgia] text-xl font-bold md:text-4xl">
            What Can I Check in the Panchang Calendar?
          </p>
          <div className="text-justify">
            <p>
              {` Panchang being the Hindu calendar can show all the Hindu religious events in day-to-day life. These events can be festivals or other significant religious days and the calendar can also notify the dates of phenomena going to take place in the cosmos. For instance, the panchang calendar can notify the dates of the Lunar eclipse, solar eclipse, amavsya, nakshatra, and other events. Here below we are listing down some of the significant events that the Panchang can list out.`}
                 
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default WhyUse;
