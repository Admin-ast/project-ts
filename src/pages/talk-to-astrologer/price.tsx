import MinBalance from "@/components/talk-to-astrologer/MinBalance";
import Money from "@/components/talk-to-astrologer/Money";
import React from "react";

type Props = {};

const price = (props: Props) => {
  return (
    <div className="">
      <Money amount={10} />
    </div>
  );
};

export default price;
