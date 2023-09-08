import React from "react";
import Section from "../Section";

type Props = {};

const Durmurtham = (props: Props) => {
  return (
    <div className=" py-8">
      <Section>
        <div className="flex flex-col space-y-6">
          <p className=" font-[georgia] text-2xl font-bold md:text-4xl">
            {" "}
            ● Durmurtham
          </p>
          <div className="text-justify">
            <p>
              Durmurtham can also be understood as the inauspicious period of
              the day just like the Varjyam. It is highly restricted in the
              Hindu culture to get into any important activity during the period
              of Durmurtham. This period is also known as the deficient time
              period of the day and it is believed that any action or venture
              initiated in this period never reaches its destination. This is
              why it is not advisable to execute any of the crucial tasks in
              this period. You can check out the daily Durmurtham period by
              referring to our Panchang Hindu calendar in day-to-day life.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Durmurtham;
