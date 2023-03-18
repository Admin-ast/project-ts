import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/home/Hero"));
const About = dynamic(() => import("@/components/home/About"));
const WhoWeAre = dynamic(() => import("@/components/home/WhoWeAre"));
const Horoscope = dynamic(() => import("@/components/home/Horoscope"));
const Services = dynamic(() => import("@/components/home/Services"));
const Appointments = dynamic(() => import("@/components/home/Appointments"));
const Membership = dynamic(() => import("@/components/home/Membership"));
const Review = dynamic(() => import("@/components/home/Review"));
const Astrologer = dynamic(() => import("@/components/home/Astrologer"));
const Shop = dynamic(() => import("@/components/home/Shop"));

export default function Home() {
  return (
    <>
      <Hero />
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
