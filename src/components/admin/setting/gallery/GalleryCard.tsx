import Link from "next/link";
import React from "react";

type Props = {};

const GalleryCard = (props: Props) => {
  return (
    <div className="rounded-[15px] border-b-[7px] border-b-[#DC6563] ">
      <Link href="/astrologeradmin/gallery">
        <div className="  cursor-pointer p-10 shadow-xl">
          <div className="m-auto h-[82px] w-[82px] rounded-[100%] bg-[#feffa3] py-4">
            <img
              src="/assets/admin/settings/gallery.svg"
              alt="Card Image"
              className="  mx-auto mb-8 "
            />

            <p className=" whitespace-nowrap text-center font-bold ">Gallery</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default GalleryCard;
