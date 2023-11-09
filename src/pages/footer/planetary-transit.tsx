import Section from "@/components/Section";
import Hero from "@/components/common/Hero";
import { HomeIcon } from "@heroicons/react/24/solid";
import React from "react";

type Props = {};

const planetary = (props: Props) => {
  return (
    <div className="min-h-screen bg-[url('/assets/horoscope-bg.webp')]">
      <Hero
        icon="/assets/panchang/panchang-hero.png"
        text="  PLANETARY TRANSIT  "
        subText=""
      />
      <div className="bg-[#F5F5F5] py-1">
        <div className="mx-auto flex max-w-7xl items-center space-x-2">
          <HomeIcon className="h-6 w-6 bg-[#D9D9D9] p-1" />
          <p className="bg-[#C6A65A] p-1 px-4 text-[10px] font-medium">
            PLANETARY TRANSIT
          </p>
        </div>
      </div>
      <Section>
        <div className="">
          <p className="mt-[20px] text-center text-3xl font-bold">
            PLANETARY TRANSIT{" "}
          </p>
          <p className="mt-[20px] text-[18px]">
            Astrology is entirely based upon the movement of the celestial
            bodies such as the stars and the planets. These celestial bodies
            take place in the birth chart of the native with their specific
            place. However, the celestial bodies keep on changing their place
            from one position to the other. This same shift of position is what
            is known as the transition of the planets and this transition holds
            the bigger place in the astrology. An astrologer considers the
            transition of the planets and by the same, the astrology prediction
            is made.
          </p>
          <p className="mt-[10px] text-[18px]">
            Celestial bodies are the heart of astrology and Among the
            fundamental components of astrology, planetary transits hold a
            significant place. These transits represent the ongoing dance of
            planets in our solar system as they move through the zodiac,
            creating a dynamic interplay of energies that influence our lives.
            For the same reason, it becomes important to understand the transit
            of the planets to understand the whole mechanisms of astrology. At
            Astrosevatalk we are committed to providing the most accurate and
            precise astrology prediction. In this section today we are going to
            take a jump into the significance of the planetary transit.
          </p>
        </div>

        <div className="mt-[25px]">
          <p className=" text-3xl font-bold">
            Basics of the Planetary Transit{" "}
          </p>
          <p className="mt-[10px] text-[18px]">
            Planetary transit is the backbone fundamental of astrology where
            each planet or the celestial body makes its move around the sun. In
            the same chronology, this movement or the transit of the planet
            happens from one house or the zodiac sign of astrology to the other.
            The planetary transit can be caused by any of the zodiac signs at
            the time. For instance, Jupiter, Saturn and even the Rahu and Ketu
            can cause the planetary transit. The transit caused by the specific
            planet brings specific and variable consequences to each of the
            zodiac signs in astrology. The other thing of consideration here is
            that every planet moves with a variable or a different speed. For
            instance, Saturn is known as the slowest-moving planet and thus it
            stays in a particular zodiac sign for the longest period.
          </p>
        </div>

        <div className="mt-[25px]">
          <p className=" text-3xl font-bold">
            Significance of Planetary Transit{" "}
          </p>
          <p className="mt-[10px] text-[18px]">
            Planetary transit is the key clockwork of the Cosmo or the universe
            and in astrology, it holds all the essence. It is the planetary
            transit which sets the course of all the planets and then these
            planets influence all types of events in the life of natives. In
            other words, it is the planetary transit that brings the whole
            evolution or the transformation of things in the life of natives. It
            is crucial to note here that planetary transit can bring both
            positive and negative results to the lives of natives. The ultimate
            consequences of the planetary transit vary from one zodiac sign to
            the other depending upon the position of the celestial bodies in
            these signs.
          </p>
          <p className="mt-[10px] text-[18px]">
            When the transit of the planet occurs it activates the flow and the
            happening of certain things in the life of natives. The transit can
            be so powerful that it can even influence the overall personality of
            the native. It can determine how the native thinks and feels and the
            overall belief system of the native. For instance, the transit of
            Jupiter, known as the planet of expansion and abundance, through an{" "}
            {`individual's`} natal seventh house of partnerships can signal a
            period of growth and luck in relationships. On the other hand
            transit of Saturn, associated with discipline and responsibility,
            through the first house can prompt personal transformations and a
            sense of duty to {`one's`} self.
          </p>
        </div>

        <div className="mt-[25px] mb-[35px]">
          <p className=" text-3xl font-bold">
            Planetary Transit Calendar at Astrosevatalk{" "}
          </p>
          <p className="mt-[10px] text-[18px]">
            The planatary transit being the core mechanism or the clockwork of
            astrology needs to be followed carefully. For the same purpose,
            Astrosevatalk has come up with this revolutionary planetary transit
            calendar for all the natives and even the astrologers.
            {`Astrosevatalk's`} transit calendar is a personalized guide that
            maps out the anticipated movements of planets in the solar system as
            they interact with an {`individual's`} natal birth chart. It serves
            as a roadmap for understanding when and how planetary energies will
            influence different aspects of {`one's`} life. By using this
            calendar one can simply track and mark the transit of all the
            planets in the astrology. This calendar shows the systematic transit
            of all the planets in a particular year. For instance, one can check
            out the transit of all the planets in the ongoing year 2023.
          </p>
          <div className="mt-[25px]" style={{ textAlign: "center" }}>
            {/* <table
              style={{
                borderCollapse: "collapse",
                width: "66%",
                marginTop: "20px",
                margin: "0 auto",
              }}
            >
              <thead>
                <tr style={{ backgroundColor: "#f2f2f2" }}>
                  <th style={tableHeaderStyle}>Planet</th>
                  <th style={tableHeaderStyle}>Transit Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tableCellStyle}>Sun</td>
                  <td style={tableCellStyle}>30 Days Window</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Mars</td>
                  <td style={tableCellStyle}>45 Days Window</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Mercury</td>
                  <td style={tableCellStyle}>21 Days Window</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Jupiter</td>
                  <td style={tableCellStyle}>12.5 Months Window</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Venus</td>
                  <td style={tableCellStyle}>26 Days Window</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Saturn</td>
                  <td style={tableCellStyle}>2.5 Years Window</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Rahu/Ketu</td>
                  <td style={tableCellStyle}>19 Months Window</td>
                </tr>
                <tr>
                  <td style={tableCellStyle}>Moon</td>
                  <td style={tableCellStyle}>2.25 Days Window </td>
                </tr>
              </tbody>
            </table> */}
            <table className="mx-auto mt-20 w-2/3 border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border p-2">Planet</th>
                  <th className="border p-2">Transit Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border">
                  <td className="border p-2">Sun</td>
                  <td className="border p-2">30 Days Window</td>
                </tr>
                <tr className="border">
                  <td className="border p-2">Mars</td>
                  <td className="border p-2">45 Days Window</td>
                </tr>
                <tr className="border">
                  <td className="border p-2">Mercury</td>
                  <td className="border p-2">21 Days Window</td>
                </tr>
                <tr className="border">
                  <td className="border p-2">Jupiter</td>
                  <td className="border p-2">12.5 Months Window</td>
                </tr>
                <tr className="border">
                  <td className="border p-2">Venus</td>
                  <td className="border p-2">26 Days Window</td>
                </tr>
                <tr className="border">
                  <td className="border p-2">Saturn</td>
                  <td className="border p-2">2.5 Years Window</td>
                </tr>
                <tr className="border">
                  <td className="border p-2">Rahu/Ketu</td>
                  <td className="border p-2">19 Months Window</td>
                </tr>
                <tr className="border">
                  <td className="border p-2">Moon</td>
                  <td className="border p-2">2.25 Days Window</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-[10px] text-[18px]">
            So feel free to get in touch with Astrosevatalk to mark the movement
            for the transition of all the planets. At Astrosevatalk we keep the
            secret of the cosmos simple and easy to understand for all the
            natives. One can also chat with astrologers at {`Astrosevatalk's`}
            portal to get personalized results of the planetary transit in life.
          </p>
        </div>
      </Section>
    </div>
  );
};
const tableHeaderStyle = {
  padding: "10px",
  border: "1px solid #ccc",
  textAlign: "left",
  width: "50%",
};

const tableCellStyle = {
  padding: "10px",
  border: "1px solid #ccc",
  textAlign: "left",
  width: "50%",
};
export default planetary;
