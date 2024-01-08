import React from "react";

type Props = {
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
};


function Button({ text, type = "button", className = "" }: Props ) {
  return (
    <button
      type={type}
      className={`flex w-fit rounded-lg bg-black py-3 px-6 font-semibold text-white lg:text-2xl ${className}`} 
    >
      {text}
    </button>
  );
}

export default Button;
