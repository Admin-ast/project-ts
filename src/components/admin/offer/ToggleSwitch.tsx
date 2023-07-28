import React, { useState } from "react";

type Props = {};

const ToggleSwitch = (props: Props) => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn((prevIsOn) => !prevIsOn);
  };
  return (
    <div className="w-[60px]">
      <label
        className={`flex cursor-pointer items-center rounded-full px-2 py-1 text-xs font-semibold ${
          isOn ? "bg-green-500" : "bg-gray-300"
        }`}
      >
        <input
          type="checkbox"
          className="hidden"
          checked={isOn}
          onChange={handleToggle}
        />
        {/* Indicator */}
        <div
          className={`h-4 w-4 rounded-full bg-white shadow ${
            isOn ? "translate-x-full transform" : "translate-x-0 transform"
          }`}
        ></div>
        {/* Text */}
        <span className={`ml-2 text-white ${isOn ? "" : "text-gray-700"}`}>
          {isOn ? "ON" : "OFF"}
        </span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
