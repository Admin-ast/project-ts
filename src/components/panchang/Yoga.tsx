import React, { Key } from "react";
import Section from "../Section";

type Props = {};
const yogaDetails: { title: string; detail: string }[] = [
  {
    title: "Vishakumbha",
    detail:
      "Achieving - (the native is victorious over enemies, gets the property and wealth)",
  },
  {
    title: "Preeti",
    detail:
      " Happy - (the native is popular, fascinated to the opposite gender)",
  },
  {
    title: "Aayushman",
    detail: "Grounded - (the native enjoys a long life, is enthusiastic)",
  },
  {
    title: "Saubhagya",
    detail:
      "Wealth - (The person enjoys a contented life full of prospects, happiness)",
  },
  {
    title: "Shobhana",
    detail: "Beautiful -(The person is sensualist, passionate about sex)",
  },
  {
    title: "Atiganda",
    detail:
      "Risk - (problematic life due to some difficulties, prone to accidents)",
  },
  {
    title: "Sukarma",
    detail:
      "Plentiful - (performs honourable activities, generous and successful.)",
  },
  {
    title: "Dhriti",
    detail:
      "Entertainment - (enjoys life, good time with partner, love to pamper)",
  },
  {
    title: "Shoola",
    detail:
      "Argumentative - (argumentative and conflicting, argumentative, angry.)",
  },
  {
    title: "Ganda",
    detail:
      "Worrying - ( A bit imperfect in terms of principles, concerning personality)",
  },
  {
    title: "Vriddhi",
    detail:
      "Perspicacity - (intellectual, unethical and discriminating, constantly progresses with age.)",
  },
  {
    title: "Dhruva",
    detail:
      "Dependable - (The native has a stable personality, is very focused)",
  },
  {
    title: "Vyaghaata",
    detail: "Fierce - (unkind, certainly may hurt others)",
  },
  {
    title: "Harshana",
    detail:
      "Pleasure - (The native is intellectual, pleasures in cheerfulness and funniness.)",
  },
  {
    title: "Vajra",
    detail:
      "Power - ( the native tends to be wealthy, lascivious, changeable, forceful.)",
  },
  {
    title: "Siddhi",
    detail:
      "Success - (The native has multiple talents; defender and follower of others.)",
  },
  {
    title: "Vyatipaata",
    detail: "Difficulty - (may face unexpected setbacks, unstable)",
  },
  {
    title: "Variyaana",
    detail: "luxurious -(loves comfort and amenity, lazy, passionate.)",
  },
  {
    title: "Parigha",
    detail:
      "Barrier - (may encounter many problems; short-tempered and interfering)",
  },
  {
    title: "Shiva",
    detail:
      "Benevolent - (pleased by seniors and government, calm and learned)",
  },
  {
    title: "Siddha",
    detail:
      "Expert - (generous personality, good nature, interest in customary and righteousness)",
  },
  {
    title: "Saaddhya",
    detail: "Mediation - (full of manners and politeness.)",
  },
  {
    title: "Shubha",
    detail:
      "Favourable - (glossy body but difficulties with health, short-temper)",
  },
  {
    title: "Shukla",
    detail:
      "Bright - (talkative and unreliable, tottering and changeable mind)",
  },
  {
    title: "Brahma",
    detail:
      "Reliable- (the native is truthful and stable, has ambitions and good judgement.)",
  },
  {
    title: "Indra",
    detail:
      "Headship - (curiosity in training and knowledge; obliging, well off.)",
  },
  {
    title: "Vaidhriti",
    detail:
      "Divisive - (dangerous, conniving nature; influential and irresistible mentally or physically.)",
  },
];

const Yoga = (props: Props) => {
  return (
    <div className="bg-[#FFF7E5] py-8">
      <Section>
        <div className="flex flex-col space-y-6">
          <p className="text-center font-[georgia] text-2xl font-bold md:text-4xl">
            Yoga
          </p>
          <div className="flex flex-col gap-2 text-justify">
            <p>
              {` In Panchang, the literal meaning of the word ‘Yoga’ is addition. a
              Yoga is derived from the addition of the Sun's and Moon's position
              in the Zodiac. Each yoga specifies some characteristic of the
              persona.`}
            </p>
            <p>
              {` Vaidhriti and Vyatipaat Yogas are mostly avoided when considering
              performing an auspicious act. Out of the remaining Yogas, the
              first three Ghatis of Vajra and Vishkumbha, the first half of
              Parigh, the first five ghatis of Shool, the first nine ghatis of
              Vyaghat, and the first nine ghatis of Gand and Atigand are to be
              discarded for all the auspicious acts. A Ghati is an ancient time
              measurement system, A Ghati is equivalent to the modern 24
              Minutes. There are 27 ‘Yogas’, in Panchang. The first yog
              (Viskumbh) ends when the sum is 13°20'. Second Yog ( Priti) ends
              when it is 26°40' and so on.`}
            </p>
          </div>
          <div className="flex flex-col gap-2 text-justify">
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
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Yoga;
