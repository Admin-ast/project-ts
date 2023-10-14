// components/FaceReadingCheckbox.tsx
import { useState } from "react";

interface CheckboxProps {
  label: string;
}

const CheckBox = ({ label }: CheckboxProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="flex cursor-pointer items-center">
      <div className="relative">
        <input
          type="checkbox"
          className="hidden"
          checked={isChecked}
          onChange={toggleCheckbox}
        />
        <div className="toggle__line h-4 w-10 rounded-full bg-gray-400 shadow-inner"></div>
        <div
          className={`toggle__dot absolute -left-1 -top-1 h-6 w-6 rounded-full bg-white shadow transition-transform ${
            isChecked ? "translate-x-6" : ""
          }`}
        ></div>
      </div>
      <div className="ml-3 text-gray-700">{label}</div>
    </label>
  );
};

export default CheckBox;
