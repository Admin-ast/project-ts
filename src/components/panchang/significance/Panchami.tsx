import Section from "@/components/Section";
import React from "react";

type Props = {};

const Panchami = (props: Props) => {
  return (
    <div className="bg-[#FFF7E5] py-8">
      <Section>
        <div className="flex flex-col space-y-6">
          <p className=" font-[georgia] text-2xl font-bold md:text-4xl">
            {" "}
            ● Panchmi
          </p>
          <div className="text-justify">
            <p>
              As the name might suggest the Panchmi is the fifth day or the
              tithi of the month in the Panchang calendar. This tithi or the
              fifth day of the lunar month is dedicated to the Naga(Snake) and
              is useful for various purposes. Those who are into the
              pharmaceutical or the medicines profession can consider this day
              highly auspicious. It is ideal for the manufacturer or the
              discovery of such medicine that purges poison and is also useful
              in the surgery etc.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Panchami;
