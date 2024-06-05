"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AdditionalInfo from "../common/AdditionalInfo";

const textVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const UnderEye = ({ homePageText }: any) => {
  return (
    <div className="mx-auto relative w-full lg:w-[90%] lg:ml-[10%] flex flex-col lg:flex-row">
      {/* Right side image */}
      <div className="w-full lg:w-[414px] md:w-[414px] md:mx-auto sm:mx-auto lg:absolute lg:top-[50%] lg:transform lg:-translate-y-1/2 lg:left-[0%]">
        <Image
          src={homePageText.bg ? homePageText.bg : "/images/bg.svg"}
          alt="Description of your image"
          width={414} // Width of the image
          height={488} // Height of the image
          className="w-full h-auto lg:h-full object-cover"
        />
      </div>

      {/* Left side content */}
      <div className="lg:w-[100%] w-full lg:ml-[15%] bg-[#FFF2EF] flex flex-row gap-[2rem] lg:p-10">
        {/* Heading text with different color half */}
        <div className="lg:w-[20%]"></div>

        <div className="w-[100%] bg-[#FFF2EF] flex flex-col gap-[2rem] p-5">
          <motion.div
            className="w-full lg:w-[90%] flex flex-col gap-[1.5rem]"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <div className="playfair-font font-[500] text-3xl lg:text-5xl text-[#363636] w-[100%]">
              {homePageText.title}{" "}
              <span className="text-[#FB7800]">
                {homePageText.highliteTitle}
              </span>
            </div>
            {/* Description text */}
            <div className="font-normal w-[80%] text-[16px] leading-[28px] text-[#888888]">
              {homePageText.description}
            </div>
            {/* Two columns like a table */}
            <AdditionalInfo additionalInfo={homePageText.items} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default UnderEye;
