import ConnectCard from "@/components/common/ConnectCard";
import Section from "@/components/Section";
import React, { useEffect, useState } from "react";
import PrimaryTable from "./PrimaryTable";
import { postFetcher } from "@/service";

type Props = {};

// const basicDetails = {
//   Name: "Satyam Dahlan",
//   Date: "26/11/1997",
//   Time: "03:22 PM",
//   Place: "Begusrai, Bihar, India",
//   Latitude: "25.42",
//   Longitude: "86.13",
//   TimeZone: "GMT+5.5",
//   Sunrise: "6:11:12",
//   Sunset: "16:5:45",
//   Ayanamsha: "23.82775",
// };

const panchangDetails = {
  Tithi: "KrishnaDwadashi",
  Karan: "Kaulav",
  Yog: "Ayushman",
  Nakshatra: "Chitra",
};

// const avakhadaDetails = {
//   Varna: "Shudra",
//   Vashya: "Nara",
//   Yoni: "Vyaghra",
//   Gan: "Rakshasa",
//   Nadi: "Madhya",
//   Sign: "Virgo",
//   "Sign Lord": "Mercury",
//   "Nakshatra-Charan": "Chitra",
//   Yog: "Ayushman",
//   Karan: "Kaulav",
//   Tithi: "KrishnaDwadashi",
//   Yunja: "Madhya",
//   Tatva: "Earth",
//   Name: "alphabet	Po",
//   Paya: "Silver",
// };

function Basic({}: Props) {
  const [basicDetails, setBasicDetails] = useState<any>({});
  const [avakhadaDetails, setAvakhadaDetails] = useState<any>({});
  // const basicDetails = JSON.parse(localStorage.getItem("kundliData"));

  useEffect(() => {
    let bodyData: any;
    if (typeof window !== "undefined") {
      console.log("kundilll", localStorage.getItem("kundliData"));
      bodyData = localStorage.getItem("kundliData");
    }
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

    const birthResponse = async () => {
      const result = await postFetcher("/kundli/birthDetails", bodyData);
      setBasicDetails(JSON.parse(result?.response ?? ""));
    };

    const avakhadaResponse = async () => {
      const result = await postFetcher("/kundli/avakhadaDetails", bodyData);
      setAvakhadaDetails(JSON.parse(result?.response ?? ""));
    };
    birthResponse();
    avakhadaResponse();
  }, []);

  // console.log(basicDetails?.Latitude);
  return (
    <div className="space-y-6">
      <Section>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="font-medium">Basic Details</p>
              <PrimaryTable details={basicDetails} />
            </div>
            <div className="space-y-2">
              <p className="font-medium">Panchang Details</p>
              <PrimaryTable details={panchangDetails} />
            </div>
          </div>
          <div className="space-y-2">
            <p className="font-medium">Avakhada Details</p>
            <PrimaryTable details={avakhadaDetails} />
          </div>
        </div>
      </Section>
      <ConnectCard />
    </div>
  );
}

export default Basic;
