import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const SmallCard = ({ product }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);

  return (
    <div
    className="bg-white rounded-lg overflow-hidden relative"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
    <div className="flex flex-row justify-center">
      <div className="flex-shrink-0 w-1/2">
        <Image
          className="object-cover object-center"
          src={product.productImages[0]}
          alt={product.name}
          width={192}
          height={192}
        />
      </div>
      <div className="flex flex-col justify-center h-full w-1/2 p-4 m-auto">
        <h2 className="text-[#232323] font-normal text-start text-[14px] mb-2 w-[60%]">
          {product.name}
        </h2>
        <div className="flex gap-2 items-center">
          <span className="text-[#999999] text-[14px] line-through">
            ${product.price}
          </span>
          <span className="text-[#FB7800] text-[14px] font-bold text-lg">
            ${product.discountPrice}
          </span>
        </div>
      </div>
    </div>
    {isHovered && (
      <motion.div
        className="absolute inset-0 flex justify-center items-center"
        style={{ zIndex: 1 }} // Set higher z-index for overlay
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          className={`py-2 px-5 bg-black text-white rounded flex flex-row gap-2 overflow-hidden`}
          onClick={() => {
            /* Add your add-to-cart functionality here */
          }}
          style={{
            overflow: "hidden",
            position: "relative",
            zIndex: 2, // Ensure button appears above overlay
          }}
          onMouseEnter={() => setButtonHovered(true)}
          onMouseLeave={() => setButtonHovered(false)}
        >
          <Image src="/images/cart.svg" width={22} height={22} alt="Logo" />
          <span>Add to Cart</span>
          <motion.span
            className="hover-effect"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "#FB7800",
              zIndex: -1,
            }}
            animate={{
              width: buttonHovered ? "100%" : 0,
            }}
          ></motion.span>
        </motion.button>
      </motion.div>
    )}
    {isHovered && (
      <motion.div
        className="absolute inset-0 bg-black"
        style={{ opacity: 0.2, pointerEvents: "none", zIndex: 0 }} // Set lower z-index for overlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 0.3 }}
      ></motion.div>
    )}
  </div>
  );
};

export default SmallCard;
