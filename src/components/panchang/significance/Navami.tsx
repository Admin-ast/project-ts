import Section from "@/components/Section";
import React from "react";

type Props = {};

const Navami = (props: Props) => {
  return (
    <div className="bg-[#FFF7E5] py-8">
      <Section>
        <div className="flex flex-col space-y-6">
          <p className=" font-[georgia] text-2xl font-bold md:text-4xl">
            {" "}
            ● Navami
          </p>
          <div className="text-justify">
            <p>
              Navami is another day that is devoted to the Goddess Ambika and is
              ideal for taking on enemies. On this day countries can take up
              arms to destroy the wrongdoings in society or at the country
              level. The day is the symbol of violence and it can take place in
              the course of self-defense as well.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Navami;
