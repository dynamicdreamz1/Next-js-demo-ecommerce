import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";

const ProgressBar = ({ currentStep }) => {
  return (
    <div className="w-full lg:w-[70%] ">
    <div className="flex justify-between items-center flex-col lg:flex-row">
      {["","Shipping Cart", "Check Out", "Finish"].map((step: any, index: any) => (
        <div
          key={index}
          className={`flex items-center mb-2 lg:mb-0 ${
            currentStep >= index - 1 ? "text-black" : "text-gray-400"
          }`}
        >
          <span className="font-semibold text-sm lg:text-base">{step}</span>
        </div>
      ))}
    </div>

    <div className="h-2 bg-white shadow-sm rounded-full mt-3 relative flex">
      {[1, 2, 3].map((step, index) => (
        <div key={index} className="flex-1 relative">
          <div
            className={`h-full bg-[#649C2C] rounded-full transition-width duration-300 ease-in-out absolute left-0 ${
              currentStep >= index ? "w-full z-10" : "w-0"
            }`}
          ></div>
          {currentStep >= index ? (
            <div className="rounded-full w-5 h-5 lg:w-7 lg:h-7 bg-white shadow flex items-center justify-center text-[#649C2C] absolute top-0 right-[-5px] -mt-2.5 z-20 text-xs lg:text-[15px]">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          ) : null}
        </div>
      ))}
    </div>
  </div>
  );
};

export default ProgressBar;
