import About from "@/components/home/About";
import Appointments from "@/components/home/Appointments";
import Astrologer from "@/components/home/Astrologer";
import Hero from "@/components/home/Hero";
import Horoscope from "@/components/home/Horoscope";
import Membership from "@/components/home/Membership";
import Review from "@/components/home/Review";
import Services from "@/components/home/Services";
import Shop from "@/components/home/Shop";
import WhoWeAre from "@/components/home/WhoWeAre";
import { getFetcher } from "@/service";
import { useEffect } from "react";

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
      <Hero />
      <About />
      <WhoWeAre />
      <Appointments />
      {/* <Horoscope /> */}
      <Services />
      <Astrologer />
      <Shop />
      <Review />
      <Membership />
    </>
  );
}
