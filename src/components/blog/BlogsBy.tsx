import React from "react";

import Link from "next/link";

const card = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
];
type Props = {
  heading: string;
};

const BlogsBy = ({ heading }: Props) => {
  return (
    <div className="">
      <p className="text-center text-[32px] font-bold">{heading}</p>
      <div className="grid gap-5 pt-6 lg:grid-cols-3">
        {card.map((item, index) => (
          <Link
            key={index}
            href={`/blog/${item?.id}`}
            className="flex  flex-col  rounded-[20px] bg-white shadow-xl"
          >
            <img
              className="h-[151px] w-full rounded-t-[20px] object-cover object-top"
              src={item?.img}
              alt=""
            />
            <div className="flex flex-col gap-4 p-3">
              <p className=" text-lg font-bold">{item?.text}</p>
              <div className="flex items-center justify-between text-[12px] text-slate-500">
                <p>Kasturi Chaudhary</p>
                <p>March 31,2023</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogsBy;
