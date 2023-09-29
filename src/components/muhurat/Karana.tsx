import React from "react";
import Section from "../Section";

type Props = {};

const Karana = (props: Props) => {
  return (
    <div>
      <div className="flex flex-col gap-5 bg-[url('/horoscope-bg.svg')] bg-cover py-8 shadow-xl lg:py-[51px]">
        <div>
          <Section>
            <div className="flex flex-col space-y-6 text-justify">
              <p className="text-center text-[36px] font-bold">Karana</p>
              <p>
                A date that splits into two is known as Karana. When the Moon
                completes 6 degrees, then one Karana is completed. Therefore,
                there are two Karanas on a date. These are former and the
                latter. In astrology, there are 11 Karanas, out of which four
                are fixed, and the other seven are changeable. When finding
                Shubh Muhurat 2023, Karan is one of the essential elements
              </p>
            </div>
            <div className="flex flex-col gap-2 py-6">
              <p className="font-bold' text-2xl">Names and natures of Karan </p>
              <p>
                <span className="text-xl font-semibold"> Name: </span>{" "}
                Kimstughna, Shakuni, Nag, Chatushpada, Bava, Balav, Kaulava,
                Gar, Taitil, Vanij, Vishti/Bhadra
              </p>
              <p className=" font-semibold">Nature</p>
              <p>
                {" "}
                <span className=" font-semibold">Stable Karan</span> -
                Kistughna, Shakuni, Nag, Chatushpada
              </p>
              <p>
                <span className=" font-semibold">Changeable Karan</span> - Bav,
                Balav, Kaulava, Gar, Taitil, Vanij, Vishti/Bhadra
              </p>
            </div>
          </Section>
        </div>
        <div className=" bg-white">
          <Section>
            <div className="flex flex-col space-y-6 py-8 text-justify">
              <p className="text-center text-[36px] font-bold">
                Important things to do at Shubh Muhurat 2023
              </p>
              <p className="text-[22px] font-semibold">
                Let us know which work should be done by the person at an
                auspicious time. Considering the auspicious time
              </p>
            </div>
            <div className="flex flex-col gap-2 px-4 py-2">
              <p>
                . Considering the auspicious time of 2023, you can start
                activities like employment, business, or other sources of
                revenue.{" "}
              </p>
              <p>
                . It is auspicious to check the Shubh Muhurat before buying
                expensive items like jewellery, clothes, or vehicles. Taking a
                bath at an auspicious time helps to promote purity or other
                qualities..
              </p>
              <p>
                . During the auspicious time, you can perform ceremonies such as
                naming, mundan, marriage, and Vidyarambh.
              </p>
              <p>
                . If you wish to take a step to launch any shop or house, that
                can also be considered during Shubh Muhurat 2023.
              </p>
              <p>
                .People now consider the auspicious time before taking any
                challenging or competitive exam, which amplifies the chances of
                performing well in the exam..
              </p>
              <p>
                . Knowing the auspicious Muhurat 2023 can help you get
                favourable results before you commence any pilgrim or crucial
                journey.
              </p>
              <p>
                . What steps can you take to get good luck in the year 2023?
                Sanatan Dharma has an ancient history and an old tradition of
                working in auspicious times.
              </p>
              <p>
                . It believes that starting a project during Shubh Muhurat 2023
                will bring success, complete smoothly, and the person will get
                favourable results from that project for their whole life.
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
};

export default Karana;
