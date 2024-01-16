import Section from "@/components/Section";
import Hero from "@/components/common/Hero";
import { HomeIcon } from "@heroicons/react/24/solid";
import React from "react";
import Head from 'next/head';

type Props = {};

const collaboration = (props: Props) => {
  return (
   <div>
  <Head>
        <title>
          Unlock Synergies: Explore Collaborative Opportunities
        </title>
        <meta
          name="description"
          content="Discover limitless possibilities through collaboration. Join forces with Astroseva Talk to amplify your impact. Explore synergies and create a shared future. Let's collaborate for success"
          key="desc"
        />
      </Head>
    <div className="min-h-screen bg-[url('/assets/horoscope-bg.webp')]">
      <Hero
        icon="/assets/panchang/panchang-hero.png"
        text="  Collaboration  "
        subText=""
      />
      <div className="bg-[#F5F5F5] py-1">
        <div className="mx-auto flex max-w-7xl items-center space-x-2">
          <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
          <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium text-white">
            Collaborations
          </p>
        </div>
      </div>
      <Section>
        <div className="">
          <p className="mt-[20px] text-center text-3xl font-bold">
            Welcome to the Collaborations Hub at Astroseva Talk – Where Connections Create Possibilities!{" "}
          </p>
          <p className="mt-[20px] text-[18px]">
            At Astroseva Talk, we believe in the power of collaboration to foster growth, innovation, and success. Our Collaboration page is your gateway to a world of opportunities where partnerships are not just formed but celebrated.
          </p>
        </div>

        <div className="mt-[25px] mt-[25px]">
          <p className=" text-3xl font-bold text-center">Why Collaborate with Astroseva Talk?</p>
        </div>

        <div className="mt-[25px]">
          <p className=" text-3xl font-bold">
            Connecting Minds, Creating Magic{" "}
          </p>
          <p className="mt-[10px] text-[18px]">
            At Astroseva Talk, we understand the magic that happens when minds come together. Collaborating with us means unlocking the potential for shared success. Whether you’re an individual, a business, or a creative mind, we provide a platform for meaningful connections.
          </p>
        </div>

        <div className="mt-[25px]">
          <p className=" text-3xl font-bold">
            Services Tailored to You
          </p>
          <p className="mt-[10px] text-[18px]">
            Our collaboration services are designed to cater to your unique needs. From business partnerships and joint ventures to creative collaborations and content partnerships, we offer a range of services that can be tailored to align with your goals and aspirations.
          </p>
        </div>

        <div className="mt-[25px] mb-[35px]">
          <p className=" text-3xl font-bold">
            Seamless Communication with Astroseva Talk
          </p>
          <p className="mt-[10px] text-[18px]">
            Communication is key in any collaboration. Astroseva Talk ensures that communication flows seamlessly, fostering an environment where ideas are exchanged, and goals are achieved. Our team is dedicated to keeping the channels open and transparent.
          </p>
        </div>
		
		<div className="mt-[25px] mb-[35px]">
          <p className=" text-3xl font-bold text-center">
           How to Collaborate with Astroseva Talk
          </p>
        </div>
		
		<div className="mt-[25px] mb-[35px]">
          <p className=" text-3xl font-bold">
            1. Explore Partnership Opportunities
          </p>
          <p className="mt-[10px] text-[18px]">
            Browse through our collaboration opportunities to find the perfect match for your needs. Whether you're looking for a business partner, content collaborator, or someone to join you on a creative project, Astroseva Talk has a myriad of possibilities.
          </p>
        </div>
		
		<div className="mt-[25px] mb-[35px]">
          <p className=" text-3xl font-bold">
            2. Get in Touch
          </p>
          <p className="mt-[10px] text-[18px]">
            Found a collaboration opportunity that excites you? Get in touch with us! Our team is ready to discuss your ideas, answer your queries, and guide you through the collaboration process. Your journey to a successful partnership starts with a simple conversation.
          </p>
        </div>
		<div className="mt-[25px] mb-[35px]">
          <p className=" text-3xl font-bold">
            3. Start the Collaboration Journey
          </p>
          <p className="mt-[10px] text-[18px]">
           Once {`we've`} identified the perfect collaboration fit, {`it's`} time to embark on the journey together. Astroseva Talk is committed to making every collaboration a success, ensuring that both parties benefit and thrive in the partnership.

          </p>
        </div>
		<div className="mt-[25px] mb-[35px]">
          <p className=" text-3xl font-bold text-center">
           Let's Create Something Extraordinary Together!
          </p>
        </div>
		<div className="mt-[25px] mb-[35px]">
          <p className="mt-[10px] text-[18px]">
           Astroseva Talk is more than just a service provider; {`we're`} your collaborator in shaping the future. Join us on this exciting journey where collaboration knows no bounds. Together, let's create something extraordinary.
          </p>
		  <p className="mt-[10px] text-[18px]">
           Ready to explore the possibilities? Get in touch with Astroseva Talk today, and {`let's`} start a collaboration that goes beyond expectations!
          </p>
        </div>
      </Section>
    </div>
	</div>
  );
};

export default collaboration;
