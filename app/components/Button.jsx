import React from "react";

const Button = ({
  label,
  onClick,
  bgColor = "bg-black",
  textColor = "text-white",
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={`button-container inline-block rounded-full ${bgColor} ${textColor} font-bold
        px-4 py-2 text-sm 
        md:px-6 md:text-base 
        transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95`}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
