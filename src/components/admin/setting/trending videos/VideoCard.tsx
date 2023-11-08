import React from "react";
import { AiFillYoutube } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io";

type Props = {
  title: string;
  imageUrl: string;
};

const VideoCard = ({ title, imageUrl }: Props) => {
  return (
    <div className="relative  overflow-hidden rounded-lg border-b-[7px] border-[#DC6563] bg-white shadow-md ">
      <div className="">
        <img className="h-48 w-full object-cover" src={imageUrl} alt={title} />
      </div>
      <div className="">
        <div className="absolute top-20 left-20 text-[60px] text-red-600">
          <img src="/assets/admin/youtubelogo.png" alt="" />
        </div>
      </div>
      <div className="p-2">
        <h2 className="text-base ">{title}</h2>
      </div>
    </div>
  );
};

export default VideoCard;
