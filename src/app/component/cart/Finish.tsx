import Image from "next/image";
import React, { useState } from "react";
import Button from "../common/Button";
import PriceDetails from "../common/PriceDetails";
import { paymentCardAllow } from "../../../utills/services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck";
import Successfull from '../../component/finsh/Successfull';

const Finish = ({ cartItems }: any) => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardOwner, setCardOwner] = useState("");
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [cvv, setCvv] = useState("");
  const [upiId, setUpiId] = useState("");
  const [errors, setErrors] = useState<any>({});
  const [showModal, setShowModal] = useState(false);

  const validateCardNumber = (number: string) => {
    const cardNumberPattern = /^\d{16}$/;
    if (!number.match(cardNumberPattern)) {
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        cardNumber: "Please provide a valid card number",
      }));
    } else {
      setErrors((prevErrors: any) => {
        const { cardNumber, ...rest } = prevErrors;
        return rest;
      });
    }
  };

  const validateCardOwner = (name: string) => {
    if (name.trim() === "") {
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        cardOwner: "Please provide the card owner's name",
      }));
    } else {
      setErrors((prevErrors: any) => {
        const { cardOwner, ...rest } = prevErrors;
        return rest;
      });
    }
  };

  const validateExpiry = (month: string, year: string) => {
    const monthPattern = /^(0[1-9]|1[0-2])$/;
    const yearPattern = /^(2[0-9])$/; // Adjust as needed for specific year ranges
    if (!month.match(monthPattern) || !year.match(yearPattern)) {
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        expiry: "Please provide a valid expiry date",
      }));
    } else {
      setErrors((prevErrors: any) => {
        const { expiry, ...rest } = prevErrors;
        return rest;
      });
    }
  };

  const validateCVV = (cvv: string) => {
    const cvvPattern = /^\d{3,4}$/;
    if (!cvv.match(cvvPattern)) {
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        cvv: "Please provide a valid CVV",
      }));
    } else {
      setErrors((prevErrors: any) => {
        const { cvv, ...rest } = prevErrors;
        return rest;
      });
    }
  };

  const validateUpiId = (upi: string) => {
    const upiPattern = /^[\w.-]+@[\w.-]+$/;
    if (!upi.match(upiPattern)) {
      setErrors((prevErrors: any) => ({
        ...prevErrors,
        upiId: "Please provide a valid UPI ID",
      }));
    } else {
      setErrors((prevErrors: any) => {
        const { upiId, ...rest } = prevErrors;
        return rest;
      });
    }
  };

  const verifyUpi = () => {
    validateUpiId(upiId);
  };


  const handleSubmit = () => {
    validateCardNumber(cardNumber);
    validateCardOwner(cardOwner);
    validateExpiry(expiryMonth, expiryYear);
    validateCVV(cvv);

    
    if (!errors.cardNumber && !errors.cardOwner && !errors.expiry && !errors.cvv) {
      // handleFormSubmit();
      
      setShowModal(true);
    }
  };

  const handleNumberInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<string>>,
    validator: (value: string) => void
  ) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    setter(value);
    validator(value);
  };

  return (
    <div className="flex lg:flex-row md:flex-row flex-col gap-5">
      <div className="lg:w-[700px] flex flex-col md:pr-8 lg:p-7 p-4 rounded font-medium border-2 border-[#EEEEEE] shadow shadow-[#EEEEEE]">
        <div className="w-full flex gap-5 flex-col border-2 p-5 rounded border-[#EEEEEE] shadow shadow-[#EEEEEE]">
          <div className="flex justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-full w-5 h-5 lg:w-7 lg:h-7 shadow bg-[#FB7800] flex items-center justify-center text-white text-2xl">
                <Image
                  src="/images/checks.svg"
                  width={15}
                  height={15}
                  alt="checks"
                />
              </div>
              <div>Add new card</div>
            </div>
            <div className="flex gap-1">
              {paymentCardAllow.map((data, index) => (
                <div key={index}>
                  <Image src={data.image} width={45} height={45} alt="cards" />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex lg:flex-row flex-col gap-5">
              <div className="flex flex-col lg:w-[60%]">
                <div className="font-medium text-[16px] leading-[24px] text-[#000000]">
                  Card number
                </div>
                <div className="font-normal text-[12px] leading-[18px] text-[#5E5E5E]">
                  Enter the 16-digit card number on the card
                </div>
              </div>
              <div className="flex w-[95%] gap-3">
                <div className="w-[90%] h-fit flex gap-3 border border-gray-300 rounded-md bg-white">
                  <Image
                    src="/images/card.svg"
                    width={24}
                    height={24}
                    alt="cards"
                    className="bg-white m-2"
                  />
                  <input
                    type="text"
                    placeholder="Card number"
                    value={cardNumber}
                    onChange={(e) =>
                      handleNumberInput(e, setCardNumber, validateCardNumber)
                    }
                    className="w-[95%] p-3 text-[14px] text-[#888888] rounded-md outline-none"
                    maxLength={16}
                  />
                </div>
                {!errors.cardNumber && cardNumber !== "" && (
                  <div className="rounded-full w-15 h-15 p-2 bg-white shadow flex  border border-[#C9C9C9] text-[#C9C9C9] m-auto">
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                )}
              </div>
            </div>
            {errors.cardNumber && (
              <div className="text-red-500">{errors.cardNumber}</div>
            )}

            <div className="flex lg:flex-row flex-col gap-5">
              <div className="flex flex-col lg:w-[60%]">
                <div className="font-medium text-[16px] leading-[24px] text-[#000000]">
                  Card owner
                </div>
                <div className="font-normal text-[12px] leading-[18px] text-[#5E5E5E]">
                  Enter the name on the card
                </div>
              </div>

              <div className="w-[95%]">
                <input
                  type="text"
                  placeholder="Card owner"
                  value={cardOwner}
                  onChange={(e) => {
                    setCardOwner(e.target.value);
                    validateCardOwner(e.target.value);
                  }}
                  className="w-[90%] p-3 border border-gray-300 outline-none text-[14px] text-[#888888] rounded-md"
                />
              </div>
            </div>
            {errors.cardOwner && (
              <div className="text-red-500">{errors.cardOwner}</div>
            )}

            <div className="flex lg:flex-row flex-col gap-5">
              <div className="flex flex-col lg:w-[60%]">
                <div className="font-medium text-[16px] leading-[24px] text-[#000000]">
                  Expiry date
                </div>
                <div className="font-normal text-[12px] leading-[18px] text-[#5E5E5E]">
                  Enter the expiry date
                </div>
              </div>

              <div className="w-full lg:pl-3">
                <div className="flex lg:flex-row flex-col lg:gap-2 gap-5">
                  <div className="flex flex-col w-[45%]">
                    <div className="flex gap-1 items-center">
                      <input
                        type="text"
                        placeholder="Month"
                        value={expiryMonth}
                        onChange={(e) =>
                          handleNumberInput(e, setExpiryMonth, (value) =>
                            validateExpiry(value, expiryYear)
                          )
                        }
                        className="w-[70px] p-3 border border-gray-300 outline-none text-[14px] text-[#888888] rounded-md"
                        maxLength={2}
                      />
                      <div className="text-[24px] text-black">/</div>
                      <input
                        type="text"
                        placeholder="Year"
                        value={expiryYear}
                        onChange={(e) =>
                          handleNumberInput(e, setExpiryYear, (value) =>
                            validateExpiry(expiryMonth, value)
                          )
                        }
                        className="w-[60px] p-3 border border-gray-300 outline-none text-[14px] text-[#888888] rounded-md"
                        maxLength={2}
                      />
                    </div>
                    {errors.expiry && (
                      <div className="text-red-500">{errors.expiry}</div>
                    )}
                  </div>

                  <div className="flex flex-col w-[45%]">
                    <div className="flex gap-2 ">
                      <div className="flex flex-col">
                        <div className="font-medium text-[16px] leading-[24px] text-[#000000]">
                          CVV
                        </div>
                        <div className="font-normal text-[12px] leading-[18px] text-[#5E5E5E]">
                          Security code
                        </div>
                      </div>
                      <input
                        type="text"
                        placeholder="CVV"
                        value={cvv}
                        onChange={(e) =>
                          handleNumberInput(e, setCvv, validateCVV)
                        }
                        className="w-[56px] p-3 border border-gray-300 outline-none text-[14px] text-[#888888] rounded-md"
                        maxLength={4}
                      />
                    </div>
                    {errors.cvv && (
                      <div className="text-red-500">{errors.cvv}</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-2 m-3">
          <input
            type="checkbox"
            className="mr-2 h-6 w-6 border border-[#888888] bg-transparent outline-0 rounded appearance-none"
          />
          <div className="text-[16px] font-normal leading-[24px]">
            Set as default
          </div>
        </div>
        <div className="flex flex-col gap-3 md:pr-8 lg:p-10 p-4 font-medium border-2 border-[#EEEEEE] shadow shadow-[#EEEEEE]">
          <div className="flex items-center gap-3">
            <div className="rounded-full w-5 h-5 lg:w-7 lg:h-7 shadow bg-[#FB7800] flex items-center justify-center text-white text-2xl">
              <Image
                src="/images/checks.svg"
                width={15}
                height={15}
                alt="checks"
              />
            </div>
            <div>Google Pay</div>
          </div>
          <div className="flex lg:flex-row flex-col justify-center gap-3">
            <div className="bg-white p-2 flex items-center">
              <Image
                src="/images/gpay.svg"
                width={100}
                height={100}
                alt="checks"
                className="m-auto"
              />
            </div>
            <div className="w-full h-fit flex justify-between border border-gray-300 rounded-md bg-white">
              <input
                type="text"
                placeholder="UPI ID"
                value={upiId}
                onChange={(e) => {
                  setUpiId(e.target.value);
                  validateUpiId(e.target.value);
                }}
                className="w-full p-3 text-[14px] text-[#888888] rounded-md outline-none"
              />

              {!errors.upiId && upiId !== "" && (
                <div className="rounded-full w-5 h-5 lg:w-7 lg:h-7 bg-white shadow flex items-center justify-center text-[#649C2C] m-auto mr-3 lg:[15px]">
                 <FontAwesomeIcon icon={faCheck} />
                </div>
              )}
            </div>
            <div>
              <Button
                styleClass="w-full lg:w-[160px] border-1 border-[#000000] lg:px-3 rounded-tl-[5px] bg-[#000000] text-[#FFFFFF] text-[16px]"
                onClick={verifyUpi}
              >
                Verify UPI ID
              </Button>
            </div>
          </div>
          {errors.upiId && <div className="text-red-500">{errors.upiId}</div>}
        </div>
      </div>

      <div>
        <PriceDetails cartItems={cartItems} handleNextStep={handleSubmit}/>
      </div>

      <div>
        {showModal && <Successfull onClose={() => setShowModal(false)} cartItems={cartItems}/>}
      </div>
    </div>
  );
};

export default Finish;
