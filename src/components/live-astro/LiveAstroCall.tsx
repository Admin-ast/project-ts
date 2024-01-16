import React from "react";
import AstrologerDesc from "../talk-to-astrologer/AstrologerDesc";
import AstrologerDetails from "../appoinments/AstrologerDetails";
import ChatBox from "../Main Admin/management/chat support/ChatBox";
import Chat from "../chat/Chat";
import Middle from "./Middle";
import ChatBubble from "../admin/support chat/chat with own assistant/ChatBubble";
import Icons from "./Icons";

type Props = {};

const LiveAstroCall = (props: Props) => {
  return (
    <div className="gap-10 px-8 lg:flex">
      <div className="lg:w-1/3">
        <AstrologerDetails
          name="Anupam"
          speciality="Vedic, Vastu, Face reading "
          rate="Rate your experience"
          language="English, Hindi, Punjabi "
          experience=" 3 years"
          className=""
        />
      </div>
      <div className="lg:w-1/3">
        <Middle />
      </div>
      <div className="mt-[208px] bg-[url('/assets/horoscope-bg.webp')] lg:w-1/3">
        <ChatBubble text="Devarshi" isSender={true} />
        <ChatBubble
          text="There’s literally no point in overthinking about your concerns when the solution to them is just a call away. Astrotalk brings to you a pool of over 500+ astrologers with whom you can contact on chat and share with them your problems across all aspects of life including love, finance, Vastu, career, luck, marriage and so on. Simply put, life is a cocktail of highs and lows, and while we enjoy the good times, the bad times, though they teach us a lot, can also leave us worried, depressed and sad. Such times can also hamper the relationship we share with other people in our lives, and we are sure that you wouldn’t want that to happen for yourself.
 like if you are planning a wedding and want to find the shubh muhurat for marriage, simply, chat with an astrologer and you will have your answer. Wondering what to name your baby or when to host the mundan ceremony for him/her? Expert astrologers consultation can help here too. Or simply if you are planning to buy a gemstone and wondering what gemstone is made for your rashi? In such circumstances too, chatting with the astrologer can help you find what gemstone would suit your current situation. AstroTalk provides you with the facility to chat with astrologer online free and paid in both ways. To find us online, you just need to search online chat with astrologer or free astro chat or chat with astrologer online free, talk to astrologer online, and chat with astrologer near me. The aim of our services is to give 100% satisfaction to the users. We offer you many free services as well like free kundali and match making."
          isSender={false}
        />
      </div>
    </div>
  );
};

export default LiveAstroCall;
