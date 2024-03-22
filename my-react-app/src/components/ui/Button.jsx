import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";

const Button = ({
  variation,
  type,
  children,
  onClick,
  className,
  disabled = false,
}) => {
  // STYLE LIST BUTTON
  const getButtonVariation = (variation) => {
    switch (variation) {
      case "primary":
        return "flex w-full justify-center rounded-md bg-blue-cd px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";
      case "secondary":
        return "flex w-full justify-center rounded-md bg-white-600 px-3 py-3 text-xsfont-semibold leading-6 text-black  shadow-sm hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";
      case "third":
        return "flex w-full justify-center rounded-md bg-white-600 px-3 py-3 text-sm font-semibold font-blue-cd leading-6 text-black shadow-sm hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";
      case "back":
        return " width=25px bg-transparent flex position relative right-[80%] top-0";
      case "home":
        return "flex w- justify-center rounded-md bg-blue-cd px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:text-blue-cd shadow-sm hover:bg-white border border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";
      case "login":
        return "flex w- justify-center rounded-md bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-blue-cd hover:text-white shadow-sm hover:bg-blue-cd border hover:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";
      case "course":
        return "flex w-full justify-center rounded-md bg-white-600 px-3 py-3 text-sm font-semibold leading-1 text-black shadow-sm hover:bg-slate-100 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-indigo-600";
      // case "tertiary-red":
      //   return "border border-red-300 hover:bg-red-500 text-red-500 hover:text-white";
      default:
        return "";
    }
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${getButtonVariation(variation)}
         font-inter rounded-lg py-2 md:py-2.5 px-3 md:px-4 text-sm md:text-base transition-colors duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
