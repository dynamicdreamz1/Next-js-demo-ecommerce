"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Cart from "./Cart";
import MenuItems from "../Navbar/MenuItems";
import Search from "../Navbar/Search";
import CartIcon from "../Navbar/CartIcon";
import ShopMenu from "../Navbar/ShopMenu";
import { getSearchResult } from "../../../service/index";

const Navbar = ({ headerItems }: any) => {
  // State variables
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [hoverIndex, setHoverIndex] = useState(0);
  const searchInputRef = useRef(null);

  // Function to toggle cart visibility
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  
  const getResult = async () => {
    const data = await getSearchResult();
    return data;
  };

  // Function to handle search input change
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
  };

  useEffect(()=>{
    getResult().then((data)=>{
      setSearchResults(data);
    }).catch((err)=>{
      console.log(err);
    })

  },[searchQuery])

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleClick = (event:any) => {
      // Check if the click occurred inside the cart container or its toggle button
      const isClickInsideCart =
        event.target.closest(".cart-container") ||
        event.target.closest(".cart-toggle-button");

      // If the click occurred inside the cart, do nothing
      if (isClickInsideCart) return;

      // Close the cart if it was open
      if (isCartOpen) {
        setIsCartOpen(false);
      }
    };

    // Attach the event listener to the document
    document.addEventListener("mousedown", handleClick);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [isCartOpen]);

  return (
    <nav className="w-full  py-5 p-5 bg-[#FFF7F4] shadow-sm">
      <div className="container mx-auto">
        <div className="py-2 flex justify-between items-center relative">
          {/* Logo */}
          <div className="flex items-center w-[20%] md:w-[20%] ">
            <Link href="/">
              <Image
                src={headerItems.icon}
                width={110}
                height={53}
                alt="Logo"
                style={{ width: "auto", height: "auto" }} 
              />
            </Link>
          </div>

          {/* Menu Items */}
          <div
            className={`flex-col flex md:flex-row md:items-center lg:w-full md:block lg:block hidden`}
          >
            <MenuItems
              setIsShopMenuOpen={setIsShopMenuOpen}
              menus={headerItems.menus}
              setHoverIndex={setHoverIndex}
            />
          </div>

          {/* Render Shop Menu */}
          {isShopMenuOpen && !isMobileMenuOpen && (
            <ShopMenu
              shopMenuItems={headerItems?.menus[hoverIndex].menus}
              imagesMenu={headerItems?.menus[hoverIndex].imagesMenu}
              setIsShopMenuOpen={setIsShopMenuOpen}
            />
          )}

          {/* Right Side - Icons */}
          <div className="flex items-center lg:gap-7 gap-3 md:w-[20%] justify-end">
            {/* Search */}
            <Search
              isSearchOpen={isSearchOpen}
              setIsSearchOpen={setIsSearchOpen}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              searchResults={searchResults}
              searchInputRef={searchInputRef}
              handleSearchChange={handleSearchChange}
              toggleSearch={() => setIsSearchOpen(!isSearchOpen)}
            />

            {/* Cart Icon */}
            <CartIcon toggleCart={toggleCart} isCartOpen={isCartOpen} />

            {/* Burger Menu Icon (for mobile) */}
            <div className="block md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-gray-700 focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Render Cart */}
        {isCartOpen && (
          <Cart toggleCart={toggleCart} setIsCartOpen={setIsCartOpen} />
        )}

        {/* Sidebar Menu (for mobile) */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
            <div className="absolute inset-y-0 right-0 w-64 bg-white shadow-lg">
              <div className="py-4 px-6">
                {/* Menu Items */}
                <MenuItems
                  setIsShopMenuOpen={setIsShopMenuOpen}
                  menus={headerItems.menus}
                  setHoverIndex={setHoverIndex}
                  isMobileMenuOpen={isMobileMenuOpen}
                  toggleMobileMenu={toggleMobileMenu}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
