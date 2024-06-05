"use client";
import React, { useState, useEffect } from "react";
import ShippingCart from "../component/cart/ShippingCart";
import {
  removeCartItem,
  getCartItems,
  getUserDetails,
} from "../../service/index";
import ProgressBar from "../component/common/ProgressBar";
import Button from "../component/common/Button";
import Image from "next/image";
import { useRouter } from 'next/navigation'

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState([]);
  let currentStep = 1;
  const router = useRouter()

  const getCartData = async () => {
    const data = await getCartItems();
    const user = await getUserDetails();
    setUser(user);
    setCartItems(data);
  };

  useEffect(() => {
    getCartData();
  }, []);

  const handleNextStep = () =>{
      router.push('/check-out')
  }

  const removeFromCart = async (item: any) => {
    try {
      await removeCartItem(item.productId);
      getCartData();
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };
  
  return (
    <div className="container mx-auto my-10 p-5 lg:px-0">
      <div className="mb-10">
        <ProgressBar currentStep={currentStep} />
      </div>
      {currentStep === 1 && <ShippingCart removeFromCart={removeFromCart} cartItems={cartItems} getCartData={getCartData} user={user} />}

      <div className="flex justify-between mt-5 flex-col lg:flex-row gap-3 lg:gap-0">
            <Button
              styleClass="w-full lg:w-[400px]  lg:px-11 border-2 border-[#EEEEEE] shadow shadow-[#EEEEEE] flex gap-5 rounded-tl-[5px] bg-[#FFF7F4] text-[#161616] text-[16px]"
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
              onClick={handleNextStep}
            >
              Continue Shopping
            </Button>
          </div>

    </div>
  );
};

export default Cart;
