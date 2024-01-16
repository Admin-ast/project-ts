// components/Popup.tsx
import { useState } from "react";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const Popup = ({ isOpen, onClose }: PopupProps) => {
  return (
    <div
      className={`fixed top-0 left-0 z-50 flex h-screen w-screen items-center justify-center transition-opacity ${
        isOpen ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="relative rounded-lg bg-white  p-4 shadow-md md:w-3/4 lg:w-1/2">
        <button
          className="absolute top-2 right-2 cursor-pointer text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="">
          <div className="flex items-center justify-center font-[Georgia] text-[30px] font-bold">
            <p className="">Performance Information</p>
          </div>
          <div className="">
            <p className="text-[22px] font-bold">Categories</p>
          </div>
          <div className="">
            <p className="text-[22px] font-bold">1.Rating</p>
          </div>
          <div className="">
            <p className="text-justify">
              Ratings can help you get more customers as user always looks for
              the astrologers with highest ratings
            </p>
          </div>
          <div className="mt-10 text-justify">
            <p className="text-[22px] font-bold">
              Q1. What do you mean by ratings?
            </p>
            <p className="">
              Ratings is an average of all the ratings you get from your users
              who took your consultations in chat and call services.
            </p>
            <p className="">
              We do not include ratings from promotional orders.
            </p>
            <p className="">
              This rating is used by our system and it considers all reviews,
              whether deleted or not.
            </p>
            <p className="">
              This rating could be different from what you see in the user app.
            </p>
            <p className="">
              This process is used for all the astrologers which cannot be
              changed
            </p>
          </div>
          <div className="mt-10 text-justify">
            <p className="text-[22px] font-bold">Q2.What does my rank mean?</p>
            <p className="">
              Your rank tells you about your overall rating performance in
              comparison to other consultant  on Astrotalk platform
            </p>
          </div>
          <div className="mt-10 text-justify">
            <p className="text-[22px] font-bold">
              Q3.When can I see my updated rank?
            </p>
            <p className="">
              Ratings are updated every night between 4-7AM (IST) in the moning
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
