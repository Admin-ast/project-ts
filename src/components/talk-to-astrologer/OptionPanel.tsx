import React from "react";

interface OptionsPanelProps {
  isOpen: boolean;
  options: JSX.Element;
  closePanel: () => void;
}

const OptionsPanel = ({ isOpen, options, closePanel }: OptionsPanelProps) => {
  return (
    <div
      className={`fixed top-0 right-0  h-full bg-white shadow-lg ${
        isOpen ? "w-1/2" : "w-0"
      } `}
    >
      <button onClick={closePanel}>Close Options</button>
      {isOpen && options}
    </div>
  );
};

export default OptionsPanel;
