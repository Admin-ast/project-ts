import React, { useState } from "react";
import AvailabilityTable from "./AvailabilityTable";
import Data from "./Data";

type Props = {};

const TableHeader = (props: Props) => {
  return (
    <div className="">
      <p className="text-center text-[20px]">Availability Dashboard</p>
      <Data />
    </div>
  );
};

export default TableHeader;
