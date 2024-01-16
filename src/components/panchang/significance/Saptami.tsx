import Section from "@/components/Section";
import React from "react";

type Props = {};

const Saptami = (props: Props) => {
  return (
    <div className="bg-[#FFF7E5] py-8">
      <Section>
        <div className="flex flex-col space-y-6">
          <p className=" font-[georgia] text-2xl font-bold md:text-4xl">
            {" "}
            ● Saptami
          </p>
          <div className="text-justify">
            <p>
              It is the 7th day of the lunar month and is associated with the
              Lord Surya in its significance. On this day one can take on a new
              journey in life to the different directions and goals achievement
              in life. The day is also ideal for dealing with movable stuff just
              like buying vehicles etc.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Saptami;
