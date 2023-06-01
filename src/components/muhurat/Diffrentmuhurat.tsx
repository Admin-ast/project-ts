import React from "react";
import Section from "../Section";

type Props = {};

const Diffrentmuhurat = (props: Props) => {
  return (
    <div className="bg-[url('/horoscope-bg.svg')] bg-cover py-8 lg:py-[51px]">
      <Section>
        <div className="flex flex-col space-y-10">
          <div className="flex flex-col space-y-6">
            <p className="text-center text-xl font-bold md:text-3xl">
              Different Muhurat and its Characteristics
            </p>
            <div className="text-justify">
              <p>
                Hinduism has so far evaluated 30 Muhurtas for determining the
                auspicious hour. The first Muhurta, known as Rudra Muhurta,
                begins at six in the morning and is classified as an unlucky
                Muhurta. The second Muhurta then begins 48 minutes after the
                first Muhurta. Ahi Muhurta is the name of this muhurta, which
                belongs to the pessimistic muhurta genre. You may learn more
                about each lucky Muhurta and its features here. Additionally,
                you should be aware that this Muhurta takes a break for 48–48
                minutes
              </p>
            </div>
          </div>
          <div className="flex flex-col  gap-3">
            <img
              className="h=[318px] w-[258px]"
              src="/Rectangle 154.png"
              alt=""
            />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Diffrentmuhurat;
