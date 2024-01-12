
import React, { useState } from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onApply: (couponCode: string) => void;
};

const ApplyCodePopup = ({ onClose, onApply, isOpen }: Props) => {
  const [couponCode, setCouponCode] = useState('');

  const handleApply = () => {
    // Implement your logic to apply the coupon code
    onApply(couponCode);
    // Close the popup
    onClose();
  };

  return (
    <div
      className={`popup  ${
        isOpen ? 'opacity-100' : 'pointer-events-none '
      }`}
    >
      <div className="bg-white shadow-2xl rounded-lg mx-4 md:mx-auto">
        <div className="px-4 py-4 md:px-10 md:py-10">
          <label htmlFor="couponCode" className="font-bold block mb-2">
            Coupon Code
          </label>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              id="couponCode"
              placeholder="Please enter your code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="w-full  border-[#D9D9D9] border px-3 py-2 rounded-md"
            />
            <button
              className="bg-gradient-to-b px-4 py-2 rounded-md from-[#fb7038] to-[#FF0600] text-white"
              onClick={handleApply}
            >
              Apply
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default ApplyCodePopup;

