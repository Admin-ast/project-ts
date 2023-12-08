import TarotLiveAstrologer from "@/components/live-astro/TarotLiveAstrologer";
import React from "react";
import LiveVideoChat from "../live-video-chat";
import TarotLiveVideoChat from "@/components/live-astro/live-video/TarotLiveVideoChat";

type Props = {};
// const astrologer = [1, 2, 3, 4];
const astrologerDetail = {
  img: "/assets/appointment/live-astro.png",
  name: "Abha",
};

const TarotliveVideoChat = (props: Props) => {
  return (
    <div className="">
      {/* {astrologer?.map((item, index) => ( */}
      <div className="">
        <TarotLiveVideoChat detail={astrologerDetail} />
      </div>
      {/* ))} */}
    </div>
  );
};

export default TarotliveVideoChat;
