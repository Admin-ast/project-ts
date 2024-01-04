import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import Popup from "./Popup";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  heading: string;
}

const SuggestRemedy: React.FC<Props> = ({ isOpen, onClose, heading }) => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handlePopupClose = () => {
    setPopupOpen(false);
  };

  const handleAddButtonClick = () => {
    setPopupOpen(true);
  };

  return (
    <div
      className={`fixed top-0 left-0 z-50 flex h-screen w-screen items-center justify-center transition-opacity ${
        isOpen || isPopupOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      {!isPopupOpen && (
        <div className="relative rounded-lg bg-white p-4 shadow-md md:w-3/4 lg:w-1/2">
          <button
            className="absolute top-2 right-2 cursor-pointer text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            {/* <ImCross className="w-6 cursor-pointer font-bold" /> */}
          </button>
          <div className="relative flex items-center justify-center font-[Georgia] text-[30px] font-bold">
            <p>{heading}</p>
          </div>
          <div className="absolute right-4 top-5">
            <ImCross
              onClick={onClose}
              className="w-6 cursor-pointer font-bold"
            />
          </div>
          <div className="mt-10 text-justify">
            {/* Your content goes here */}
            <p className="">
              You can suggest any remedy to the customer (just like a doctor!).
            </p>
            <p className="">
              The remedy could be a free mantra, suggestion etc.Or
            </p>
            <p className="">
              it can be a paid product/service like gemstone, online puja,
              healing etc.
            </p>
            <p className="">
              When suggesting a paid product/service, you have the option to
              sell the product or service yourself or assign it to another
              Astrologer, or you can also assign it to Astrotalk.
            </p>
            <p className="">
              If the customer purchases the suggested product or service from
              you, then you get 50% of the revenue share, and the remaining 50%
              goes to Astrotalk.
            </p>
            <p className="">
              On the other hand, if you refer the customer to us (Astromall), in
              that case, you get 10% of the revenue share. For more information,
              contact AstroMall.
            </p>
          </div>
          <div className="py-[30px]">
            <button
              className="w-1/2 cursor-pointer rounded-[10px] bg-gradient-to-b from-[#fb7038] to-[#FF0600] py-1  text-white"
              onClick={handleAddButtonClick}
            >
              Add
            </button>
          </div>
        </div>
      )}
      {isPopupOpen && <Popup onClose={handlePopupClose} />}
    </div>
  );
};

export default SuggestRemedy;
