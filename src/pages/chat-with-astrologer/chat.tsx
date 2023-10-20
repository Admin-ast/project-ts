import AstrologerDetails from "@/components/appoinments/AstrologerDetails";
import MoreAstrologer from "@/components/appoinments/MoreAstrologer";
import Chat from "@/components/chat/Chat";
import React from "react";

type Props = {};

const chat = (props: Props) => {
  return (
    <div className="lg:flex">
      <MoreAstrologer />
      <Chat className="" />
      <AstrologerDetails
        name="Anupam"
        speciality="Vedic, Vastu, Face reading "
        rate="Rate your experience"
        language="English, Hindi, Punjabi "
        experience=" 3 years"
        className=""
      />
    </div>
  );
};

export default chat;
