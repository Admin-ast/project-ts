// components/CustomCheckbox.tsx

import React from 'react';
import { FaCheck, FaPlus } from 'react-icons/fa';

interface CustomCheckboxProps {
  checked: boolean;
  onChange: () => void;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ checked, onChange }) => {
  return (
    <label className="custom-checkbox">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span className="checkmark">
        {checked ? <FaCheck size={12} color="#333" /> : <FaPlus size={12} color="#333" />}
      </span>
    </label>
  );
};

export default CustomCheckbox;
