"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const AboutText = ({ showAboutus, aboutUs, showDownArrow,contactUs }: any) => {
  return (
    <div className="container mx-auto mt-20 px-4 sm:px-6 lg:px-8">
      <div className="w-[70%] mx-auto text-center">
        {showAboutus && (
          <motion.div
            initial={{ opacity: 0, y: -50 }} // Start from above
            animate={{ opacity: 1, y: 0 }} // Animate to the center
            transition={{ duration: 0.5 }}
          >
            <div className="text-[#FB7800] text-lg font-medium mx-auto">
              About Us
            </div>
          </motion.div>
        )}
        <div className="playfair-font lg:text-[50px] text-[30px] sm:text-5xl lg:text-[50px] font-medium leading-tight text-[#363636] text-center mt-5">
          <motion.div
            initial={{ opacity: 0, y: -50 }} // Start from above
            animate={{ opacity: 1, y: 0 }} // Animate to the center
            transition={{ duration: 0.5 }}
          >
            {showDownArrow && !contactUs ? aboutUs.secondHeading : aboutUs.heading}
          </motion.div>
        </div>
        <div className="text-[16px] text-[#555555] text-center font-normal mt-5">
          <motion.div
            initial={{ opacity: 0, y: -50 }} // Start from above
            animate={{ opacity: 1, y: 0 }} // Animate to the center
            transition={{ duration: 0.5 }}
          >
            {showDownArrow && !contactUs ? aboutUs.secondDescription : aboutUs.description}
          </motion.div>
        </div>
        {showDownArrow && (
          <motion.div
            initial={{ opacity: 0, y: -50 }} // Start from above
            animate={{ opacity: 1, y: 0 }} // Animate to the center
            transition={{ duration: 0.5 }}
          >
            <div className="mx-auto mt-5">
              <Image
                src="/images/downArraow.svg"
                alt="arrow"
                width={75}
                height={75}
                className="mx-auto"
              />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default AboutText;
