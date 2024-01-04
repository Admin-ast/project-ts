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
import { useEffect, useState } from "react";
import Script from "next/script";
import AstrologerCount from "@/components/home/AstrologerCount";
import LiveAstrologer from "./live-astrologer/live-astrologer";
import Icons from "@/components/live-astro/Icons";
import LIveAstro from "@/components/home/LIveAstro";
import News from "@/components/home/News";
import BlogsBy from "@/components/blog/BlogsBy";
import LatestBlogs from "@/components/home/LatestBlogs";
import CelebrityCustomers from "@/components/home/CelebrityCustomers";
import Panchang from "@/components/home/Panchang";

import Missing from "@/components/home/Missing";
import PersonalDetail from "@/components/Signup/PersonalDetail";
import { Faqs } from "@/components/horoscope/horoscope-sign";
import Faq from "@/components/common/Faq";
const faqsDetail: Faqs = {
  title: "FAQ'S ABOUT ASTROLOGY",
  faq: [
    {
      ques: "How can I connect with an astrologer on chat?",
      ans: "To chat with astrologer online, you simply need to recharge your wallet and find the 'Chat with Astrologer' section on our app or website. Once you click on it, you can choose from hundreds of astrologers you can chat with at your convenience.    ",
    },
    {
      ques: "How can I connect with an astrologer on chat?",
      ans: "To chat with astrologer online, you simply need to recharge your wallet and find the 'Chat with Astrologer' section on our app or website. Once you click on it, you can choose from hundreds of astrologers you can chat with at your convenience.    ",
    },
    {
      ques: "How can I connect with an astrologer on chat?",
      ans: "To chat with astrologer online, you simply need to recharge your wallet and find the 'Chat with Astrologer' section on our app or website. Once you click on it, you can choose from hundreds of astrologers you can chat with at your convenience.    ",
    },
    {
      ques: "How can I connect with an astrologer on chat?",
      ans: "To chat with astrologer online, you simply need to recharge your wallet and find the 'Chat with Astrologer' section on our app or website. Once you click on it, you can choose from hundreds of astrologers you can chat with at your convenience.    ",
    },
    {
      ques: "How can I connect with an astrologer on chat?",
      ans: "To chat with astrologer online, you simply need to recharge your wallet and find the 'Chat with Astrologer' section on our app or website. Once you click on it, you can choose from hundreds of astrologers you can chat with at your convenience.    ",
    },
  ],
};
export default function Home() {
  useEffect(() => {
    const apiCall = async () => {
      const result = await getFetcher("/");
      console.log("result is", result);
    };
    apiCall();
  }, []);
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
      <Shop head="Astroseva Shop" />
      <Panchang />
      <Review />
      <About />
      {/* <Faq /> */}

      <Faq faqDetail={faqsDetail} />
      {/* <Missing /> */}
      {/* <Membership /> */}
    </>
  );
}
