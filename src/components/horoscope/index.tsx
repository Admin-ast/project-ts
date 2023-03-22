import React from "react";
import dynamic from "next/dynamic";
import Hero from "./Hero";

type Props = {};

const Horoscope = (props: Props) => {
  return (
    <div>
      <Hero />
    </div>
  );
};

export default Horoscope;
