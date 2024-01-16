import Section from "@/components/Section";
import Hero from "@/components/common/Hero";
import { HomeIcon } from "@heroicons/react/24/solid";
import React from "react";
import Head from 'next/head';

type Props = {};

const monthlyhoroscope = (props: Props) => {
  return (
   <div>
  <Head>
        <title>
         Get monthly horoscope for all zodiac sign by Date of Birth | Astroseva Talk 
        </title>
        <meta
          name="description"
          content=" Get into the insights of your monthly horoscope now! Consult with the top astrologers and know the exact details of your horoscope by date of birth at Astroseva Talk for free"
          key="desc"
        />
      </Head>
    <div className="min-h-screen bg-[url('/assets/horoscope-bg.webp')]">
      <Hero
        icon="/assets/panchang/panchang-hero.png"
        text="  MONTHLY HOROSCOPE    "
        subText=""
      />
      <div className="bg-[#F5F5F5] py-1">
        <div className="mx-auto flex max-w-7xl items-center space-x-2">
          <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
          <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium text-white">
            MONTHLY HOROSCOPE 
          </p>
        </div>
      </div>
      <Section>
        <div className="">
          <p className="mt-[20px] text-center text-3xl font-bold">
            MONTHLY HOROSCOPE {" "}
          </p>
          <p className="mt-[20px] text-[18px]">
            Welcome to Astroseva Talk, your celestial sanctuary where the cosmic dance unfolds through our monthly horoscopes. As the stars align, we invite you to delve into the captivating realms of astrology and discover the celestial influences shaping your destiny each month.
          </p>
        </div>

        <div className="mt-[25px]">
          <p className=" text-3xl font-bold">A Glimpse into Astrological Insight</p>
          <p className="mt-[10px] text-[18px]">
            At Astroseva Talk, we believe in providing more than just horoscopes; we offer a panoramic view of the celestial tapestry. Our expert astrologers delve into the intricate details of planetary movements, alignments, and transits to bring you nuanced insights that go beyond the ordinary.
          </p>
        </div>

        <div className="mt-[25px]">
          <p className=" text-3xl font-bold">
            Personalized Guidance for Every Zodiac Sign{" "}
          </p>
          <p className="mt-[10px] text-[18px]">
            Each month, our astrologers craft personalized horoscopes tailored to the unique energy of your zodiac sign. Whether you're an adventurous Aries, a nurturing Cancer, or a visionary Aquarius, our monthly horoscopes unravel the cosmic influences that shape your love life, career, finances, and overall well-being.
          </p>
        </div>

        <div className="mt-[25px]">
          <p className=" text-3xl font-bold">
            Navigating Life's Seasons {" "}
          </p>
          <p className="mt-[10px] text-[18px]">
            Life is a journey marked by seasons, and our monthly horoscopes act as your celestial compass, guiding you through the ebbs and flows of each month. From the fiery ambitions of Aries to the introspective moments of Pisces, we decipher the cosmic language to help you navigate life's complexities with grace and foresight.
          </p>
        </div>

        <div className="mt-[25px]">
          <p className=" text-3xl font-bold">
           Holistic Astrological Approach
          </p>
          <p className="mt-[10px] text-[18px]">
           Astroseva Talk adopts a holistic approach to astrology, recognizing the interconnectedness of celestial energies with various facets of life. Our monthly horoscopes explore not only the typical sun sign predictions but also consider the influence of moon signs, rising signs, and planetary aspects, providing you with a comprehensive understanding of your cosmic journey.
          </p>
        </div>
		<div className="mt-[25px]">
          <p className=" text-3xl font-bold">
           Beyond Predictions: Insights and Wisdom
          </p>
          <p className="mt-[10px] text-[18px]">
          We go beyond mere predictions; we offer insights and wisdom to empower you on your life's journey. Whether you seek clarity in relationships, guidance in career decisions, or simply a cosmic nudge in the right direction, our monthly horoscopes serve as your celestial companion.
		  </p>
        </div>
		<div className="mt-[25px]">
          <p className=" text-3xl font-bold">
           A User-Friendly Cosmic Portal
          </p>
          <p className="mt-[10px] text-[18px]">
          Navigating the cosmos should be as seamless as stargazing on a clear night. Astroseva Talk provides a user-friendly platform where you can easily access your monthly horoscope. Whether you prefer to read it on your desktop, tablet, or mobile device, the cosmic revelations are just a click away.
		  </p>
        </div>
		<div className="mt-[25px]">
          <p className=" text-3xl font-bold">
           Interactive Engagement
          </p>
          <p className="mt-[10px] text-[18px]">
          Astroseva Talk values the vibrant community that surrounds astrology enthusiasts. Engage with our astrologers and fellow readers through live chats, discussion forums, and interactive sessions. Share your experiences, seek advice, and become a part of a cosmic community that celebrates the wonders of the universe.
		  </p>
        </div>
		<div className="mt-[25px]">
          <p className=" text-3xl font-bold">
           Exclusive Astrological Events
          </p>
          <p className="mt-[10px] text-[18px]">
          As a part of the Astroseva Talk family, you gain access to exclusive astrological events and webinars. Dive deeper into the mystical realms of astrology with our expert panels, workshops, and interactive sessions. Stay tuned for celestial celebrations that enrich your understanding of the cosmic dance.
		  </p>
        </div><div className="mt-[25px]">
          <p className=" text-3xl font-bold">
           Your Monthly Celestial Companion
          </p>
          <p className="mt-[10px] text-[18px]">
          In a world filled with hustle and bustle, let Astroseva Talk be your monthly celestial companion. As you navigate the intricacies of life, our horoscopes offer solace, inspiration, and a cosmic perspective that transcends the ordinary. Join us on this celestial journey, and may the stars illuminate your path with wisdom and grace.
		  </p>
        </div>
		<div className="mt-[25px] mb-[35px]">
          <p className=" text-3xl font-bold">
           Stay Connected, Stay Cosmic
          </p>
          <p className="mt-[10px] text-[18px]">
          Connect with us on social media platforms to stay updated on the latest astrological insights, community discussions, and exclusive events. Follow us on Facebook, Twitter, and Instagram to be a part of our cosmic family. Your cosmic adventure awaits at Astroseva Talk – where astrology comes to life, and the stars speak to you.
		  </p>
        </div>
      </Section>
    </div>
	</div>
  );
};

export default monthlyhoroscope;
