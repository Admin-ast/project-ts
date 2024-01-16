import React from "react";
import Section from "../Section";

type Props = {};

const RahuKaal = (props: Props) => {
  return (
    <div className=" py-8">
      <Section>
        <div className="flex flex-col space-y-6">
          <p className=" font-[georgia] text-2xl font-bold md:text-4xl">
            {" "}
            ● Rahu Kaal
          </p>
          <div className="text-justify">
            <p>
              Rahu Kaal is a very popular term for the period both in the Vedic
              astrology and also in the Panchang. This period of Rahu takes
              place every day at specific times which change each day. Rahu Kaal
              is known to be the highly inauspicious period in the Vedic and
              Hindu cultures. During the period of Rahu, no significant venture
              or any other kind of crucial event or ceremony takes place. It is
              believed that any crucial event that takes place in the Rahu kaal
              ends up being an utter failure or a curse. In the Panchang Hindu
              calendar one can check out the day-to-day Rahu kaal period update
              smoothly. Users can accordingly figure out the best and auspicious
              period of the day for their ventures and the other events or
              ceremonies executions.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default RahuKaal;
