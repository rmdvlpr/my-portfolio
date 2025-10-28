import React from "react";
import { Leaf, Braces } from "lucide-react";

const Button = ({
  label,
  onClick,
  bgColor = "bg-black",
  textColor = "text-white",
  showLeaf = false,
  showBraces = false,
  iconPosition = "left", // 'left' or 'right'
  ...props
}) => {
  const renderIcon = () => {
    if (showLeaf) return <Leaf className="w-4 h-4" />;
    if (showBraces) return <Braces className="w-4 h-4" />;
    return null;
  };

  return (
    <button
      onClick={onClick}
      className={`button-container montserrat inline-flex items-center justify-center gap-2 rounded-full ${bgColor} ${textColor} font-bold
        px-4 py-2 text-sm min-w-[180px]
        md:px-6 md:text-base md:min-w-[200px]
        transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95`}
      {...props}
    >
      {iconPosition === "left" && renderIcon()}
      {label}
      {iconPosition === "right" && renderIcon()}
    </button>
  );
};

export default Button;
