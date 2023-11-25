import React from "react";
import Table from "./Table";
import Section from "../Section";

type Props = {
  heading: string;
};

const BestAstrologer = ({ heading }: Props) => {
  return (
    <div className="bg-[#D9D9D9] py-6">
      <p className="md:[30px] text-center font-[Roboto] text-[25px] font-semibold lg:text-[36px] ">
        {heading}
      </p>
      <Section>
        <div className="mt-10   grid gap-[15px] md:grid-cols-3 lg:grid-cols-4">
          <Table head="Consult Astrologer" />
          <Table head="Consult Astrologer" />
          <Table head="Consult Astrologer" />
          <Table head="Consult Astrologer" />
        </div>
      </Section>
    </div>
  );
};

export default BestAstrologer;
