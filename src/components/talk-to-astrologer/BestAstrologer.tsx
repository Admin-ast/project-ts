import React from "react";
import Table from "./Table";
import Section from "../Section";
import { IoIosChatbubbles } from "react-icons/io";
import { TfiLocationPin } from "react-icons/tfi";
import { HiBars4 } from "react-icons/hi2";
import { TbWorld } from "react-icons/tb";
type Props = {
  heading: string;
};

const BestAstrologer = ({ heading }: Props) => {
  return (
    <div className="bg-[#D9D9D9] py-6 ">
      <p className="md:[30px] text-center font-[Roboto] text-[25px] font-semibold lg:text-[36px] ">
        {heading}
      </p>
      <Section>
        <div className="mt-10   grid gap-[15px] md:grid-cols-3 lg:grid-cols-4">
          <Table head="Consult Astrologer" logo={<IoIosChatbubbles />} />
          <Table head="Indian (City-wise)" logo={<TfiLocationPin />} />
          <Table head="International" logo={<TbWorld />} />
          <Table head="Category wise" logo={<HiBars4 />} />
        </div>
      </Section>
    </div>
  );
};

export default BestAstrologer;
