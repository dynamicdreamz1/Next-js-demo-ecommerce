import React from "react";
import Image from "next/image";
import Link from "next/link";

const ShopMenu = ({ setIsShopMenuOpen, shopMenuItems, imagesMenu }: any) => {
  return (
    <div
      className="absolute top-full mt-5 lg:w-[90%] bg-[#FFF7F4] shadow-lg lg:px-20 py-5 rounded-b-lg z-[99]"
      onMouseLeave={() => setIsShopMenuOpen(false)}
    >
      <div className="grid grid-cols-4 gap-8">
        {/* First Column */}
        <div>
          {shopMenuItems.slice(0, 5).map((item: any, index: any) => (
            <Link
              href={item.link}
              key={index}
              className="block m-2 text-[16px] text-[#888888] font-normal hover:text-[#1E1E1E]"
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* Second Column (conditional rendering) */}
        {shopMenuItems.length > 5 && (
          <div>
            {shopMenuItems.slice(5).map((item: any, index: any) => (
              <Link
                href={item.link}
                key={index}
                className="block m-2 text-[16px] text-[#888888] font-normal hover:text-[#1E1E1E]"
              >
                {item.title}
              </Link>
            ))}
          </div>
        )}

        {/* Third Column */}
        {imagesMenu?.map((data:any, index:any) => (
          <div key={index}>
            <Image src={data.image} width={213} height={165} alt={data.title} />
            <p className="mt-2 text-[16px] text-[#1E1E1E] font-normal">
              {data.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopMenu;
