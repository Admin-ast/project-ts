import Section from "@/components/Section";
import React from "react";

type Props = {};

const Ekadashi = (props: Props) => {
  return (
    <div className="bg-[#FFF7E5] py-8">
      <Section>
        <div className="flex flex-col space-y-6">
          <p className=" font-[georgia] text-2xl font-bold md:text-4xl">
            {" "}
            ● Ekadashi
          </p>
          <div className="text-justify">
            <p>
              Ekadashi is the auspicious day to please the Rudras through
              various activities such as fasting or getting into the religious
              and devotional stuff. It is the ideal day for the remembrance of
              the Supreme lord for everything around us. One can do worship in
              several forms along with fasting to please the Supreme beings.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Ekadashi;
