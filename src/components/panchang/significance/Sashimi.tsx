import Section from "@/components/Section";
import React from "react";

type Props = {};

const Sashimi = (props: Props) => {
  return (
    <div className=" py-8">
      <Section>
        <div className="flex flex-col space-y-6">
          <p className=" font-[georgia] text-2xl font-bold md:text-4xl">
            {" "}
            ● Sashimi
          </p>
          <div className="text-justify">
            <p>
              This is the sixth lunar day of the month or the tithi and is
              associated with the lord Karthikeya. The day is again considered
              highly auspicious for many activities in the personal or
              professional space. One can make new friends or colleagues on this
              day, begin a new venture meet old friends, etc. for fun and
              enjoyment times.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Sashimi;
