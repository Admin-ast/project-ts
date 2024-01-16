import Section from "@/components/Section";
import React from "react";

type Props = {};

const Dashmi = (props: Props) => {
  return (
    <div className=" py-8">
      <Section>
        <div className="flex flex-col space-y-6">
          <p className=" font-[georgia] text-2xl font-bold md:text-4xl">
            {" "}
            ●Dashmi
          </p>
          <div className="text-justify">
            <p>
              This is the day devoted to the Dharma raj means justice and good
              cause within the family, society, and country. On this day one can
              expect the verdict in the court cases and go on for the happening
              of religious activities for the sake of peace and kindness.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Dashmi;
