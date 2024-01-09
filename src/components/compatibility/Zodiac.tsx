import Image from "next/image";
import React from "react";
import Section from "../Section";
import Link from "next/link";

type Props = {};

const Zodiac = (props: Props) => {
  return (
    <>
      <div className="bg-white py-8 shadow-xl lg:py-[51px]">
        <Section>
          <div className="">
            <p className="pb-8 text-center text-2xl font-semibold md:text-[40px]">
              Personality Traits and More
            </p>
            <div>
              <p className="text-[32px]">Zodiac Man</p>
              <div className="flex flex-col gap-6 md:flex-row">
                <div className="flex h-[272px] items-center justify-center rounded-xl  md:w-2/4">
                  <Link href="/compatibility/zodiacMan">
                  <Image
                    src={"/assets/compatibility/men.png"}
                    alt={"men"}
                    width={277}
                    height={302}
                    loading={"lazy"}
                    className="h-full object-contain"
                  />
                  </Link>
                </div>
                <div className="flex w-full flex-col justify-between">
                  <p className="text-justify">
                    When trying to understand that female-identified person in
                    your life, their zodiac sign is the door into their personal
                    style, as well as what makes them tick. This in-depth
                    horoscope guide about the zodiac woman in your life has
                    everything you need to know from sex, career, home life,
                    gift ideas, and love compatibility.When trying to understand
                    that female-identified person in your life, their zodiac
                    sign is the door into their personal style, as well as what
                    makes them tick. This in-depth horoscope guide about the
                    zodiac woman in your life has everything you need to know
                    from sex, career, home life, gift ideas, and love
                    compatibility.When trying to understand that
                    female-identified person in your life, their zodiac sign is
                    the door into their personal style, as well as what makes
                    them tick. This in-depth horoscope guide about the zodiac
                    woman in your life has everything you need to know from sex,
                    career, home life, gift ideas, and love compatibility.
                  </p>

                  <Link
                    className="mt-4 font-semibold md:mt-0"
                    href={"/compatibility/zodiacMan"}
                  >
                    CONTINUE READING
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>
      <div className="py-8 lg:py-[51px]">
        <Section>
          <div>
            <p className="text-[32px]">Zodiac Women</p>
            <div className="flex flex-col gap-6 md:flex-row">
              <div className="flex h-[272px] items-center  justify-center rounded-xl  md:w-2/4">
               <Link href="/compatibility/zodiacWomen">
               <Image
                  src={"/assets/compatibility/women.png"}
                  alt={"men"}
                  width={244}
                  height={14}
                  loading={"lazy"}
                  className="h-full object-contain"
                /></Link>
              </div>
              <div className="flex w-full flex-col justify-between">
                <p className="text-justify">
                  When trying to understand that Male-identified person in your
                  life, their zodiac sign is the door into their personal style,
                  as well as what makes them tick. This in-depth horoscope guide
                  about the zodiac woman in your life has everything you need to
                  know from sex, career, home life, gift ideas, and love
                  compatibility. When trying to understand that Male-identified
                  person in your life, their zodiac sign is the door into their
                  personal style, as well as what makes them tick. This in-depth
                  horoscope guide about the zodiac woman in your life has
                  everything you need to know from sex, career, home life, gift
                  ideas, and love compatibility.When trying to understand that
                  Male-identified person in your life, their zodiac sign is the
                  door into their personal style, as well as what makes them
                  tick. This in-depth horoscope guide about the zodiac woman in
                  your life has everything you need to know from sex, career,
                  home life, gift ideas, and love compatibility.
                </p>
                <Link
                  className="mt-4 font-semibold md:mt-0"
                  href={"/compatibility/zodiacWomen"}
                >
                  CONTINUE READING
                </Link>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
};

export default Zodiac;
