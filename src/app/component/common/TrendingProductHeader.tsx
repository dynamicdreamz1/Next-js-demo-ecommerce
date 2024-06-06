import React from "react";
import { motion } from "framer-motion";

const TrendingProductHeader = ({ title, items, activeTab, setActiveTab }: any) => {
  return (
    <div className="container mx-auto relative px-4 sm:px-8 lg:px-15 py-5 text-center flex flex-col items-center">
      <div className="playfair-font font-[500] text-3xl lg:text-4xl leading-tight text-[#363636] mt-14 mb-6">
        {title}
      </div>
      <div className="w-36 h-[2px] bg-[#FB7800] mx-auto mb-10"></div>

      <div className="flex flex-wrap justify-center mb-6 gap-3">
        {items.map((category: any) => (
          <motion.button
            key={category?.id}
            className={`px-5 py-2 sm:px-7 sm:py-2.5 relative overflow-hidden ${
              activeTab === category?.code ? "" : ""
            }`}
            onClick={() => setActiveTab(category?.code)}
            whileHover={{ scale: 1.05 }} // Optional hover animation
          >
            {category?.title}
            {activeTab === category?.code && (
              <motion.span
                className="absolute inset-0 border-2 border-dashed border-[#363636] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
              ></motion.span>
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default TrendingProductHeader;
