import React from "react";
import AstrologerDesc from "../talk-to-astrologer/AstrologerDesc";
import AstrologerDetails from "../appoinments/AstrologerDetails";
import ChatBox from "../Main Admin/management/chat support/ChatBox";
import Chat from "../chat/Chat";
import Middle from "./Middle";
import ChatBubble from "../admin/support chat/chat with own assistant/ChatBubble";

type Props = {};

const LiveAstroCall = (props: Props) => {
  return (
    <div className="px-8 lg:flex">
      <AstrologerDetails
        name="Anupam"
        speciality="Vedic, Vastu, Face reading "
        rate="Rate your experience"
        language="English, Hindi, Punjabi "
        experience=" 3 years"
      />
      <Middle />
      <ChatBubble text="Devarshi" isSender={true} />
    </div>
  );
};

export default LiveAstroCall;
