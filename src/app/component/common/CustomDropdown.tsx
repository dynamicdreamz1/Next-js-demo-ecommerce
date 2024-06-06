"use client";

import Image from "next/image";
import React, { useState } from "react";

const CustomDropdown = ({ options, onSelectOption }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<{ label: string; value: any } | null>(null);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectOption = (option:any) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelectOption(option);  // Pass the selected option to the parent component
  };

  return (
    <div className="relative lg:mx-0 mx-auto lg:w-[320px] w-full md:px-4">
      <button
        onClick={handleToggleDropdown}
        className="inline-flex justify-between items-center lg:w-[320px] w-full px-4 py-3 text-[16px] font-normal text-[#1E1E1E] border border-gray-300 shadow-sm  focus:outline-none"
        aria-haspopup="listbox"
        aria-expanded="true"
        aria-labelledby="listbox-label"
      >
        {selectedOption ? (
          <span className="block truncate">{selectedOption.label}</span>
        ) : (
          <span className="block truncate">Select an option</span>
        )}

       <Image src="/images/dropIcon.svg" alt="dropdown" width={10} height={10} />
      </button>

      {isOpen && (
        <div className="absolute z-50	py-5 mt-1 w-full  bg-[#FFF7F4] shadow-lg">
          <ul
            role="listbox"
            aria-labelledby="listbox-label"
            aria-activedescendant="listbox-item-3"
            className=" text-base max-h-60  sm:text-sm sm:text-base"
          >
            {options.map((option:any) => (
              <li
                key={option.value}
                onClick={() => handleSelectOption(option)}
                className="text-[16px] font-normal text-[#1E1E1E] cursor-pointer select-none relative py-2 pl-3 pr-9"
              >
                <div className="flex items-center">
                  <span className="ml-3 block truncate">{option.label}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
