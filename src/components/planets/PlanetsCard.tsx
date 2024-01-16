import React from "react";
import Section from "../Section";

const planetcard = [
  {
    img: "assets/palnet/sun 1.svg",
    title: "Sun",
    text: "Planet of Self",
    discription:
      "Sun - The Sun is the centre of our solar system and the most important planet in astrology. It represents our identity, ego, and sense of self. The Sun is associated with leadership, vitality, and creativity",
  },
  {
    img: "assets/palnet/Moon 1.svg",
    title: "Moon",
    text: "Planet of Emotions",
    discription:
      "Moon - The Moon is the closest celestial body to Earth and is believed to have a strong influence on our emotions, intuition, and subconscious mind. It represents our emotional nature and our ability to nurture and care for others. Astrosevva might provide guidance on how to connect with our emotions and use them to make better decisions in life.",
  },
  {
    img: "assets/palnet/Mercury 1.svg",
    title: "Mercury",
    text: "PlanetofCommunication",
    discription:
      "Mercury - Mercury is the planet of communication, technology, and intellectual pursuits. It represents our ability to think logically and communicate effectively. Mercury is associated with intelligence, wit, and adaptability.",
  },
  {
    img: "assets/palnet/Venus 1.svg",
    title: "Venus",
    text: "PlanetofLove&money",
    discription:
      "Venus - Venus is the planet of love, beauty, and pleasure. It represents our relationships, our ability to appreciate beauty, and our capacity for joy and happiness. Venus is associated with romance, art, and luxury.",
  },
  {
    img: "assets/palnet/Mars 1.svg",
    title: "Mars",
    text: "Planet of passion",
    discription:
      "Mars - Mars is the planet of action, energy, and passion. It represents our drive, ambition, and our ability to take action and pursue our goals. Mars is associated with courage, strength, and determination",
  },
  {
    img: "assets/palnet/Jupiter 1.svg",
    title: "Jupiter",
    text: "Planet of Luck",
    discription:
      "Jupiter - Jupiter is the planet of expansion, abundance, and good fortune. It represents our ability to grow and develop, and our capacity for generosity and optimism. Jupiter is associated with wisdom, knowledge, and spirituality.",
  },
  {
    img: "assets/palnet/Saturn 1.svg",
    title: "Saturn",
    text: "Planet of Self",
    discription:
      "Saturn - Saturn is the planet of discipline, responsibility, and structure. It represents our ability to create order and stability in our lives, and our capacity for hard work and perseverance. Saturn is associated with maturity, wisdom, and self-discipline.",
  },
  {
    img: "assets/palnet/Uranus 1.svg",
    title: "Uranus",
    text: "Planet of Self",
    discription:
      "Uranus - Uranus is the planet of innovation, originality, and freedom. It represents our ability to think outside the box, and our capacity for radical change and transformation. Uranus is associated with invention, creativity, and rebellion.",
  },
  {
    img: "assets/palnet/Neptune 1.svg",
    title: "Neptune",
    text: "Planet of Self",
    discription:
      "Neptune - Neptune is the planet of dreams, intuition, and spirituality. It represents our connection to the divine, and our ability to access higher states of consciousness. Neptune is associated with imagination, mysticism, and artistic inspiration.",
  },
  {
    img: "assets/palnet/Pluto 1.svg",
    title: "Pluto",
    text: "Planet of Self",
  },
];

type Props = {};

const PlanetsCard = (props: Props) => {
  return (
    <div className="bg-[url('/horoscope-bg.svg')] bg-cover py-8 lg:py-[51px]">
      <Section>
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-justify">
              Astrology is a fascinating field that seeks to understand and
              interpret the movements and positions of celestial bodies in
              relation to our lives on earth. One of the key elements of
              astrology is the study of the nine planets, each of which is
              believed to have its own unique influence on our personalities,
              behaviour, and life events.
            </p>
            <p className="py-2">
              {` According to astrological beliefs, the positions and movements of these nine planets
              can influence our lives in various ways. Astrosevva is a popular online platform that
              offers astrological guidance and predictions based on the positions of these planets
              at the time of an individual's birth or at present.`}
            </p>
          </div>
          <div className="flex flex-col gap-5 py-10 md:gap-8">
            {planetcard.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-between gap-6 text-justify md:flex-row"
              >
                <div className="w-[300px]]">
                  <div className="flex  h-[170px] w-[254px] flex-col items-center gap-2 rounded-[20px] bg-[#000000] p-2 text-white">
                    <img
                      className="h-[149px] w-[148px]"
                      src={item?.img}
                      alt=""
                    />
                    <div className="flex flex-col items-center gap-1"></div>
                  </div>
                </div>
                <div className="flex w-full flex-col gap-2">
                  <p className="text-2xl font-semibold">{item?.title}</p>
                  <p>{item?.text}</p>
                  <p className="">{item?.discription}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default PlanetsCard;
