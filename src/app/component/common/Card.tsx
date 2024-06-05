"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { addToCart } from "../../../service/index";
import { addedSuccessfully } from "../../../utills/services";
import { toast } from "react-toastify";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons/faCheckCircle";

const Card = ({ product }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);

  const handleAddToCart = () => {
    const payload = {
      productId: product.id,
      name: product.name,
      price: product.price,
      discountPrice: product.price,
      image: product.productImages[0],
      quantity: 1,
      size: "",
      total: product.price * 1,
      user: Math.floor(Math.random() * 100000 + 1),
    };

    addToCart(payload)
      .then(() => {
        toast.success(addedSuccessfully, {
          position: "bottom-right",
          autoClose: 1000,
          hideProgressBar: true,
          icon:   <FontAwesomeIcon icon={faCheckCircle} style={{background:'yellow'}}/>,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="relative w-full sm:w-[315px] rounded overflow-hidden mx-auto">
      <div
        className="relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          className="object-cover w-full h-[305px]"
          src={
            product?.productImages &&
            product?.productImages[1]
          }
          alt="Product Image"
          objectFit="cover"
          width={315}
          height={305}
        />
        <motion.div
          className="absolute inset-0 bg-black"
          style={{ opacity: isHovered ? 0.5 : 0, pointerEvents: "none" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.2 : 0 }}
          transition={{ duration: 0.3 }}
        ></motion.div>
        <motion.div
          className="absolute left-0 right-0 flex justify-center"
          initial={{ opacity: 0, y: "50%" }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? "-400%" : "100%",
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            className={`py-3 px-6 bg-black text-white rounded relative flex flex-row gap-2 overflow-hidden`}
            onClick={handleAddToCart}
            style={{
              overflow: "hidden",
              position: "relative",
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
                transition: "width 0.3s ease-out",
                zIndex: -1,
              }}
              animate={{
                width: buttonHovered ? "100%" : 0,
              }}
            ></motion.span>
          </motion.button>
        </motion.div>
      </div>
      <Link href={`/shop/${product.id}`}>
        <div className="py-4 flex flex-col items-start">
          <div className="text-[16px] leading-[24px] text-[#232323] font-normal">
            {product.name}
          </div>
          <div className="flex items-baseline space-x-2 mt-2 text-[16px] leading-[23px]">
            <span className="text-[#999999] line-through">
              ${product.price}
            </span>
            <span className="text-[#FB7800] font-bold text-[16px] leading-[23px]">
              ${product.discountPrice}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
