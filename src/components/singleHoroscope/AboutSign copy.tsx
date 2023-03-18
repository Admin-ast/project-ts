import React from "react";
import { Section } from "@/components/Layout";

type Props = {
  horoscopeType: string | string[] | undefined;
};

const AboutSign = ({ horoscopeType }: Props) => {
  return (
    <div className="bg-[url('/horoscope-bg.svg')] bg-cover py-8 md:py-16">
      <Section>
        <div className="flex flex-col gap-6 md:flex-row md:space-x-16">
          <div className="flex flex-col space-y-3">
            <div className="flex flex-col gap-2">
              <p className="text-[22px] font-bold">Select other Sign</p>
              <div>
                <select
                  className="rounded-xl border-2 border-gray-400 bg-transparent px-10 py-3 text-center"
                  name="Select other Sign"
                  id=""
                >
                  <option value="zodic">Select other Sign</option>
                  <option value="aries">Aries</option>
                  <option value="zodic">zodic</option>
                  <option value="zodic">zodic</option>
                  <option value="zodic">zodic</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <div>
                <p className="text-[24px] font-bold ">Horoscopes</p>
              </div>
              <div className="mx-2 flex flex-col space-y-2">
                <p>Today’s Love Horoscope</p>
                <p>Tommorow Horoscope</p>
                <p>Yesterday Horoscope</p>
                <p>Weekly Horoscope</p>
                <p>Monthly Horoscope</p>
                <p>Annualy Horoscope</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border-4 border-black bg-[#FFF7E5] py-5">
            <div>
              <div className="flex flex-col items-center">
                <p className="text-[32px] font-bold">
                  {horoscopeType} Daily Horoscope
                </p>
                <p className="text-[22px]">(March 21 - April 21)</p>
              </div>

              <div className="flex  flex-col space-y-4 px-8 pt-8 text-justify">
                <p>
                  <span className="font-bold">Personal:</span>You could have the
                  feeling that your search has no end, stay positive, surround
                  yourself with enthusiastic people, your Aries horoscope
                  recommends you to try new things. Long lasting relationships
                  are tested, but the more stable they are, the easier it is to
                  overcome obstacles.
                </p>
                <p>
                  <span className="font-bold">Travel:</span> You shall travel to
                  attend an auspicious function with your partner. You shall be
                  happy with this trip.
                </p>
                <p>
                  <span className="font-bold"> Money:</span> Today is the luck
                  day to fulfill all your materialistic desires. Career:
                  Pressure on you will most likely be diminished by an outside
                  event, with this your finances are likely to rebound. It’s
                  likely that your family will deliver the motivation you need
                  to push things to the next level in your professional life.
                </p>
                <p>
                  <span className="font-bold"> Health:</span> This day looks
                  like a day in which you could feel invincible, an overall good
                  form will envelop you. Believe in yourself and your power,
                  don’t let others pull you down with bad attitude or words.
                </p>
                <p>
                  <span className="font-bold"> Emotions:</span> You shall be
                  optimistic and positive today. Feeling of relaxation and
                  freedom shall be dominant today. You shall be more flexible
                  than usual.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default AboutSign;
