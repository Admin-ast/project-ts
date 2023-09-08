import React from "react";
import Section from "../Section";

type Props = {};

function Karna({}: Props) {
  return (
    <Section>
      <div className="flex flex-col space-y-6 py-8 lg:py-[51px]">
        <h2 className="mb-[18px]  font-[georgia] text-2xl font-semibold md:text-[36px]">
          ● Karan
        </h2>
        <div className="flex flex-col space-y-4">
          <div>
            <p>
              {`Karan is another fundamental unit of time in the Panchang which is used to describe the date. Karan is considered to be the half of the tithi in the context of its value. There are 30 tithis in the lunar month and thus with a simple calculation, there can be 60 Karan in the same lunar month. The significance of the Karna is just like the tithi or the Nakshatras in its core aspects. In the Vedic culture, the karna is used in conjunction with the tithi and Nakshatras to find the auspicious date and time of the month for a specific event or occasion. The panchang calendar can show all the Karan dates and timing in one place so the users to choose the ideal Karna date.`}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Karna;
