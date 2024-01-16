import Section from "@/components/Section";
import Hero from "@/components/common/Hero";
import { HomeIcon } from "@heroicons/react/24/solid";
import React from "react";
import Head from 'next/head';

type Props = {};

const weeklyhoroscope = (props: Props) => {
  return (
   <div>
  <Head>
        <title>
          Monday to Saturday: Get weekly horoscope for all zodiac sign 2024 | Astroseva Talk 
        </title>
        <meta
          name="description"
          content="Explore your weekly horoscope now! Consult with the best astrologers and know the accurate insights of your Monday to Saturday horoscope by date of birth for free at Astroseva Talk"
          key="desc"
        />
      </Head>
    <div className="min-h-screen bg-[url('/assets/horoscope-bg.webp')]">
      <Hero
        icon="/assets/panchang/panchang-hero.png"
        text="  WEEKLY HOROSCOPE   "
        subText=""
      />
      <div className="bg-[#F5F5F5] py-1">
        <div className="mx-auto flex max-w-7xl items-center space-x-2">
          <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
          <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium text-white">
           WEEKLY HOROSCOPE 
          </p>
        </div>
      </div>
      <Section>
        <div className="">
          <p className="mt-[20px] text-center text-3xl font-bold">
            WEEKLY HOROSCOPE {" "}
          </p>
          <p className="mt-[20px] text-[18px]">
            Welcome to the cosmic realm of insights and revelations! At Astroseva Talk, we believe that the stars hold profound wisdom, guiding us through the ebb and flow of life. Our Weekly Horoscope is your celestial roadmap, providing a sneak peek into the cosmic energies shaping your week ahead.
          </p>
        </div>

        <div className="mt-[25px]">
          <p className=" text-3xl font-bold">Monday: Aries to Pisces - Tailored Forecasts for Every Sign</p>
          <p className="mt-[10px] text-[18px]">
            Kickstart your week with personalized forecasts for each zodiac sign, from adventurous Aries to empathetic Pisces. Our expert astrologers delve into the unique planetary movements, aligning the cosmic dots to offer tailored insights. Whether you're seeking career clarity, love guidance, or simply a cosmic nudge, our Weekly Horoscope has you covered.
          </p>
        </div>

        <div className="mt-[25px]">
          <p className=" text-3xl font-bold">
            Tuesday: Planetary Play-by-Play - Decoding Celestial Dynamics
          </p>
          <p className="mt-[10px] text-[18px]">
            Ever wondered about the dance of planets and how it influences your life? Tuesdays at Astroseva Talk are dedicated to decoding celestial dynamics. Explore the intricate interplay of planetary energies, from the bold movements of Mars to the subtle nuances of Venus. Gain a deeper understanding of the cosmic forces shaping your destiny.
          </p>
        </div>

        <div className="mt-[25px]">
          <p className=" text-3xl font-bold">
            Wednesday: Lunar Whispers - Moon Sign Specials
          </p>
          <p className="mt-[10px] text-[18px]">
            Wednesdays are all about the {`moon's`} magnetic pull and its impact on your emotions and intuition. Dive into our Lunar Whispers as we explore moon sign specials, unraveling the emotional tapestry for each zodiac sign. Discover how the {`moon's`} phases influence your mood, relationships, and decision-making throughout the week.
          </p>
        </div>

        <div className="mt-[25px]">
          <p className=" text-3xl font-bold">
            Thursday: Tarot Tales - Unveiling Mystical Insights
          </p>
          <p className="mt-[10px] text-[18px]">
            Step into the enchanting world of Tarot on Thursdays. Our expert readers draw the cards to unveil mystical insights, offering guidance and foresight. Whether you're navigating challenges or seeking clarity on a specific question, Tarot Tales provides a divinely inspired perspective to illuminate your path.
          </p>
          <p className="mt-[15px] mb-[15px] text-[18px] font-bold">
           Friday: Cosmic Connections - Astrology and Your Relationships
          </p>
          <p className="mt-[10px] text-[18px]">
            As the week unfolds, Fridays bring a focus on cosmic connections and the intricate dance of relationships. Explore the dynamics between different zodiac signs and gain valuable insights into your interactions with others. Whether it's romantic entanglements or friendships, Astrology and Your Relationships delves into the cosmic synergy at play.
          </p>
          <p className="mt-[15px] mb-[15px] text-[18px] font-bold">
            Saturday: Self-Reflection Sessions - Navigating Personal Growth
          </p>
          <p className="mt-[10px] text-[18px]">
            Saturdays are dedicated to self-reflection and personal growth. Our astrologers guide you through introspective sessions, helping you understand your strengths, challenges, and opportunities for growth. Unearth the hidden facets of your personality and embark on a journey of self-discovery.
          </p>
        </div>
		<div className="mt-[25px]">
          <p className=" text-3xl font-bold">
           Sunday: Weekly Roundup - Celestial Highlights and Farewell to the Week
          </p>
          <p className="mt-[10px] text-[18px]">
           Wrap up your week with our Weekly Roundup, where we highlight celestial events, planetary shifts, and key takeaways. Bid farewell to the week that was and prepare for the cosmic adventures awaiting you in the week ahead. It's your cosmic digest, summarizing the celestial narrative that unfolded over the past seven days.
          </p>
        </div>
		<div className="mt-[25px] mb-[35px]">
          <p className=" text-3xl font-bold">
           Astroseva Talk - Your Celestial Companion
          </p>
          <p className="mt-[10px] text-[18px]">
           At Astroseva Talk, we go beyond traditional horoscopes, offering a holistic approach to astrology. Our Weekly Horoscope is a beacon of cosmic wisdom, providing you with the tools to navigate life's journey with confidence and clarity. Whether you're a seasoned astrology enthusiast or a curious newcomer, join us on this celestial voyage. Embrace the magic of the stars, unlock the mysteries of your week, and let the cosmic energies guide you to new horizons. Welcome to Astroseva Talk – where the stars align to illuminate your path.
          </p>
        </div>
      </Section>
    </div>
	</div>
  );
};

export default weeklyhoroscope;
