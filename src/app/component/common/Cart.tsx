import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  getCartItems,
  updateCartItem,
  removeCartItem,
} from "../../../service/index";
import { useRouter } from 'next/navigation'


const Cart = ({ toggleCart, setIsCartOpen }: any) => {
  const [isMobile, setIsMobile] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isAtTop, setIsAtTop] = useState(true);
  const router = useRouter()

  
  
  const getCartData = async () => {
    const data = await getCartItems();
    setCartItems(data);
  };

  useEffect(() => {
    getCartData();
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Function to increment quantity
  const incrementQuantity = async (item: any) => {
    const updatedQuantity = item.quantity + 1;
    
    try {
      await updateCartItem(item.productId, { quantity: updatedQuantity });
      getCartData(); // Refresh cart data after update
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  // Function to decrement quantity
  const decrementQuantity = async (item: any) => {
    if (item.quantity > 1) {
      const updatedQuantity = item.quantity - 1;
      try {
        await updateCartItem(item.productId, { quantity: updatedQuantity });
        getCartData(); // Refresh cart data after update
      } catch (error) {
        console.error("Error updating quantity:", error);
      }
    }
  };

  // Function to remove item from cart
  const removeFromCart = async (item: any) => {
    try {
      await removeCartItem(item.productId);
      getCartData();
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  const redirect = () =>{
    setIsCartOpen(false)
     router.push('/check-out')
  }

  const shopredirect = () =>{
    setIsCartOpen(false)
     router.push('/shop')
  }

  if (cartItems?.length === 0) {
    return (
      <div className={`fixed right-0 ${isAtTop ? "top-20" : "top-0"} ${isMobile ? "w-full" : "lg:w-[23rem]"} overflow-x-hidden	h-full bg-[#FFF7F4] shadow-lg z-50 overflow-y-auto cart-container cart-toggle-button`}>
        <div className="p-4 flex justify-between items-center">
          <h2 className="text-[#1E1E1E] text-[20px] font-bold">Your cart</h2>
          <button className="cart-toggle-button" onClick={toggleCart}>
            <Image
              src="/images/XCircle.svg"
              width={25}
              height={25}
              alt="XCircle"
            />
          </button>
        </div>
        <div className="flex flex-col items-center text-center justify-center w-[80%] mx-auto">
          <Image
            src="/images/empty-cart.svg"
            width={150}
            height={150}
            alt="Empty Cart"
          />
          <p className="text-[#1E1E1E] text-[20px] mt-4 font-bold ">
            Your cart is empty.
          </p>
          <p className="text-[#1E1E1E] text-[14px] mt-4">
            Looks like you haven’t added anything to your cart. Go ahead explore
            top categories
          </p>
          <button className="bg-[#1E1E1E] text-white px-4 py-2 rounded-md mt-4" onClick={shopredirect}>
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`fixed right-0 ${isAtTop ? "top-20" : "top-0"} ${
        isMobile ? "w-full" : "lg:w-[23rem]"
      } overflow-x-hidden	h-full bg-[#FFF7F4] shadow-lg z-50 overflow-y-auto cart-container cart-toggle-button`}
    >
      <div className="p-4 flex justify-between items-center">
        <h2 className="text-[#1E1E1E] text-[20px] font-bold">Your cart</h2>
        <button onClick={toggleCart}>
          <Image
            src="/images/XCircle.svg"
            width={25}
            height={25}
            alt="XCircle"
          />
        </button>
      </div>
      <div className="overflow-y-auto max-h-screen">
        {cartItems &&
          cartItems.length > 0 &&
          cartItems.map((item: any, index) => (
            <div
              key={index}
              className="flex items-center p-3 border-2 border-[#DDDDDD] my-2 mx-5"
            >
              <Image src={item.image} width={85} height={85} alt={item.name} />
              <div className="ml-2 flex flex-col gap-2">
                <p className="text-[13px] font-normal">{item.name}</p>
                <div className="flex gap-2">
                  <span className="text-[#FB7800] font-bold text-[12px]">
                    ${item.discountPrice}
                  </span>
                  <span className="text-[#999999] line-through text-[12px]">
                    ${item.price}
                  </span>
                </div>
                <div className="flex gap-2 items-center">
                  <div className="flex gap-1">
                    <button
                      className="border border-[#DDDDDD] px-2 py-0 rounded-md text-center"
                      onClick={() => decrementQuantity(item)}
                    >
                      -
                    </button>
                    <button className="border border-[#DDDDDD] px-2 py-0 text-[12px] rounded-md text-center">
                      {item.quantity}
                    </button>
                    <button
                      className="border border-[#DDDDDD] px-2 py-0 rounded-md text-center"
                      onClick={() => incrementQuantity(item)}
                    >
                      +
                    </button>
                  </div>

                  <button
                    className="border border-[#DDDDDD] p-2 rounded-md text-center"
                    onClick={() => removeFromCart(item)}
                  >
                    <Image
                      src="/images/delete.svg"
                      width={10}
                      height={10}
                      alt="Cart"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
      {/* Buttons at the bottom */}
      <div className="ml-2 flex flex-col justify-center w-[90%] absolute bottom-[15%]">
        <button className="bg-[#FB7800] text-white px-4 py-2 rounded-md m-2" onClick={redirect}>
          Checkout Now
        </button>

        <button
          onClick={() => setIsCartOpen(false)}
          className="border border-[#FB7800] text-[#FB7800] px-4 py-2 m-2 rounded-md"
        >
          <Link href="/cart" passHref>
            Go to Cart
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Cart;
