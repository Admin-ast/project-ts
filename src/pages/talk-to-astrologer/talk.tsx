import CallIntake from "@/components/appoinments/CallIntake";
import LiveCard from "@/components/appoinments/LiveCard";
import { useSearchParams } from 'next/navigation';

import React from "react";

type Props = {};

const talk = (props: Props) => {
  const searchParams:any = useSearchParams();
  const id = searchParams.get('id') ? searchParams.get('id') : "0";
  const name = searchParams.get('name') ? searchParams.get('name') : "0";
  return (
    <div className="">
      <CallIntake id={id} name={name} />
    </div>
  );
};

export default talk;
