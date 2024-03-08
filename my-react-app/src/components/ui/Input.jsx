import React from "react";

const Input = ({
  type = "text",
  name,
  className,
  label,
  onChange,
  value,
  required = false,
}) => {
  return (
    <div className="relative z-0 w-full mt-0 group">
      <label
        htmlFor={name}
        className="text-sm text-gray-900 font-inter font-bold flex justify-start"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        className={`block py-3 px-3 w-full rounded-lg text-sm text-black bg-transparent border-[1px] border-gray-300 appearance-none focus:outline-none focus:ring-1 focus:border-blue-600 peer ${className}`}
        placeholder=""
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default Input;
