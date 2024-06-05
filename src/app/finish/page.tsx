"use client";
import React, { useState, useEffect } from "react";
import Finish from "../component/cart/Finish";
import {
  removeCartItem,
  getCartItems,
  getUserDetails,
} from "../../service/index";
import ProgressBar from "../component/common/ProgressBar";

const FinishPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);
  const [currentStep, setCurrentStep] = useState(2); // Set second stage as default

  useEffect(() => {
    // This check ensures the code runs only in the browser.
    if (typeof window !== "undefined") {
      const cartData = JSON.parse(localStorage.getItem("cart"));
      const userData = JSON.parse(localStorage.getItem("userAddresses"));
      setCartItems(cartData || []);
      setUser(userData || {});
    }
  }, []);

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
      {currentStep === 2 && <Finish cartItems={cartItems} user={user} />}
    </div>
  );
};

export default FinishPage;
