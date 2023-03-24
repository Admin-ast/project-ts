import React from "react";
import Section from "../Section";

type Props = {};

function Karna({}: Props) {
  return (
    <Section>
      <div className="flex flex-col space-y-6 py-8 lg:py-[51px]">
        <h2 className="mb-[18px] text-center font-[georgia] text-2xl font-semibold md:text-[36px]">
          Karna
        </h2>
        <div className="flex flex-col space-y-4">
          <div>
            <p>
              {`Half of Tithi is called 'Karna'. In each Tithi, there are two
                Karans and in total, we have 11 Karnas in total. Four of them
                occur just once a month and are called the Fixed Karanas:
                Kintughna, Chatushpada, Sakuni and Naga`}
            </p>
            <p>
              The other seven are movable Karanas. They follow one another in a
              fixed rotation: Bava, Balava, Kaulava, Taitila, Gara, Vanija and
              Vishti.
            </p>
          </div>
          <div className="flex gap-4 md:gap-8">
            <div className="flex flex-col gap-1">
              <p className="font-semibold">Movable Karan</p>
              <p>Bava</p>
              <p>Balava</p>
              <p>Kaulava</p>
              <p>Taitila</p>
              <p>Gara</p>
              <p>Vanij</p>
              <p>Vishti or Bhadra</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-semibold">Fixed Karan</p>
              <p>Sakuni</p>
              <p> Kintughna</p>
              <p>Chatushpada</p>
              <p> Naag</p>
            </div>
          </div>
          <p>
            Each of the Karanas is said to have its own influence and
            interpretation. ‘Vishti’ is considered the most inauspicious karana.
            No important or new work is done during the period of this
            karana.    
          </p>
        </div>
      </div>
    </Section>
  );
}

export default Karna;
