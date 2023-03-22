import React, { Key } from "react";
import { Card } from "../../home/Horoscope";
import Section from "../../Section";

type Props = {
  activeSign: Card;
  prediction: any;
};

const AboutSign = ({ activeSign, prediction }: Props) => {
  const entries: [string, unknown][] = Object.entries(prediction);
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
                  {activeSign.name} Daily Horoscope
                </p>
                <p className="text-[22px]">(March 21 - April 21)</p>
              </div>

              <div className="flex  flex-col space-y-4 px-8 pt-8 text-justify">
                {entries?.map((item: [string, unknown], index: Key) => (
                  <p key={index}>
                    <span className="font-bold">{`${item[0]}`}: </span>
                    {`${item[1]}`}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default AboutSign;
