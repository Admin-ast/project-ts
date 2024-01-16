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
      <div className="relative mt-[30px]  overflow-hidden rounded-[10px] border-r-[1px] border-b-[1px] border-[#DC6563]">
        <img className="w-full " src={thumbnail} alt="Video Thumbnail" />
        <div className="absolute top-[60px] right-[120px] lg:top-[50px] lg:left-[120px] md:top-[40px] md:left-[60px]">
          <FaYoutube className="text-[47px] text-[#ff0000]" />
        </div>
        <div className=" rounded-b-[10px] bg-white py-1 px-2 ">{title}</div>
      </div>
    </div>
  );
};

export default VideoCard;
