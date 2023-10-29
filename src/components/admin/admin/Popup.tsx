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
        ></button>
        <div className="">
          <div className="flex items-center justify-center font-[Georgia] text-[30px] font-bold">
            <p className="">Notice Board</p>
          </div>

          <div className="mt-10 text-justify">
            <p className="">1. Never be rude to any customer</p>
            <p className="">
              2. Never share your personal details with any customer
            </p>
            <p className="">
              3. Daily online time must be more than 8 hours, on an average
            </p>
            <p className="">
              4. Customer satisfaction score must be more than 60%
            </p>
            <p className="">
              5. Never share any internal policies with customers
            </p>
            <p className="">
              6. Never defame any Astrologer or Astrotalk anywhere
            </p>
            <p className="">
              7. Never reach out to any customer outside the app
            </p>
            <p className="">
              8. Never share the private conversation of any customer with other
              customers or their relatives
            </p>
            <p className="">
              9. Never scold or harass any customer just because they gave you a
              bad rating
            </p>
            <p className="">1. कभी भी किसी ग्राहक के साथ बदतमीजी न करें</p>
            <p className="">
              2. अपनी व्यक्तिगत जानकारी कभी भी किसी ग्राहक के साथ साझा न करें
            </p>
            <p className="">
              3. दैनिक ऑनलाइन समय औसतन 8 घंटे से अधिक होना चाहिए
            </p>
            <p className="">4. ग्राहक संतुष्टि स्कोर 60% से अधिक होना चाहिए</p>
            <p className="">
              5. ग्राहकों के साथ कभी भी कोई आंतरिक नीति साझा न करें
            </p>
            <p className="">
              6. कभी भी किसी ज्योतिषी या एस्ट्रोटॉक को कहीं भी बदनाम न करें
            </p>
            <p className="">
              7. ऐप के बाहर कभी भी किसी ग्राहक तक न पहुंचें8. कभी भी किसी ग्राहक
              की निजी बातचीत को अन्य ग्राहकों या उनके रिश्तेदारों से साझा न करें
            </p>
            <p className=""></p>
            <p className="">
              9. कभी भी किसी ग्राहक को सिर्फ इसलिए डांटे या परेशान न करें
              क्योंकि उसने आपको खराब रेटिंग दी है
            </p>
          </div>
          <div className="flex justify-end">
            <button
              className="cursor-pointer bg-gradient-to-b from-[#fb7038] to-[#df625b] px-4 py-2 text-white"
              onClick={onClose}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
