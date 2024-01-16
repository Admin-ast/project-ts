import Section from "@/components/Section";
import React from "react";

type Props = {};

const Asthami = (props: Props) => {
  return (
    <div className=" py-8">
      <Section>
        <div className="flex flex-col space-y-6">
          <p className=" font-[georgia] text-2xl font-bold md:text-4xl">
            {" "}
            ● Asthami
          </p>
          <div className="text-justify">
            <p>
              Asthmi is the day of Goddess Durga and is associated with the
              fierce armed war. On this day one can weaponize self for
              self-protection. Countries can buy new weapons to strengthen the
              armed forces for the sake of enhancing the self-protection of the
              country from the outside forces etc.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Asthami;
