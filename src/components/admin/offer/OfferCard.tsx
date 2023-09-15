import React from "react";

import ToggleSwitch from "./ToggleSwitch";

type Props = {
  offerName: string;
  displayName: string;

  userType: string;

  myShare: string;
  atShare: string;
  customerPays: string;
};

const OfferCard = ({
  offerName,
  displayName,
  userType,
  myShare,
  atShare,
  customerPays,
}: Props) => {
  return (
    <div className="rounded-[15px]  border-b-[7px]  border-b-[#DC6563] ">
      <div className="px-5 py-5 ">
        <div className="flex justify-between">
          <div className="">
            <p className="font-bold">Offer Name:</p>
            <p className="">{`${offerName}`}</p>
          </div>

          <ToggleSwitch />
        </div>
        <div className="flex">
          <p className="font-bold">Display Name:</p>
          <p className="">({`${displayName}`})</p>
        </div>

        <div className="flex">
          <p className="font-bold">UserType: </p>
          <span className="text-green-700">{`${userType}`}</span>
        </div>

        <div className="grid grid-cols-1">
          <div className="flex items-center">
            <p className="text-sm font-bold">India: My Share: </p>
            <p>{`${myShare}`}</p>
            <p className="mx-1">|</p>
            <p className="font-bold">AT Share: </p>
          </div>
          <div className="flex items-center">
            <p>{`${atShare}`}</p>
            <p className="mx-1">|</p>
            <p className="font-bold">Customer Pays: </p>
            <p>{`${customerPays}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
