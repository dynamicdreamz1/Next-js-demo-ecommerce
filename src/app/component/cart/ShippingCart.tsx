import React, { useState } from "react";
import Image from "next/image";
import Button from "../common/Button";
import { updateCartItem, getProductDetails } from "../../../service/index";

const ShippingCart = ({ removeFromCart, getCartData, cartItems }: any) => {
  const [editItem, setEditItem] = useState<any>(null);
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [product, setProduct] = useState({});

  const openEditPopup = async (item: any) => {
    setEditItem(item);
    let data = await getProductDetails(item.productId);
    setProduct(data);
    setSize(item.size);
    setQuantity(item.quantity);
  };

  const closeEditPopup = () => {
    setEditItem(null);
  };

  const updateItem = async () => {
    await updateCartItem(editItem.productId, { quantity: quantity, size: size });
    getCartData();
    closeEditPopup();
  };

  return (
    <div className="container overflow-x-auto flex flex-col gap-5 p-5 lg:p-0">
      <table className="table-auto w-full">
        <thead>
          <tr className="text-[16px] lg:text-[18px] text-[#1E1E1E] leading-[32px] uppercase">
            <th className="border-b px-2 lg:px-4 py-3 font-semibold text-start">
              Product Name
            </th>
            <th className="border-b px-2 lg:px-4 py-3 font-semibold text-center">
              Product Price
            </th>
            <th className="border-b px-2 lg:px-4 py-3 font-semibold text-center">
              Quantity
            </th>
            <th className="border-b px-2 lg:px-4 py-3 font-semibold text-center">
              Total Price
            </th>
            <th className="border-b px-2 lg:px-4 py-3 font-semibold text-start">
              Edit
            </th>
            <th className="border-b px-2 lg:px-4 py-3 font-semibold text-start">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {cartItems?.map((product: any, index: any) => (
            <tr key={index}>
              <td className="border-b px-2 lg:px-4 py-5 flex gap-3 items-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={12}
                  height={12}
                  className="w-12 h-12 lg:w-16 lg:h-16"
                />
                <div className="flex flex-col">
                  <span className="font-normal text-[14px] lg:text-[16px] leading-[24px] text-[#1E1E1E]">
                    {product.name}
                  </span>
                </div>
              </td>
              <td className="border-b px-2 lg:px-4 py-5 text-center">
                <span className="text-[#FB7800] font-bold text-[14px] lg:text-[16px] mr-2">
                  ${product.discountPrice}
                </span>
                <span className="text-[#999999] line-through text-[14px] lg:text-[16px]">
                  ${product.price}
                </span>
              </td>
              <td className="border-b px-2 lg:px-4 py-5 text-center text-[14px] lg:text-[16px] text-[#1E1E1E]">
                {product.quantity}
              </td>
              <td className="text-[#FB7800] font-bold text-[14px] lg:text-[16px] border-b px-2 lg:px-4 py-5 text-center">
                ${product.quantity * product.price}
              </td>
              <td className="border-b px-2 lg:px-4 py-5 items-center">
                <button onClick={() => openEditPopup(product)}>
                  <Image
                    src="/images/edit.svg"
                    width={20}
                    height={20}
                    alt="edit"
                    className="lg:w-6 lg:h-6"
                  />
                </button>
              </td>
              <td className="border-b px-2 lg:px-4 py-5 items-center">
                <button onClick={() => removeFromCart(product)}>
                  <Image
                    src="/images/delete.svg"
                    width={20}
                    height={20}
                    alt="delete"
                    className="lg:w-6 lg:h-6"
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Popup */}
      {editItem && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg">
            <h2 className="text-xl font-semibold mb-3">Edit Item</h2>
            <div className="flex flex-col mb-3">
              <label htmlFor="size" className="mb-1 font-semibold">
                Size:
              </label>
              <div className="flex">
                {product &&
                  product.size &&
                  product.size.map((data: any, index: number) => (
                    <button
                      key={index}
                      type="button"
                      className={`bg-white py-1 border border-gray-300 -px-1 font-normal text-center w-[67px] h-[40px] 
                        ${index + 1 === product.size.length ? "rounded-r-lg" : ""} 
                        ${!data.isAvailable ? "opacity-20 border-gray-300" : ""}
                        ${
                          size === data.title ? "bg-gray-300" : "" // Change background color of selected size
                        }
                        ${index === 0 ? "rounded-l-lg" : ""}`}
                                onClick={() => setSize(data.title)}
                                disabled={!data.isAvailable}
                              >
                      {data.title}
                    </button>
                  ))}
              </div>
              {/* Input field fallback */}
              {!product || !product.size ? (
                <input
                  type="text"
                  id="size"
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  className="border px-2 py-1 rounded"
                />
              ) : null}
            </div>
            <div className="flex flex-col mb-3">
              <label htmlFor="quantity" className="mb-1 font-semibold">
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="border px-2 py-1 rounded"
              />
            </div>
            <Button
              styleClass="border border-[#FB7800] text-[#FB7800] px-4 py-2 m-2 rounded-md"
              onClick={updateItem}
            >
              Update
            </Button>
            <Button
              styleClass="border border-[#FB7800] text-[#FB7800] px-4 py-2 m-2 rounded-md"
              onClick={closeEditPopup}
            >
              Cancel
            </Button>
          </div>
        </div>
      )}

      <div className="flex flex-col p-5 lg:p-10 gap-3 border-2 border-[#EEEEEE] shadow shadow-[#EEEEEE]">
        <div className="uppercase text-[#1E1E1E] text-[16px] lg:text-[18px] font-semibold">
          Coupon
        </div>
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-5">
          <input
            type="text"
            id="firstName"
            placeholder="Enter Coupon code here..."
            className="w-full lg:w-[60%] p-3 border-2 border-[#D0D5DD] rounded-md text-[#888888] text-[14px]"
          />

          <Button styleClass="w-full lg:w-[305px] border-2  lg:px-11 border-[#FB7800] rounded-tl-[5px] bg-[#FFF7F4] text-[#FB7800] text-[16px]">
            Apply Coupon
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShippingCart;
