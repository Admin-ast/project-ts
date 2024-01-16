import Section from "@/components/Section";
import Hero from "@/components/common/Hero";
import { HomeIcon } from "@heroicons/react/24/solid";
import Head from 'next/head';
import React from "react";


type Props = {};

const astrotalktv = (props: Props) => {
  return (
   <div>
  <Head>
        <title>
          Astroseva Talk TV: Enlightening Conversations on Astrology and Spiritual Insights
        </title>
        <meta
          name="description"
          content="Dive into a world of online astrology prediction and spiritual revelations on Astroseva Talk TV. Join enlightening conversations with experts, explore astrology insights, and elevate your spiritual journey"
          key="desc"
        />
      </Head>
    <div className="min-h-screen bg-[url('/assets/horoscope-bg.webp')]">
      <Hero
        icon="/assets/panchang/panchang-hero.png"
        text="  Astroseva Talk TV    "
        subText=""
      />
      <div className="bg-[#F5F5F5] py-1">
        <div className="mx-auto flex max-w-7xl items-center space-x-2">
          <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
          <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium text-white">
            Astroseva Talk TV 
          </p>
        </div>
      </div>
      <Section>
        <div className="">
          <p className="mt-[20px] text-center text-3xl font-bold">
           Welcome to Astroseva Talk TV – Your Gateway to Enlightening Conversations!{" "}
          </p>
          <p className="mt-[20px] text-[18px]">
           At Astroseva Talk TV, we bring you a unique blend of celestial insights, engaging conversations, and a touch of magic, all in one place. Our platform is designed to provide you with a seamless and accessible way to explore the wonders of astrology, spirituality, and self-discovery.
          </p>
        </div>

        <div className="mt-[25px] mb-[25px]">
          <p className=" text-3xl font-bold text-center">What Sets Astroseva Talk TV Apart?</p>
        </div>

        <div className="mt-[25px]">
          <p className=" text-[20px] font-bold text-center">
		  Enlightening Conversations
          </p>
          <p className="mt-[10px] text-[18px]">
		  Join us for thought-provoking discussions led by experts in astrology, spirituality, and personal development. Our talk shows cover a range of topics, from horoscope readings to meditation techniques, ensuring there's something for everyone.
          </p>
        </div>

        <div className="mt-[25px]">
          <p className=" text-[20px] font-bold text-center">
		  Live Astrology Sessions
          </p>
          <p className="mt-[10px] text-[18px]">
		  Connect with our skilled astrologers in real-time. Get personalized insights into your astrological chart, discover your strengths, and navigate life's challenges with confidence.
          </p>
        </div>

        <div className="mt-[25px]">
          <p className=" text-[20px] font-bold text-center">
		  User-Friendly Interface
          </p>
          <p className="mt-[10px] text-[18px]">
		  We believe in making astrology and spiritual wisdom accessible to all. Our user-friendly interface ensures that you can easily navigate and enjoy the content that resonates with you.
          </p>
        </div>
		<div className="mt-[25px]">
          <p className=" text-[20px] font-bold text-center">
		  Exclusive Content
          </p>
          <p className="mt-[10px] text-[18px]">
		  Astroseva Talk TV is your exclusive source for content you won't find elsewhere. From interviews with renowned astrologers to in-depth explorations of celestial events, we strive to bring you content that inspires and uplifts you.
          </p>
        </div>
		<div className="mt-[25px]">
          <p className=" text-[20px] font-bold text-center">
		  How Astroseva Talk TV Works
          </p>
          <p className="mt-[10px] text-[18px]">
		  Browse Shows: Explore a diverse range of shows, each offering a unique perspective on astrology and spirituality. From daily horoscopes to weekly discussions on cosmic events, our programming caters to every curiosity.
          </p>
		  <p className="mt-[10px] text-[18px]">
		  Connect with Astrologers: Have burning questions about your future, love life, or career? Our live chat feature allows you to connect with experienced astrologers who can provide personalized insights and guidance.
          </p>
		  <p className="mt-[10px] text-[18px]">
		  On-Demand Content: Can't catch a live show? No worries! Enjoy the flexibility of on-demand content, allowing you to watch or listen to it at your convenience.
          </p>
        </div>
		<div className="mt-[25px] mb-[35px]">
          <p className=" text-[20px] font-bold text-center">
		  About Astroseva Talk
          </p>
          <p className="mt-[10px] text-[18px]">
		  Powered by Astroseva Talk, a trusted name in astrology services, Astroseva Talk TV is an extension of our commitment to providing valuable insights and guidance to individuals seeking a deeper understanding of themselves and the cosmos.
          </p>
		  <p className="mt-[10px] text-[18px]">
		  Join Us on Astroseva Talk TV – Where Stars Align and Conversations Spark Enlightenment!
          </p>
        </div>
      </Section>
    </div>
	</div>
  );
};

export default astrotalktv;
