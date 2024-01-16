import React from "react";
import Head from 'next/head';
import { HomeIcon } from "@heroicons/react/24/solid";
type Props = {};

const pricingpolicy = (props: Props) => {
  return (
   <div>
  <Head>
        <title>
          Transparent and Affordable Astrology Services - Astroseva Talk 
        </title>
        <meta
          name="description"
          content="Explore our astrology services pricing. Affordable and transparent rates for insightful consultations. Unlock the secrets of your destiny with Astroseva Talk's expert guidance. Discover your path today."
          key="desc"
        />
      </Head>
    <div className="bg-[url('/assets/horoscope-bg.webp')]">
      <div className="bg-[#F5F5F5] py-1">
        <div className="mx-auto flex max-w-7xl items-center space-x-2">
          <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
          <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium text-white">
            PRICING POLICY
          </p>
        </div>
      </div>
      <div className="mx-auto mt-[25px] mb-[35px] px-4 lg:max-w-7xl">
        <p className="mt-[25px] text-center text-[30px]  font-bold">
          PRICING POLICY
        </p>
        <div className="mt-[25px]  ">
          <p className="text-left text-[22px] font-bold">Price Range</p>
          <p className="mt-[10px] text-left text-[18px] ">
            At Astrosevatalk.com we have customised pricing according to the
            services rendered by us. The details are provided to you beforehand
            according to the effort, efficiency and the output of the service.
            Typically, the range of transactions on our Android and iOS
            applications varies from INR 500 to 1500 per user per session.
          </p>
        </div>
        <div className="mt-[25px]  ">
          <p className="text-left text-[22px]   font-bold">
            Schedule of payment
          </p>
          <p className="mt-[10px] text-left text-[18px] ">
            Some of our services can be utilised for fixed durations. In such
            cases, it is clearly mentioned within the description of these
            services. The period of usage in these cases vary from 1 month to 6
            months.
          </p>
        </div>
        <div className="mt-[25px]  ">
          <p className="text-left text-[22px]   font-bold">Price Matching</p>
          <p className="mt-[10px] text-left text-[18px] ">
            At Astrotalk.com we are committed to offering you the best possible
            prices. We will be glad to meet our {`competitor's `}pricing if you
            ever find a service that we offer, in the similar interest and
            providing same professionalism and features, available from a
            similar service provider.
          </p>
          <p className="mt-[10px] text-left text-[18px] ">
            Our prices do not vary according to the market needs, competitor
            pricing etc.
          </p>
        </div>
        <div className="mt-[25px]  ">
          <p className="text-left text-[22px]   font-bold">Sale Adjustment</p>
          <p className="mt-[10px] text-left text-[18px] ">
            If a service that you have purchased is reduced in price within one
            weeks of your booking date, we will not be able to adjust the sale
            price for you. Please note that we cannot make sale adjustment. If
            you have booked a slot for a date, generally, we cannot reschedule
            the slot to another date. This will result in the cancellation of
            the booking/order(s). Please refer cancellation policies for more
            details.
          </p>
        </div>
        <div className="mt-[25px]  ">
          <p className="text-left text-[22px]   font-bold">Pricing Errors</p>
          <p className="mt-[10px] text-left text-[18px] ">
            We work hard to ensure the accuracy of pricing. Despite our efforts,
            pricing errors may still occur. If a service’s price is higher than
            the price displayed, we will cancel your booking and notify you of
            the cancellation.
          </p>
          <p className="mt-[10px] text-left text-[18px] ">
            Our service is offered for sale by Astrotalk Services Private
            Limited (Formerly V Business It consultant services) for your
            personal needs. Therefore, we reserve the right to refuse to sell to
            any person whom we believe may be misusing the service.
          </p>
          <p className="mt-[10px] text-left text-[18px] ">
            Please feel free to reach us at support@astrosevatalk.com
          </p>
        </div>
      </div>
    </div>
	</div>
  );
};

export default pricingpolicy;
