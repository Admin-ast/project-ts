import React from "react";
import Header from "../lovescore/Header";
import KarmarForm from "./KarmarForm";
import Card from "./Card";
import Store from "@/components/planets/Store";

type Props = {};

const KarmaReport = (props: Props) => {
  return (
    <div className="">
      <Header
        title="Who Were You In Your Past Lives?"
        text="What is your ultimate destiny in this lifetime? Our fascinating Karma Report reveals the secrets of your karmic journey hidden in your birth horoscope. Discover where your soul has traveled, your present life purpose, and exactly where your karma is leading you next to make this life the best it can be."
        rs="Rs ***"
      />
      <KarmarForm />
      <Store />
    </div>
  );
};

export default KarmaReport;
