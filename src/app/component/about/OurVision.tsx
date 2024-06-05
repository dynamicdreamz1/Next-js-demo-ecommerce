"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const OurVision = ({ aboutUs }: any) => {
  return (
    <div className="flex flex-col md:flex-row justify-between p-5 items-stretch mt-20">
      {/* First Column */}
      <motion.div
        initial={{ opacity: 0, x: -100 }} // Start from the left side
        animate={{ opacity: 1, x: 0 }} // Animate to the center
        transition={{ duration: 0.5 }}
        className="w-full md:w-[430px] flex flex-col items-end justify-start pr-10 text-pretty"
      >
        <div className="border-l-2 border-[#FB7800] px-4 py-6 mb-4 text-pretty">
          <div className="playfair-font text-[#1E1E1E] font-[500] text-[clamp(1rem,5vw,2.5rem)] leading-[1.375em] text-left">
            {" "}
            {aboutUs.ourVisionHeading}
          </div>
          <div className="w-full max-h-[calc(100vh - 10rem)] overflow-y-auto text-[#555555] font-[400] text-[clamp(0.75rem,1.5vw,1rem)] leading-[1.6875rem] text-left truncate-4">
            <p className="line-clamp-4">{aboutUs.ourVisionDescription}</p>
          </div>
        </div>
      </motion.div>

      {/* Second Column */}
      <motion.div
        initial={{ opacity: 0, y: 100 }} // Start from the bottom
        animate={{ opacity: 1, y: 0 }} // Animate to the center
        transition={{ duration: 0.5 }}
        className="hidden md:block w-1/3 overflow-hidden"
      >
        <div className="flex justify-center items-center h-full">
          <Image src={aboutUs.ourVisionLogo}  width="443" height="573" alt="Image" className="max-h-full" />
        </div>
      </motion.div>

      {/* Third Column */}
      <motion.div
        initial={{ opacity: 0, x: 100 }} // Start from the right side
        animate={{ opacity: 1, x: 0 }} // Animate to the center
        transition={{ duration: 0.5 }}
        className="w-full md:w-[430px] flex flex-col items-start justify-end pl-10"
      >
        <div className="border-r-2 border-[#FB7800] px-4 py-6 mb-4 text-pretty">
          <div className="playfair-font text-[#1E1E1E] font-[500] text-[clamp(1rem,5vw,2.5rem)] leading-[1.375em] text-right">
            {aboutUs.ourMisionHeading}
          </div>
          <div className="w-full max-h-[calc(100vh - 10rem)] overflow-y-auto text-[#555555] font-[400] text-[clamp(0.75rem,1.5vw,1rem)] leading-[1.6875rem] text-right truncate-4">
            <p className="line-clamp-4">{aboutUs.ourMisionDescription}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default OurVision;
