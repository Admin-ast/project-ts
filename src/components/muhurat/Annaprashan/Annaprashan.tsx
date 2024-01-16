import Section from "@/components/Section";
import Hero from "@/components/appoinments/Hero";
import { HomeIcon, HomeModernIcon } from "@heroicons/react/24/solid";
import React from "react";
import Table from "./Table";
import AfterTable from "./AfterTable";

type Props = {
  title: string;
  title2: string;
  title3: string;
};

const Annaprashan = ({ title, title2, title3 }: Props) => {
  return (
    <>
      <Hero text="Annanprashan Muhurat " icon="" />
      <div className="bg-[#F5F5F5] py-2">
        <Section>
          <div className="flex items-center space-x-2">
            <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
            <p className="bg-[#bd6d7b] p-1 px-4 text-[10px] font-medium text-white">
              Shubh Muhurat
            </p>
          </div>
        </Section>
      </div>
      <Section>
        <div className="mt-[52px]">
          <p className="text-center font-[Georgia] text-[36px] font-bold">
            {title}
          </p>
          <p className="mt-[35px] text-justify font-[Roboto]">{`Majority of parents worry about or wish to preserve their child's first actions, words, meals, etc., as a priceless memory. Be it the child speaking for the first time or having his/her first bite, the FIRSTS are always special.
Feeding the newborn breast milk for the first six months is highly important for his/her nutritional growth. However, it is thought that around six months, solid or semi-solid food should be introduced. The first feeding of a newborn is a highly important occasion celebrated as Annaprashan. According to Hinduism, Annaprashan is an auspicious moment to celebrate giving the infant nourishment for the first time. And to choose the right time to conclude the ceremony is what Annaprashan muhurat 2023 is all about.
The natal nakshatra or zodiac sign of the child is used to determine the Annaprashan Shubh Muhurat. Annaprashan, or the first substantial meal, is another name for it. It is a term from Sanskrit that means "to consume." The introduction of solid food to a baby's diet begins with annaprashan. During the traditional Hindu celebration of Annaprashan, the kid is fed small amounts of a variety of foods, including salty, sour, bitter, and spicy items, to help them learn about flavour. Additionally, the infant has to focus on quantities and shouldn't be fed anything that can't be digested. For a celebration with the same name, food is introduced to the kid in very little amounts. This event varies slightly across the nation. This post will clarify some crucial details surrounding Annaprashan Sanskar 2023.`}</p>
        </div>
        <div className="mt-[52px]">
          <p className="text-center font-[Georgia] text-[36px] font-bold">
            {title2}
          </p>
          <p className="mt-[35px] text-justify font-[Roboto]">{`It is crucial to calculate the auspicious time for joyful moments; for this, the calculation of time is known as "Muhurat." The child's nakshatra is important while calculating the Muhurat of Annaprashan Sanskar 2023. For baby boys, one can consider calculating the Shubh Muhurat for Annaprashan 2023 at the 6th, 8th, 10th, and 12th month from the time of delivery, and for girls, the 5th, 7th, and 9th, 11 months from the time of birth. While commencing any new thing based on Shubh Muhurat will help you to add success and happiness to a particular event. Let's look at more details about Annaprashasn Muhurat, which an expert Vedic astrologer from Astrotalk reveals`}</p>
        </div>

        <div className="mt-[52px]">
          <p className="text-center font-[Georgia] text-[36px] font-bold">
            {title3}
          </p>
          <p className="mt-[35px] text-justify font-[Roboto]">{`Annaprasana Muhurat is also called 'the rice feeding' ritual. It is recommended to be performed when the baby is between five and twelve months of age. Annaprashan is performed only when the child attains the state to digest rice and grains. If the child is still not in a position to digest the food, then it is better to postpone it to another concerned date.`}</p>
        </div>
      </Section>
      <div className="">
        <Table
          title="Shubh Muhurat for Annaprashan Sanskar in January 2023"
          title2="Shubh Muhurat for Annaprashan Sanskar in February 2023"
          className="bg-gradient-to-b from-[#fb7038] to-[#df625b] text-white"
        />
        <Table
          title="Shubh Muhurat for Annaprashan Sanskar in March 2023"
          title2="Shubh Muhurat for Annaprashan Sanskar in April 2023"
          className=""
        />
        <Table
          title="Shubh Muhurat for Annaprashan Sanskar in May 2023"
          title2="Shubh Muhurat for Annaprashan Sanskar in June 2023"
          className=""
        />
        <Table
          title="Shubh Muhurat for Annaprashan Sanskar in July 2023"
          title2="Shubh Muhurat for Annaprashan Sanskar in August 2023"
          className=""
        />
        <Table
          title="Shubh Muhurat for Annaprashan Sanskar in September 2023"
          title2="Shubh Muhurat for Annaprashan Sanskar in October 2023"
          className="bg-gradient-to-b from-[#fb7038] to-[#df625b] text-white"
        />
        <Table
          title="Shubh Muhurat for Annaprashan Sanskar in November 2023"
          title2="Shubh Muhurat for Annaprashan Sanskar in December 2023"
          className=""
        />
      </div>
      <div className="">
        <AfterTable />
      </div>
    </>
  );
};

export default Annaprashan;
