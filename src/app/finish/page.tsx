"use client";
import React, { useState, useEffect } from "react";
import Finish from "../component/cart/Finish";
import {
  getCartItems,
  getUserDetails,
} from "../../service/index";
import ProgressBar from "../component/common/ProgressBar";

const FinishPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState([]);
  const [currentStep] = useState(3); // Set second stage as default
  

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
      {currentStep === 3 && <Finish cartItems={cartItems} user={user} />}
    </div>
  );
};

export default FinishPage;
