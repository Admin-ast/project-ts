import Section from "@/components/Section";
import Image from "next/image";
import React from "react";
import PlanForm from "./PlanForm";

type Props = {};

const Astrsevatalk = (props: Props) => {
  return (
    <div className='bg-[url("/assets/bg-inner-page.webp")] bg-cover'>
      {/* ------------------------------------------- 1st box---------------------------------------------------------------------------------------  */}

      <Section>
        <div className="justify-between sm:grid-cols-1  lg:flex ">
          <div className="flex    justify-center rounded-[20px] bg-[#D9D9D90F]  ">
            <Image
              className="items-center"
              src="/assets/main-logo.svg"
              alt="logo"
              width={300}
              height={38}
            />
          </div>

          <div className="mt-[50px]">
            <p className="text-center font-[Georgia]   font-bold text-white md:text-3xl  lg:text-[40px]">
              AstroSevaTalk + Subscription{" "}
            </p>
            <div className="  mt-[20px] text-justify text-white">
              <span className="text-[22px]">
                Starting at $7.45/month, your membership includes:
              </span>
              <li>
                Daily Personal Horoscopes based on the sky today + your unique
                birth chart
              </li>
              <li>Birth Chart + Analysis ($25 value)</li>
              <li>
                30-Minute Live Birth Chart Reading with an Astrologer ($100
                value, Annual Plans only)
              </li>

              <li>Astrology Calendar synced to your phone</li>

              <li>2023 Premium Horoscope ($25 yearly value)</li>
              <li>Full Moon Reading every Month ($15 monthly value)</li>
              <li>Premium Weekly Horoscopes</li>
              <li>
                Major astrological events for each day, down to the hour and
                minute
              </li>
            </div>
          </div>
        </div>

        {/* ----------------------------------------------plan Form---------------------------------------------------------------------------------------------------- */}

        <div className="">
          <PlanForm />
        </div>

        <div className="">
          <div className="">
            <p className="mt-[50px] text-center font-[Georgia] text-[32px] font-bold text-white">
              AstroSevaTalk + Subscription Includes
            </p>
          </div>
          <div className=" mt-[50px] grid gap-[40px] sm:grid-cols-1  md:grid-cols-1 lg:grid-cols-3 ">
            <div className=" rounded-[20px]  bg-white">
              <Image
                src="/assets/astrosevatalk+/astrosevatalk+1.png"
                alt="subscription"
                width={260}
                height={20}
                className="mx-auto mt-[20px]"
              />
              <p className="mt-[30px] text-center text-[22px] font-bold">
                Detailed Birth Chart
              </p>
            </div>
            <div className="h-[337px] rounded-[20px] bg-white">
              <Image
                src="/assets/astrosevatalk+/astrosevatalk+2.png"
                alt="subscription"
                width={193}
                height={10}
                className="mx-auto mt-[20px]"
              />
              <p className="mt-[30px] text-center text-[22px] font-bold">
                Personalized Daily Horoscope
              </p>
            </div>
            <div className="h-[337px] rounded-[20px] bg-white">
              <Image
                src="/assets/astrosevatalk+/astrosevatalk+3.png"
                alt="subscription"
                width={193}
                height={10}
                className="mx-auto mt-[20px]"
              />
              <p className="mt-[30px] text-center text-[22px] font-bold">
                Full - Moon Reading
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Astrsevatalk;
