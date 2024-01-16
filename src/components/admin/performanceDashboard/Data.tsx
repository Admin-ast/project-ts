import React from "react";
import AvailabilityTable from "./AvailabilityTable";

const Data: React.FC = () => {
  const availabilityData = {
    call: { available: 10, busy: 5 },
    chat: { available: 8, busy: 3 },
    live: { available: 15, busy: 7 },
  };

  return <AvailabilityTable data={availabilityData} />;
};

export default Data;
