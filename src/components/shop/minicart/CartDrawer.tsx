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
      ${drawerClasses}  transition-transform duration-300 ease-in-out `}
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
      <div className="grid grid-rows-3 ">
        <div className="flex gap-2 p-5 hover:bg-slate-100">
          <div className="">
            <img
              src="https://media.istockphoto.com/id/1048293726/photo/large-five-face-rudraksh-seed-macro-in-hand.webp?b=1&s=170667a&w=0&k=20&c=VyA3fwBLGANVlHjpyG5QQ4qmF655LA6ZN6TW-aLO1iw="
              alt=""
              className=""
            />
          </div>
          <div className="">
            <p className="text-base font-semibold text-black ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
              recusandae accusamus, nisi
            </p>
            <div className="flex w-[55%] rounded-[15px] border-[1px]">
              <button
                disabled={quantity === 1}
                onClick={handleDec}
                className="  border-1 border-r px-3 py-2 text-black hover:bg-teal-900"
              >
                -
              </button>
              <p className="border-1 border-r px-3 py-2 text-black">
                {quantity}
              </p>
              <button
                onClick={handleInc}
                className="px-3 py-2 text-black hover:bg-teal-900"
              >
                +
              </button>
            </div>
            <p className="text-black">₹393</p>
          </div>
        </div>

        {/* <div className=""></div> */}
        <div className="border-top border-[2px] p-5 text-black ">
          <div className="flex justify-between text-xl  ">
            <p className="">Subtotal:</p>
            <p className="">₹393</p>
          </div>
          <div className="text-bold mt-5 bg-teal-500 py-3 text-center text-white">
            <button className="">VIEW CART</button>
          </div>
          <div className="text-bold mt-5 bg-teal-500 py-3 text-center text-white">
            <button className="">CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
