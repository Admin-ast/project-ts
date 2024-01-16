import { Textarea } from "@/components/forms";
import React from "react";

type Props = {};

const EarningReport = (props: Props) => {
  return (
    <div className="px-1">
      <p className="font-bold">Earning Report</p>
      <Textarea />
    </div>
  );
};

export default EarningReport;
