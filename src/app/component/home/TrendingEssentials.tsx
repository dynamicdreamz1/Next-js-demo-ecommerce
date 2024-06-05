"use client";
import React from "react";
import { motion } from "framer-motion";
import TrendingSlider from "../common/TrendingSlider";
import Button from "../common/Button";

const textVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const TrendingEssentials = ({ homePageText, ProductsData }:any) => {
  return (
    <div className="container mx-auto my-10 lg:my-20">
      <div className="flex flex-col lg:flex-row lg:justify-between md:justify-between lg:px-10 justify-center items-center gap-10 lg:gap-15">
        {/* Content Column */}
        <motion.div 
          className="w-full lg:w-[45%] max-w-lg flex flex-col items-center lg:items-start md:items-start p-5"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <div className="playfair-font font-[500] text-2xl lg:text-3xl xl:text-5xl text-[#363636]">
            {homePageText?.title}{" "}
            <span className="text-[#FB7800]">
              {homePageText?.highlightTitle}
            </span>
          </div>
          <div className="w-24 lg:w-36 h-[2px] bg-[#FB7800] my-3 lg:my-5"></div>
          <div className="font-normal text-sm lg:text-base xl:text-lg leading-7 text-[#888888]">
            {homePageText?.description}
          </div>
          <Button styleClass="w-[200px] lg:w-auto h-auto bg-[#FB7800] text-white uppercase mt-4 lg:mt-5 px-10">
            Shop Now
          </Button>
        </motion.div>
        {/* Slider Column */}
        <div className="w-full lg:w-[50%] px-7">
          <TrendingSlider trendingData={ProductsData} />
        </div>
      </div>
    </div>
  );
};

export default TrendingEssentials;
