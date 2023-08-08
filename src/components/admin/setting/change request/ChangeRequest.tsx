import React from "react";
import Sidebar from "../../Sidebar";
import Header from "../Header";
import ReviewCard from "../../reviews/ReviewCard";
import Card from "./Card";

type Props = {};

const ChangeRequest = (props: Props) => {
  return (
    <div className="">
      <div
        className="h-[78px]
     w-full bg-[#d12627cc]"
      ></div>
      <div className="lg:flex ">
        <div className="lg:w-1/4">
          <Sidebar />
        </div>
        <div className="min-h-screen  lg:w-3/4">
          <Header
            firstBtn="Price Change"
            secondBtn="Bank Details"
            thirdBtn="Request for a new price"
            className=""
          />
          <div className="grid gap-16 p-5 md:grid-cols-2 lg:grid-cols-3">
            <Card
              firstThing="ServiceType"
              firstThingData="CALL"
              secondThing="My Price In India"
              secondThingData={11.0}
              thirdThing="Creation Time"
              thirdThingData="11 Jul 23"
              thirdThingData1="06:58 PM"
              fourthThing="Status"
              fourthThingData="APPROVED"
              className=""
            />
            <Card
              firstThing="ServiceType"
              firstThingData="CALL"
              secondThing="My Price In India"
              secondThingData={11.0}
              thirdThing="Creation Time"
              thirdThingData="11 Jul 23"
              thirdThingData1="06:58 PM"
              fourthThing="Status"
              fourthThingData="APPROVED"
              className=""
            />
            <Card
              firstThing="ServiceType"
              firstThingData="CALL"
              secondThing="My Price In India"
              secondThingData={11.0}
              thirdThing="Creation Time"
              thirdThingData="11 Jul 23"
              thirdThingData1="06:58 PM"
              fourthThing="Status"
              fourthThingData="APPROVED"
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeRequest;
