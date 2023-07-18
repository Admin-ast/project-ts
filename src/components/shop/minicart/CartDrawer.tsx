import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const CartDrawer = ({ isOpen, onClose }: Props) => {
  const drawerClasses = isOpen ? "translate-x-0" : "translate-x-full";
  const [quantity, setQunatity] = useState(1);

  const handleInc = () => {
    setQunatity(quantity + 1);
  };
  const handleDec = () => {
    setQunatity(quantity - 1);
  };
  return (
    <div
      className={`fixed inset-y-0 right-0 z-50 w-full transform bg-white shadow-lg md:w-1/2 lg:w-1/4 
      ${drawerClasses}  transition-transform duration-300 ease-in-out`}
    >
      <div className="flex justify-between px-4 py-2">
        <h2 className="mt-2 text-lg font-semibold text-gray-600">
          Shopping cart
        </h2>
        <button className="text-gray-600" onClick={onClose}>
          <div className="mt-2 flex gap-1">
            <div className=" text-base">
              <AiOutlineClose />
            </div>
            <div className=""> Close </div>
          </div>
        </button>
      </div>

      {/* Add your cart items and other content here */}

      <div className="p-10">
        <img
          src="https://media.istockphoto.com/id/1048293726/photo/large-five-face-rudraksh-seed-macro-in-hand.webp?b=1&s=170667a&w=0&k=20&c=VyA3fwBLGANVlHjpyG5QQ4qmF655LA6ZN6TW-aLO1iw="
          alt=""
          className=""
        />
        <p className="text-black">Price:800 rs</p>
        <div className="flex ">
          <button
            disabled={quantity === 1}
            onClick={handleDec}
            className="bg-teal-400 px-5 text-black"
          >
            -
          </button>
          <p className="px-5 text-black">{quantity}</p>
          <button onClick={handleInc} className="bg-teal-400 px-5 text-black">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
