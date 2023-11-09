import React from "react";

type Props = {
  icon: string;
  text: string;
  className?: string;
};

const ManagementCard = ({ icon, text, className = "" }: Props) => {
  return (
    <div className="mt-5 ">
      <div className="  h-[135px] cursor-pointer    rounded-[10px] shadow-xl ">
        <div className="flex items-center justify-center">
          <div
            className={`mx-16 flex h-[78px] w-[78px] items-center  justify-center rounded-full py-4 md:mx-6  ${className}`}
          >
            <img src={`${icon}`} alt="Card Image" className="    " />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <p className=" mt-2 text-center  text-[13px] font-bold ">
            {`${text}`}s
          </p>
        </div>
      </div>
    </div>
  );
};

export default ManagementCard;
