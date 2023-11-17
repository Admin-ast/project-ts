import Section from "@/components/Section";
import Appointments from "@/components/home/Appointments";
import Services from "@/components/home/Services";
import { postFetcher } from "@/service";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { returnMonth } from "../../../utils";
function MatchMakingDetails() {
  const [manglikDosha, setManglikDosha] = useState<any>({});
  const [ashtakootPoints, setAshtakootPoints] = useState<any>({});
  const [matchingDetails, setMatchingDetails] = useState<any>({});
  const styles = {
    display: "flex",
    "justify-content": "space-between",
  };
  const attr = [
    "varna",
    "vashya",
    "tara",
    "yoni",
    "maitri",
    "gan",
    "bhakut",
    "nadi",
    "total",
  ];
  useEffect(() => {
    let bodyData: any;
    if (typeof window !== "undefined") {
      // console.log("kundilll", localStorage.getItem("match-making"));
      bodyData = localStorage.getItem("match-making");
      const newData = JSON.parse(bodyData);
      setMatchingDetails(newData);
    }
    const ashtakoot = async () => {
      const result = await postFetcher("/match_ashtakoot_points", bodyData);
      if (result?.status) {
        setAshtakootPoints(JSON.parse(result?.res ?? ""));
      } else {
        toast.error(result.msg);
      }
    };

    const manglikDosha = async () => {
      const result = await postFetcher("/match_manglik_report", bodyData);
      console.log(JSON.parse(result ? result.res : ""));
      if (result?.status) {
        setManglikDosha(JSON.parse(result?.res ?? ""));
      } else {
        toast.error(result.msg);
      }
    };
    ashtakoot();
    manglikDosha();
  }, []);

  return (
    <>
      <div className="py-3 text-center text-[36px] font-bold">
        Kundli Matching Report
      </div>
      {/* <div className="flex justify-center gap-10">
        <div className="rounded border bg-[#FFF7E5] px-5 py-2 text-black">
        {matchingDetails && matchingDetails["m_name"] ?  matchingDetails["m_name"] : "-"}
        </div>
        <div className="rounded border bg-[#FFF7E5] px-5  py-2 text-black">
        {matchingDetails && matchingDetails["f_name"] ?  matchingDetails["f_name"] : "-"}
        </div>
      </div> */}
      <Section>
        <div className="mx-auto my-5 justify-center gap-4 md:flex md:w-[80%]">
          <div className="mb-5 w-full  rounded-xl border md:mb-0">
            <div className="rounded-t-xl bg-[#FFF7E5] p-3 text-[black] ">
              {`Boy's Details`}
            </div>
            <div className="flex justify-start gap-10  ">
              <div className="flex flex-col justify-between gap-4 p-2 [&>*]:font-bold">
                <div>Name:</div>
                <div>Birth Date & Time:</div>
                <div>Birth Place:</div>
                <div>Janam Rashi:</div>
              </div>
              <div className="flex flex-col justify-between gap-4 p-2">
                <div>{matchingDetails && matchingDetails["m_name"]}</div>
                <div>
                  {matchingDetails && matchingDetails["m_day"]
                    ? matchingDetails["m_day"]
                    : "-"}{" "}
                  {matchingDetails && matchingDetails["m_month"]
                    ? returnMonth(matchingDetails["m_month"])
                    : "-"}{" "}
                  {matchingDetails && matchingDetails["m_year"]
                    ? matchingDetails["m_year"]
                    : "-"}{" "}
                  {" | "}
                  {matchingDetails && matchingDetails["m_hour"]
                    ? matchingDetails["m_hour"]
                    : "-"}{" "}
                  {":"}
                  {matchingDetails && matchingDetails["m_min"]
                    ? matchingDetails["m_min"]
                    : "-"}
                </div>
                <div>
                  {matchingDetails && matchingDetails["m_place"]
                    ? matchingDetails["m_place"]
                    : "-"}
                </div>
                <div>rashi</div>
              </div>
            </div>
          </div>
          <div className="w-full rounded-xl  border">
            <div className="rounded-t-xl bg-[#FFF7E5] p-3 text-[black] ">
              {`Girl's Details`}
            </div>
            <div className="flex justify-start gap-10  ">
              <div className="flex flex-col justify-between gap-4 p-2 [&>*]:font-bold">
                <div>Name:</div>
                <div>Birth Date & Time:</div>
                <div>Birth Place:</div>
                <div>Janam Rashi:</div>
              </div>
              <div className="flex flex-col justify-between gap-4 p-2">
                <div>
                  {matchingDetails && matchingDetails["f_name"]
                    ? matchingDetails["f_name"]
                    : "-"}
                </div>
                <div>
                  {matchingDetails && matchingDetails["f_day"]
                    ? matchingDetails["f_day"]
                    : "-"}{" "}
                  {matchingDetails && matchingDetails["f_month"]
                    ? returnMonth(matchingDetails["f_month"])
                    : "-"}{" "}
                  {matchingDetails && matchingDetails["f_year"]
                    ? matchingDetails["f_year"]
                    : "-"}{" "}
                  {" | "}
                  {matchingDetails && matchingDetails["f_hour"]
                    ? matchingDetails["f_hour"]
                    : "-"}{" "}
                  {":"}
                  {matchingDetails && matchingDetails["f_min"]
                    ? matchingDetails["f_min"]
                    : "-"}
                </div>
                <div>
                  {matchingDetails && matchingDetails["f_place"]
                    ? matchingDetails["f_place"]
                    : "-"}
                </div>
                <div>rashi</div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="mx-auto mb-5 text-[23px] font-bold md:w-[80%]">
          Match Ashtakoot Points
        </div>
        <div className="mx-auto overflow-x-auto text-left md:w-[80%]">
          <table className="w-full gap-3  border">
            <thead>
              <tr className="whitespace-nowrap border bg-[#FFF7E5] [&>*]:border-r [&>*]:px-5 [&>*]:py-3">
                <th>Attribute</th>
                <th>Male</th>
                <th>Female</th>
                <th>Received</th>
                <th>Out of</th>
                <th>Area of Life</th>
                <th>Description</th>
                <th>Meaning</th>
              </tr>
            </thead>
            <tbody>
              {attr &&
                attr.map((item: any, index: any) => {
                  return (
                    <>
                      <tr
                        key={index}
                        className="text-sm [&>*]:border-r [&>*]:py-3 [&>*]:px-5 [&>*]:odd:bg-[#FFF7E5]"
                      >
                        <td className="font-semibold capitalize">{item}</td>
                        <td>
                          {ashtakootPoints &&
                            ashtakootPoints[item]?.male_koot_attribute}
                        </td>
                        <td>
                          {ashtakootPoints &&
                            ashtakootPoints[item]?.female_koot_attribute}
                        </td>
                        <td>
                          {ashtakootPoints &&
                            ashtakootPoints[item]?.received_points}
                        </td>
                        <td>
                          {ashtakootPoints &&
                            ashtakootPoints[item]?.total_points}
                        </td>
                        <td>
                          {ashtakootPoints && ashtakootPoints[item]?.areaOflife}
                        </td>
                        <td>
                          {ashtakootPoints &&
                            ashtakootPoints[item]?.description}
                        </td>
                        <td>
                          {ashtakootPoints && ashtakootPoints[item]?.meaning}
                        </td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
          </table>
        </div>
      </Section>
      <Section>
        <div className="mx-auto md:w-[80%]">
          <div className="my-3 rounded border bg-color_1 p-3 text-black">
            Ashtakoot Matching between male and female is{" "}
            {ashtakootPoints && ashtakootPoints["total"]?.received_points}{" "}
            points out of{" "}
            {ashtakootPoints && ashtakootPoints["total"]?.total_points}
            points.
            {/* This is the medium score. Hence, marriage can be approved. */}
          </div>
          <div className="text-[23px] font-bold">Dosha</div>
          <div className="my-5 justify-center gap-4 md:flex ">
            <div className="mb-3  w-full  rounded-xl border p-3 text-center md:mb-0">
              <div className="font-bold">Ashtakoot </div>
              <div>
                {ashtakootPoints && ashtakootPoints["total"]?.received_points}/
                {ashtakootPoints && ashtakootPoints["total"]?.total_points}
              </div>
            </div>
            <div className="w-full rounded-xl  border p-3 text-center">
              <div className="font-bold">Manglik Match </div>
              <div>
                {manglikDosha &&
                manglikDosha.conclusion &&
                manglikDosha.conclusion.match
                  ? "Yes"
                  : "No"}
              </div>
            </div>
          </div>
          <div className="my-3 rounded border bg-color_1 p-3 text-black">
            {manglikDosha &&
              manglikDosha.conclusion &&
              manglikDosha.conclusion.report}
          </div>
        </div>
        <Appointments />
        <Services head="Our Services" />
      </Section>
    </>
  );
}

export default MatchMakingDetails;
