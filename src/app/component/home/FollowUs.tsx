"use client";

import React, { useState,useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { getInstaProducts } from "../../../service/index";

interface Product {
  id: number;
  name: string;
  productImages: string[];
  price: number;
  discountPrice: number;
  category: number;
  bestSeller: boolean;
  topRated: boolean;
  Accessories: boolean;
  Featured: boolean;
  rating: number;
  type: string;
  popularity: number;
  date: string;
  description: string;
  fullDescription: string;
  sku: string;
  size: {
    isAvailable: boolean;
    title: string;
  }[];
  service: {
    image: string;
    title: string;
  }[];
  reviews: {
    userAvatar: string;
    stars: number;
    description: string;
    name: string;
    date: string;
  }[];
  additionalInfo: {
    image: string;
    title: string;
    description: string;
  }[];
}


const FollowUs = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

  const fetchTabProduct = async () => {
    try {
      const ProductsData = await getInstaProducts();
      setProducts(ProductsData);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchTabProduct();
  }, []);

  return (
    <div className="container mx-auto py-5 text-center flex flex-col items-center">
      <div className="playfair-font font-[500] text-3xl lg:text-4xl leading-tight text-[#363636] mt-14 mb-6">
        Follow us on instagram
      </div>
      <div className="w-36 h-[2px] bg-[#FB7800] mx-auto mb-10"></div>

      <div className="container mx-auto py-2 flex flex-wrap md:justify-center lg:justify-between items-center">
        {products.map((data, index) => (
          <div
            key={index}
            className="relative w-full sm:w-[calc(50%-10px)] md:w-[calc(33.33%-10px)] lg:w-[calc(25%-10px)] overflow-hidden"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Black overlay */}
            <motion.div
              className="absolute inset-0 bg-black z-10"
              style={{
                opacity: hoveredIndex === index ? 0.5 : 0,
                pointerEvents: "none",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredIndex === index ? 0.5 : 0 }}
              transition={{ duration: 0.3 }}
            ></motion.div>

            {/* Cart Icon */}
            <motion.div
              className="absolute inset-0 flex justify-center items-center z-20"
              initial={{ opacity: 0, y: "50%" }}
              animate={{
                opacity: hoveredIndex === index ? 1 : 0,
                y: hoveredIndex === index ? "0%" : "50%",
              }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/insta.svg"
                width={22}
                height={22}
                alt="Logo"
              />
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ scale: 1 }}
              animate={{
                scale:hoveredIndex === index ? 1.1 : 1,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Image
                src={data?.productImages[0]}
                alt={`Image ${index}`}
                width={305}
                height={305}
                className="w-full h-auto object-cover"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FollowUs;
