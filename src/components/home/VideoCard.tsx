// components/VideoCard.js
import React from "react";
import { FaYoutube } from "react-icons/fa";
import Section from "../Section";
type Props = {
  title: string;
  thumbnail: string;
};
const VideoCard = ({ title, thumbnail }: Props) => {
  return (
    <div className="">
      <Section>
        <div className="relative mt-[30px]  overflow-hidden ">
          <img className="w-full" src={thumbnail} alt="Video Thumbnail" />
          <div className="absolute bottom-[130px] left-[140px] md:bottom-[110px] md:left-[110px]">
            <FaYoutube className="text-[47px] text-[#ff0000]" />
          </div>
          <div className=" rounded-b-[10px] bg-white py-1 px-2 ">{title}</div>
        </div>
      </Section>
    </div>
  );
};

export default VideoCard;