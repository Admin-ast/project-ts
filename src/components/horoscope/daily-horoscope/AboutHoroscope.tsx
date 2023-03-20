import React from "react";
import Section from "../../Section";

type Props = {};

const AboutHoroscope = (props: Props) => {
  return (
    <div className="pb-8">
      <Section>
        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-6">
            <p className="text-center text-xl font-bold md:text-3xl">
              Understanding Today horoscope
            </p>
            <div className="text-justify">
              <p>
                {`If you are a follower of astrology, you would know that each
                zodiac sign in astrology is ruled by a planet. For example, the
                Moon is the ruler of Cancer, and Mars is the ruler of both Aries
                and Scorpio zodiac signs. Similarly, Gemini is ruled by Mercury
                and so on. It’s the negative and positive state of these planets
                that affects your zodiac sign and thus your future.`}
              </p>
              <p>
                For example, Taurus is ruled by the planet Venus. In astrology,
                Mars, Jupiter, and Ketu are the enemy of the planet Venus.
                Hence, if Venus is placed in any house of your Kundli with Mars,
                Jupiter or Ketu, then the characteristics of that house may turn
                negative for you and reflect on your Horoscope today.
              </p>
              <p>
                {`Elaborating on it, if Venus and its enemy planet Mars are placed
                in the fifth house (House of romance and children) on a
                particular day, then your romantic life might take a beating on
                that day. Hence your daily horoscope will suggest you not
                indulge in arguments with your partner or maybe delay the
                proposal for a day or so on. Similarly, if the favourable planet
                of Venus - Sun and Moon - are in the fifth house with Venus,
                then the day is vibrant for love affairs.`}
              </p>
              <p>
                {`Note that this is just an example. In real life, astrologers
                consider many more dimensions and forms of astrology, such as
                transits, Lal Kitab, Nakshatras, etc., before finalising your
                daily horoscope. So if you seek to improve the outcomes of the
                day the Vedic way, your Today’s horoscope is the way to go.`}
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-6">
            <p className="text-center text-xl font-bold md:text-3xl">
              {`How can Today's horoscope help you?`}
            </p>
            <div className="flex flex-col space-y-4 text-justify">
              <p>
                {`We have been talking a lot about Today’s horoscope, how it is
                prepared, and all the technicality or science that goes into
                predicting your future through horoscopes. And what we have
                gathered from the discussion is that the Daily horoscope is an
                insightful medium to analyse the sense of the energy of any
                given day. Horoscope allows us a roadmap, showing us what we
                might experience in the day, week or month ahead of us. Having
                said that, here are some more benefits that one can derive from
                reading their horoscope on a regular basis.`}
              </p>
              <div className="px-6">
                <ul className="flex flex-col gap-2">
                  <li>
                    {`* If you are trying your luck at dating, reading your
                    Today’s horoscope or love horoscope can help you know the
                    best time or day to go on a date. The love horoscope is
                    especially useful for someone planning to propose love to
                    someone as you always want to do it when the chances of
                    hearing a ‘YES’ are 100%.`}
                  </li>
                  <li>
                    {` * In terms of career, the Daily horoscope can predict the
                    possibility of you finding a job on a particular day or even
                    how you would do in an interview you are looking forward to.
                    These are some questions that home our consciousness, and
                    having answers to them through Today’s horoscope is just
                    relieving.`}
                  </li>
                  <li>
                    * The horoscope also warns the natives about any kind of
                    impending calamity. The warning safeguards the native from
                    any unannounced turn of events.
                  </li>
                  <li>
                    * Wondering if your Visa will get approved today or this
                    week? Or will you go abroad anytime soon? The Daily, weekly,
                    and monthly horoscopes are here to help.
                  </li>
                  <li>
                    * At times, we feel stuck in life. Your business may not be
                    growing, you might be having health issues, etc. Reading the
                    horoscope today lends you remedies to such woes.
                  </li>
                  <li>
                    {` * Parents are often concerned about their children,
                    especially newborns. Well, the good news is that the daily
                    horoscope has predictions for children too. You, as a
                    parent, can read your newborn's horoscope today to plan his
                    or her day of doing nothing.`}
                  </li>
                  <li>
                    * In the finance area, the astrologers, after analysing the
                    planetary position, let you know about your future financial
                    prospects of yours.
                  </li>
                </ul>
              </div>
              <p>
                At Astrotalk, our astrologers compile horoscopes for each zodiac
                sign after a deep study of all aspects of astrology. One can
                trust the renowned astrologers of ours to get accurate
                predictions about his health, marriage, career and more to begin
                and end his day. Therefore, if looking to derive daily
                predictions based on your horoscope, look nowhere else. Download
                the Astrotalk app
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default AboutHoroscope;
