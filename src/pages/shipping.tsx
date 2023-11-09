import React from "react";
import Hero from "@/components/common/Hero";
import { HomeIcon } from "@heroicons/react/24/solid";
type Props = {};

const shipingpolicy = (props: Props) => {
  return (
    <div className="bg-[url('/assets/horoscope-bg.webp')]">
      <Hero icon="" text="Shipping & Delivery Policy" subText="" />
      <div className="bg-[#F5F5F5] py-1">
        <div className="mx-auto flex max-w-7xl items-center space-x-2">
          <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
          <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium text-white">
            Shipping & Delivery Policy
          </p>
        </div>
      </div>
      <div className="mx-auto mt-[25px] mb-[35px] px-4 lg:max-w-7xl">
        <p className=" mt-[25px] text-center text-[34px] font-bold">
          Last updated on Nov 9th 2023
        </p>
        <p className=" mt-[25px] text-center text-[18px] ">
          For International buyers, orders are shipped and delivered through
          registered international courier companies and/or International speed
          post only. For domestic buyers, orders are shipped through registered
          domestic courier companies and /or speed post only. Orders are shipped
          within 14-21 days or as per the delivery date agreed at the time of
          order confirmation and delivering of the shipment subject to Courier
          Company / post office norms. V business It consultant services is not
          liable for any delay in delivery by the courier company / postal
          authorities and only guarantees to hand over the consignment to the
          courier company or postal authorities within 14-21 days from the date
          of the order and payment or as per the delivery date agreed at the
          time of order confirmation. Delivery of all orders will be to the
          address provided by the buyer. Delivery of our services will be
          confirmed on your mail ID as specified during registration. For any
          issues in utilizing our services you may contact our helpdesk on or
          support@astrosevatalk.com
        </p>
      </div>
      <div className="container"></div>
    </div>
  );
};

export default shipingpolicy;
