import Section from "@/components/Section";
import React from "react";

type Props = {};

const Chaturdashi = (props: Props) => {
  return (
    <div className=" py-8">
      <Section>
        <div className="flex flex-col space-y-6">
          <p className=" font-[georgia] text-2xl font-bold md:text-4xl">
            {" "}
            ● Chaturdashi
          </p>
          <div className="text-justify">
            <p>
              Chaturdashi is the day of Goddess Kaali Mata or popularly known as
              the Kaali devi who is considered the most fierce. This day is
              devoted to the stuff of regulating the poison and calling off the
              elements such as spirit etc. The day is also involved with the
              deep black magic practices in its other dimension.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Chaturdashi;
