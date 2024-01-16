import React from "react";
import Section from "../../Section";

type Props = {};

const Significance = (props: Props) => {
  return (
    <div className="bg-[url('/assets/cloud-bg.webp')] bg-cover py-8">
      <Section>
        <div className="flex flex-col space-y-6 text-white">
          <p className="text-center font-[georgia] text-xl font-bold md:text-4xl">
            The Significant Tithis in Panchang with Their Significance
          </p>
          <div className="text-justify">
            <p>
              {` As we have already discussed there are approximately 30 Tithis that take place in one given month in the Panchang calendar. All of these Tithis are crucial however some of them hold immense significance. Below we are mentioning some of the most popular and significant Tithis of the Panchang Hindu calendar.`}
                 
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Significance;
