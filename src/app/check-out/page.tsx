"use client";
import React, { useState, useEffect } from "react";
import CheckOut from "../component/cart/CheckOut";
import {
  removeCartItem,
  getCartItems,
  getUserDetails,
} from "../../service/index";
import ProgressBar from "../component/common/ProgressBar";

const checkout = () => {
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cart")));
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("userAddresses")));
  const [currentStep, setCurrentStep] = useState(1); // Set second stage as default

  const getCartData = async () => {
    const data = await getCartItems();
    const user = await getUserDetails();
    setUser(user);
    setCartItems(data);
  };

  useEffect(() => {
    getCartData();
  }, []);

  return (
    <div className="container mx-auto my-10 p-5 lg:px-0">
          <div className="mb-10">
        <ProgressBar currentStep={currentStep} />
      </div>
      {currentStep === 1 && <CheckOut cartItems={cartItems} user={user} getCartData={getCartData}/>}
    </div>
  );
};

export default checkout;
