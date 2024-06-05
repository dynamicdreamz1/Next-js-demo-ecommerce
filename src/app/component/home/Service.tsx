import React from 'react';
import Image from "next/image";

const Service = ({homePageText}:any) => {
  return (
    <div className="container mx-auto px-4 py-2 mt-10"> {/* Keep this container width consistent */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {homePageText.items?.map((item:any, index:any) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="flex-shrink-0 pr-4"> {/* Adjust the padding here */}
              <Image src={item.image} alt={item.title} width={37} height={37} className="object-cover" />
            </div>
            <div className="flex-1">
              <h2 className="font-bold text-start text-[#323232] text-[16px]">{item.title}</h2>
              <p className="text-start text-[#999999] text-[14px] w-[90%]">{item.description}</p>
            </div>
            {index !== homePageText.items?.length - 1 && <div className="bg-[#DDDDDD] w-px h-[32px]"></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
