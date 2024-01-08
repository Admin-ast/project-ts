import AppointmentCard from "@/components/appoinments/AppointmentCard";
import Consultation from "@/components/appoinments/Consultation";
import Hero from "@/components/appoinments/Hero";
import Button from "@/components/common/Button";
import Faq from "@/components/common/Faq";
import { Faqs } from "@/components/horoscope/horoscope-sign";
import Section from "@/components/Section";
import { getFetcher } from "@/service";
import { HomeIcon } from "@heroicons/react/24/solid";
import React, { Key } from "react";
import { useEffect, useState } from "react";
import DetailNavbar from "@/components/talk-to-astrologer/DetailNavbar";
import Calling from "@/components/talk-to-astrologer/Calling";
import SkillDetail from "@/components/Signup/SkillDetail";
import BestAstrologer from "@/components/talk-to-astrologer/BestAstrologer";
import Review from "@/components/home/Review";
import Services from "@/components/talk-to-astrologer/Services";
import Link from "next/link";
import Loading from "@/components/loading/Loading";
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


const astrologerDetail = {
  name: "Aakash Shah",
  expertise: "Vedic, Vastu, Face reading",
  experience: 3,
  language: "English, Hindi, Punjabi",
  ratings: 5,
  orders: 2054,
  isPremium: true,
};

function TalkAstrologer({ }: Props) {
  const [astrologersDetails, setAstrologersDetails] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [walletbalance, setWalletbalance] = useState<any>('');
  const [userbalance, setUserbalance] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [chatcharges, setChatcharges] = useState(0);
  const [astrologername, setAstrologername] = useState('');

  useEffect(() => {

    const getastrologers = async () => {
      const astrologers = await getFetcher("/astrologer/all");
      if (astrologers?.status) {

        setAstrologersDetails(astrologers?.res);
        setIsLoading(false);


        setUserbalance(astrologers?.walletbalance);
        window.localStorage.setItem("walletbalance", userbalance.toString());



      }


    }
    getastrologers();

    if (astrologername != "") {
      setShowModal(true);
    }
  }, [astrologername])

  return (
    <>
      {/* <Hero text="Talk To Astrologer" icon="" /> */}
      <div className="bg-[url('/assets/horoscope-bg.webp')] ">
        <Section>
          <div className="items-center justify-between space-x-2 py-[30px] lg:flex">
            <div className="flex">
              <HomeIcon className="h-6 w-6  p-1" />
              <p className="bg-[#bd6d7b] p-1 px-4 text-[10px] font-medium text-white">
                Talk To Astrologer
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
                          Minimum balance of 5 miniutes ( ₹ {5 * chatcharges} )
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
            {isLoading ? <div className="text-center"> <Loading></Loading> </div> :
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">


                {astrologersDetails?.map((item: any, index: Key) => (
                  <div key={index}>
                    <Link href={"/astrologer/" + item?._id}>
                      <AppointmentCard detail={item} service={"Talk"} userbalance={userbalance} astrologername={setAstrologername} charges={setChatcharges} showmodal={setShowModal} />
                    </Link>
                  </div>
                ))}
              </div>
            }

            <Button
              text="View More"
              className="mx-auto mt-[88px] bg-gradient-to-b from-[#FF7646] to-[#FF0600] lg:text-[28px]"

            />
          </div>
        </Section>

        <BestAstrologer heading="Find Best Astrologers" />
        {/*  */}
        <div className="">
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
      {/* <Hero
        text="Talk To Astrologer"
        icon="/assets/appointment/talk-hero.png"
      />
      <div className="bg-[#F5F5F5] py-2">
        <Section>
          <div className="flex items-center space-x-2">
            <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
            <p className="bg-[#C6A65A] p-1 px-4 text-[10px] font-medium">
              Talk To Astrologer
            </p>
          </div>
        </Section>
      </div>
      <div className="bg-[url('/assets/horoscope-bg.webp')]">
        <Section>
          <div className="py-12 lg:space-y-16">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {astrologersDetails?.map((item:any, index: Key) => (
                <div key={index}>
                  <AppointmentCard detail={item} service={"Call"} />
                </div>
              ))}
            </div>
            <Button text="View More" className="mx-auto lg:text-[28px]" />
          </div>
        </Section>
        <Consultation />
        <Faq faqDetail={faqsDetail} />
      </div> */}
    </>
  );
}

export default TalkAstrologer;
