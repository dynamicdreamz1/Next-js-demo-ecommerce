import React from 'react';
import Image from "next/image";

const AdditionalInfo = ({ additionalInfo }: any) => {
  return (
    <div className="grid grid-cols-1 gap-2">
      {/* Mapping over the array of left column items */}
      {additionalInfo.map((item: any, index: any) => (
        <div className="flex items-center mb-6" key={index}>
          {/* First column with image */}
          <div className="fit-content p-[15px]">
            <Image
              src={item.image}
              alt={`Description of the image ${index}`}
              width={54}
              height={54}
              className="object-cover"
            />
          </div>
          {/* Second column with two rows */}
          <div className="w-[60%] p-[5px]">
            <h2 className="font-bold text-[16px] leading-[34px] text-[#1E1E1E]">
              {item.title}
            </h2>
            <div className="font-normal text-[16px] leading-[28px] text-[#888888]">
              {item.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdditionalInfo;
