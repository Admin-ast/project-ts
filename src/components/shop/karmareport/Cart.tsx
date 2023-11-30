import React, { useState } from "react";
import { BsFillCartFill } from "react-icons/bs";

type Props = {};

const Cart = (props: Props) => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex justify-end px-10">
      <BsFillCartFill className="text-[18px]" />:{count} items
    </div>
  );
};

export default Cart;
