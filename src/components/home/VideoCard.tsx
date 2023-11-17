// components/VideoCard.js
import React from "react";
import { FaYoutube } from "react-icons/fa";
type Props = {
  title: string;
  thumbnail: string;
};
const VideoCard = ({ title, thumbnail }: Props) => {
  return (
    <div className="relative max-w-xs  overflow-hidden bg-white shadow-xl">
      <img className="w-full" src={thumbnail} alt="Video Thumbnail" />
      <div className="absolute bottom-[130px] left-[140px] md:bottom-[110px] md:left-[110px]">
        <FaYoutube className="text-[47px] text-[#ff0000]" />
      </div>
      <div className="mb-2 px-2 ">{title}</div>
    </div>
  );
};

export default VideoCard;
