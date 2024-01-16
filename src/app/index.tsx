import About from "@/components/home/About";
import Appointments from "@/components/home/Appointments";
import Astrologer from "@/components/home/Astrologer";
import AstrologerCount from "@/components/home/AstrologerCount";
import CelebrityCustomers from "@/components/home/CelebrityCustomers";
import Faq from "@/components/home/Faq";
import Hero from "@/components/home/Hero";
import HeroCard from "@/components/home/HeroCard";
import Horoscope from "@/components/home/Horoscope";
import LatestBlogs from "@/components/home/LatestBlogs";
import LIveAstro from "@/components/home/LIveAstro";
import Membership from "@/components/home/Membership";
import Missing from "@/components/home/Missing";
import News from "@/components/home/News";
import Panchang from "@/components/home/Panchang";
import Review from "@/components/home/Review";
import Services from "@/components/home/Services";
import Shop from "@/components/home/Shop";
import WhoWeAre from "@/components/home/WhoWeAre";
import Seo from "@/components/Seo";
import { getFetcher } from "@/service";
import Script from "next/script";
import { useEffect } from "react";

export default function Home() {
  
  return (
    <>
      <Seo
        metaTitle="Astrosevatalk - Get Free Online Astrology Predictions by world Best Astrologers"
        metaDescription="Astrosevatalk is the best astrology website for online astrology predictions with the best astrologers of the world. Our astrologer can get answers to all your problems"
        keywords="astro seva talk ,Best astrologers near me, My horoscope online, Best online astrology website in India, Vastu astrology, Horoscope Astrology, Chat with astrologer, Talk to Astrologer online, Online Astrology, free astrology chat, astroyogi, career horoscope."
      />
      <meta
        name="google-site-verification"
        content="dRenVoeNGJ-sE6nGJ8061HYadizm-44jKBSWXuehqNo"
      />
      <div className="container">
        <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'GA_MEASUREMENT_ID');
        `}
        </Script>
      </div>
      <Hero />

      <HeroCard />

      {/* 
      
      <Horoscope /> */}
      <Services head="Our Free Services" />
      <AstrologerCount
        count1="15,462+"
        total1="Total Astrologers"
        count2="15,462+"
        total2="Total Astrologers"
        count3="15,462+"
        total3="Total Astrologers"
      />
      <LIveAstro />

      {/* <Appointments /> */}

      <Astrologer />
      <News />
      <LatestBlogs />
      <CelebrityCustomers />
      <Shop head="shop" />
      <Panchang />
      <About />
      <Faq />
      <Review  />
      <Missing />
    </>
  );
}
