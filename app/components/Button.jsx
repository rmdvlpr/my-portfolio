import React from "react";

const Button = ({ label }) => {
  return (
    <button
      className="button-container inline-block rounded-full bg-black text-white font-bold
       px-4 py-2 text-sm 
       md:px-6 md:text-base 
       transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95"
    >
      {label}
    </button>
  );
};

export default Button;
