import Section from "@/components/Section";
import Hero from "@/components/common/Hero";
import { HomeIcon } from "@heroicons/react/24/solid";
import React from "react";

type Props = {};

const kaalsarpdosha = (props: Props) => {
  return (
    <div className="min-h-screen bg-[url('/assets/horoscope-bg.webp')]">
      <Hero
        icon="/assets/panchang/panchang-hero.png"
        text="KAAL SARP DOSHA "
        subText=""
      />
      <div className="bg-[#F5F5F5] py-1">
        <div className="mx-auto flex max-w-7xl items-center space-x-2">
          <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
          <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium text-white">
            KAAL SARP DOSHA
          </p>
        </div>
      </div>
      <Section>
        <div className="">
          <p className="mt-[20px] text-center text-3xl font-bold">
            KAAL SARP DOSHA{" "}
          </p>
          <p className="mt-[10px] text-[18px]">
            {` Do you often wonder why you arent getting the fable results despite having the healthy placement of the planets in your birth chart? Well, there can be the probability of the kaal sarp dosha in your birth chart which is the cause of several types of misfortunes. Kaal Sarp dosha is one of the least known yet highly inauspicious dosha in one's birth chart. Often it happens that most of us are not even aware of the presence of this dosha in our birth chart.`}
          </p>
          <p className="mt-[25px] text-[18px]">
            At Astrosevatalk we have the systematic assessment of the kaal sarp
            dosha by analyzing the birthchart of the native. The astrologers at
            Astrosevatalk also offer the 100% solution or the nivaran of kaal
            sarp dosha by using simple home remedies. So if you doubt that you
            could be affected by the Kaal sarp dosha then feel free to visit
            Astrosevatalk today and overcome this dosha before it becomes too
            late.
          </p>
        </div>
        <div className="mt-[25px]">
          <p className=" text-3xl font-bold">What Is Kal Sarp Dosha?</p>
          <p className="mt-[10px] text-[18px]">
            As the name suggests the Kaal sarp dosha is concerned with the ill
            or the bad influence of the snake in terms of bad luck or
            misfortune. Kaal means the time or period, sarp means the snake and
            the dosha means the fault. Thus the Kaal sarp dosha implies the bad
            deeds or the karma of the native in the previous birth. Often it
            happens that the person has committed the wrong deeds in the
            previous birth which haunt the person in the current birth. Kaal
            sarp dosha is concerned with the Rahu and Ketu as both of these
            planets have their bad influence in the Kundali of the native. In
            the kaal sarp dosha the placement of the Rahu and Ketu is such that
            they are jammed with the other planets. This placement of the rahu
            and Rahu causeRahucause of the birtcabecausemain empty without the
            other planets. If all the planets in the birth chart are moving
            towards the Rahu then it becomes the Kaal sarp dosha. On the other
            hand, if the planets are moving towards the ketu then it becomes the
            kaal sarp yoga.
          </p>
        </div>

        <div className="mt-[25px]">
          <p className=" text-3xl font-bold">
            Impact & Influence of Kaal Sarp Dosha
          </p>
          <p className="mt-[10px] text-[18px]">
            Kaal sarp dosha affects any individual in several forms and all of
            them are very unfortunate. It is one such dosha in Vedic astrology
            which affects the person from all dimensions at the same time. It
            can bring misfortune in terms of poor health, bad luck, unhappiness
            in the relationship, and affect the peace of mind and all other
            aspects of life. What is even worse is its period as the kaal sarp
            dosha can affect the person for 40 long years and in some cases even
            for their whole life. This is the core reason why Kaal sarp dosha
            should never be taken on a lighter note. There are remedies for this
            dosha which can help the native overcome or even eliminate this
            dosha from the birth chart.
          </p>
        </div>

        <div className="mt-[25px] mb-[35px]">
          <p className=" text-3xl font-bold">
            Chat with Astrologers and get the Kaal Sarp Dosha Remedies
          </p>
          <p className="mt-[10px] text-[18px]">
            It is further advisable to get the specific birth chart analysis
            done by the Astrologers at the Astrosevatalk to get the personalized
            kaal sarp dosha remedy. It is simply for the reason that often each
            needs different Remedies for this kaal sarp dosha as there are 12
            types of doshas. Having a personal consultation with the astrologers
            at the Astrosevatalk will provide a more specific solution or remedy
            for this dosha. Feel free to chat with astrologers today and free
            yourself from the ill-fated impact and the influence of this kaal
            sarp dosha instantly. Remember this kaal sarp dosha can hurt and
            haunt the person till ages if it remains untreated by the
            astrological suitable remedies.
          </p>
        </div>
      </Section>
    </div>
  );
};

export default kaalsarpdosha;
