import React, { useState } from "react";
import Section from "../Section";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import BlogsBy from "../blog/BlogsBy";
import Link from "next/link";
import Image from "next/image";

const card = [
  {
    id: "i_was_aware_of_my_agressiveness",
    url: "/i-was-aware-of-my-agressiveness",
    img: "/assets/blog/blog aggresion-01.svg",
    text: "I was aware of my agressiveness",
    para: [
      { para: " Dear readers", title: "", img: "" },
      {
        para: "I want to share my experience with Astroseva Talk, an astrology platform that helped me overcome my aggressive behavior. For a long time, I struggled with my temper and found myself losing important relationships because of it. I was aware of my aggressiveness but didn't know how to control it or understand it better.",
        title: "",
        img: "",
      },
      {
        para: "That's when I stumbled upon Astroseva Talk on Instagram, and their content intrigued me. I decided to join their platform, and it turned out to be the best decision I made. Their astrologers were not only knowledgeable but also compassionate and non-judgmental. I felt comfortable sharing my problems with them and seeking their guidance.",
        title: "",
        img: "",
      },
      {
        para: "I asked them if there were any planetary positions that made me aggressive and if there were any remedies or gemstones that could help me manage my reactions. The astrologers at Astroseva Talk were quick to respond and provided me with a detailed analysis of my birth chart. They pointed out the specific planetary positions that contributed to my aggressive behavior and suggested remedies and gemstones that could help me manage it.",
        title: "",
        img: "",
      },
      {
        para: "In addition to this, Astroseva Talk also provided me with a plethora of other facilities, such as chat with astrologer, live astrologer, video chat with astrologer, and daily horoscope. These features helped me stay connected with their astrologers and receive guidance whenever I needed it.",
        title: "",
        img: "",
      },
      {
        para: "Overall, I am grateful to Astroseva Talk for helping me overcome my aggressive behavior and changing my life in a positive way. Their solutions were effective, and their astrologers were empathetic and professional. I would highly recommend Astroseva Talk to anyone seeking astrological guidance and support.Visit our website: https://www.AstrosevaTalk.com",
      },
    ],
    name: "Kasturi Chaudhary",
    date: "March 31,2023",
  },
  {
    id: "do_i_posses_the_authority_to_successfully_resolve_ongoing_business_negotiations",
    url: "do-i-posses-the-authority-to-successfully-resolve-ongoing-business-negotiations",
    img: "/assets/blog/do i possess the authority to successfully resolve ongoing business negotiation C-01-01.svg",
    text: "Do I posses the authority  to successfully resolve ongoing business negotiations ",
    keywords: [{ key: "business", link: "/" }],
    para: [
      {
        para: "Do I posses the authority  to successfully resolve ongoing business negotiations?For years, I was plagued by the question of whether I possessed the authority to successfully resolve ongoing business negotiations. This question caused me immense stress and anxiety, and I was on the verge of losing everything in my business.",
        title: "",
        img: "",
      },
      {
        para: "However, my life took a turn for the better when I discovered Astroseva Talk. The website's astrologers provided me with comprehensive guidance and advice on my business negotiations, and I was able to implement their solutions successfully.",
        title: "",
        img: "",
      },
      {
        para: "Astroseva Talk offers a range of services, including chat, talk, and live video consultations with astrologers. I found this to be incredibly helpful as it allowed me to receive personalized guidance and support whenever I needed it.",
        title: "",
        img: "",
      },
      {
        para: "Also, the website's daily horoscopes were informative and insightful. I found them to be a great way to stay connected with astrological guidance and practices.",
        title: "",
        img: "",
      },
      {
        para: "Within just six months of consulting with Astroseva Talk, my business negotiations improved significantly, and I was able to resolve ongoing issues successfully. I will recommend this website highly enough for anyone seeking guidance and clarity regarding their business, career, or personal life. The astrologers are knowledgeable, professional, and offer practical advice that can help you navigate challenging situations with confidence and ease.Visit our website: https://www.AstrosevaTalk.com ",
        title: "",
        img: "",
      },
    ],
    name: "Kasturi Chaudhary",
    date: "March 31,2023",
  },
  {
    id: "free_5_minutes_astrology",
    url: "free-5-minutes-astrology",
    img: "/assets/blog/five min free consultation-01.svg",
    text: "Free 5 minutes Astrology",
    keywords: [
      { key: "5 minutes astrology", link: "/" },
      { key: "https://www.AstrosevaTalk.com", link: "/" },
    ],
    para: [
      {
        para: "Welcome to AstrosevaTalk,your one-stop destination for all things astrology. If you'relooking for free astrology consultation online, you've come to the right place. Our team ofexpert astrologers is here to provide you with the best astrological guidance and advice, allfrom the comfort of your own home.",
        title: "",
        img: "",
      },
      {
        para: "At Astroseva Talk, we understand that sometimes you just need a quick answer or someguidance on a specific issue. That's why we're excited to offer our Free 5 Minutes Astrologyservice. This service allows you to chat with an astrologer online free for five minutes, giving you the chance to ask a burning question or gain insight into your current situation.",
        title: "",
        img: "",
      },
      {
        para: "Our Free 5 Minutes Astrology service is perfect for those who are looking for a quick andeasy way to connect with an astrologer without having to commit to a full consultation.Whether you're interested in chat with astrologer online free or want to learn more aboutastrology in general, visit our website, https://www.AstrosevaTalk.com expert astrologers are here to help.",
        title: "",
        img: "",
      },
      {
        para: "We also offer the first free chat with astrologer for new clients, so you can try out our services and get a feel for how we work before committing to a full consultation. We believe in providing our clients with the best possible service, which is why we offer this free introductory chat.",
        title: "",
        img: "",
      },
      {
        para: "If you're looking for the best astrologer free advice, look no further than Astroseva Talk. Our astrologers have years of experience and are passionate about helping people gain clarity and insight through astrology. We believe that everyone can benefit from astrology, and we're committed to making our services accessible to everyone.",
        title: "",
        img: "",
      },
      {
        para: "We also offer free astrology consultation on WhatsApp, so you can easily connect with an astrologer from anywhere in the world. This is a convenient and easy way to get the guidance and advice you need, without having to leave your home.",
        title: "",
        img: "",
      },
      {
        para: "At Astroseva Talk, we're committed to providing our clients with the best possible service. That's why we use the latest technology and algorithms to ensure that our website is optimized for the best possible Google search results. If you're looking for free online chat with astrologer in Hindi or any other language, you can trust Astroseva Talk to provide you with the best possible service.",
        title: "",
        img: "",
      },

      {
        para: "So if you're ready to connect with an expert astrologer and gain insight into your life, try our Free 5 Minutes Astrology service or our first free chat with astrologer today. We're here to help you navigate life's challenges and find the clarity and guidance you need to live your best life.",
        title: "",
        img: "",
      },
    ],
    name: "Kasturi Chaudhary",
    date: "March 31,2023",
  },
  {
    id: "astrological_remedies_to_get_rid_your_problems_in_life",
    url: "astrological-remedies-to-get-rid-of-your-problems-in-life",
    img: "/assets/blog/ASTROLOGICAL REMEDIES TO GETRID OF YOUR LIFE PROBLEM-01-01.svg",
    text: "Astrological Remedies to get rid of your problems in life",
    keywords: [{ key: "Astrological Remedies", link: "/" }],
    para: [
      {
        para: "Welcome to Astroseva Talk! We are here to discuss one of the most intriguing aspects of astrology, the remedies that can help you get rid of your problems in life. Astrology is a powerful tool that can help you navigate your life by understanding the positions and movements of celestial bodies in relation to your birth chart. In this blog, we will explore the various astrological remedies that can help you overcome the challenges in your life.",
        title: "",
        img: "",
      },
      {
        para: "Astrological remedies are a set of practices that are performed to reduce the negative effects of planetary positions and improve the positive effects of the planets. These remedies can be performed in different forms, including rituals, mantras, and gemstone recommendations.One of the most effective astrological remedies is the Lal Kitab remedies for all planets.Lal Kitab is a collection of astrological remedies that are said to have been written by Ravana, the demon king of Lanka.",
        title: "",
        img: "",
      },
      {
        para: "The Lal Kitab remedies for all planets are based on the belief that each planet has its own specific remedy. For example, the remedy for Jupiter is to wear a yellow sapphire, while the remedy for Saturn is to donate black sesame seeds. These remedies are easy to perform and can be done without any special knowledge or training.",
        title: "",
        img: "",
      },
      {
        para: "Another way to balance all planets is to perform certain rituals or mantras that are specific to each planet. For instance, if you want to balance your Sun, you can recite the Gayatri mantra every morning. Similarly, if you want to balance your Moon, you can perform a Moon puja on Monday evenings.",
        title: "",
        img: "",
      },
      {
        para: "Astrology predictions are another aspect of astrology that can help you prepare for the future. By studying your birth chart, an astrologer can predict the challenges and opportunities that you are likely to encounter in your life. These predictions can help you plan your life accordingly and make better decisions.",
        title: "",
        img: "",
      },
      {
        para: "Your horoscope by date of birth and time is a unique snapshot of the positions of celestial bodies at the time of your birth. It is a powerful tool that can help you understand your strengths and weaknesses, and guide you towards a more fulfilling life. Indian astrology by date of birth without time is also possible, but it may not be as accurate as a horoscope that includes your time of birth.",
        title: "",
        img: "",
      },
      {
        para: "In conclusion, astrological remedies can help you overcome the challenges in your life and achieve your goals. Lal Kitab remedies for all planets, rituals, mantras, and gemstone recommendations are just a few of the many ways to balance all planets. Astrology predictions and horoscopes by date of birth and time are also valuable tools for understanding your life path. We invite you to visit our website, https://www.AstrosevaTalk.com , to learn more about astrology and how it can help you live your best life.",
        title: "",
        img: "",
      },
    ],

    name: "Kasturi Chaudhary",
    date: "March 31,2023",
  },
  {
    id: "astroseva_talk_to_astrologer_online",
    url: "astroseva-talk-to-astrologer-online",
    img: "/assets/blog/astroseva  talk and talk to astrologer online-01.svg",
    text: "Astroseva Talk & Talk to Astrologer online",
    keywords: [{ key: "astrology ", link: "/" }],
    para: [
      {
        para: "Welcome to Astroseva Talk,",
        title: "Business Prediction By Expert Astrologer of Astroseva Talk.",
        img: "",
      },
      {
        para: "Your one-stop destination for all your astrology needs. We are a team of expert astrologers who provide reliable and accurate predictions and solutions to our clients. Our services are designed to help people navigate the ups and downs of life and make informed decisions based on astrological insights.",
        title: "",
        img: "",
      },
      {
        para: "In today's blog post, we are going to discuss how astrology can help in predicting business outcomes. As we all know, business is a highly dynamic and competitive field, where even a small decision can have a significant impact on the overall performance of the organization. This is where astrology comes in. By analyzing the planetary positions and movements, astrologers can provide valuable insights into the future of a business and help business owners make informed decisions.",
        title: "",
        img: "",
      },
      {
        para: "At Astroseva Talk, we have a team of expert astrologers who specialize in business astrology. Our astrologers have years of experience in analyzing the charts of businesses and predicting their future outcomes. They use various astrological tools and techniques to provide accurate predictions and help business owners make informed decisions.",
        title: "",
        img: "",
      },
      {
        para: "One of the most popular services we offer at Astroseva Talk is live astrology consultations. Our clients can chat with astrologers online and get personalized predictions and solutions to their problems. Our online astrology consultations are designed to be convenient and accessible to everyone, regardless of their location. All you need is an internet connection, and you can talk to astrologers live from the comfort of your home or office.",
        title: "",
        img: "",
      },
      {
        para: "Our online astrology consultations are conducted by expert astrologers who have years of experience in providing accurate predictions and solutions. They use various astrological tools and techniques to analyze the planetary positions and movements and provide valuable insights into the future of your business. Whether you are starting a new business or looking to expand your existing one, our astrologers can provide you with the guidance and insights you need to make informed decisions.",
        title: "",
        img: "",
      },
      {
        para: "In addition to live astrology consultations, we also offer various other services, including personalized horoscope readings, tarot card readings, and Vastu consultancy. Our services are designed to help people navigate the various challenges of life and make informed decisions based on astrological insights.",
        title: "",
        img: "",
      },
      {
        para: "If you are looking for reliable and accurate astrology predictions and solutions, Astroseva Talk is the right place for you. Our team of expert astrologers is dedicated to providing you with the best possible service and helping you make informed decisions based on astrological insights. So why wait? Visit our website https://www.AstrosevaTalk.com today and start your journey towards a better tomorrow.",
        title: "",
        img: "",
      },
      {
        para: "In conclusion, astrology can be a powerful tool for predicting business outcomes and making informed decisions. At Astroseva Talk, we have a team of expert astrologers who specialize in business astrology and can provide you with valuable insights into the future of your business. With our live astrology consultations, personalized horoscope readings, and other services, we are committed to helping you navigate the various challenges of life and make informed decisions based on astrological insights. So don't wait, visit our website https://www.AstrosevaTalk.com today and start your journey towards a better tomorrow.",
        title: "",
        img: "",
      },
    ],
    name: "Kasturi Chaudhary",
    date: "March 31,2023",
  },
];

type Props = {};
const LatestBlogs = (props: Props) => {
  const [active, setActive] = useState<Number>(0);
  return (
    <div className=" bg-[#D9D9D9] py-[30px]">
      <Section>
        <div className=" max-w-6.5xl mx-auto ">
          <div className=" ">
            <h2 className=" text-center font-[georgia] text-xl text-[20px] font-semibold sm:text-2xl md:text-[30px] lg:text-[30px]">
              Latest From Blogs
            </h2>
            <p className="mt-[10px] text-center text-[20px] font-semibold">
              Choose your Moon sign and start reading your FREE Daily Horoscope
            </p>
            <Swiper
              navigation={{
                prevEl: ".prev",
                nextEl: ".next",
              }}
              onActiveIndexChange={(e) => setActive(e.activeIndex)}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Navigation, Autoplay]}
            >
              <div className="">
                {card.map((item, index) => (
                  <SwiperSlide key={item.img + index} className="">
                    <Link key={index} href={`/blog/${item.id}`}>
                      <div className="">
                        <div className="  mt-[10px]  rounded-[10px] border-r-[3px] border-b-[3px]  border-[#DC6563] ">
                          <div className=" ">
                            <Image
                              src={item.img}
                              alt={item.name}
                              width={156}
                              height={145}
                              loading={"lazy"}
                              className="  h-full w-full rounded-[10px] object-contain"
                            />
                          </div>
                          <div className=" h-[76px] overflow-hidden rounded-b-[10px] bg-white px-2 ">
                            <p className=" truncate text-[20px]">
                              {item?.text}
                            </p>
                            <div className="mt-[10px] flex items-center justify-between text-[12px] text-slate-500">
                              <p>Kasturi Chaudhary</p>
                              <p>March 31,2023</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <div className="">
                        <div className=""></div>
                      </div> */}
                    </Link>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
            <div
              className="relative    mx-auto flex items-center justify-between"
              style={{
                height: "330px",
                marginTop: "-26%",
                marginLeft: "-3%",
                marginRight: "-3%",
              }}
            >
              <button className="prev cursor-pointer">
                <AiFillCaretLeft className="text-3xl text-black" />
              </button>
              <button className="next cursor-pointer">
                <AiFillCaretRight className="text-3xl text-black" />
              </button>
            </div>
            {/* <div className="flex items-center justify-center">
              <button className="rounded-[10px] bg-[#ff3d23] px-4 py-2 font-[Roboto]   text-[28px] font-bold text-white">
                View More
              </button>
            </div> */}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default LatestBlogs;
