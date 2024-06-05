"use client";
import React, { useState, useEffect } from "react";
import CheckOut from "../component/cart/CheckOut";
import { getCartItems, getUserDetails } from "../../service/index";
import ProgressBar from "../component/common/ProgressBar";
import { Suspense } from "react";

const CheckOutPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState([]);
  const currentStep = 2; // Set second stage as default

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
    <Suspense>
      <div className="container mx-auto my-10 p-5 lg:px-0">
        <div className="mb-10">
          <ProgressBar currentStep={currentStep} />
        </div>
        {currentStep === 2 && (
          <CheckOut
            cartItems={cartItems}
            user={user}
            getCartData={getCartData}
          />
        )}
      </div>
    </Suspense>
  );
};

export default CheckOutPage;
