import Section from "@/components/Section";
import Hero from "@/components/common/Hero";
import { HomeIcon } from "@heroicons/react/24/solid";
import React from "react";

type Props = {};

const babynamesuggestions = (props: Props) => {
  return (
    <div className="min-h-screen bg-[url('/assets/horoscope-bg.webp')]">
      <Hero
        icon="/assets/panchang/panchang-hero.png"
        text="  Baby name suggestions "
        subText=""
      />
      <div className="bg-[#F5F5F5] py-1">
        <div className="mx-auto flex max-w-7xl items-center space-x-2">
          <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
          <p className="bg-[#C6A65A] p-1 px-4 text-[10px] font-medium">
            Baby name suggestions
          </p>
        </div>
      </div>
      <Section>
        <div className="">
          <p className="mt-[20px] text-center text-3xl font-bold">
            Baby name suggestions{" "}
          </p>
          <p className="mt-[20px] text-[18px]">
            Are you going through that confusing yet the joyful phase of your
            life where you have to find the best name for your baby? If yes then
            we can understand your state of happiness and the dilemma at the
            same time. Selecting the ideal and the best baby name is the
            significant decision for the parents since it impacts the life of
            their kids being one of the key factors. Astrology offers a unique
            and thought-provoking approach to finding a name that resonates with
            your child's astrological traits and potential. Whether you're drawn
            to names that reflect strength, empathy, intelligence, or
            creativity, there are celestial-inspired options for every zodiac
            sign.{" "}
          </p>
          <p className="mt-[10px] text-[18px]">
            At Astrosevatalk we are committed to help and guide all the parents
            in finding the best names for their baby under the guidance of
            astrology and the numerology. Since both the vedic astrology and the
            numerology have the deep influence on the name of the natives. In
            fact in most cases the name of the native becomes the key factor in
            making the life long prediction for the native. This is why the name
            is always the life deciding factor in the vedic astrology and the
            numerology belief.
          </p>
        </div>
        <div className="mt-[25px]">
          <p className=" text-3xl font-bold">
            Significance of Vedic Astrology/Numerology in Naming the Child
          </p>
          <p className="mt-[10px] text-[18px]">
            Vedic astrology has been the potent and the well known belief system
            in the Hinduism to name the child. In the vedic astrology an
            astrologer basically considers the birth details of the native and
            on the basis of same suggests the ideal name for the child. It
            includes the planatary position, the Nakshatras and the other
            aspects of the celestial bodies. With the zodiac sign an astrologer
            can figure out the ideal name of the baby such as by predicting the
            first letter of the name.
          </p>
          <p className="mt-[10px] text-[18px]">
            On the other hand numerology is all about the numbers that ascertain
            the ideal name for the baby by the calculation of numbers. It also
            takes the birth details of native into the consideration to
            calculate the ideal name of the native. The numerological
            significance of the name by calculating the {`name's`} numerology to
            understand its potential impact on your child's life and
            personality.
          </p>
        </div>

        <div className="mt-[25px]">
          <p className=" text-3xl font-bold">
            How Does Numerology Work in Finding the Ideal Name ?
          </p>
          <p className="mt-[10px] text-[18px]">
            The whole concept of the Numerology is based upon the numbers and it
            takes the birth path number as its foundation. The birth parth
            number is determined after analyzing the birth details of the
            natives. On the basis of the birth path number an numerologist can
            figure out the several aspects about the personality of the native.
            It includes the character of the native, personality traits,
            strength, weaknesses, suitable profession etc. Subsequently the
            numerologist convert the birth path numbers into the form of the
            letters and those letters are what eventually determine the ideal
            name for the native. There are the numbers in the numerology from
            the 1 to 9 and all these numbers indicate the specific letters
            within themselves. It is upto the understanding of the numerologist
            to associate the numbers with the ideal name for the child.
          </p>
        </div>

        <div className="mt-[25px] mb-[35px]">
          <p className=" text-3xl font-bold">
            Chat with Astrologers at Astrosevatalk to Find the Perfect Name for
            Your Child
          </p>
          <p className="mt-[10px] text-[18px]">
            The best way to get the ideal name for your child is to connect with
            the astrologers at the Astrosevatalk. We have the finest vedic
            astrologers and the numerologist who have their expertise in finding
            the ideal names for the kids. They assess the birth details of the
            natives and then finally make their recommendation for the ideal
            name under the guidance of vedic astrology and the numerology.
            Getting the ideal name for your child from the astrologers at
            Astrosevatalk can be one of the most significant decision for the
            life of your child. Our expert astrologers unveil the most
            auspicious name for your child to bless him/her in the long
            prospects of life from all the angels. So make no delay and visit
            Astrosevatalk today to get the astrologically right and blessed name
            for your child today.
          </p>
        </div>
      </Section>
    </div>
  );
};

export default babynamesuggestions;
