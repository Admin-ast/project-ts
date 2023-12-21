import React from "react";
import Sidebar from "../../Sidebar";
import VideoCard from "./VideoCard";

type Props = {};
// const videos = [
//     {
//         // imageUrl: '/assets/appointment/live-astro.png',
//         imageUrl: 'https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.webp?b=1&s=170667a&w=0&k=20&c=YQ_j83pg9fB-HWOd1Qur3_kBmG_ot_hZty8pvoFkr6A=',
//       videoUrl: 'https://www.youtube.com/embed/your-video-id',
//       title: 'Learn the basics of Tailwind CSS in this tutorial.',
//     },
//     // Add more video objects as needed
//   ];

const videos = [
  {
    title: "Importance of PO",
    imageUrl: "/assets/appointment/live-astro.png",
  },
  {
    title: "Importance of PO",
    imageUrl: "/assets/appointment/live-astro.png",
  },
  {
    title: "Importance of PO",
    imageUrl: "/assets/appointment/live-astro.png",
  },
  {
    title: "Importance of PO",
    imageUrl: "/assets/appointment/live-astro.png",
  },
  {
    title: "Importance of PO",
    imageUrl: "/assets/appointment/live-astro.png",
  },
  {
    title: "Importance of PO",
    imageUrl: "/assets/appointment/live-astro.png",
  },
  {
    title: "Importance of PO",
    imageUrl: "/assets/appointment/live-astro.png",
  },
  {
    title: "Importance of PO",
    imageUrl: "/assets/appointment/live-astro.png",
  },
  {
    title: "Importance of PO",
    imageUrl: "/assets/appointment/live-astro.png",
  },
  {
    title: "Importance of PO",
    imageUrl: "/assets/appointment/live-astro.png",
  },
  // Add more video objects as needed
];
const TrendingVideos = (props: Props) => {
  return (
    <div className="">
      <div
        className="h-[78px]
     w-full bg-[#d12627cc]"
      ></div>
      <div className="lg:flex ">
        <div className="lg:w-1/4">
          <Sidebar />
        </div>
        <div className="min-h-screen px-10 lg:w-3/4">
          <div className="mt-[45px] grid items-center justify-between  md:flex lg:flex">
            {" "}
            <button className="rounded-[6px] border-[1px] border-red-700 py-2 md:px-5 lg:px-10">
              Search reels,categories
            </button>
            <span className=" mt-2 rounded-[43px] bg-[#CF2927] px-10 text-center text-[24px] font-bold text-white lg:py-4 ">
              TRENDING VIDEOS
            </span>
            <button className="mt-2 rounded-[6px] border-[1px] border-red-700 py-2 md:px-4 lg:px-10">
              All
            </button>
          </div>
          <div className=""></div>
          <div className="grid justify-center p-8 md:grid-cols-2 lg:grid-cols-4">
            {videos.map((video, index) => (
              <div key={index} className="m-4 ">
                <VideoCard title={video.title} imageUrl={video.imageUrl} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingVideos;
