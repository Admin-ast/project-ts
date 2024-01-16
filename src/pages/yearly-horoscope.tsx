import Section from "@/components/Section";
import Hero from "@/components/common/Hero";
import { HomeIcon } from "@heroicons/react/24/solid";
import React from "react";
import Head from 'next/head';

type Props = {};

const yearlyhoroscope = (props: Props) => {
  return (
   <div>
  <Head>
        <title>
          Free 2024 yearly horoscope by best astrologers | Astroseva Talk 
        </title>
        <meta
          name="description"
          content="Explore your yearly horoscope by date of birth now! Consult with the best astrologers to know the astrological insights of your horoscope 2024 for free at Astroseva Talk"
          key="desc"
        />
      </Head>
    <div className="min-h-screen bg-[url('/assets/horoscope-bg.webp')]">
      <Hero
        icon="/assets/panchang/panchang-hero.png"
        text="  YEARLY HOROSCOPE    "
        subText=""
      />
      <div className="bg-[#F5F5F5] py-1">
        <div className="mx-auto flex max-w-7xl items-center space-x-2">
          <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
          <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium text-white">
            YEARLY HOROSCOPE 
          </p>
        </div>
      </div>
      <Section>
        <div className="">
          <p className="mt-[20px] text-center text-3xl font-bold">
            YEARLY HOROSCOPE {" "}
          </p>
          <p className="mt-[20px] text-[18px]">
            Welcome to a celestial sanctuary where the stars unveil secrets, and the planets narrate stories of destiny. Astroseva Talk is not just a platform; it's your cosmic companion, guiding you through the intricate tapestry of the universe. Dive into the depths of our Yearly Horoscope, a celestial roadmap tailored to illuminate the chapters of your journey through the cosmos.
          </p>
        </div>

        <div className="mt-[25px]">
          <p className=" text-3xl font-bold">Astroseva {`Talk's`} Commitment to Precision</p>
          <p className="mt-[10px] text-[18px]">
           At Astroseva Talk, we pride ourselves on delivering astrological insights with precision and authenticity. Our team of seasoned astrologers, fueled by a passion for celestial exploration, meticulously crafts the Yearly Horoscope to provide you with a roadmap for the unfolding chapters of your life. We delve into the unique alignments of the planets, interpreting their influence on each zodiac sign with unparalleled accuracy.
          </p>
        </div>

        <div className="mt-[25px]">
          <p className=" text-3xl font-bold">
            Navigating the Cosmic Currents{" "}
          </p>
          <p className="mt-[10px] text-[18px]">
            Lifes journey is akin to navigating cosmic currents, and our Yearly Horoscope acts as your guiding star. We dissect the positions of celestial bodies, unveiling the potential twists and turns that may shape your destiny. Whether you seek clarity on love, career, or personal growth, Astroseva {`Talk's`} Yearly Horoscope is your compass, helping you sail through the cosmic waves with confidence.
          </p>
        </div>

        <div className="mt-[25px]">
          <p className=" text-3xl font-bold">
            Personalized Astrological Guidance{" "}
          </p>
          <p className="mt-[10px] text-[18px]">
            What sets Astroseva Talk apart is our commitment to providing personalized astrological guidance. Your journey through the stars is as unique as you are, and our Yearly Horoscope is tailored to resonate with your individuality. Discover the nuances that make you, you, and uncover the cosmic energies that influence your path in the coming year.
          </p>
        </div>

        <div className="mt-[25px] ">
          <p className=" text-3xl font-bold">
            Love, Relationships, and Celestial Harmony
          </p>
          <p className="mt-[10px] text-[18px]">
            In matters of the heart, our Yearly Horoscope offers profound insights into the celestial dance of love. Whether you're seeking a soulmate, navigating the complexities of a relationship, or embracing self-love, our astrological analysis provides clarity on the romantic chapters awaiting you in the cosmic storybook of life.
          </p>
        </div>
		<div className="mt-[25px] ">
          <p className=" text-3xl font-bold">
            Career Constellations and Professional Prowess
          </p>
          <p className="mt-[10px] text-[18px]">
           Your professional journey is written in the stars, and Astroseva Talk's Yearly Horoscope deciphers the constellations of career possibilities. Uncover the opportunities, challenges, and moments of professional triumph that the cosmos has inscribed in your celestial blueprint. Empower yourself with astrological foresight and make informed decisions on your career trajectory.
          </p>
        </div>
		<div className="mt-[25px] ">
          <p className=" text-3xl font-bold">
           Financial Fortunes in the Cosmic Ledger
          </p>
          <p className="mt-[10px] text-[18px]">
           Prosperity is a cosmic currency, and our Yearly Horoscope acts as your financial almanac. Explore the financial constellations that govern your monetary ventures, guiding you toward wealth-building opportunities and helping you navigate economic challenges. Let the cosmic forces align in your favor as you embark on a journey toward financial fulfillment.
          </p>
        </div>
		<div className="mt-[25px] ">
          <p className=" text-3xl font-bold">
           Wellness Wisdom from the Cosmic Apothecary
          </p>
          <p className="mt-[10px] text-[18px]">
           The alignment of planets not only influences your external journey but also shapes the contours of your well-being. Astroseva Talk's Yearly Horoscope delves into the cosmic apothecary, offering insights into health and wellness. Discover the celestial remedies that promote physical vitality, mental clarity, and overall balance in the cosmic symphony of life.
          </p>
        </div>
		<div className="mt-[25px] ">
          <p className=" text-3xl font-bold">
          Astroseva Talk Community: Where Stars Align
          </p>
          <p className="mt-[10px] text-[18px]">
           Your journey through the Yearly Horoscope is not solitary but a shared odyssey within the Astroseva Talk community. Connect with fellow cosmic travelers, share insights, and embark on discussions that enrich your understanding of the celestial forces at play. The Astroseva Talk community is a cosmic hub where stars align, fostering a shared exploration of the mysteries the universe unfolds.
          </p>
        </div>
		<div className="mt-[25px] ">
          <p className=" text-3xl font-bold">
          Live Consultations with Expert Astrologers
          </p>
          <p className="mt-[10px] text-[18px]">
           Astroseva Talk goes beyond the written word, offering you the opportunity for live consultations with expert astrologers. Dive deep into your Yearly Horoscope with personalized sessions, where our seasoned astrologers provide guidance, answer your queries, and decode the intricate messages written in the cosmic script of your life.
          </p>
        </div>
		<div className="mt-[25px] mb-[35px] ">
          <p className=" text-3xl font-bold">
          Unlock Your Cosmic Potential
          </p>
          <p className="mt-[10px] text-[18px]">
           As you peruse the pages of Astroseva Talk's Yearly Horoscope, remember that you hold the key to unlocking your cosmic potential. The stars may guide, but it is your choices, actions, and aspirations that shape the narrative of your celestial journey. Embrace the wisdom, navigate the constellations, and step boldly into the cosmic dance that awaits in the coming year.
          </p>
		  <p className="mt-[10px] text-[18px]">
           In the tapestry of the cosmos, Astroseva Talk is your guiding star, illuminating the path to self-discovery, growth, and fulfillment. May your journey through the Yearly Horoscope be a celestial odyssey that empowers, inspires, and unveils the extraordinary possibilities inscribed in the cosmic scrolls of your destiny
          </p>
        </div>
      </Section>
    </div>
	</div>
  );
};

export default yearlyhoroscope;
