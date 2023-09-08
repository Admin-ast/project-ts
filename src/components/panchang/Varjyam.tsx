import React from "react";
import Section from "../Section";

type Props = {};

const Varjyam = (props: Props) => {
  return (
    <div className="bg-[#FFF7E5] py-8">
      <Section>
        <div className="flex flex-col space-y-6">
          <p className=" font-[georgia] text-2xl font-bold md:text-4xl">
            {" "}
            ● Varjyam
          </p>
          <div className="text-justify">
            <p>
              Varjyam in simple language can be defined as the inauspicious
              period of the day just like the Rahu kaal. However, the Varjyam is
              considered to be inauspicious due to the bad position of the
              planets at that particular moment. During the period of Varjyam,
              it is said to not commence any crucial activity or do any kind of
              crucial task, event ceremonies, etc. The period of Varjyam takes
              place each day at a different time from the previous day. Users
              can check the Panchang Hindu calendar to know the accurate timing
              of the Varjyam period on a day-to-day basis.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Varjyam;
