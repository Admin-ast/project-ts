import React, { ReactElement } from "react";

interface Props {
  btnText: string;
  className?: string;
  isLoading?: boolean;
  type?: any;
  onClick?: any;
  disabled?: boolean;
}

function Button({
  btnText,
  className,
  isLoading = false,
  type = "submit",
  onClick,
  disabled = false,
}: Props): ReactElement {
  return (
    <div>
      <button
        disabled={disabled}
        type={type}
        onClick={onClick}
        className={`focus:ring-primary flex w-full items-center justify-center rounded-full border border-transparent px-4 py-1 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 md:mx-auto lg:mx-auto lg:py-2 ${className}`}
      >
        <div
          className={`${
            isLoading
              ? "mr-4 h-4 w-4 animate-spin rounded-full border-2 border-dashed border-white"
              : ""
          }`}
        ></div>
        <p className="">{btnText}</p>
      </button>
    </div>
  );
}

export default Button;
