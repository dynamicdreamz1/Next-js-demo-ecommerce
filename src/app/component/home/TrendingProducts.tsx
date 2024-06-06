"use client";
import React from "react";
import { useState } from "react";
import TrendingProductHeader from "../common/TrendingProductHeader";
import SmallCard from "../common/SmallCard";
// import { getProducts } from "../../../service/index";
import Image from "next/image";


const TrendingProducts = ({ homePageText,ProductsData }: any) => {
  const [activeTab, setActiveTab] = useState(homePageText?.tabs[0].code);
  // const [productsForActiveTab, setProductsForActiveTab] = useState<Product[]>([]);

  // const fetchTabProduct = async () => {
  //   try {
  //     // let param = `type=${activeTab}`;
  //     const ProductsData = await getProducts();
  //     setProductsForActiveTab(ProductsData);
  //   } catch (error) {
  //     console.error("Error fetching products:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchTabProduct();
  // }, [activeTab]);

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 bg-cover bg-no-repeat">
        <Image
          src="/images/bgs.svg"
          alt="bh"
          className="object-cover z-[99]"
          width={206}
          height={306}
        />
      </div>
      <div className="container mx-auto relative  py-5 text-center">
        <TrendingProductHeader
          title={homePageText?.title}
          items={homePageText?.tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Map over the productsForActiveTab array */}
          {ProductsData.slice(0,9).map((product:any) => (
            <SmallCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;
