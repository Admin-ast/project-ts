import React, { Key } from "react";
import Section from "../Section";

type Props = {};

const Yoga = (props: Props) => {
  return (
    <div className="bg-gradient-to-b from-[#ef824c] to-[#d84f50] py-8">
      <Section>
        <div className="flex flex-col space-y-6 text-white">
          <p className=" text-center font-[georgia] text-2xl font-bold md:text-4xl">
            Yoga
          </p>
          <div className="flex flex-col gap-2 text-justify">
            <p>
              {` The Yoga in the Panchang is the aspect of the component that is used to define the dates. A Yoga date comes with the specific position of the sun and the moon and is also calculated on the basis of separation degrees between the sun and the moon. There are a total of 27 yogas and each of these yogas comes with its own specific name. In the Vedic culture it is believed that each and every Yoga comes with its own energy and vibration. It is more like each Yoga has its own unique qualities and on the basis of the same the auspicious yoga is chosen for any important event or ceremony. With the help of the Panchang calendar, it becomes way easier to find the most auspicious Yogas to choose as the date of significant events.`}
            </p>
          </div>
          {/* <div className="flex flex-col gap-2 text-justify">
            <p className="font-semibold">There are 27 yogas, namely:</p>
            <ul className="flex list-inside list-decimal flex-col gap-2">
              {yogaDetails.map(
                (item: { title: string; detail: string }, index: Key) => (
                  <li key={index}>
                    <span className="font-semibold">{item.title} -</span>{" "}
                    {item.detail}
                  </li>
                )
              )}
            </ul>
          </div> */}
        </div>
      </Section>
    </div>
  );
};

export default Yoga;
