import Section from "@/components/Section";
import Hero from "@/components/common/Hero";
import { HomeIcon } from "@heroicons/react/24/solid";
import React from "react";

type Props = {};

const numerology = (props: Props) => {
  return (
    <div className="min-h-screen bg-[url('/assets/horoscope-bg.webp')]">
      <Hero
        icon="/assets/panchang/panchang-hero.png"
        text="  NUMEROLOGY  "
        subText=""
      />
      <div className="bg-[#F5F5F5] py-1">
        <div className="mx-auto flex max-w-7xl items-center space-x-2">
          <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
          <p className="bg-[#C6A65A] p-1 px-4 text-[10px] font-medium">
            NUMEROLOGY
          </p>
        </div>
      </div>
      <Section>
        <div className="">
          <p className="mt-[20px] text-center text-3xl font-bold">
            NUMEROLOGY{" "}
          </p>
          <p className="mt-[20px] text-[18px]">
            Numerology is the branch of astrology that deals with the numbers to
            get the insight of the {`native's`} life. It is also known as the
            science of numbers that are used to predict the future of a person.
            Numerology has a wide following practice not just in India but all
            around the world. It has been the potential source of getting into
            the depth of a {`person's'`} inner self and providing insight into
            every area of an native's life. This is what makes numerology a
            significant alternative oftoedic astrology across the world.
          </p>
          <p className="mt-[10px] text-[18px]">
            Numerology is the simple yet complex science of numbers that only
            the numerologist can understand and make future predictions for the
            native. At Astrosevatalk we provide the highly proficient
            numerologist who has extensive experience in the domain of
            numerology. Consulting with these numerologist natives can get the
            most accurate life prediction and find the solution for the various
            problems in their lives.
          </p>
        </div>

        <div className="mt-[25px]">
          <p className=" text-3xl font-bold">Glimpse of Numerology </p>
          <p className="mt-[10px] text-[18px]">
            Numerology is all about using the numbers that are associated with
            the life of natives and making future predictions for the life of
            nativess. The whole concept of Numerology is based upon interpreting
            the birth chart numbers of the natives. Using these numbers a
            numerogist can get into the entire life map of the native and
            provide accurate insight. Numerology can help in the numerous
            aspects of a native's life from understanding the personality of the
            native to making lifelong predictions. This is what makes Numerology
            a a sta raightforward yet complex scenario to interpret the science
            of numbers. As per the numerology numbers are associated with all
            the areas of our life and hold the whole secret of our destiny. A
            numerologist just needs the birth details of the native such as the
            date of birth and the timings of birth etc. Using these simple
            details the numerologist can answer all the questions related to the
            life of the native.
          </p>
        </div>

        <div className="mt-[25px]">
          <p className=" text-3xl font-bold">How Does Numerology Work? </p>
          <p className="mt-[10px] text-[18px]">
            Understanding the working concept of Numerology is although simple
            yet it may seem highly complex to understand the science of numbers.
            When a child is born the child gets born at the particular date and
            the timings. Both the date and the timings represent the particular
            set of numbers and these numbers hold the secret for the entire life
            of the native. In numerol,ogy, the sequence of numbers from 1 to 9
            is used to interpret the secret of the life of the natives.
            Numerologist generally uses these numbers by adding the specific
            numbers from the birth of the native and then making the whole
            prediction for the life. The one surprising thing about the
            numerology is that it is closely associated with the Vedic
            astrology. The numbers from 1 to 9 in the numerology represent the
            planets in specific and those planets reveal the secrets of native
            life. This is how numerology closely relates itself with numerology
            in several aspects.
          </p>
          <p className="mt-[10px] text-[18px]">
            We can understand the workings of the Numerology numbers with a
            hypothetical example. For instance, suppose an individual is born on
            25-11-95 and we need to simplify this date of birth by using the
            concept of Numerology. This can be simplified by using the following
            concept of addition.
          </p>
          <p className="mt-[10px] text-[18px]">{`Date- 2+5=7`}</p>
          <p className="mt-[10px] text-[18px]">{`Month- 1+1=2`}</p>
          <p className="mt-[10px] text-[18px]">
            {`Year- 1+9+9+8= 27 which further becomes 2+7=9 `}
          </p>
          <p className="mt-[10px] text-[18px]">
            This is how the science of numbers works by simplifying them in such
            a manner and then the numerogist interprets the secret behind these
            numbers. Furthermore the alphabets are also interpreted similarly to
            the A=1, B=2, C=3 and this sequence goes on with a similar pattern.
          </p>
        </div>

        <div className="mt-[25px]">
          <p className=" text-3xl font-bold">Vedic Astrology Vs Numerology </p>
          <p className="mt-[10px] text-[18px]">
            Well, Vedic astrology and the Numerotwo are very fferent aspects of
            astrology yet they are quite similar to each other. Vedic astrology
            is all about the secret of the celestial bodies and how an
            astrologer interprets these celestial bodies. Numerology on the
            other hand uses numbers and these numbers also ultimately represent
            the specific planets or celestial bodies. In other words, both
            astrology and Numerology has similar root in making predictions for
            the life of a nave just by using different methodology or medium.
            Vedic astrology is widely followed and popular in India and the
            subcontinent regions at a wide scale. On the other hand, numerology
            is more popular in the Western world and across the European and
            American regions.
          </p>
        </div>

        <div className="mt-[25px] mb-[35px]">
          <p className=" text-3xl font-bold">
            Chat with Expert Numerologist at Astrosevatalk{" "}
          </p>
          <p className="mt-[10px] text-[18px]">
            If you are willing to get life insight by using numerology then
            Astrosevatalk is the place for you to visit. At Astrosevatalk one
            can interact with highly proficient astrologers from the comfort of
            their home. Astrosevatalk is the most ideal place to get the most
            accurate predictions for their lives by using the magic of numbers.
            At Astrosevatalk there are highly proficient and experienced
            numerologists offering numerology life predictions to natives across
            the world. All you need to do is visit the official portal of
            Astrosevatalk and chat with the numerologist. Numerology has the
            potential to provide you the solutionss for the various aspects of
            your life whether it's your career, marriage, health finances etc.
          </p>
        </div>
      </Section>
    </div>
  );
};

export default numerology;
