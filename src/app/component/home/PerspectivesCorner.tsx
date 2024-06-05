"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const PerspectivesCorner = ({homePageText}:any) => {
  const [hoveredImageIndex, setHoveredImageIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredImageIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredImageIndex(null);
  };

  return (
    <div className="w-[100%] mx-auto relative py-5 text-center flex flex-col items-center">
      <div className="playfair-font font-[500] text-3xl lg:text-4xl leading-tight text-[#363636] mt-14 mb-6">
        {homePageText.title}
      </div>
      <div className="w-36 h-[2px] bg-[#FB7800] mx-auto mb-10"></div>

      <div className="flex flex-wrap justify-center w-[100%]">
        {homePageText?.items.map((data:any, index:any) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 relative">
            <div
              className="relative overflow-hidden"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Image
                  src={data?.image}
                  alt="Next"
                  width={480}
                  height={420}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
              {hoveredImageIndex === index && (
                <motion.div
                  initial={{ opacity: 0, y: "100%" }}
                  animate={{ opacity: 0.5, y: "65%" }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black text-white bg-opacity-90 d-flex flex-col align-center gap-3 p-[10%] w-[100%]"
                  style={{ height: "100%", pointerEvents: "none" }}
                >
                  <div className="mx-auto">
                    <div className="text-[#FFFFFF] text-[16px] font-bold">{data?.title}</div>
                    <div className="text-[#CCCCCC] text-[14px]">{data?.description}</div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerspectivesCorner;
