import Section from "@/components/Section";
import React from "react";

type Props = {};

const Ashtakvarga = (props: Props) => {
  return (
    <div className="mb-20 space-y-20">
      <Section>
        <div className="space-y-4 text-justify">
          <p className="mb-2 font-medium">Ashtakvarga Chart</p>
          <p className="">
            Ashtakvarga is used to assess the strength and patterns that are
            present in a birth chart. The Ashtakvarga or Ashtakavarga is a
            numerical quantification or score of each planet placed in the chart
            with reference to the other 7 planets and the Lagna. In Sarva
            Ashtaka Varga the total scores of all the BAVs are overlaid and then
            totalled. This makes the SAV of the chart. The total of all the
            scores should be 337.
          </p>
        </div>
      </Section>
    </div>
  );
};

export default Ashtakvarga;
