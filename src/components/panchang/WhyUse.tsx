import React from "react";
import Section from "../Section";

type Props = {};

const WhyUse = (props: Props) => {
  return (
    <div className="bg-gradient-to-b from-[#ef824c] to-[#d84f50] bg-cover py-8">
      <Section>
        <div className="flex flex-col space-y-6 text-white">
          <p className="text-center font-[georgia] text-xl font-bold md:text-4xl">
            What is Panchang exactly used for? 
          </p>
          <div className="text-justify">
            <p>
              {` To be very honest, all your life, panchang has been helping you in some way or the other, but you simply were not aware of it. If you are married, then happens, the muhurat of your marriage was the result of a pandit looking into the panchang to scoop out the most suitable date for you to tie the knot. The suitable time depends on the position of planets ruling marriage or love, the tithi, the nakshatra that compliments marriage and much more. Also, are you pregnant? Well, when the baby would be born, it is the panchang that would help you find out what nakshatra s/he is born in. The nakshatra of a child defines his qualities and also helps a parent understand him better. Apart from this, panchang also comes in handy in finding the shubh muhurat to start a business, for bhoomi pujan and so much more. 
The purpose of finding Today's panchang, that our astrologers explain, is to use the Hindu calendar at its best and live while being aware of the natural forces that rule or run the world. Though not compulsory, but abiding by these pious timings has its own set of benefits. When you do something during the shubh kaal period, it allows you the blessing of planets and the Gods owing to their favourable position. 
At AstroTalk, today’s panchang is prepared by the best astrologers after a detailed study. The astrologers can also help you in understanding what aspects means what so the next time, you don't have to rely on us to understand what is panchang and how it works. 
Now that you might have understood the significance of panchang, let’s look in detail at the 5 aspects of panchang and what it means and how you can use panchang for your good.`}
                 
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default WhyUse;
