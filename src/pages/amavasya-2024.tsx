import Section from "@/components/Section";
import Hero from "@/components/common/Hero";
import { HomeIcon } from "@heroicons/react/24/solid";
import Head from 'next/head';
import React from "react";

type Props = {};

const amavasya2024 = (props: Props) => {
  return (
   <div>
  <Head>
        <title>
          Amavasya 2024 and it's Astrological Insights at Astroseva Talk
        </title>
        <meta
          name="description"
          content="Explore the significance of Amavasya 2024 with Astroseva Talk. Uncover powerful rituals, astrological guidance, and transformative insights on the moonless night. Embrace the cosmic energy for spiritual growth and well-being"
          key="desc"
        />
      </Head>
   <div>
  <Head>
        <title>
          Unlock Peace and Harmony: Remedies for Kaal Sarp Dosha at Astroseva Talk
        </title>
        <meta
          name="description"
          content="Discover effective remedies for Kaal Sarp Dosha at Astroseva Talk. Connect with experienced astrologers for insights and guidance. Resolve life's challenges through expert advice"
          key="desc"
        />
      </Head>
    <div className="min-h-screen bg-[url('/assets/horoscope-bg.webp')]">
      <Hero
        icon="/assets/panchang/panchang-hero.png"
        text="AMAVASYA 2024 "
        subText=""
      />
      <div className="bg-[#F5F5F5] py-1">
        <div className="mx-auto flex max-w-7xl items-center space-x-2">
          <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
          <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium text-white">
            AMAVASYA 2024
          </p>
        </div>
      </div>
      <Section>
        <div className="">
          <p className="mt-[20px] text-center text-3xl font-bold">
            AMAVASYA 2024{" "}
          </p>
          <p className="mt-[10px] text-[18px]">
            As we step into the celestial embrace of Amavasya in the year 2024, Astroseva Talk invites you on a profound and mystical journey into the cosmic energies that surround this lunar phenomenon. Amavasya, or the New Moon, holds a unique place in various cultures and spiritual traditions, symbolizing renewal, introspection, and the limitless potential for new beginnings.{" "}
          </p>
        </div>
        <div className="mt-[25px]">
          <p className=" text-3xl font-bold">The Astral Tapestry Unveiled</p>
          <p className="mt-[10px] text-[18px]">
            At Astroseva Talk, we delve into the intricacies of the astral tapestry during Amavasya 2024. Our seasoned astrologers, well-versed in the cosmic language, unravel the celestial configurations that influence this particular New Moon. From the positioning of the planets to the cosmic dance of the stars, we provide you with insights that transcend the ordinary and tap into the extraordinary.
          </p>
        </div>

        <div className="mt-[25px]">
          <p className=" text-3xl font-bold">Astrological Guidance for Your Journey </p>
          <p className="mt-[10px] text-[18px]">
            Navigate the cosmic currents with our expert astrologers who offer personalized guidance based on your zodiac sign. Amavasya is a potent time for introspection and setting intentions. Whether you seek clarity in matters of love, career, or personal growth, our astrologers stand ready to illuminate your path.
          </p>
        </div>

        <div className="mt-[25px]">
          <p className=" text-3xl font-bold">
            Rituals and Practices for Spiritual Renewal
          </p>
          <p className="mt-[10px] text-[18px]">
            Amavasya is an auspicious time for spiritual practices and rituals that align with the energy of the New Moon. Explore the rich tapestry of traditions that surround this lunar phase, from meditation practices to sacred ceremonies. Our platform serves as a guide for those seeking to connect with the spiritual essence of Amavasya and harness its transformative energy.
          </p>
        </div>

        <div className="mt-[25px]">
          <p className=" text-3xl font-bold">
            Astroseva Talk's Exclusive Amavasya Insights
          </p>
          <p className="mt-[10px] text-[18px]">
            Gain exclusive access to in-depth articles, videos, and live sessions exploring the significance of Amavasya in 2024. Our team of astrologers and spiritual experts share their wisdom, providing you with a comprehensive understanding of the energies at play during this lunar phase. Engage with our content to deepen your spiritual knowledge and enhance your connection with the cosmos.
          </p>
        </div>
        <div className="mt-[25px]">
          <p className=" text-3xl font-bold">
            Lunar Magic Unleashed
          </p>
          <p className="mt-[10px] text-[18px]">
            Amavasya is a time when the veil between the material and spiritual realms is thin. Explore the realms of lunar magic with us as we delve into the mystical and enchanting practices associated with Amavasya. From crystal rituals to moon bathing, discover ways to harness the lunar energies for healing and manifestation.
          </p>
        </div>
        <div className="mt-[25px]">
          <p className=" text-3xl font-bold">
            Community Connection
          </p>
          <p className="mt-[10px] text-[18px]">
           Join a community of like-minded individuals on Astroseva Talk's platform. Share your experiences, insights, and rituals with others who are also on this journey of self-discovery during Amavasya 2024. Engage in discussions, ask questions, and forge connections with a community that understands the transformative power of celestial events.
          </p>
        </div>
        <div className="mt-[25px]">
          <p className=" text-3xl font-bold">
            Live Consultations and Readings
          </p>
          <p className="mt-[10px] text-[18px]">
            Experience the magic of live consultations and readings with our astrologers during Amavasya. Connect in real-time, ask burning questions, and receive personalized insights tailored to your unique astrological profile. Our live sessions create an interactive space for seekers to explore the depths of their cosmic potential.
          </p>
        </div>
        <div className="mt-[25px] pb-[35px]">
          <p className=" text-3xl font-bold">
            Astroseva Talk: Your Celestial Companion
          </p>
          <p className="mt-[10px] text-[18px]">
           At Astroseva Talk, we are more than a platform; we are your celestial companion on the journey of self-discovery. As we embrace Amavasya in 2024, let us guide you through the cosmic currents, helping you unlock the mysteries of the universe and tap into the transformative energies that surround this New Moon.
		   </p>
        </div>
      </Section>
    </div>
	</div>
	</div>
  );
};

export default amavasya2024;
