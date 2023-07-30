import React from "react";
import Sidebar from "../Sidebar";
import Toggler from "./Toggler";
import ToggleSwitch from "./ToggleSwitch";
import OfferCard from "./OfferCard";

type Props = {};

const Offer = (props: Props) => {
  return (
    <div className="">
      <div
        className="h-[78px]
     w-full bg-[#d12627cc]"
      ></div>
      <div className="lg:flex">
        <div className="lg:w-1/4">
          {" "}
          <Sidebar />
        </div>
        <div className="mt-[45px] lg:w-3/4">
          <div className="flex items-center justify-center ">
            <p className="flex items-center justify-center rounded-[43px] bg-[#CF2927] px-16  font-bold text-white lg:h-[63px] lg:w-[400px]">
              OFFERS
            </p>
          </div>

          <div className="mt-[30px] flex items-center justify-center">
            <Toggler />
          </div>
          <div className="grid gap-5 px-[45px] md:grid-cols-2 lg:grid-cols-3">
            <OfferCard
              offerName="Price Increase Offer"
              displayName="Price Increase Offer"
              userType="All Users"
              myShare="Rs 9"
              atShare="Rs 9"
              customerPays="Rs 18"
            />
            <OfferCard
              offerName="Price Increase Offer"
              displayName="Price Increase Offer"
              userType="All Users"
              myShare="Rs 9"
              atShare="Rs 9"
              customerPays="Rs 18"
            />
            <OfferCard
              offerName="Price Increase Offer"
              displayName="Price Increase Offer"
              userType="All Users"
              myShare="Rs 9"
              atShare="Rs 9"
              customerPays="Rs 18"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
