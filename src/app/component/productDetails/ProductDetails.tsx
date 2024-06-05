"use client";
import Image from "next/image";
import React, { useState } from "react";
import Button from "../common/Button";
import { addToCart } from "../../../service/index";
import { addedSuccessfully,SelectSizeError } from "../../../utills/services";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons/faCheckCircle";

const ProductDetails = ({ productDetails }: any) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {

    if (!selectedSize) {
      // Display a toast error message
      toast.error(SelectSizeError, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
      });
      return; // Exit the function if no size is selected
    }

    const payload = {
      productId: productDetails.id,
      name: productDetails.name,
      price: productDetails.price,
      discountPrice: productDetails.price,
      image:productDetails.productImages[0],
      quantity,
      size: selectedSize,
      total: productDetails.price * quantity,
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
    <div className="max-w-xl p-4">
      <div className="flex flex-col gap-2 mb-4">
        <h1 className="text-[40px] font-[700] playfair-font text-[#1E1E1E] leading-[66px]">
          {productDetails.name}
        </h1>
        <p className="text-[24px] leading-[24px] font-medium text-[#FB7800]">
          ${productDetails.price}
        </p>
      </div>
      <p className="text-[16px] text-[#555555] leading-[27px] font-normal mb-4 w-[70%]">
        {productDetails.description}
      </p>
      <div className="flex flex-col gap-2 mb-4">
        <p className="text-[14px] font-normal text-[#1E1E1E]">Size:</p>
        <nav
          className="flex border-1 rounded-l-lg w-fit text-[14px]"
          aria-label="Tabs"
          role="tablist"
        >
          {productDetails.size.map((data: any, index: number) => (
            <button
              key={index}
              type="button"
              className={`py-1 px-1 font-normal text-center w-[67px] h-[40px]  hover:bg-[#FB7800]
               ${
                 index + 1 === productDetails.size.length ? "rounded-r-lg" : ""
               } 
              ${!data.isAvailable ? "opacity-20" : ""}
              ${
                selectedSize == data.title ? "bg-[#ffdacc]" : "bg-white " // Change background color of selected size
              }
              ${index === 0 ? "rounded-l-lg" : ""}`}
              onClick={() => handleSizeSelect(data.title)}
              disabled={!data.isAvailable}
            >
              {data.title}
            </button>
          ))}
        </nav>
      </div>
      <div className="flex flex-col gap-2 mb-4">
        <p className="text-[14px] font-normal text-[#1E1E1E]">Quantity:</p>
        <div className="flex lg:flex-row flex-col gap-5">
          <nav
            className="flex border-1 rounded-lg w-fit text-[14px]"
            aria-label="Tabs"
            role="tablist"
          >
            <button
              type="button"
              className="bg-white py-1 px-1 font-normal text-center hover:bg-[#ffdacc] w-[60px] h-[40px] rounded-l-lg"
              onClick={handleDecrement}
            >
              -
            </button>
            <div className="flex p-auto font-normal text-center justify-center  w-[60px] h-[40px] items-center">
              {quantity}
            </div>
            <button
              type="button"
              className="bg-white py-1 px-1 font-normal text-center align-center hover:bg-[#ffdacc] w-[60px] h-[40px] rounded-r-lg"
              onClick={handleIncrement}
            >
              +
            </button>
          </nav>
          <Button
            styleClass="w-[250px]  lg:px-11 h-[50px] rounded-tl-[5px] bg-[#FB7800] text-white uppercase"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </div>
      </div>
      <div className="flex align-center mb-4 gap-2">
        <span className="text-[16px] leading-[24px] text-[#1E1E1E] font-medium	">
          SKU:
        </span>
        <span className="text-[16px] leading-[24px] text-[#666666] ">
          {productDetails.sku}
        </span>
      </div>
      <div className="flex flex-col mb-4 gap-2 text-[14px] leading-[21px] text-[#666666]">
        {productDetails.service.map((items: any, index: number) => (
          <div className="flex gap-2" key={index}>
            <Image src={items.image} width={16} height={16} alt="Shipping"  />
            <p>{items.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;
