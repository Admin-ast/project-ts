import Section from "@/components/Section";
import React from "react";
import LoveForm from "./LoveForm";
import Footer from "./Footer";
import Header from "./Header";
import Card from "../karmareport/Card";
import Store from "@/components/planets/Store";

type Props = {};

const LoveScore = (props: Props) => {
  return (
    <div className="">
      <Header
        title="How Do You Rate With Your Partner?"
        text="Your Love Score—the ultimate compatibility report—answers your burning questions about you and that certain someone. This unique love synastry report rates your relationship potential based on seven key factors that are critical in healthy, fulfilling romantic unions. Your Love Score is a report you’ll refer back to again and again."
        rs="Rs***"
      />
      <LoveForm />

      <Footer />
      {/* <Card title="Recommended Reports For You" /> */}
      <Store />
    </div>
  );
};

export default LoveScore;
