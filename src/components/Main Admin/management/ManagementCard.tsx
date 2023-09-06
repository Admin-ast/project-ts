import React from "react";

type Props = {
  icon: string;
  text: string;
  className?: string;
};

const ManagementCard = ({ icon, text, className = "" }: Props) => {
  return (
    <div className=" ">
      <div className="  cursor-pointer  rounded-[10px] p-10 shadow-2xl ">
        <div
          className={`mx-16 flex h-[78px] w-[78px] items-center justify-center rounded-full py-4 md:mx-6 lg:mx-6 ${className}`}
        >
          <img src={`${icon}`} alt="Card Image" className="    " />
        </div>
        <p className=" mt-2 flex items-center justify-center whitespace-nowrap text-[13px] font-bold ">
          {`${text}`}
        </p>
      </div>
    </div>
  );
};

export default ManagementCard;
