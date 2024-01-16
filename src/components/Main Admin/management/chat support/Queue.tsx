import React from "react";
import QueueCard from "./QueueCard";

type Props = {};

const Queue = (props: Props) => {
  return (
    <div className="mt-20 lg:px-10">
      <p className="text-[24px] font-bold">Queue</p>
      <div className="mt-5 ">
        <QueueCard
          conversation="In conversation Yogesh"
          engage="Engage"
          msg="Hi"
          msgContent="Thank you. Please feel free to reach out if you require
any further assistance. Have a great day."
          date="06-08-2023"
          time="07:35"
        />
      </div>
    </div>
  );
};

export default Queue;
