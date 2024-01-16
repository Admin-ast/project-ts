import React from "react";
import Header from "../Header";
import Sidebar from "../../Sidebar";
import GalleryImageCard from "./GalleryImageCard";

type Props = {};

const Gallery = (props: Props) => {
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
        <div className="min-h-screen  lg:w-3/4">
          <Header
            firstBtn="Profile Gallery"
            secondBtn="Live Event DP"
            thirdBtn="+ Upload Image"
            className=""
          />
          <div className="grid gap-16 p-5 md:grid-cols-2 lg:grid-cols-4">
            <GalleryImageCard Pending="Pending" />
            <GalleryImageCard Pending="Pending" />
            <GalleryImageCard Pending="Pending" />
            <GalleryImageCard Pending="Pending" />
            <GalleryImageCard Pending="Pending" />
            <GalleryImageCard Pending="Pending" />
            <GalleryImageCard Pending="Pending" />
            <GalleryImageCard Pending="Pending" />
            <GalleryImageCard Pending="Pending" />
            <GalleryImageCard Pending="Pending" />
            <GalleryImageCard Pending="Pending" />
            <GalleryImageCard Pending="Pending" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
