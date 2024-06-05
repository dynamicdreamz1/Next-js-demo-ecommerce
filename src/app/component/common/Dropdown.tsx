// components/Dropdown.js
import React from "react";

export default function Dropdown({ label, options, value, onChange }:any) {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={label}  className="text-[#888888] text-[14px] leading-[27px]  mb-1 p-3">
        {label}
      </label>
      <select
        id={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-3 border border-gray-300 text-[14px] leading-[27px] text-[#888888] rounded-md bg-white"
      >
        {options.map((option:any) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
