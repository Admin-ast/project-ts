import Section from "@/components/Section";
import Hero from "@/components/common/Hero";
import { HomeIcon } from "@heroicons/react/24/solid";
import React from "react";

type Props = {};

const mantras = (props: Props) => {
  return (
    <div className="min-h-screen bg-[url('/assets/horoscope-bg.webp')]">
      <Hero
        icon="/assets/panchang/panchang-hero.png"
        text="  MANTRAS  "
        subText=""
      />
      <div className="bg-[#F5F5F5] py-1">
        <div className="mx-auto flex max-w-7xl items-center space-x-2">
          <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
          <p className="bg-[#DC6563] p-1 px-4 text-[10px] font-medium text-white">
            MANTRAS
          </p>
        </div>
      </div>
      <Section>
        <div className="">
          <p className="mt-[20px] text-center text-3xl font-bold">MANTRAS </p>
          <p className="mt-[20px] text-[18px]">
            In Vedic Astrology, the place of Mantras is Supreme to carry out and
            execute all kinds of tasks. Mantras in the simple language are those
            sacred sounds, phrases or words that have Spiritual Significance.
            Chanting the mantras is essential for the execution of several acts
            in the Vedic culture such as worship, weddings, last rites and other
            cultural ceremonies. The whole motive of mantras in Vedic astrology
            is to enhance the positive influence of the celestial bodies or the
            cosmos. It is believed that all these acts done with the chant of
            mantras make the acts successful in the most auspicious manner.
          </p>
          <p className="mt-[10px] text-[18px]">
            In the c astrology, there are the popular mantras for 9 planets
            which are also called and known as the Navgarha mantras. All these 9
            mantras represent the 9 planets and are chanted to have a positive
            influence on all the 9 planets. Each of these planets and the
            mantras have their significance and can bring a suitable influence.
            This is why it becomes crucial to have the right knowledge of all
            these mantras and chant them at the right time and on specific
            occasions.
          </p>
        </div>

        <div className="mt-[25px]">
          <p className=" text-3xl font-bold">
            The Background of Mantras in Vedic Astrology{" "}
          </p>
          <p className="mt-[10px] text-[18px]">
            As we know Astrology is thousands of years old practice in ancient
            Indian culture. The major root of the astrology has been derived
            from the Vedas and mantras have also been derived from the Vedas
            itself. Mantras go well along with astrology as the means of
            astrological remedies and the other process of several ceremonies.
            Mantras {`can't`} be separated or bifurcated from the Vedicrology as
            they both complement each other. Astrology is based on the celestial
            bodies and in a similar manner mantras are also concerned with the 9
            planets.
          </p>
          <p className="mt-[10px] text-[18px]">
            Chanting of the mantras has been said to be the most potential means
            of worshipping or pleasing God. This is the reason why Mantras are
            always chanted whether {`it's`} the happening of any auspicious act
            such as marriage or even unfortunate events such as death. Vedic
            culture is profoundly rich and each event in the culture can simply
            be associated with the chanting of mantras. One can even chant the
            Navgarha mantras while doing the small stuff in the day to day life.
          </p>
          <p className="mt-[10px] text-[18px]">
            Mantras can be chanted by anyone however it is necessary to have the
            right knowledge of mantras to chant or pronounce them correctly.
            There are the mantras which come in the form of syllabus and the
            hymns which are to be pronounced by the native. When the native
            pronounces these mantras it links the inner self of the native with
            the universal energy and brings cosmic or Spiritual Benefits.
          </p>
        </div>

        <div className="mt-[25px] mb-[35px]">
          <p className=" text-3xl font-bold">Benefits of Mantras Reciting</p>
          <p className="mt-[10px] text-[18px]">
            Mantras in Vedic astrology are believed to be incredibly powerful
            for their sheer influence in all aspects of life. This is why
            mantras are deeply associated with every event in our lives. One can
            chant the mantras to get relief or the solutions for the various
            problems in life. Mantras have the power to not only bring cosmic
            benefits but also can shape the inner self of the native. With the
            reciting of Mantras, one can get the mental peace and stability to
            do the right things in life in the most proficient manner. Mantras
            have tons of benefits in the physical, mental and Spiritual aspects
            for anyone who chants the ideal mantras in specific situations of
            life.
          </p>
          <p className="mt-[10px] text-[18px]">
            There are over 10,000 mantras in the Rigveda Samhita and all of
            these mantras are suitable for different occasions. The rishis,
            astrologers pundits etc have been using the mantras for thousands of
            years in the Vedic culture. Here below are some of the specific
            benefits of reciting the mantras.
          </p>
          <p className="mt-[15px]  text-[18px] font-bold">
            ● Reciting the mantras in day-to-day life keeps a positive aura
            around the natives in the mental, physical and spiritual aspects of
            life.
          </p>
          <p className="mt-[15px]  text-[18px] font-bold">
            ● Mantras are considered highly auspicious in the course of
            executing any kind of crucial tasks in life and living the to-day
            life.
          </p>
          <p className="mt-[15px]  text-[18px] font-bold">
            ● Mantras also work as a powerful tool for eliminating negative
            energy from the house and keeping the environment healthy.
          </p>
          <p className="mt-[15px]  text-[18px] font-bold">
            ● Chanting the right Mantras can also help in the weak planetary
            placement and can turn the negative results into positive ones.
          </p>
          <p className="mt-[15px]  text-[18px] font-bold">
            ● Natives can worship and please God with the chanting of mantras
            and attract love, health, money and other aspects of life.
          </p>
          <p className="mt-[15px]  text-[18px] font-bold">
            ● Meditating with the mantras can also help in improving mental and
            physical health and helps in syncing with spirituality.
          </p>
          <p className="mt-[10px] text-[18px]">
            These are some of the major benefits of chanting the mantras and
            there are tons of other benefits too of reciting the mantras. We
            urge our visitors to chat with the astrologers at Astrosevatalk to
            find the right mantras to solve the various problems in life. With
            the consistent chant of mantras, one can attract money, health,
            mental stability, peace and love etc in life.
          </p>
        </div>
      </Section>
    </div>
  );
};

export default mantras;
