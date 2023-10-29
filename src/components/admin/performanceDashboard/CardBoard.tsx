import React from "react";
import Card from "./Card";

type Props = {};
const CardItems = [
  {
    text: "Panchang is the astrological daily calendar based on the Indian calendar. Daily Panchang is one of the most sought Vedic Astrology concepts, which conceptualize the day’s planetary position to determine auspicious tithis, timing, festivals, vrats, etc..",
    rank: 1234567890,
    score: 455,
  },
  {
    text: "Panchang is the astrological daily calendar based on the Indian calendar. Daily Panchang is one of the most sought Vedic Astrology concepts, which conceptualize the day’s planetary position to determine auspicious tithis, timing, festivals, vrats, etc..",
    rank: 1234567890,
    score: 455,
  },
  {
    text: "Panchang is the astrological daily calendar based on the Indian calendar. Daily Panchang is one of the most sought Vedic Astrology concepts, which conceptualize the day’s planetary position to determine auspicious tithis, timing, festivals, vrats, etc..",
    rank: 1234567890,
    score: 455,
  },
  {
    text: "Panchang is the astrological daily calendar based on the Indian calendar. Daily Panchang is one of the most sought Vedic Astrology concepts, which conceptualize the day’s planetary position to determine auspicious tithis, timing, festivals, vrats, etc..",
    rank: 1234567890,
    score: 455,
  },
  {
    text: "Panchang is the astrological daily calendar based on the Indian calendar. Daily Panchang is one of the most sought Vedic Astrology concepts, which conceptualize the day’s planetary position to determine auspicious tithis, timing, festivals, vrats, etc..",
    rank: 1234567890,
    score: 455,
  },
  {
    text: "Panchang is the astrological daily calendar based on the Indian calendar. Daily Panchang is one of the most sought Vedic Astrology concepts, which conceptualize the day’s planetary position to determine auspicious tithis, timing, festivals, vrats, etc..",
    rank: 1234567890,
    score: 455,
  },
  {
    text: "Panchang is the astrological daily calendar based on the Indian calendar. Daily Panchang is one of the most sought Vedic Astrology concepts, which conceptualize the day’s planetary position to determine auspicious tithis, timing, festivals, vrats, etc..",
    rank: 1234567890,
    score: 455,
  },
];

const CardBoard = (props: Props) => {
  return (
    <div className="md:flex md:flex-wrap lg:flex lg:flex-wrap">
      {CardItems.map((card, index) => (
        <div key={index} className="p-4 md:w-1/2 lg:w-1/2">
          <Card text={card.text} rank={card.rank} score={card.score} />
        </div>
      ))}
    </div>
  );
};

export default CardBoard;
