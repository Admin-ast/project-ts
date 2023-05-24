import Section from "@/components/Section";
import React from "react";

const card = [
  {
    name: "Rahu Mahadasha",
    date: "(24-09-1987 - 23-09-2005)",
    text: "{`The conjunction of Rahu in the ninth of the Kundli could be an ominous omen of certain events that could lead to separation from siblings. It also hints at some parent health issues being transferred to the child. However, this won't be a serious kind of ailment. On the upside, when Rahu camps in the favourable sign, you will have the fortune of good education and your family will be blessed with the opportunity to travel to foreign countries. Also, you will have a friend circle that will help you in establishing your professional goal. You will be lucky to find a loyal partner, however, you must constrain your speech when with them.`},",
    text2:
      "{`The conjunction of Rahu in the ninth of the Kundli could be an ominous omen of certain events that could lead to separation from siblings. It also hints at some parent health issues being transferred to the child. However, this won't be a serious kind of ailment. On the upside, when Rahu camps in the favourable sign, you will have the fortune of good education and your family will be blessed with the opportunity to travel to foreign countries. Also, you will have a friend circle that will help you in establishing your professional goal. You will be lucky to find a loyal partner, however, you must constrain your speech when with them.`},",
  },
  {
    name: "Rahu Mahadasha",
    date: "(24-09-1987 - 23-09-2005)",
    text: "{`The conjunction of Rahu in the ninth of the Kundli could be an ominous omen of certain events that could lead to separation from siblings. It also hints at some parent health issues being transferred to the child. However, this won't be a serious kind of ailment. On the upside, when Rahu camps in the favourable sign, you will have the fortune of good education and your family will be blessed with the opportunity to travel to foreign countries. Also, you will have a friend circle that will help you in establishing your professional goal. You will be lucky to find a loyal partner, however, you must constrain your speech when with them.`},",
    text2:
      "{`The conjunction of Rahu in the ninth of the Kundli could be an ominous omen of certain events that could lead to separation from siblings. It also hints at some parent health issues being transferred to the child. However, this won't be a serious kind of ailment. On the upside, when Rahu camps in the favourable sign, you will have the fortune of good education and your family will be blessed with the opportunity to travel to foreign countries. Also, you will have a friend circle that will help you in establishing your professional goal. You will be lucky to find a loyal partner, however, you must constrain your speech when with them.`},",
  },
  {
    name: "Rahu Mahadasha",
    date: "(24-09-1987 - 23-09-2005)",
    text: "{`The conjunction of Rahu in the ninth of the Kundli could be an ominous omen of certain events that could lead to separation from siblings. It also hints at some parent health issues being transferred to the child. However, this won't be a serious kind of ailment. On the upside, when Rahu camps in the favourable sign, you will have the fortune of good education and your family will be blessed with the opportunity to travel to foreign countries. Also, you will have a friend circle that will help you in establishing your professional goal. You will be lucky to find a loyal partner, however, you must constrain your speech when with them.`},",
    text2:
      "{`The conjunction of Rahu in the ninth of the Kundli could be an ominous omen of certain events that could lead to separation from siblings. It also hints at some parent health issues being transferred to the child. However, this won't be a serious kind of ailment. On the upside, when Rahu camps in the favourable sign, you will have the fortune of good education and your family will be blessed with the opportunity to travel to foreign countries. Also, you will have a friend circle that will help you in establishing your professional goal. You will be lucky to find a loyal partner, however, you must constrain your speech when with them.`},",
  },
];

type Props = {};

const Vimshottari = (props: Props) => {
  return (
    <div className="mb-20 space-y-20">
      <Section>
        <p>Understanding your dasha</p>
        <div className="flex flex-col gap-2 py-4">
          {card.map((item, index) => (
            <div
              key={index}
              className="rounded-[10px] border-2 border-slate-300 p-5"
            >
              <div className="flex flex-col gap-2 text-justify text-gray-700">
                <div className="flex items-center justify-between text-slate-900">
                  <p className="text-lg font-bold">{item?.name}</p>
                  <p className="text-lg font-bold">{item?.date}</p>
                </div>
                <div className="flex flex-col gap-4">
                  <p>{item?.text}</p>
                  <p>{item?.text2}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Vimshottari;
