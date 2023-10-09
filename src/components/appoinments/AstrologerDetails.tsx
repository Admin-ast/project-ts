import Image from "next/image";
import React from "react";
import { Button } from "../forms";

type Props = {
  // id: number;
  // src: string;
  // name: string;
  // speciality: any;
  // languages: any;
  // experience: string;
};
const astrologerDetail = [
  {
    id: 1,
    src: "/assets/admin/Dashboard_image.png",
    name: "Anupam",
    speciality: "Vedic, Vastu, Face reading",
    languages: "English,Hindi,Punjabi",
    experience: "3 years",
  },
];

const AstrologerDetails = (props: Props) => {
  return (
    <div className="lg:w-1/3  ">
      {astrologerDetail.map((item, index) => (
        <div key={index} className="">
          <div className="flex justify-center">
            <Image
              src={item.src}
              alt={item.name}
              width={168.333}
              height={182.996}
              className=""
            />
          </div>

          <p className="flex justify-center text-[32px] font-bold">
            {item.name}
          </p>

          <div className="text-center font-[Roboto] text-[22px]">
            <p className="">{item.speciality}</p>
            <p className="">{item.languages}</p>
            <p className="">Experience:{item.experience}</p>
          </div>
        </div>
      ))}

      <Button
        btnText="Rate Your experience"
        className="mt-[58px] bg-gradient-to-b from-[#ff623a] to-[#ff1c0e] text-[22px] text-white lg:w-[215px]"
      />
    </div>
  );
};

export default AstrologerDetails;
