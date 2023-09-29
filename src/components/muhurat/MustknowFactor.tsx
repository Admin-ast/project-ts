import React from "react";
import Section from "../Section";

type Props = {};

const MustknowFactor = (props: Props) => {
  return (
    <div>
      <div className=" bg-gradient-to-b from-[#f96e37] to-[#D32E27] bg-cover py-8 lg:py-[48px]">
        <Section>
          <div className="flex flex-col space-y-6 text-justify text-white">
            <p className="text-center text-xl font-bold md:text-3xl">
              Shubh Muhurt 2023 must-know factors
            </p>
            <p>
              {` As we mentioned earlier, some factors should be considered while
              calculating auspicious times, i.e., Tithi, Vaar, Nakshatra, Yoga,
              and Karana. Let's understand some crucial aspects related to them`}
            </p>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default MustknowFactor;
