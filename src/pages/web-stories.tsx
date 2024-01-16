import Section from "@/components/Section";
import Hero from "@/components/common/Hero";
import { HomeIcon } from "@heroicons/react/24/solid";
import React from "react";
import Head from 'next/head';

type Props = {};

const webstories = (props: Props) => {
  return (
   <div>
  <Head>
        <title>
         Explore Engaging Astrology Web Stories at Astroseva Talk
        </title>
        <meta
          name="description"
          content="Dive into captivating astrology insights with our interactive web stories. Uncover the mysteries of the cosmos and gain profound astrological knowledge. Start your cosmic journey now with an online web story related to astrology at Asroseva Talk"
          key="desc"
        />
      </Head>
    <div className="min-h-screen bg-[url('/assets/horoscope-bg.webp')]">
      <Hero
        icon="/assets/panchang/panchang-hero.png"
        text="  Web Stories   "
        subText=""
      />
      <div className="bg-[#F5F5F5] py-1">
        <div className="mx-auto flex max-w-7xl items-center space-x-2">
          <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
          <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium text-white">
            Web Stories
          </p>
        </div>
      </div>
      <Section>
        <div className="">
          <p className="mt-[20px] text-center text-3xl font-bold">
            Welcome to Astroseva Talk's Web Stories: Your Gateway to Engaging Online Narratives{" "}
          </p>
          <p className="mt-[20px] text-[18px]">
           Are you ready to embark on a captivating journey through the world of Web Stories? At Astroseva Talk, we bring you a unique and immersive way to experience content online. Say goodbye to lengthy articles and static web pages – our Web Stories are designed to deliver information in a fun, visually appealing, and user-friendly format.
          </p>
        </div>

        <div className="mt-[25px]">
          <p className=" text-3xl font-bold text-center">What Are Web Stories?</p>
          <p className="mt-[10px] text-[18px]">
            Web Stories are bite-sized, interactive narratives that combine visuals, text, and multimedia elements to convey information more engagingly. Imagine scrolling through a seamless blend of images, videos, and text, creating an experience that's both entertaining and informative.
          </p>
        </div>

        <div className="mt-[25px]">
          <p className=" text-3xl font-bold text-center">
            Why Choose Astroseva Talk's Web Stories?{" "}
          </p>
        </div>

        <div className="mt-[25px] mb-[35px]">
          <p className=" text-3xl font-bold">
            Visual Delight
          </p>
          <p className="mt-[10px] text-[18px]">
            Immerse yourself in a visually stunning experience with our carefully curated Web Stories. We believe in the power of visuals to enhance storytelling and make information more memorable.
          </p>
          <p className="mt-[15px] mb-[15px] text-[18px] font-bold">
            User-Friendly Format
          </p>
          <p className="mt-[10px] text-[18px]">
           No more scrolling through endless paragraphs. Our Web Stories are designed to be easily digestible, allowing you to grasp information quickly and effortlessly.
          </p>
          <p className="mt-[15px] mb-[15px] text-[18px] font-bold">
            Mobile-Friendly
          </p>
          <p className="mt-[10px] text-[18px]">
            Access our Web Stories anytime, anywhere, on any device. Whether you're on your smartphone, tablet, or desktop, our stories adapt seamlessly to your screen, providing a consistent and enjoyable experience.
          </p>
		  <p className="mt-[15px] mb-[15px] text-[18px] font-bold">
            Diverse Topics
          </p>
          <p className="mt-[10px] text-[18px]">
            From tech trends and lifestyle tips to astrology insights and beyond – our Web Stories cover a wide array of topics to cater to your diverse interests.
          </p>
        </div>
		
		<div className="mt-[25px]">
          <p className=" text-3xl font-bold text-center">
            How to Access Astroseva Talk's Web Stories{" "}
          </p>
        </div>
		
		<div className="mt-[25px]">
          <p className="mt-[10px] text-[18px]">
            Visit our website at www.astrosevatalk.com.
          </p>
		  <p className="mt-[10px] text-[18px]">
            Navigate to the Web Stories section on the homepage.
          </p>
		  <p className="mt-[10px] text-[18px]">
            Choose a category that piques your interest.
          </p>
		  <p className="mt-[10px] text-[18px]">
            Dive into the story – tap, swipe, and enjoy!
          </p>
		  <p className="mt-[10px] text-[18px]">
            Stay Connected with Astroseva Talk:
          </p>
        </div>
		
		<div className="mt-[25px] mb-[35px]">
          <p className="mt-[10px] text-[18px]">
            Follow us on social media to stay updated on the latest Web Stories, exciting content, and more. We're committed to bringing you fresh, relevant, and engaging narratives that cater to your preferences.
          </p>
		  <p className="mt-[10px] text-[18px]">
            Ready to experience a new way of consuming content? Explore Astroseva Talk's Web Stories today and discover a world where information comes to life!
          </p>
        </div>
		
      </Section>
    </div>
	</div>
  );
};

export default webstories;
