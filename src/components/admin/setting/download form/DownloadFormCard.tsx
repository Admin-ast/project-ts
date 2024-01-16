import Link from "next/link";
import React from "react";

type Props = {};

const DownloadFormCard = (props: Props) => {
  return (
    <div className="rounded-[15px] border-b-[7px] border-b-[#DC6563] ">
      <Link href="/astrologeradmin/">
        <div className="  cursor-pointer p-10 shadow-xl">
          <div className="m-auto h-[82px] w-[82px] rounded-[100%] bg-[#f6b0b2] py-4">
            <img
              src="/assets/admin/settings/doc.svg"
              alt="Card Image"
              className="  mx-auto mb-8 "
            />

            <p className=" flex justify-center whitespace-nowrap font-bold ">
              Download Form 16A
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DownloadFormCard;
