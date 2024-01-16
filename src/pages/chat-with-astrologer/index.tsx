import AppointmentCard from "@/components/appoinments/AppointmentCard";
import Consultation from "@/components/appoinments/Consultation";
import Hero from "@/components/appoinments/Hero";
import Button from "@/components/common/Button";
import Faq from "@/components/common/Faq";
import { Faqs } from "@/components/horoscope/horoscope-sign";
import Section from "@/components/Section";
import Seo from "@/components/Seo";
import { getFetcher } from "@/service";
import { HomeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React, { Key } from "react";
import { useEffect, useState } from "react";
import DetailNavbar from "@/components/talk-to-astrologer/DetailNavbar";
import BestAstrologer from "@/components/talk-to-astrologer/BestAstrologer";
import Review from "@/components/home/Review";
import Services from "@/components/home/Services";
import ChatCard from "@/components/chat/ChatCard";



type Props = {};

const faqsDetail: Faqs = {
  title: "Chat With Astrologer - FAQs",
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

//  const astrologersDetails = [
//    1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7,
//  ];
const astrologerDetail = {
  name: "Aakash Shah",
  expertise: "Vedic, Vastu, Face reading",
  experience: 3,
  language: "English, Hindi, Punjabi",
  ratings: 5,
  orders: 2054,
  isPremium: true,
};

function ChatAstrologer({ }: Props) {
  const [astrologersDetails, setAstrologersDetails] = useState<any>([]);
  const [userbalance, setUserbalance] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [chatcharges, setChatcharges] = useState(0);
  const [astrologername, setAstrologername] = useState('');



  useEffect(() => {
    const getastrologers = async () => {
      const astrologers = await getFetcher("/astrologer/all");
      
      console.log(astrologers);
      if (astrologers?.status) {
        setAstrologersDetails(astrologers?.res);

        
          
          setUserbalance(astrologers?.walletbalance);
          window.localStorage.setItem('walletbalance', astrologers?.walletbalance);
        

      }

    }
    getastrologers();

    if (astrologername != "") {
      setShowModal(true);
    }
  }, [astrologername])
  return (
    <>
      <Seo
        metaTitle="Online Chat with Astrologers  24 x 7 Astrology Consultation | Astrosevatalk"
        metaDescription="Find out what the stars have in store for you with astrology predictions online. Get personalized horoscopes and daily forecasts for your zodiac sign from experts to help guide you through life's decisions. Unlock the secrets of the universe with astrology predictions online with Astrosevatalk"
        keywords="astrosevatalk, chat online, Astrology, Astrology today, Astrology in Hindi, Astrology in Tamil, Astrologer, Astrologer today, Astrologer Tamil, Horoscope, Horoscope today, Horoscope daily, Horoscope 2023, Kundli Bhagya, Kundli, Kundli match, Zodiac Signs, match making horoscope, matchmaking marriage, Jyotish, Talk to Astrologer, plam reading, job prediction by date of birth,career prediction by date of birth indian astrology free"
      />
      {/* <Hero
        text="Chat With Astrologer"
        icon="/assets/appointment/chat-hero.png"
      /> */}
      <div className="bg-[url('/assets/horoscope-bg.webp')] ">
        <Section>
          <div className="items-center  justify-between space-x-2 py-[30px] lg:flex">
            <div className="flex">
              <HomeIcon className="h-6 w-6  p-1" />
              <p className="bg-[#bd6d7b] p-1 px-4 text-[10px] font-medium text-white">
                Chat with Astrologer
              </p>
            </div>
            <DetailNavbar bal={userbalance} />
          </div>
        </Section>
      </div>
      <div className="bg-[url('/assets/horoscope-bg.webp')]">
        <Section>
          <div className="py-12 lg:space-y-16">
            {showModal ? (
              <>
                <div
                  className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                  <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                      {/*header*/}
                      {/* <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div> */}
                      {/*body*/}
                      <div className="relative p-6 flex-auto">
                        <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                          Minimum balance of 5 miniutes ( Rs. {5 * chatcharges} )
                        </p>
                        <p>
                          is required to start chat with {astrologername}
                        </p>
                      </div>
                      {/*footer*/}
                      <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                          className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="button"
                          onClick={() => setShowModal(false)}
                        >
                          Close
                        </button>
                        <Link href="/talk-to-astrologer/price" className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                          Recharge
                        </Link>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
              </>
            ) : null}

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {astrologersDetails?.map((item: any, index: Key) => (
                <div key={index}>
                  
                 
                    <AppointmentCard detail={item} service={"Chat"} userbalance={userbalance} astrologername={setAstrologername} charges={setChatcharges} showmodal={setShowModal} />
                  
                </div>
              ))}
            </div>
            <Button
              text="View More"
              className="mx-auto mt-5 bg-gradient-to-b from-[#FF7646] to-[#FF0600] lg:text-[28px]"
            />
          </div>
        </Section>
        <BestAstrologer heading="Find Best Astrologers" />
        <div className="mt-[33px]">
          <Review />
        </div>
        <div className="">
          <Services head="Complementary Astrology Serveries" />
        </div>
        <div className="">
          <Consultation />
        </div>
        <Faq faqDetail={faqsDetail} />
      </div>
    </>
  );
}

export default ChatAstrologer;
