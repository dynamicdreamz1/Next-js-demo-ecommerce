"use client";
import React, { useState } from "react";
import Image from 'next/image';
import Button from "../common/Button";
import PhoneInput from "../common/PhoneInput";

const ContactForm = ({ ContactFormText }: any) => {
  const [selectedCode, setSelectedCode] = useState("+1");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className="container m-1 flex flex-col md:flex-row gap-6 bg-[#FFFCFB] px-[2rem] lg:pl-[6rem] py-[3rem] mx-auto rounded-[50px] mt-10 shadow-md">
      <div className="md:w-1/2 ml-6 md:pr-8">
        <div className="playfair-font sm:text-5xl lg:text-[36px] font-bold leading-tight text-[#363636] mt-5">{ContactFormText.title}</div>
        <p className="text-[16px] text-[#555555] mt-5 mb-10">{ContactFormText.formDescription}</p>
        <form className="space-y-4 ">
          {ContactFormText.fieldsData.map((field: any, index: number) => (
            <div key={index} className="flex flex-col w-full">
              <label htmlFor={field.id} className="text-[#555555] text-[14px] leading-[27px] mb-1">{field.label}</label>
              {field.type === "textarea" ? (
                <textarea
                  id={field.id}
                  placeholder={field.placeholder}
                  className="w-full p-3 border border-gray-300 rounded-md"
                  rows={4}
                ></textarea>
              ) : field.type === "phone" ? (
                <PhoneInput
                  selectedCode={selectedCode}
                  setSelectedCode={setSelectedCode}
                  phoneNumber={phoneNumber}
                  setPhoneNumber={setPhoneNumber}
                  inputStyle="w-full p-3 text-[14px] leading-[27px] text-[#888888] rounded-md outline-none"
                />
              ) : (
                <input
                  type={field.type}
                  id={field.id}
                  placeholder={field.placeholder}
                  className="w-full p-3 border border-gray-300 rounded-md"
                />
              )}
            </div>
          ))}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="agree"
              className="h-4 mt-5 w-4 text-blue-600 border-gray-300 rounded"
            />
            <label htmlFor="agree" className="text-sm mt-5">
              I agree to the terms and conditions
            </label>
          </div>
          <Button styleClass="w-full lg:px-11 rounded-tl-[5px] bg-[#FB7800] text-white uppercase">
            {ContactFormText.buttonText}
          </Button>
        </form>
      </div>
      <div className="flex lg:h-[800px] h-[300]">
        <Image
          src="/images/contact.svg"
          alt="Contact Us"
          width={550}
          height={800}
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default ContactForm;
