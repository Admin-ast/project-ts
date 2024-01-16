import React from "react";

type Props = {
  firstThing: string;
  firstThingData: string;
  secondThing: string;
  secondThingData: number;
  className: string;
  thirdThing: string;
  thirdThingData: string;
  thirdThingData1: string;
  fourthThing: string;
  fourthThingData: string;
};

const Card = ({
  firstThing,
  firstThingData,
  secondThing,
  secondThingData,
  className = "",
  thirdThing,
  thirdThingData,
  thirdThingData1,
  fourthThing,
  fourthThingData,
}: Props) => {
  return (
    <div className="rounded-[15px] border-b-[7px] border-[#d12627cc] p-2 shadow-xl">
      <div className="flex gap-1">
        <p className={`font-bold`}>{`${firstThing}:`}</p>
        <p className="">{`${firstThingData}`}</p>
      </div>
      <div className="flex gap-1">
        <p className={`font-bold`}>{`${secondThing}:`}</p>
        <p className={`text-green-700 ${className}`}>{`₹${secondThingData}`}</p>
      </div>
      <div className="flex gap-1">
        <p className={`font-bold`}>{`${thirdThing}:`}</p>
        <p className="">{`${thirdThingData},`}</p>
        <p className="">{`${thirdThingData1}`}</p>
      </div>
      <div className="flex gap-1">
        <p className={`font-bold`}>{`${fourthThing}:`}</p>
        <p className={`text-green-700 ${className}`}>{`${fourthThingData}`}</p>
      </div>
    </div>
  );
};

export default Card;
