import React from "react";

type Props = {
  icon: string;
  text: string;
  className?: string;
};

const ManagementCard = ({ icon, text, className = "" }: Props) => {
  return (
    <div className=" h-[135px] w-[183px] ">
      <div className="  cursor-pointer  rounded-[10px] p-10 shadow-2xl">
        <div
          className={`m-auto h-[82px] w-[82px] rounded-[100%] py-4 ${className}`}
        >
          <img src={`${icon}`} alt="Card Image" className="  mx-auto mb-8 " />

          <p className=" flex items-center justify-center whitespace-nowrap text-[13px] font-bold ">
            {`${text}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ManagementCard;
