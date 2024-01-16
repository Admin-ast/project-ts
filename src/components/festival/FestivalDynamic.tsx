import React from "react";
import Section from "../Section";

type Props = {
  head: string;
};

const FestivalDynamic = ({ head }: Props) => {
  return (
    <div className="">
      <Section>
        <div className="">
          <p className="text-center text-[48px] font-bold">{head}</p>
          <div className="float-right flex gap-[20px]">
            <div className="flex items-center py-[30px]">
              <p className="">Year</p>
              <select className="border-[1px] border-[#D9D9D9] px-2 md:px-4 lg:px-4 ">
                <option className="">YYYY</option>
                <option value="option1">2024</option>
                <option value="option2">2023</option>
                <option value="option3">2022</option>
                <option value="option4">2021</option>
                <option value="option5">2020</option>
              </select>
            </div>

            <div className="flex items-center">
              <p className="">Enter City</p>
              <select className="border-[1px] border-[#D9D9D9] px-4 ">
                <option>Delhi</option>
                <option>Uttar Pradesh</option>
                <option>Uttarakhand</option>
                <option>Bihar</option>
              </select>
            </div>
          </div>
        </div>
        <div className="">
          <img src="/assets/festival/fest.png" alt="" className="" />
        </div>
        <div className="py-[30px] text-center ">
          <div className="bg-white shadow-xl">
            <p className="font-bold">Christmas For New Delhi, India</p>
            <p className="">
              This Christmas, spread happiness amongst your loved ones and on
              this special occasion, AstrosevaTalk wishes you a
            </p>
            <p className="">Merry Christmas.</p>
          </div>
        </div>
        <div className="">
          <p className="text-justify">
            Hindu religion is known for numerous festivals and celebrations.
            Since ancient times, Indian festivals are undergoing transformations
            and gaining new meanings. Festivals of India had always been a way
            to gain more prosperity in life and strengthening the bond with
            loved ones. That is why, we are here with Hindu Panchang containing
            the details of all the Hindu festivals observed in India and around
            the globe. It will help you in celebrating all these wonderful
            events during the Shubh Muhurat.
          </p>
        </div>
        <div className="py-[30px] text-justify">
          <p className="text-center text-[36px] font-bold">
            Tale Of The Christmas Tree
          </p>
          <p className="">
            Festivals in India are auspicious affairs where people gather
            together to celebrate the festivities and share bundles of joy, love
            and well-wishing. It comprises of a series of joyful events marking
            the passage of rites and rituals during a lifetime. Vibrant
            feelings, colors, festivities and music make up the whole ambience,
            bringing it alive while adding to the enthusiasm, excitement and
            ritualistic nature.
          </p>
          <p className="">
            People coming from overseas and landing on the Indian soil feel
            mesmerised and struck by the grand scale and infinite felicitation
            of Indian festivals. These are the moments where everyone gathers
            around and create some beautiful memories and commemorate great
            deeds of gods, goddesses, gurus, saints and prophets. In astrology,
            these festivals embark a new beginning in zodiac signs and being
            about tons of opportunities and chances for them in their horoscopes
            to attain desires and objectives.
          </p>
          <p className="">
            Hindu festivals embark a great spiritual as well as religious
            significance, and consist of ancient codes and stories to
            rationalize its importance. Every festival comprises of morning
            bathing before sunrise, worshipping an idol, recite a jaap, prayer,
            mantra or kirtan and follow the day by fasting. These rituals prove
            to be much more than just festivities. They provide a sneak peek
            into our culture, beliefs and history. They narrate the philosophy
            of a nation throughout it course.
          </p>
          <p className="mt-[10px]">
            Its effect can be wholesome in the following manner:
          </p>
          <div className="mt-[10px]">
            <p className="">
              ● Festivals help to create an environment of love, happiness and
              cultural harmony.
            </p>
            <p className="">
              ● It teaches the older and new generation the purpose of life, and
              how beliefs have lead them to lead a glorious life.
            </p>
            <p className="">
              ● They relieve the people from a monotonous routine.
            </p>
            <p className="">
              ● It teaches us to forgive our enemies, eliminate the bad within
              us and embrace each other with an open heart
            </p>
            <p className="">
              ● These days hold a moral, cultural and ethical significance.
            </p>
          </div>
        </div>
        <div className="text-justify">
          <p className="text-center text-[36px] font-bold">
            Why Christmas Is Celebrated On 25th December?
          </p>
          <div className="py-[20px]">
            <p className="">
              In Hinduism, consulting an auspicious time or muhurat before
              commencing any big task, yagna, ritual or ceremony is practiced
              since ancient times. It holds a great significance during the time
              of marriage, fasting during festivals or conducting yagna for a
              ritual. Carrying out the ritual during this period ensures
              happiness, affluence and compatibility. It tells about both
              favorable (choghadiya, hora) to unfavorable time periods (rahu
              kaal) based on the position of constellations in the universe and
              time of sunrise and sunset.
            </p>
            <p className="mt-[10px]">
              Muhurat is said to be a combination of a specific date, time and
              day auspicious to carry out any activity. Hindu Panchang specifies
              a day and date when a festival occurs, and during those hours,
              muhurat represents that specific auspicious period during which a
              native can carry out the rituals, puja or hawans to attain maximum
              benefits. A combination of Vaar (day), Nakshatra (stars), Tithi
              (date), Karan, Yog in a Panchang (Hindu calendar) makes up for a
              favorable time to recite the mantra, start the fast or worship on
              the day of festival. Muhurat proves to be very useful for natives
              who have lost or do not have their kundli or birth chart and need
              remedies to get rid of malefic effects of planets or doshas. One
              attains maximum results during an auspicious muhurat.
            </p>
            <p className="float-right text-[20px] font-bold text-[#DC6563] underline decoration-solid">
              Merry Christmas In 2024
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default FestivalDynamic;
