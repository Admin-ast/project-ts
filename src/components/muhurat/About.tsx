import React from "react";
import Section from "../Section";
import Image from "next/image";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="bg-[url('/horoscope-bg.svg')] bg-cover  py-[30px]">
      <Section>
        <div className="flex flex-col space-y-[15px]">
          <div className="flex flex-col space-y-6">
            <p className="text-center text-[30px] font-bold ">
              Shubh Muhurat 2023
            </p>
            <div className="text-justify">
              <p>
                {`  It is highly important to perform any auspicious work during
                Shubh Muhurta. Hindus regard certain dates to be auspicious for
                starting any worthwhile endeavours. When undertaking an
                optimistic task during Shubh Muhurta, good outcomes are usually
                obtained. As a result, the custom of determining the auspicious
                moment and beginning fresh work has existed for millennia. Shubh
                Muhurta, according to Vedic astrology, is the exact moment when
                the solar system's location of the planets and constellations is
                favourable for carrying out a certain activity. People,
                therefore, have the view that keeping this fortunate hour
                assists to obtain more beneficial and effective achievements
                without encountering any obstacles or issues.`}
              </p>
              <p>
                {`  The importance of Shubh Muhurta (auspicious muhurat) is vast,
                following Sanatan Dharma. It claims that if labour begins at a
                fortunate moment, the individual can greatly profit from it.
                Additionally, completing a task at a fortunate moment enhances
                our achievement moving forward in life. Hence, the majority of
                Hindus still wait for an auspicious moment to act, even in
                today's generation. Let's comprehend the lucky moment with the
                aid of expert pandits and astrologers.`}
              </p>
              <p>
                {` {" "}
                What are a few questions about the Shubh Muhurta 2023
                (auspicious muhurat 2023) era? According to astrology, Shubh
                Muhurta is the most auspicious hour of the day based on the
                alignment of the solar system's planets' constellations.
                Therefore, a person decides to begin any auspicious task only
                after determining the auspicious moment, which is governed by
                the movement, location, and constellations of the planets. When
                it comes to a fresh beginning for any task, Hinduism believes
                that Shubh Muhurta is the best place to locate the day's
                optimism. Any happy circumstance results from conducting such
                rites during an auspicious moment, whether it be for your
                marriage, naming ceremony, or shaving your child's head.`}
              </p>
              <p>
                {` From this article, we will know in detail about Vivah Muhurat
                2023, Naamkaran Muhurta 2023, Mundan Muhurat 2023, Shubh Muhurta
                to buy a car and bike in 2023, and an auspicious time to buy
                gold in 2023 etc.`}
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1 text-justify">
                <p className="font-bold">Annanprashan Muhurat 2023</p>
                <p className="cursor-pointer">
                  Click here to get details about all Annanprashan Muhurat 2023
                </p>
              </div>
              <div className="flex flex-col gap-1 text-justify">
                <p className="font-bold">Naamkaran Muhurat 2023</p>
                <p className="cursor-pointer">
                  Click here to get details about all Naamkaran Muhurat 2023
                </p>
              </div>
              <div className="flex flex-col gap-1 text-justify">
                <p className="font-bold">Mundan Muhurat 2023</p>
                <p className="cursor-pointer">
                  Click here to get details about all Mundan Muhurat 2023
                </p>
              </div>
              <div className="flex flex-col gap-1 text-justify">
                <p className="font-bold">Car/Bike Muhurat 2023</p>
                <p className="cursor-pointer">
                  Click here to get details about all Car/Bike Muhurat 2023
                </p>
              </div>
              <div className="flex flex-col gap-1 text-justify">
                <p className="font-bold">Marriage Muhurat 2023</p>
                <p className="cursor-pointer">
                  Click here to get details about all Marriage Muhurat 2023
                </p>
              </div>
              <div className="flex flex-col gap-1 text-justify">
                <p className="font-bold">Gold Buying Muhurat 2023</p>
                <p className="cursor-pointer">
                  Click here to get details about all Gold Buying Muhurat 2023
                </p>
              </div>
              <div className="flex flex-col gap-1 text-justify">
                <p className="font-bold"> Bhoomi Pujan Muhurat 2023</p>
                <p className="cursor-pointer">
                  Click here to get details about all Bhoomi Pujan Muhurat 2023
                </p>
              </div>
              <div className="flex flex-col gap-1 text-justify">
                <p className="font-bold">Griha Pravesh Muhurat 2023</p>
                <p className="cursor-pointer">
                  Click here to get details about all riha Pravesh Muhurat 2023
                </p>
              </div>
            </div>

            <div className="flex flex-col  gap-3">
              <Image
                src="/assets/appointment/live-astro.png"
                alt="muhurat"
                width={258}
                height={318}
              />
              <p className="text-center">Talk to our best Astrologers</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;
