import React from "react";

const SkeletonCard: React.FC = () => {
  return (
    <div className="relative w-full sm:w-[315px] rounded overflow-hidden mx-auto animate-pulse">
      <div className="bg-gray-300 h-[305px] w-full"></div>
      <div className="py-4 flex flex-col items-start">
        <div className="bg-gray-300 h-4 w-3/4 mb-2"></div>
        <div className="bg-gray-300 h-4 w-1/2"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
