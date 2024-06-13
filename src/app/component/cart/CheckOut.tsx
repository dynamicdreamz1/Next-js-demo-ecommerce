"use client";
import React, { useState, useRef } from "react";
import Button from "../common/Button";
import PhoneInput from "../common/PhoneInput";
import Dropdown from "../common/Dropdown";
import PriceDetails from "../common/PriceDetails";
import { countries, statesByCountry } from "../../../utills/services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons/faCheckCircle";

import {
  addUserAddress,
  removeUserAddress,
  updateUser,
} from "../../../service/index";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";

const CheckOut = ({ cartItems, user, getCartData }: any) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("id");

  const [selectedCode, setSelectedCode] = useState("+1");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<string>(countries[0]);
  const [selectedState, setSelectedState] = useState<string>(
    statesByCountry["USA"][0]
  );
  const [isEdit, setIsEdit] = useState(false);
  const [showAddAddressForm, setShowAddAddressForm] = useState(false);
  const addAddressRef = useRef<HTMLDivElement>(null);
  const [addressData, setAddressData] = useState({
    fullName: "",
    house: "",
    landmark: "",
    postalCode: "",
  });

  const scrollToTop = () => {
    if (addAddressRef.current) {
      addAddressRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleAddAddressForm = () => {
    scrollToTop();
    setShowAddAddressForm(true);
    setAddressData({
      ...addressData,
      fullName: "",
      house: "",
      landmark: "",
      postalCode: "",
    });
  };

  // Handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setAddressData({
      ...addressData,
      [name]: value,
    });
  };

  const handleCountryChange = (country: string) => {
    setSelectedCountry(country as keyof typeof statesByCountry);
    setSelectedState(
      statesByCountry[country as keyof typeof statesByCountry][0]
    );
  };

  const addAddress = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let data = {
      ...addressData,
      id:Math.floor(Math.random()*100000+1),
      country: selectedCountry,
      state: selectedState,
      code: selectedCode,
      phone: phoneNumber,
      isSelected: true,
    };
  
    try {
      await addUserAddress(data);
      await getCartData();
      toast.success("Address added successfully", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: true,
        icon: (
          <FontAwesomeIcon
            icon={faCheckCircle}
            style={{ background: "yellow" }}
          />
        ),
      });
      setShowAddAddressForm(false);
    } catch (err) {
      console.log(err);
    }
  };
  

  const removeUser = async (item: any) => {
    try {
      
      await removeUserAddress(item);
      getCartData();
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  const handleNextStep = () => {
    router.push("/finish");
  };

  const editUser = (data: any) => {
    
    router.push(`?id=${data.id}`);
    setIsEdit(true);
    setAddressData({
      fullName: data.fullName,
      house: data.house,
      landmark: data.landmark,
      postalCode: data.postalCode,
    });
    setSelectedCountry(data.country);
    setSelectedState(
      statesByCountry[data.country as keyof typeof statesByCountry][0]
    );
    setPhoneNumber(data.phone);
    setSelectedCode(data.code);
    setShowAddAddressForm(true);
  };

  const updateAddress = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let data = {
      ...addressData,
      id:Math.floor(Math.random()*100000+1),
      country: selectedCountry,
      state: selectedState,
      code: selectedCode,
      phone: phoneNumber,
      isSelected: false,
    };
    await updateUser(search, data);
    getCartData();
    setIsEdit(false);
    setShowAddAddressForm(false);
  };

  return (
    <div ref={addAddressRef} className={`flex flex-row gap-5 `}>
      <div
        className={`container mx-auto flex lg:flex-row md:flex-row flex-col md:gap-1 gap-10`}
      >
        {(user.length <=0 && !showAddAddressForm) && (
          <div className="lg:w-[640px] h-fit  m-5 flex flex-col rounded items-center	md:pr-8 lg:p-12 p-5 font-medium border-2 border-[#EEEEEE] shadow shadow-[#EEEEEE]">
            <Button
              styleClass="w-fit border-1 border-[#FB7800] rounded-tl-[5px] bg-[#FB7800] text-[#FFFFFF] text-[16px]  lg:px-5"
              onClick={toggleAddAddressForm}
            >
              Add New Address
            </Button>
          </div>
        )}

        <div>
          {showAddAddressForm && (
            <div className="mb-5 lg:w-[640px] md:pr-8 p-10 rounded	font-medium border-2 border-[#EEEEEE] shadow shadow-[#EEEEEE]">
              <p className="text-[18px] text-[#1E1E1E] leading-[32px] font-semibold mt-5 mb-10">
                Enter delivery address
              </p>
              <form className="space-y-4 ">
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor="firstName"
                      className="text-[#888888] text-[14px] leading-[27px]  mb-1"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={addressData.fullName}
                      onChange={handleChange}
                      placeholder="Full name"
                      className="w-full p-3 border border-gray-300 text-[14px] leading-[27px] text-[#888888] rounded-md"
                    />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                  <Dropdown
                    label="Country"
                    options={countries}
                    value={selectedCountry}
                    onChange={handleCountryChange}
                  />

                  <Dropdown
                    label="State"
                    options={
                      statesByCountry[
                        selectedCountry as keyof typeof statesByCountry
                      ]
                    }
                    value={selectedState}
                    onChange={setSelectedState}
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="email"
                    className="text-[#888888] text-[14px] leading-[27px]  mb-1"
                  >
                    House name and number
                  </label>
                  <input
                    type="text"
                    id="house"
                    name="house"
                    value={addressData.house}
                    onChange={handleChange}
                    placeholder="House name and number"
                    className="w-full p-3 border border-gray-300 text-[14px] leading-[27px] text-[#888888] rounded-md"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="Nearest"
                    className="text-[#888888] text-[14px] leading-[27px]  mb-1"
                  >
                    Nearest land mark
                  </label>
                  <input
                    type="text"
                    id="landmark"
                    name="landmark"
                    value={addressData.landmark}
                    onChange={handleChange}
                    placeholder="Nearest landmark"
                    className="w-full p-3 border border-gray-300 text-[14px] leading-[27px] text-[#888888] rounded-md"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="Postal"
                    className="text-[#888888] text-[14px] leading-[27px]  mb-1"
                  >
                    Postal code
                  </label>
                  <input
                    type="number"
                    id="postalCode"
                    name="postalCode"
                    value={addressData.postalCode}
                    onChange={handleChange}
                    min={0}
                    placeholder="Postal code"
                    className="w-full p-3 border border-gray-300 text-[14px] leading-[27px] text-[#888888] rounded-md"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label
                    htmlFor="email"
                    className="text-[#888888] text-[14px] leading-[27px]  mb-1"
                  >
                    Phone number
                  </label>

                  <PhoneInput
                    selectedCode={selectedCode}
                    setSelectedCode={setSelectedCode}
                    phoneNumber={phoneNumber}
                    setPhoneNumber={setPhoneNumber}
                    inputStyle="w-full p-3  text-[14px] leading-[27px] text-[#888888] rounded-md outline-none"
                  />
                </div>

                {!isEdit ? (
                  <Button
                    onClick={(e: React.FormEvent<HTMLFormElement>) =>
                      addAddress(e)
                    }
                    styleClass="w-full border-2 border-[#FB7800] rounded-tl-[5px] bg-[#FFF7F4] text-[#FB7800] text-[16px]  lg:px-11"
                  >
                    Add Address
                  </Button>
                ) : (
                  <Button
                    onClick={(e: React.FormEvent<HTMLFormElement>) =>
                      updateAddress(e)
                    }
                    styleClass="w-full border-2 border-[#FB7800] rounded-tl-[5px] bg-[#FFF7F4] text-[#FB7800] text-[16px]  lg:px-11"
                  >
                    Update Address
                  </Button>
                )}
              </form>
            </div>
          )}

          <div className="flex flex-row flex-wrap gap-5">
            {user.map((data: any, index: any) => (
              <div
                key={index}
                className="lg:w-[640px] m-5 flex flex-col rounded	md:pr-8 lg:p-12 p-5 font-medium border-2 border-[#EEEEEE] shadow shadow-[#EEEEEE]"
              >
                <div className="w-full items-center m-2 flex justify-between">
                  <div className="text-[18px] leading-[32px] font-semibold text-[#1E1E1E] ">
                    Select Delivery Address
                  </div>

                  <div>
                    <Button
                      styleClass="w-fit border-1 border-[#FB7800] rounded-tl-[5px] bg-[#FB7800] text-[#FFFFFF] text-[16px]  lg:px-5"
                      onClick={toggleAddAddressForm}
                    >
                      Add New Address
                    </Button>
                  </div>
                </div>
                <div className="flex gap-2  m-3 items-start">
                  <div>
                    <input
                      type="checkbox"
                      className="mr-2 h-6 w-6 border border-[#888888] bg-transparent outline-0 rounded appearance-none"
                      defaultChecked={data.isSelected}
                    />
                  </div>
                  <div className="flex flex-col w-[50%]">
                    <div className="text-[#363636] text-[16px] leading-[24px] font-medium">
                      {data.fullName}
                    </div>
                    <div className="text-[#555555] text-[16px] leading-[26px] font-normal">
                      {data.house}, {data.landmark}, {data.state},{" "}
                      {data.country}, {data.postalcode}
                    </div>
                    <div className="text-[#363636] text-[16px] leading-[24px] font-medium">
                      Mo{" "}
                      <span className="text-[#555555]">
                        {data.code} {data.phone}
                      </span>
                    </div>
                  </div>
                  <div className="flex-grow " />{" "}
                  {/* This will push the delete image div to the bottom */}
                  <button
                    onClick={() => editUser(data)}
                    className="p-3 border-2 mt-auto border-[#EEEEEE] shadow shadow-[#EEEEEE]"
                  >
                    <Image
                      src="/images/edit.svg"
                      width={20}
                      height={20}
                      alt="delete"
                      className="lg:w-6 lg:h-6"
                    />
                  </button>
                  <button
                    onClick={() => removeUser(data.id)}
                    className="p-3 border-2 mt-auto border-[#EEEEEE] shadow shadow-[#EEEEEE]"
                  >
                    <Image
                      src="/images/delete.svg"
                      width={20}
                      height={20}
                      alt="delete"
                      className="lg:w-6 lg:h-6"
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <PriceDetails cartItems={cartItems} handleNextStep={handleNextStep} />
      </div>
    </div>
  );
};

export default CheckOut;
