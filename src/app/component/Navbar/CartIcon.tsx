import Image from "next/image";

const CartIcon = ({ toggleCart, isCartOpen }: any) => (
  <div
    className={`flex items-center gap-1.5 cursor-pointer ${
      isCartOpen ? "highlight" : ""
    }`}
    onClick={toggleCart}
  >
    <Image src="/images/shopping-cart.svg" width={20} height={20} alt="Cart" />
    <span className="ml-1">Cart</span>
  </div>
);

export default CartIcon;
