import React from "react";
import Button from "./Button";
import { usePathname } from "next/navigation";

const calculateTotal = (data:any) => {
  // Initialize variables
  let totalPrice = 0;
  let totalDiscount = 0;
  let couponDiscount = 0;
  const platformFee = 5.0; // Example static platform fee
  const shippingFee = 10.0; // Example static shipping fee
  const TotalShippingFee = 10.0;

  // Iterate through data and calculate totals
  data.forEach((item:any) => {
    totalPrice += item.price * item.quantity;
    totalDiscount += (item.price - item.discountPrice) * item.quantity;
  });

  // Example coupon discount calculation
  couponDiscount = 0.1 * totalPrice; // 10% discount for illustration

  // Calculate overall total
  const overallTotal =
    totalPrice - totalDiscount - couponDiscount + platformFee + shippingFee;

  return {
    totalPrice,
    totalDiscount,
    couponDiscount,
    platformFee,
    shippingFee,
    overallTotal,
    TotalShippingFee,
  };
};

const PriceDetails = ({ cartItems, handleNextStep }: any) => {
  const pathname = usePathname();
  const {
    totalPrice,
    totalDiscount,
    couponDiscount,
    platformFee,
    shippingFee,
    overallTotal,
    TotalShippingFee,
  } = calculateTotal(cartItems);

  return (
    <div className="h-fit lg:w-[590px] flex flex-col rounded	 gap-4 md:pr-8 p-10 font-medium border-2 border-[#EEEEEE] shadow shadow-[#EEEEEE]">
      <div className="font-medium text-[16px] leading-[24px] text-[#363636] mb-4">
        Price details
      </div>

      <div className="flex justify-between">
        <div className="font-normal	text-[16px] leading-[24px] text-[#363636]">
          Total Price
        </div>
        <div className="font-semibold	text-[16px] leading-[24px] text-[#363636]">
          ${totalPrice.toFixed(2)}
        </div>
      </div>
      <div className="flex justify-between">
        <div className="font-normal	text-[16px] leading-[24px] text-[#363636]">
          Discount on Price
        </div>
        <div className="font-semibold	text-[16px] leading-[24px] text-[#649C2C]">
          ${totalDiscount.toFixed(2)}
        </div>
      </div>
      <div className="flex justify-between">
        <div className="font-normal	text-[16px] leading-[24px] text-[#363636]">
          Coupon Discount
        </div>
        <div className="font-semibold	text-[16px] leading-[24px] text-[#649C2C]">
          ${couponDiscount.toFixed(2)}
        </div>
      </div>
      <div className="flex justify-between">
        <div className="font-normal	text-[16px] leading-[24px] text-[#363636]">
          Platform fee
        </div>
        <div className="font-semibold	text-[16px] leading-[24px] text-[#363636]">
          ${platformFee.toFixed(2)}
        </div>
      </div>
      <div className="flex justify-between">
        <div className="font-normal	text-[16px] leading-[24px] text-[#363636]">
          Shipping fee
        </div>
        <div className="flex gap-2">
          <span className="text-[#999999] font-semibold	text-[16px] leading-[24px] line-through">
            ${TotalShippingFee.toFixed(2)}
          </span>
          <span className="text-[#FB7800] font-semibold text-[16px] leading-[24px]">
            ${shippingFee.toFixed(2)}
          </span>
        </div>
      </div>

      <div className="border-t border-gray-300 border-dashed my-4"></div>

      <div className="flex justify-between">
        <div className="font-normal	text-[16px] leading-[24px] text-[#363636]">
          Total Amount
        </div>
        <div className="font-semibold	text-[16px] leading-[24px] text-[#363636]">
          ${overallTotal.toFixed(2)}
        </div>
      </div>

      <div>
        {pathname == "/finish" ? (
          <Button
            styleClass="w-full  border-1 border-[#FB7800] rounded-tl-[5px] bg-[#FB7800] text-[#FFFFFF] text-[16px]  lg:px-11"
            onClick={handleNextStep}
          >
            Pay ${overallTotal.toFixed(2)}
          </Button>
        ) : (
          <Button
            styleClass="w-full  border-1 border-[#FB7800] rounded-tl-[5px] bg-[#FB7800] text-[#FFFFFF] text-[16px]  lg:px-11"
            onClick={handleNextStep}
          >
            Save and Continue
          </Button>
        )}
      </div>
    </div>
  );
};

export default PriceDetails;
