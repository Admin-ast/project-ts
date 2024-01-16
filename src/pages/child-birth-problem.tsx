import Section from "@/components/Section";
import Hero from "@/components/common/Hero";
import { HomeIcon } from "@heroicons/react/24/solid";
import Head from 'next/head';
import React from "react";

type Props = {};

const childastrology = (props: Props) => {
  return (
   <div>
  <Head>
        <title>
          Get Expert advice on astrology about childbirth prediction |  Astroseva Talk
        </title>
        <meta
          name="description"
          content="Navigate childbirth challenges with precision through our trusted astrology about child birth prediction. Astroseva Talk offers expert solutions for a smooth and positive childbirth experience"
          key="desc"
        />
      </Head>
    <div className="min-h-screen bg-[url('/assets/horoscope-bg.webp')]">
      <Hero
        icon="/assets/panchang/panchang-hero.png"
        text="Child Birth Problem "
        subText=""
      />
      <div className="bg-[#F5F5F5] py-1">
        <div className="mx-auto flex max-w-7xl items-center space-x-2">
          <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
          <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium text-white">
            Child Birth Problem
          </p>
        </div>
      </div>
      <Section>
        <div className="">
          <p className="mt-[20px] text-center text-3xl font-bold">
            Welcome to Astroseva Talk – Your Trusted Partner for Resolving Childbirth Problems Through Astrology{" "}
          </p>
          <p className="mt-[10px] text-[18px]">
            Are you facing challenges on the path to parenthood? At Astroseva Talk, we understand the emotional journey that comes with fertility concerns and childbirth issues. Our dedicated team of astrologers is here to provide compassionate guidance and insights to help you overcome obstacles and fulfill your dream of welcoming a child into your life.{" "}
          </p>
        </div>
        <div className="mt-[25px] mb-[25px]">
          <p className=" text-3xl font-bold text-center">How Astrology Can Help </p>
        </div>

        <div className="mt-[25px]">
          <p className="mt-[10px] text-[18px]">
           Astrology, a time-honored practice, offers a unique perspective on childbirth issues. Our expert astrologers at Astroseva Talk analyze the celestial influences on your life, providing personalized solutions tailored to your specific situation. By understanding the planetary alignments in your birth chart, we can identify potential challenges and offer remedies to enhance your chances of conceiving and having a healthy pregnancy.
          </p>
        </div>
		
		<div className="mt-[25px] mb-[25px]">
          <p className=" text-3xl font-bold text-center">Our Approach </p>
        </div>

        <div className="mt-[25px]">
          <p className="mt-[10px] text-[18px]">
            Personalized Birth Chart Analysis: Our astrologers conduct a detailed analysis of your birth chart to gain insights into your astrological profile and identify any astrological factors that may be affecting your ability to conceive.
          </p>
        </div>
		<div className="mt-[25px]">
          <p className="mt-[10px] text-[18px]">
            Guidance on Favorable Timings: Astrology emphasizes the importance of timing. We guide you during auspicious periods for conception, ensuring that you align your efforts with the cosmic energies conducive to fertility.
          </p>
        </div>

        <div className="mt-[25px] mb-[25px]">
          <p className=" text-3xl font-bold text-center">Remedies and Solutions</p>
        </div>
        <div className="mt-[25px]">
          <p className="mt-[10px] text-[18px]">
            Based on astrological insights, our experts suggest practical and effective remedies, including gemstone recommendations, rituals, and other personalized practices aimed at enhancing fertility and ensuring a smooth pregnancy journey.
          </p>
        </div>
        <div className="mt-[25px] mb-[25px]">
          <p className=" text-3xl font-bold text-center">Why Choose Astroseva Talk</p>
        </div>
       
        <div className="mt-[25px]">
          <p className=" text-3xl font-bold">
           Experienced Astrologers
          </p>
          <p className="mt-[10px] text-[18px]">
            Our team comprises experienced and compassionate astrologers who have successfully assisted individuals and couples in overcoming childbirth challenges.
          </p>
        </div>
        <div className="mt-[25px]">
          <p className=" text-3xl font-bold">
            Confidential and Supportive
          </p>
          <p className="mt-[10px] text-[18px]">
           We understand the sensitivity of the issues you may be facing. Rest assured, all interactions with our astrologers are confidential, and we provide a supportive environment to discuss your concerns openly.
          </p>
        </div>

        <div className="mt-[25px]">
          <p className=" text-3xl font-bold">
            Affordable Services
          </p>
          <p className="mt-[10px] text-[18px]">
            Astroseva Talk is committed to making astrological guidance accessible to everyone. We offer affordable services without compromising on the quality of insights and support.
          </p>
        </div>
		 <div className="mt-[25px] mb-[25px]">
          <p className=" text-3xl font-bold text-center">Take the First Step Toward Parenthood</p>
        </div>
        <div className="mt-[25px] mb-[25px]">
          <p className="mt-[10px] text-[18px]">
            Embark on your journey toward parenthood with Astroseva Talk by your side. Our astrologers are ready to provide the guidance and support you need to navigate the challenges of childbirth. Contact us today to schedule a consultation and discover the astrological insights that can shape your path to a joyous and fulfilling family life. Your resolution to childbirth problems begins here.
          </p>
        </div>
      </Section>
    </div>
	</div>
  );
};

export default childastrology;
