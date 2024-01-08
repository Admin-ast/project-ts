import React from "react";
import Section from "../Section";
import Card from "./Card";
import Sidebar from "./Sidebar";

type Props = {
  head: string;
};

const Festival = ({ head }: Props) => {
  const cardData = [
    {
      id: 1,
      imageSrc: "/assets/festival/festival.png",
      title: "Merry Christmas",
      content:
        "Christmas is the day when Christians celebrate the birth of Jesus Christ. The birth date of Lord Jesus is quite....",
    },
    {
      id: 2,
      imageSrc: "/assets/festival/festival.png",
      title: "Card 1",
      content: "Card content 1",
    },
    {
      id: 3,
      imageSrc: "/assets/festival/festival.png",
      title: "Card 1",
      content: "Card content 1",
    },
    {
      id: 4,
      imageSrc: "/assets/festival/festival.png",
      title: "Card 1",
      content: "Card content 1",
    },
    {
      id: 5,
      imageSrc: "/assets/festival/festival.png",
      title: "Card 1",
      content: "Card content 1",
    },
    {
      id: 6,
      imageSrc: "/assets/festival/festival.png",
      title: "Card 1",
      content: "Card content 1",
    },
    {
      id: 7,
      imageSrc: "/assets/festival/festival.png",
      title: "Card 1",
      content: "Card content 1",
    },
    {
      id: 8,
      imageSrc: "/assets/festival/festival.png",
      title: "Card 1",
      content: "Card content 1",
    },
    {
      id: 9,
      imageSrc: "/assets/festival/festival.png",
      title: "Card 1",
      content: "Card content 1",
    },
    {
      id: 10,
      imageSrc: "/assets/festival/festival.png",
      title: "Card 1",
      content: "Card content 1",
    },
    // Add more card data as needed
    // ...
  ];

  return (
    <div className="pb-[30px] ">
      <Section>
        <div className="">
          <p className="text-center text-[48px] font-bold">{head}</p>
          <div className="mt-[20px]">
            <p className="">
              Hindu religion is known for numerous festivals and celebrations.
              Since ancient times, Indian festivals are undergoing
              transformations and gaining new meanings. Festivals of India had
              always been a way to gain more prosperity in life and
              strengthening the bond with loved ones. That is why, we are here
              with Hindu Panchang containing the details of all the Hindu
              festivals observed in India and around the globe. It will help you
              in celebrating all these wonderful events during the Shubh
              Muhurat.
            </p>
          </div>
          <div className="mt-[30px] flex items-center justify-center bg-white  shadow-xl">
            <p className="text-[40px] text-[#DC6563]">
              Today’s Festival: Merry Christmas
            </p>
          </div>
        </div>
      </Section>

      <div className="">
        {/* ------------------------Card____________________________________________ */}
        {/* <Section> */}
        <div className="md:flex md:gap-[50px] lg:flex lg:gap-[77px]">
          <div className="md:ml-[2%] lg:ml-[10%] lg:w-[80%]">
            <div className="container mx-auto my-8">
              <div className="festcard grid  gap-8 md:grid-cols-1  lg:grid-cols-2">
                {cardData.map((card) => (
                  <Card
                    key={card.id}
                    imageSrc={card.imageSrc}
                    content={
                      <div>
                        <p className="mb-2 font-bold">{card.title}</p>
                        <p className="text-gray-700">{card.content}</p>
                      </div>
                    }
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="my-8 md:mr-[2%] lg:mr-[3%] lg:w-1/4">
            <Sidebar />
          </div>
        </div>
        {/* </Section> */}

        {/* -------------------------------------SideBar-------------------------------------------- */}
      </div>
      <div className="px-2 text-justify md:px-[20px] lg:px-[150px]">
        <p className="">
          Hindu festivals are observed on the basis of movements and position of
          Moon (Lunar Month) & Sun (Solar Month) in the celestial belt. The
          date, time and auspicious muhurat for HIndu festivals can differ for
          two cities on the basis of location due to a difference in time zone.
        </p>
        <p className="">
          They are widely known as Tyohar or Parva, i.e.when the day is
          celebrated and Hindu Vrat, i.e when one fasts during the day. On most
          of the festivals as per Hindu Calendar, fasting is significantly
          included, where one fasts for a whole day or by the time Moon appears
          in the sky. Since the ancient times, Hindu Calendar is used to measure
          time and day and marks the incoming of important days, muhurats and
          festivals.
        </p>
        <div className="py-[30px] text-justify">
          <p className="text-center text-[36px] font-bold">
            Significance of Hindu Festivals
          </p>
          <p className="">
            Festivals in India are auspicious affairs where people gather
            together to celebrate the festivities and share bundles of joy, love
            and well-wishing. It comprises of a series of joyful events marking
            the passage of rites and rituals during a lifetime. Vibrant
            feelings, colors, festivities and music make up the whole ambience,
            bringing it alive while adding to the enthusiasm, excitement and
            ritualistic nature .
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
            of a nation throughout it course.{" "}
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
        <div className="pb-[30px] text-justify">
          <p className="text-center text-[36px] font-bold">
            Significance of Muhurat During Festivals
          </p>
          <div className="">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Festival;
