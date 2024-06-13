import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Successfull = ({ onClose, cartItems }: any) => {
  const [loading, setLoading] = useState(true);

  console.log(cartItems,"cartItems");
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.3 }}
        className="bg-white p-6 rounded-lg shadow-lg w-max p-5"
      >
        {loading ? (
          <div className="text-center items-center flex flex-col m-5">
            <h1 className="text-3xl mb-4 text-gray-800">Processing...</h1>
            <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-12 w-12"></div>
          </div>
        ) : (
          <div className="text-center w-max p-5">
            <h1 className="text-3xl mb-4 text-green-600">Order Successful!</h1>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-green-500 text-white px-4 py-2 rounded-md shadow-md inline-block mb-4"
            >
              Thank you for your order.
            </motion.div>
            <div className="overflow-x-auto w-max p-5">
              <table className="min-w-full bg-white border-collapse overflow-hidden border border-gray-300 rounded-lg">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="text-left py-2 px-4 border-r border-gray-300">
                      Item
                    </th>
                    <th className="text-left py-2 px-4 border-r border-gray-300">
                      Total Price
                    </th>
                    <th className="text-left py-2 px-4 border-r border-gray-300">
                      Discount Price
                    </th>
                    <th className="text-left py-2 px-4">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((data: any, index: any) => (
                    <tr key={index} className="bg-gray-100">
                      <td className="py-2 px-4 border-r border-gray-300">
                        {data.name}
                      </td>
                      <td className="py-2 px-4 border-r border-gray-300">
                        {data.price}
                      </td>
                      <td className="py-2 px-4 border-r border-gray-300">
                        {data.discountPrice}
                      </td>
                      <td className="py-2 px-4">{data.quantity}</td>
                    </tr>
                  ))}
                  {/* Add more rows for additional items */}
                </tbody>
              </table>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex justify-center mt-4"
            >
              <button
                onClick={onClose}
                className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full transition duration-300"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Successfull;
