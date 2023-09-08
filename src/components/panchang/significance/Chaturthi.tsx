import Section from "@/components/Section";
import React from "react";

type Props = {};

const Chaturthi = (props: Props) => {
  return (
    <div className=" py-8">
      <Section>
        <div className="flex flex-col space-y-6">
          <p className=" font-[georgia] text-2xl font-bold md:text-4xl">
            {" "}
            ● Chaturthi
          </p>
          <div className="text-justify">
            <p>
              Tithi is the lunar day in the Panchang and is based on the phases
              of the moon. Tithi represents one of the thirty divisions in the
              lunar month and there can be many tithis in the month. It is an
              angle between the sun and the moon and it is precisely the 12
              degrees angle that makes one tithi. Tithi is immensely significant
              in the Panchang calendar since it is used to find the auspicious
              and the inauspicious days. The auspicious days are the ones that
              are chosen for the various kinds of occasions or ceremonies in the
              Hindu culture such as the marriage, inauguration, and other
              events. Tithis can proceed in the sequence of Chaturthi,panchmi,
              sashimi, Saptami, asthmi, Navami, Dashmi, Ekadashi, Chaturdashi,
              and the Amvasya at last.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Chaturthi;
