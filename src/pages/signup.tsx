import Hero from "@/components/common/Hero";
import Section from "@/components/Section";
import Assignment from "@/components/Signup/Assignment";
import OtherDetail from "@/components/Signup/OtherDetail";
import PersonalDetail from "@/components/Signup/PersonalDetail";
import SkillDetail from "@/components/Signup/SkillDetail";
import React, { useState } from "react";
import Head from 'next/head';


type Props = {};
const details = [
  {
    title: "Personal Details",
  },
  {
    title: "Skill Details",
  },
  {
    title: "Other Details",
  },
  {
    title: "Assignment",
  },
];

function Signup({}: Props) {
  const [mobileNumber, setMobileNumber] = useState<any>();
  const [candidateDetails, setCandidateDetails] = useState<any>();
  const [activeId, setActiveId] = useState(1);
  const getMainContent = (step: number, setActiveId: any) => {
    switch (step) {
      case 1:
        return (
          <PersonalDetail
            setActiveId={setActiveId}
            setMobileNumber={setMobileNumber}
            setCandidateDetails={setCandidateDetails}
          />
        );
      case 2:
        return (
          <SkillDetail
            setActiveId={setActiveId}
            mobileNumber={mobileNumber}
            setCandidateDetails={setCandidateDetails}
            candidateDetails={candidateDetails}
          />
        );
      case 3:
        return (
          <OtherDetail
            setActiveId={setActiveId}
            mobileNumber={mobileNumber}
            setCandidateDetails={setCandidateDetails}
            candidateDetails={candidateDetails}
          />
        );
      case 4:
        return (
          <Assignment
            setActiveId={setActiveId}
            mobileNumber={mobileNumber}
            setCandidateDetails={setCandidateDetails}
            candidateDetails={candidateDetails}
          />
        );
      // case 5:
      //   return <Verification />;
      default:
        throw new Error("Unknown Step");
    }
  };
  return (
   <div>
  <Head>
        <title>
          Astroseva Talk - Astrologer Login 
        </title>
        <meta
          name="description"
          content="Connect with astrologers instantly on Astroseva Talk, a new service allowing you to login and chat live with experts in Vedic astrology, numerology, and more."
          key="desc"
        />
      </Head>
    <>
      <Hero text="Astrologer Login" icon="/assets/signup/hero.png" />
      <div className="bg-[url('/assets/horoscope-bg.webp')] py-20">
        <Section>
          <div className="flex flex-col space-y-12">
            {activeId === 1 ? (
              <p className="text-center font-[georgia] text-4xl font-bold">
                Sign up to become an AstroSevaTalk Verified Astrologer
              </p>
            ) : activeId === 2 ? (
              <p className="text-center font-[georgia] text-4xl font-bold">
                Skill Details
              </p>
            ) : activeId === 3 ? (
              <p className="text-center font-[georgia] text-4xl font-bold">
                Other Details
              </p>
            ) : (
              <p className="text-center font-[georgia] text-4xl font-bold">
                Assignment
              </p>
            )}
            <div className="mx-auto flex space-x-32">
              {details?.map((item, index) => (
                <div key={index} className="flex justify-start">
                  <div className="hidden flex-col items-center justify-center space-y-2 lg:flex">
                    <div
                      className={`flex h-6 w-6 items-center justify-center rounded-full ${
                        index <= activeId - 1 ? "bg-[#E2CB85]" : ""
                      }`}
                    >
                      <div
                        className={`relative h-4 w-4 rounded-full ${
                          index <= activeId - 1
                            ? "bg-gradient-to-b from-[#D3B160] to-[#FFE9A1]"
                            : "bg-gray-300"
                        }`}
                      >
                        {index !== details.length - 1 && (
                          <div className="absolute top-[8px] left-7 w-40 border-t border-gray-600"></div>
                        )}
                      </div>
                    </div>
                    <p
                      className={`text-xs ${
                        index <= activeId - 1
                          ? "font-semibold text-gray-900"
                          : "font-medium text-gray-400"
                      }`}
                    >
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="">{getMainContent(activeId, setActiveId)}</div>
          </div>
        </Section>
      </div>
    </>
	</div>
  );
}

export default Signup;
