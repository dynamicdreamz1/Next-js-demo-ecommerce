"use client";
import React, { useState, useEffect } from "react";
import ShippingCart from "../../component/cart/ShippingCart";
import CheckOut from "../../component/cart/CheckOut";
import Finish from "../../component/cart/Finish";
import Button from "../common/Button";
import Image from "next/image";
import { removeCartItem, getCartItems,getUserDetails } from "../../../service/index";

const MultiStepProgress = ({ steps }: any) => {
  const [currentStep, setCurrentStep] = useState(0); // Start from 0 to match array index
  const [cartItems, setCartItems] = useState([]);
  const [user,setUser] = useState([]);

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const getCartData = async () => {
    const data = await getCartItems();
    const user = await getUserDetails();
    setUser(user);
    setCartItems(data);
  };

  useEffect(() => {
    getCartData();
  }, []);

  // Function to remove item from cart
  const removeFromCart = async (item: any) => {
    try {
      await removeCartItem(item.productId);
      getCartData();
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  // Define stage components
  const stageComponents = [
    <ShippingCart removeFromCart={removeFromCart} getCartData={getCartData} cartItems={cartItems} />,
    <CheckOut cartItems={cartItems} user={user} handleNextStep={handleNextStep} />,
    <Finish cartItems={cartItems} />,
  ];

  return (
    <div className="container mx-auto my-10 p-5 lg:px-0">
      <div className="w-full lg:w-[70%] ">
        <div className="flex justify-between items-center flex-col lg:flex-row">
          {steps.map((step: any, index: any) => (
            <div
              key={index}
              className={`flex items-center mb-2 lg:mb-0 ${
                currentStep >= index - 1 ? "text-black" : "text-gray-400"
              }`}
            >
              <span className="font-semibold text-sm lg:text-base">{step}</span>
            </div>
          ))}
        </div>

        <div className="h-2 bg-white shadow-sm rounded-full mt-3 relative flex">
          {[1, 2, 3].map((step, index) => (
            <div key={index} className="flex-1 relative">
              <div
                className={`h-full bg-[#649C2C] rounded-full transition-width duration-300 ease-in-out absolute left-0 ${
                  currentStep >= index ? "w-full z-10" : "w-0"
                }`}
              ></div>
              {currentStep >= index ? (
                <div className="rounded-full w-5 h-5 lg:w-7 lg:h-7 bg-white shadow flex items-center justify-center text-[#649C2C] absolute top-0 right-0 -mt-2.5 z-20 text-xs lg:text-2xl">
                  ✓
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full">
        <div className="mt-10">{stageComponents[currentStep]}</div>

        {currentStep == 0 && (
          <div className="flex justify-between mt-5 flex-col lg:flex-row gap-3 lg:gap-0">
            <Button
              styleClass="w-full lg:w-[400px]  lg:px-11 border-2 border-[#EEEEEE] shadow shadow-[#EEEEEE] flex gap-5 rounded-tl-[5px] bg-[#FFF7F4] text-[#161616] text-[16px]"
              onClick={handlePreviousStep}
              disabled={currentStep === 0}
            >
              <Image
                src="/images/addMore.svg"
                width={24}
                height={24}
                alt="add-more"
              />
              Add More products
            </Button>

            <Button
              styleClass="w-full lg:w-[305px]  lg:px-11 border-1 border-[#FB7800] rounded-tl-[5px] bg-[#FB7800] text-[#FFFFFF] text-[16px]"
              disabled={currentStep === steps.length - 1}
              onClick={handleNextStep}
            >
              Continue Shopping
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiStepProgress;
