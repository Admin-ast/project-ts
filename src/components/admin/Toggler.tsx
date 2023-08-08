import React, { useState } from "react";

type Props = {
  label: string;
};

const Toggler = ({ label }: Props) => {
  const [isToggled, setIsToggled] = useState(false);
  const Toggle = () => {
    setIsToggled((prev) => !prev);
  };
  return (
    <div className="flex items-center">
      <label className="mr-2">{label}</label>
      <div
        onClick={Toggle}
        className={`${
          isToggled ? "bg-green-500" : "bg-gray-300"
        } h-6 w-12 cursor-pointer rounded-full`}
      >
        <div
          className={`${
            isToggled ? "translate-x-6 transform" : "translate-x-0 transform"
          } h-6 w-6 rounded-full bg-white shadow-md`}
        ></div>
      </div>
    </div>
  );
};

export default Toggler;
