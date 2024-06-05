import React from "react";
import { countryCodes } from "../../../utills/services";

export default function PhoneInput({
  selectedCode,
  setSelectedCode,
  phoneNumber,
  setPhoneNumber,
  inputStyle,
}:any) {
  return (
    <div className="w-full flex border border-gray-300 rounded-md">
      <select
        value={selectedCode}
        onChange={(e) => setSelectedCode(e.target.value)}
        className="p-3 text-[14px] leading-[27px] text-[#555555] bg-[#FFFFFF] rounded-md "
      >
        {countryCodes.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
      <input
        type="tel"
        placeholder="Phone number"
        value={`${selectedCode} ${phoneNumber}`}
        onChange={(e) => {
          // Remove the country code part and set the phone number
          const phoneValue = e.target.value.replace(selectedCode, "").trim();
          setPhoneNumber(phoneValue);
        }}
        className={inputStyle}
      />
    </div>
  );
}
