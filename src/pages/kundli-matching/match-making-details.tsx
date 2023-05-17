import Section from "@/components/Section";
import Appointments from "@/components/home/Appointments";
import Services from "@/components/home/Services";
import React from "react";
function MatchMakingDetails() {
  const styles = {
    display: "flex",
    "justify-content": "space-between",
  };

  const ashtakootPoints = [
    {
      Attribute: "varna",
      male: "Vaishya",
      female: "Shudra",
      Received: "1",
      outOf: "1",
      areaOflife: "Natural Refinement / Work",
      description:
        "This combination represents the best understanding of work related feelings and emotions between the pair.",
      meaning:
        "Varna refers to the mental compatibility of the two persons involved. It holds nominal effect in the matters of marriage compatibility.",
    },
    {
      Attribute: "varna",
      male: "Vaishya",
      female: "Shudra",
      Received: "1",
      outOf: "1",
      areaOflife: "Natural Refinement / Work",
      description:
        "This combination represents the best understanding of work related feelings and emotions between the pair.",
      meaning:
        "Varna refers to the mental compatibility of the two persons involved. It holds nominal effect in the matters of marriage compatibility.",
    },
    {
      Attribute: "varna",
      male: "Vaishya",
      female: "Shudra",
      Received: "1",
      outOf: "1",
      areaOflife: "Natural Refinement / Work",
      description:
        "This combination represents the best understanding of work related feelings and emotions between the pair.",
      meaning:
        "Varna refers to the mental compatibility of the two persons involved. It holds nominal effect in the matters of marriage compatibility.",
    },
    {
      Attribute: "varna",
      male: "Vaishya",
      female: "Shudra",
      Received: "1",
      outOf: "1",
      areaOflife: "Natural Refinement / Work",
      description:
        "This combination represents the best understanding of work related feelings and emotions between the pair.",
      meaning:
        "Varna refers to the mental compatibility of the two persons involved. It holds nominal effect in the matters of marriage compatibility.",
    },
    {
      Attribute: "varna",
      male: "Vaishya",
      female: "Shudra",
      Received: "1",
      outOf: "1",
      areaOflife: "Natural Refinement / Work",
      description:
        "This combination represents the best understanding of work related feelings and emotions between the pair.",
      meaning:
        "Varna refers to the mental compatibility of the two persons involved. It holds nominal effect in the matters of marriage compatibility.",
    },
    {
      Attribute: "varna",
      male: "Vaishya",
      female: "Shudra",
      Received: "1",
      outOf: "1",
      areaOflife: "Natural Refinement / Work",
      description:
        "This combination represents the best understanding of work related feelings and emotions between the pair.",
      meaning:
        "Varna refers to the mental compatibility of the two persons involved. It holds nominal effect in the matters of marriage compatibility.",
    },
    {
      Attribute: "varna",
      male: "Vaishya",
      female: "Shudra",
      Received: "1",
      outOf: "1",
      areaOflife: "Natural Refinement / Work",
      description:
        "This combination represents the best understanding of work related feelings and emotions between the pair.",
      meaning:
        "Varna refers to the mental compatibility of the two persons involved. It holds nominal effect in the matters of marriage compatibility.",
    },
    {
      Attribute: "varna",
      male: "Vaishya",
      female: "Shudra",
      Received: "1",
      outOf: "1",
      areaOflife: "Natural Refinement / Work",
      description:
        "This combination represents the best understanding of work related feelings and emotions between the pair.",
      meaning:
        "Varna refers to the mental compatibility of the two persons involved. It holds nominal effect in the matters of marriage compatibility.",
    },
    {
      Attribute: "varna",
      male: "Vaishya",
      female: "Shudra",
      Received: "1",
      outOf: "1",
      areaOflife: "Natural Refinement / Work",
      description:
        "This combination represents the best understanding of work related feelings and emotions between the pair.",
      meaning:
        "Varna refers to the mental compatibility of the two persons involved. It holds nominal effect in the matters of marriage compatibility.",
    },
    {
      Attribute: "Total",
      Received: "23",
      outOf: "23",
    },
  ];
  return (
    <>
      <div className="py-3 text-center text-[36px] font-bold">
        Kundli Matching Report
      </div>
      <div className="flex justify-center gap-10">
        <div className="rounded border bg-[#FFF7E5] px-5 py-2 text-black">
          Ankit
        </div>
        <div className="rounded border bg-[#FFF7E5] px-5  py-2 text-black">
          Ankit
        </div>
      </div>
      <Section>
        <div className="mx-auto my-5 justify-center gap-4 md:flex md:w-[80%]">
          <div className="mb-5 w-full  rounded-xl border md:mb-0">
            <div className="rounded-t-xl bg-[#FFF7E5] p-3 text-[black] ">
              Basic Details
            </div>
            <div className="flex justify-start gap-10  ">
              <div className="[&>*]:p-2 [&>*]:font-bold">
                <div>Name:</div>
                <div>Birth Date & Time:</div>
                <div>Birth Place:</div>
                <div>Janam Rashi:</div>
              </div>
              <div className="[&>*]:p-2">
                <div>Ankit</div>
                <div>date</div>
                <div>Delhi</div>
                <div>rashi</div>
              </div>
            </div>
          </div>
          <div className="w-full rounded-xl  border">
            <div className="rounded-t-xl bg-[#FFF7E5] p-3 text-[black] ">
              Basic Details
            </div>
            <div className="flex justify-start gap-10  ">
              <div className="[&>*]:p-2 [&>*]:font-bold">
                <div>Name:</div>
                <div>Birth Date & Time:</div>
                <div>Birth Place:</div>
                <div>Janam Rashi:</div>
              </div>
              <div className="[&>*]:p-2">
                <div>Ankit</div>
                <div>date</div>
                <div>Delhi</div>
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
              {ashtakootPoints.map((item, index) => {
                return (
                  <>
                    <tr
                      key={index}
                      className="text-sm [&>*]:border-r [&>*]:py-3 [&>*]:px-5 [&>*]:odd:bg-[#FFF7E5]"
                    >
                      <td>{item.Attribute}</td>
                      <td>{item.male}</td>
                      <td>{item.female}</td>
                      <td>{item.Received}</td>
                      <td>{item.outOf}</td>
                      <td>{item.areaOflife}</td>
                      <td>{item.description}</td>
                      <td>{item.meaning}</td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
          <div className="my-3 rounded border bg-color_1 p-3 text-black">
            Ashtakoot Matching between male and female is 18.5 points out of 36
            points. This is the medium score. Hence, marriage can be approved.
          </div>
        </div>
      </Section>
      <Section>
        <div className="mx-auto md:w-[80%]">
          <div className="text-[23px] font-bold">Dosha</div>
          <div className="my-5 justify-center gap-4 md:flex ">
            <div className="mb-3  w-full  rounded-xl border p-3 text-center md:mb-0">
              <div className="font-bold">Ashtakoot </div>
              <div>18.5/36</div>
            </div>
            <div className="w-full rounded-xl  border p-3 text-center">
              <div className="font-bold">Manglik Match </div>
              <div>No</div>
            </div>
          </div>
          <div className="my-3 rounded border bg-color_1 p-3 text-black">
            Both the bride and the groom have no mangal dosh, but the overall
            matching points represent an average match. Marriage is preffered
            but only after consulting an astrologer on how to make the most out
            of this pair combination.Both boy and girl are not Manglik, which
            does not lead to any problems.Although Girl is manglik but it is
            getting cancelled due to the following reasons: ■ Mars is combusted
            by Sun.
          </div>
        </div>
        <Appointments />
        <Services />
      </Section>
    </>
  );
}

export default MatchMakingDetails;
