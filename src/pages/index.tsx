import About from "@/components/home/About";
import Appointments from "@/components/home/Appointments";
import Astrologer from "@/components/home/Astrologer";
import Hero from "@/components/home/Hero";
import HeroCard from "@/components/home/HeroCard";
import Horoscope from "@/components/home/Horoscope";
import Membership from "@/components/home/Membership";
import Review from "@/components/home/Review";
import Services from "@/components/home/Services";
import Shop from "@/components/home/Shop";
import WhoWeAre from "@/components/home/WhoWeAre";
import Seo from "@/components/Seo";
import { getFetcher } from "@/service";
import { useEffect } from "react";

export default function Home() {
  
  return (
    <>
      <Seo
        metaTitle="Astrosevatalk - Get Free Online Astrology Predictions by world Best Astrologers"
        metaDescription="Astrosevatalk is the best astrology website for online astrology predictions with the best astrologers of the world. Our astrologer can get answers to all your problems"
        keywords="astro seva talk ,Best astrologers near me, My horoscope online, Best online astrology website in India, Vastu astrology, Horoscope Astrology, Chat with astrologer, Talk to Astrologer online, Online Astrology, free astrology chat, astroyogi, career horoscope."
      />
      <Hero />
      <HeroCard />
      <About />
      <WhoWeAre />
      <Horoscope />
      <Services />
      <Appointments />
      <Shop />

      <Astrologer />

      <Review />
      <Membership />
    </>
  );
}
