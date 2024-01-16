import React from "react";
import Section from "../Section";

type Props = {};

const WhyPanchang = (props: Props) => {
  return (
    <div className="bg-[url('/assets/cloud-bg.webp')] bg-cover py-8">
      <Section>
        <div className="flex flex-col space-y-6 text-white">
          <p className="text-center font-[georgia] text-xl font-bold md:text-4xl">
            Why Panchang Calendar?
          </p>
          <div className="text-justify">
            <p>
              {` The panchang calendar is immensely significant for all those who want to follow all the events of Hindu culture. This is truly the dedicated calendar on the Hinduism roots and rituals and following them in day-to-day life. The calendar contains and brings all the Hindu religious events in one place with their precise and accurate dates and timings. At Astrosevatalk we are committed to helping our visitors by providing an up-to-date schedule of all Hindu religious events. With the same vision, we have drafted this Panchang calendar which is updated on a day-to-day basis. You can visit Astrosevatalk in order to check out all the day-to-day auspicious timing on the various Tithis in this Panchang calendar. Feel free to share this calendar with your friends family and relatives to help them in following all the religious events of Hinduism culture in the most comprehensive manner. `}
                 
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default WhyPanchang;
