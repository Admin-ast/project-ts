import Section from "@/components/Section";
import { postFetcher } from "@/service";
import React, { Key, useEffect, useState } from "react";
import SecondaryTable from "./SecondaryTable";
import { toast } from "react-toastify";

type Props = {};

// const planetDetails = [
//   {
//     id: 0,
//     name: "Sun",
//     fullDegree: 25.942159835470008,
//     normDegree: 25.942159835470008,
//     speed: 0.9660374737416302,
//     isRetro: "false",
//     sign: "Aries",
//     signLord: "Mars",
//     nakshatra: "Bharni",
//     nakshatraLord: "Venus",
//     nakshatra_pad: 4,
//     house: 8,
//     is_planet_set: false,
//     planet_awastha: "Mrit",
//   },
//   {
//     id: 1,
//     name: "Moon",
//     fullDegree: 214.53422603218604,
//     normDegree: 4.534226032186041,
//     speed: 11.874164238898127,
//     isRetro: "false",
//     sign: "Scorpio",
//     signLord: "Mars",
//     nakshatra: "Anuradha",
//     nakshatraLord: "Saturn",
//     nakshatra_pad: 1,
//     house: 3,
//     is_planet_set: false,
//     planet_awastha: "Mrit",
//   },
//   {
//     id: 2,
//     name: "Mars",
//     fullDegree: 320.96534356528184,
//     normDegree: 20.96534356528184,
//     speed: 0.7442923466046811,
//     isRetro: "false",
//     sign: "Aquarius",
//     signLord: "Saturn",
//     nakshatra: "Purva Bhadrapad",
//     nakshatraLord: "Jupiter",
//     nakshatra_pad: 1,
//     house: 6,
//     is_planet_set: false,
//     planet_awastha: "Vridha",
//   },
//   {
//     id: 3,
//     name: "Mercury",
//     fullDegree: 15.72683867370322,
//     normDegree: 15.72683867370322,
//     speed: -0.452249849424365,
//     isRetro: "true",
//     sign: "Aries",
//     signLord: "Mars",
//     nakshatra: "Bharni",
//     nakshatraLord: "Venus",
//     nakshatra_pad: 1,
//     house: 8,
//     is_planet_set: true,
//     planet_awastha: "Yuva",
//   },
//   {
//     id: 4,
//     name: "Jupiter",
//     fullDegree: 74.90477416799895,
//     normDegree: 14.904774167998951,
//     speed: 0.18272861878169017,
//     isRetro: "false",
//     sign: "Gemini",
//     signLord: "Mercury",
//     nakshatra: "Ardra",
//     nakshatraLord: "Rahu",
//     nakshatra_pad: 3,
//     house: 10,
//     is_planet_set: false,
//     planet_awastha: "Yuva",
//   },
//   {
//     id: 5,
//     name: "Venus",
//     fullDegree: 343.5248685497754,
//     normDegree: 13.52486854977542,
//     speed: 1.1320788911206596,
//     isRetro: "false",
//     sign: "Pisces",
//     signLord: "Jupiter",
//     nakshatra: "Uttra Bhadrapad",
//     nakshatraLord: "Saturn",
//     nakshatra_pad: 4,
//     house: 7,
//     is_planet_set: false,
//     planet_awastha: "Yuva",
//   },
//   {
//     id: 6,
//     name: "Saturn",
//     fullDegree: 271.5876139487146,
//     normDegree: 1.5876139487145906,
//     speed: -0.009151894742126864,
//     isRetro: "true",
//     sign: "Capricorn",
//     signLord: "Saturn",
//     nakshatra: "Uttra Shadha",
//     nakshatraLord: "Sun",
//     nakshatra_pad: 2,
//     house: 5,
//     is_planet_set: false,
//     planet_awastha: "Mrit",
//   },
//   {
//     id: 7,
//     name: "Rahu",
//     fullDegree: 287.87296303528467,
//     normDegree: 17.87296303528467,
//     speed: -0.052992022155717154,
//     isRetro: "true",
//     sign: "Capricorn",
//     signLord: "Saturn",
//     nakshatra: "Shravan",
//     nakshatraLord: "Moon",
//     nakshatra_pad: 3,
//     house: 5,
//     is_planet_set: false,
//     planet_awastha: "Yuva",
//   },
//   {
//     id: 8,
//     name: "Ketu",
//     fullDegree: 107.87296303528467,
//     normDegree: 17.87296303528467,
//     speed: -0.052992022155717154,
//     isRetro: "true",
//     sign: "Cancer",
//     signLord: "Moon",
//     nakshatra: "Ashlesha",
//     nakshatraLord: "Mercury",
//     nakshatra_pad: 1,
//     house: 11,
//     is_planet_set: false,
//     planet_awastha: "Yuva",
//   },
//   {
//     id: 9,
//     name: "Ascendant",
//     fullDegree: 174.75135734787293,
//     normDegree: 24.751357347872926,
//     speed: 0,
//     isRetro: false,
//     sign: "Virgo",
//     signLord: "Mercury",
//     nakshatra: "Chitra",
//     nakshatraLord: "Mars",
//     nakshatra_pad: 1,
//     house: 1,
//     is_planet_set: false,
//     planet_awastha: "--",
//   },
// ];

function Kundli({}: Props) {
  const [planetDetails, setPlanetDetails] = useState<any>([]);
  useEffect(() => {
    // let data = JSON.parse(localStorage.getItem("kundliData") ?? "");
    // let bodyData: any;
    // if (typeof window !== "undefined") {
    //   bodyData = JSON.stringify({
    //     ...data,
    //     lat: "19.2",
    //     lon: "25.2",
    //     tzone: "5.5",
    //   });
    // }

    const planetResponse = async () => {
      // const bodyData = JSON.stringify({
      //   day: "10",
      //   month: "5",
      //   year: "1990",
      //   hour: "19",
      //   min: "55",
      //   lat: "19.2",
      //   lon: "25.2",
      //   tzone: "5.5",
      // });
      let bodyData: any;
      if (typeof window !== "undefined") {
        console.log("kundilll", localStorage.getItem("kundliData"));
        bodyData = localStorage.getItem("kundliData");
      }
      const result = await postFetcher("/kundli/planets", bodyData);
      console.log(result);
      if (result.status) {
        setPlanetDetails(JSON.parse(result?.res ?? ""));
      } else {
        toast.error(result.msg);
      }
    };
    planetResponse();
  }, []);

  console.log(planetDetails);

  return (
    <Section>
      <p className="mb-2 font-medium">Planets</p>
      <div className="relative overflow-x-auto rounded-2xl border border-gray-400">
        <table className="w-full whitespace-normal text-left text-sm">
          <thead className=" text-gray-900">
            <tr className="whitespace-nowrap border-b border-gray-400 bg-[#FFF7E5] text-sm font-semibold">
              <th className="border-r border-gray-400 px-6 py-3">Planet</th>
              <th className="border-r border-gray-400 px-6 py-3">Sign</th>
              <th className="border-r border-gray-400 px-6 py-3">Sign Lord</th>
              <th className="border-r border-gray-400 px-6 py-3">Nakshatra</th>
              <th className="border-r border-gray-400 px-6 py-3">Naksh Lord</th>
              <th className="border-r border-gray-400 px-6 py-3">Degree</th>
              <th className="border-r border-gray-400 px-6 py-3">Retro(R)</th>
              <th className="border-r border-gray-400 px-6 py-3">Combust</th>
              <th className="border-r border-gray-400 px-6 py-3">Avastha</th>
              <th className="border-r border-gray-400 px-6 py-3">House</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {planetDetails.map((item: any, index: Key) => (
              <tr
                key={index}
                className={`${
                  index !== planetDetails.length - 1
                    ? "border-b"
                    : "border-none"
                } border-b border-gray-400 bg-white`}
              >
                <td className="border-r border-gray-400 px-6 py-4">
                  {item.name}
                </td>
                <td className="border-r border-gray-400 px-6 py-4">
                  {item.sign}
                </td>
                <td className="border-r border-gray-400 px-6 py-4">
                  {item.signLord}
                </td>
                <td className="border-r border-gray-400 px-6 py-4">
                  {item.nakshatra}
                </td>
                <td className="border-r border-gray-400 px-6 py-4">
                  {item.nakshatraLord}
                </td>
                <td className="border-r border-gray-400 px-6 py-4">
                  {item.normDegree}
                </td>
                <td className="border-r border-gray-400 px-6 py-4">
                  {item.isRetro ? "Retro" : "Direct"}
                </td>
                <td className="border-r border-gray-400 px-6 py-4">No</td>
                <td className="border-r border-gray-400 px-6 py-4">
                  {item.planet_awastha}
                </td>
                <td className="border-r border-gray-400 px-6 py-4">
                  {item.house}
                </td>
                <td className="px-6 py-4">--</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

export default Kundli;
