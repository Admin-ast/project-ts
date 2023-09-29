import Section from "@/components/Section";
import React from "react";

type Props = {};

function About({}: Props) {
  return (
    <div className="my-10 flex flex-col space-y-8 text-base">
      <Section>
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col space-y-4 text-center">
            <p className="text-2xl font-bold md:text-[36px] ">
              {" "}
              Kundli Matching: Kundly Gun Milan
            </p>
            <p className="text-[22px]">A friend or a foe?</p>
          </div>
          <div className="flex flex-col text-justify">
            <p>
              {`The Kundli of a person is one of the most sought aspects of
                astrology. A Kundli entails the details about the positions of
                stars and planets at the time of your birth based on which
                further predictions are made. And with further predictions, we
                mean predictions about different aspects of one's life like
                love, career, health, business, finance, and even marriage.
                Simply said, Kundli making is a necessary thing for any
                individual and is likely to improve their decision-making
                capabilities gradually in the course of time.`}
            </p>
            <p>
              {" "}
              {`A Janam Kundli is made after studying the exact position of
                planets at the time you were born and based on the same, one’s
                Sun sign, Moon sign, and other such astrological aspects are
                listed. The Kundali is a co-existence of predictions and charts
                that help the astrologer learn about what your future would be
                like, the times you will have to grind harder, and also the
                times when luck will be by your side in abundance. However, with
                the culture shift, people are getting very tech-savvy and seek
                things under their thumb. And for the same reason, the Janam
                Kundali making process has also gone online, making it more
                pocket-friendly, accessible, and detailed. We at AstroTalk, for
                the convenience of the huge user base of ours, provide them with
                free Janam kundali online so anyone and everyone has the luxury
                of learning more about themselves and thus can plan their life
                better However, we also often bump into people who wonder if
                this online kundali astrology is accurate and if it has the same
                essence of the physical Kundli making process? Or is getting a
                Kundli made by a pandit or Vedic astrologer still the best
                option? To be honest, a Kundli made by a Vedic astrologer surely
                takes the top spot (which our astrologers can make for you), but
                an online Kundli software is no less when it comes to precision.
                Honestly, an online Kundli can be more detailed when compared to
                the physical ones.`}
            </p>
            <p>
              {` To state the obvious, just like a physical Kundli is made by
                learned Vedic astrologers and pandits, similarly, an online
                Kundli too is also prepared as per the astrological predictions
                by the astrologers. What changes is only the medium of sharing
                that information with you, i.e. digital? The digitalisation of
                Kundli is to only allow you more benefits like the availability
                of information in multiple languages. And anyway, one can always
                get their physical Janam Kundali report made by our astrologers,
                which will reach you physically.`}
            </p>
          </div>
        </div>
      </Section>
      <div className="bg-gradient-to-b from-[#fb7038] to-[#e36351] py-6 shadow-xl">
        <Section>
          <div className="flex flex-col space-y-8 text-white">
            <p className="text-center text-2xl font-bold md:text-[36px] ">
              {" "}
              How To Create a Free Online Janam Kundli?
            </p>
            <div className="flex flex-col text-justify text-[16px] ">
              <p>
                {`The Kundli of a person is one of the most sought aspects of
                astrology. A Kundali entails the details about the positions of
                stars and planets at the time of your birth based on which
                further predictions are made. And with further predictions, we
                mean predictions about different aspects of one's life like
                love, career, health, business, finance, and even marriage.
                Simply said, Kundli making is a necessary thing for any
                individual and is likely to improve their decision-making
                capabilities gradually in the course of time.`}
              </p>
              <p>
                {" "}
                {`A Janam Kundli is made after studying the exact position of
                planets at the time you were born and based on the same, one’s
                Sun sign, Moon sign, and other such astrological aspects are
                listed. The Kundali is a co-existence of predictions and charts
                that help the astrologer learn about what your future would be
                like, the times you will have to grind harder, and also the
                times when luck will be by your side in abundance. However, with
                the culture shift, people are getting very tech-savvy and seek
                things under their thumb. And for the same reason, the Janam
                Kundali making process has also gone online, making it more
                pocket-friendly, accessible, and detailed. We at AstroTalk, for
                the convenience of the huge user base of ours, provide them with
                free Janam kundali online so anyone and everyone has the luxury
                of learning more about themselves and thus can plan their life
                better However, we also often bump into people who wonder if
                this online kundali astrology is accurate and if it has the same
                essence of the physical Kundli making process? Or is getting a
                Kundli made by a pandit or Vedic astrologer still the best
                option? To be honest, a Kundli made by a Vedic astrologer surely
                takes the top spot (which our astrologers can make for you), but
                an online Kundli software is no less when it comes to precision.
                Honestly, an online Kundli can be more detailed when compared to
                the physical ones.`}
              </p>
              <p>
                {` To state the obvious, just like a physical Kundli is made by
                learned Vedic astrologers and pandits, similarly, an online
                Kundli too is also prepared as per the astrological predictions
                by the astrologers. What changes is only the medium of sharing
                that information with you, i.e. digital? The digitalisation of
                Kundli is to only allow you more benefits like the availability
                of information in multiple languages. And anyway, one can always
                get their physical Janam Kundali report made by our astrologers,
                which will reach you physically.`}
              </p>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}

export default About;
