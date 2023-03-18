import Image from "next/image";
import React from "react";
import Button from "../common/Button";
import Section from "../Section";

type Props = {};

function Membership({}: Props) {
  return (
    <div className="bg-gray-900 bg-cover py-12">
      <Section>
        <div className="grid grid-cols-2 items-center md:grid-cols-12">
          <div className="order-2 col-span-8 space-y-6 text-center text-white md:order-1 lg:gap-y-[27px] lg:text-left">
            <p className="font-[georgia] text-3xl font-semibold lg:text-[40px]">
              Your Customized Membership
            </p>
            <p className="text-sm leading-8 lg:text-[26px]">
              Daily, weekly, monthly, and yearly personalized
              <br />
              astrological guidance at your fingertips.
            </p>
            <Button
              text="Plans & Pricing"
              className="mx-auto bg-white !text-2xl !font-medium !text-black lg:mx-0"
            />
          </div>
          <div className="order-1 col-span-4">
            <Image
              src="/assets/main-logo.png"
              alt="astrosevatalk"
              width={337}
              height={348}
              loading={"lazy"}
            />
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Membership;
