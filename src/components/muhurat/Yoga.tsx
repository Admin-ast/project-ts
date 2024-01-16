import React from "react";
import Section from "../Section";

const list = [
  {
    name: "Vridhi",
  },
  {
    name: "Dhruva",
  },
  {
    name: "Vyaghat",
  },
  {
    name: "Harshan",
  },
  {
    name: "Vajra",
  },
  {
    name: "Siddhi",
  },
  {
    name: "Vyatipat",
  },
  {
    name: "Varianati",
  },

  {
    name: "Vridhi",
  },
  {
    name: "Dhruva",
  },
  {
    name: "Vyaghat",
  },
  {
    name: "Harshan",
  },
  {
    name: "Vajra",
  },
  {
    name: "Siddhi",
  },
  {
    name: "Vyatipat",
  },
  {
    name: "Varianati",
  },

  {
    name: "Vridhi",
  },
  {
    name: "Dhruva",
  },
  {
    name: "Vyaghat",
  },
  {
    name: "Harshan",
  },
  {
    name: "Vajra",
  },
  {
    name: "Siddhi",
  },
  {
    name: "Vyatipat",
  },
  {
    name: "Varianati",
  },

  {
    name: "Vridhi",
  },
  {
    name: "Dhruva",
  },
  {
    name: "Vyaghat",
  },
  {
    name: "Harshan",
  },
  {
    name: "Vajra",
  },
  {
    name: "Siddhi",
  },
  {
    name: "Vyatipat",
  },
  {
    name: "Varianati",
  },

  {
    name: "Vridhi",
  },
  {
    name: "Dhruva",
  },
  {
    name: "Vyaghat",
  },
  {
    name: "Harshan",
  },
  {
    name: "Vajra",
  },
  {
    name: "Siddhi",
  },
  {
    name: "Vyatipat",
  },
  {
    name: "Varianati",
  },
];

type Props = {};

const Yoga = (props: Props) => {
  return (
    <div className=" bg-gradient-to-b from-[#f96e37] to-[#D32E27] bg-cover py-[30px]">
      <Section>
        <div className="">
          <div className="flex flex-col gap-5 text-justify text-white">
            <p className="text text-center text-[30px] font-bold text-white">
              Yoga
            </p>
            <p>
              A day is determined by the position of the Sun and the Moon in the
              night sky. According to astrology, there are 27 yogas, and based
              on that, the auspicious time of 2023 is ascertained. 9 out of 27
              yogas are extremely inauspicious. Nevertheless, the remaining
              yogas are considered auspicious. Thus, keep in mind to avoid
              promising work in inauspicious yogas.
            </p>
          </div>

          <div className="py-4">
            <p className="text-[22px] font-semibold text-white">
              Yogas name as per astrology
            </p>
            <div className="grid grid-cols-2 items-center gap-4 py-2 sm:grid-cols-2 md:grid-cols-5">
              {list.map((item, index) => (
                <div key={index} className="text-white">
                  <p className="">. {item?.name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 py-4 text-justify text-white">
            <p>
              <span className="text-[22px] font-semibold">
                Shubh yoga in astrology -
              </span>
              Preeti, Ayushman, Saubhagya, Shobhan, Sukarma, Dhriti, Vridhi,
              Dhruva, Harshana, Siddhi, Variyan, Shiva, Siddha, Sadhya, Shubh,
              Shukla, Brahma, and Aindra.
            </p>{" "}
            <p>
              Ashubha yoga in astrology - Vishkumbh, Atigund, Shool, Gand,
              Vyaghat, Vajra, Vytipat, Parigha, and Vaidhriti
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Yoga;
