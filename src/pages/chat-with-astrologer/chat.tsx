import AstrologerDetails from "@/components/appoinments/AstrologerDetails";
import MoreAstrologer from "@/components/appoinments/MoreAstrologer";
import Chat from "@/components/chat/Chat";
import React from "react";

type Props = {};

const chat = (props: Props) => {
  return (
    <div className="lg:flex">
      <MoreAstrologer />
      <Chat />
      <AstrologerDetails
        name="Anupam"
        speciality="Vedic, Vastu, Face reading "
        rate="Rate your experience"
        language="English, Hindi, Punjabi "
        experience=" 3 years"
      />
    </div>
  );
};

export default chat;
