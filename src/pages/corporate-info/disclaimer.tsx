import Section from "@/components/Section";
import React from "react";

type Props = {};

const disclaimer = (props: Props) => {
  return (
    <div className="py-10">
      <Section>
        <p className="text-primary py-6 text-center text-2xl font-bold md:text-4xl">
          OUR DISCLAIMER
        </p>
        <p className="flex flex-col space-y-5 text-justify">
          The information and data contained on astrosevatalk website is to be
          treated purely for your entertainment purposes only. Any prediction or
          other message that you receive is not a substitute for advice,
          programs, or treatment that you would normally receive from a licensed
          professional such as a lawyer, doctor, psychiatrist, or financial
          advisor. Accordingly, astrosevatalk.com provides no guarantees,
          implied warranties, or assurances of any kind, and will not be
          responsible for any interpretation made or use by the recipient of the
          information and data mentioned above.
        </p>
      </Section>
    </div>
  );
};

export default disclaimer;
