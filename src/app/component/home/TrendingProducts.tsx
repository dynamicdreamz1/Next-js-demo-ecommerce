"use client";
import React from "react";
import { useState, useEffect } from "react";
import TrendingProductHeader from "../common/TrendingProductHeader";
import SmallCard from "../common/SmallCard";
import { getProducts } from "../../../service/index";

const TrendingProducts = ({ homePageText }: any) => {
  const [activeTab, setActiveTab] = useState(homePageText?.tabs[0].code);
  const [productsForActiveTab, setProductsForActiveTab] = useState([]);

  const fetchTabProduct = async (activeTab: any) => {
    try {
      let param = `type=${activeTab}`;
      const ProductsData = await getProducts(param);
      setProductsForActiveTab(ProductsData);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchTabProduct(activeTab);
  }, [activeTab]);

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 bg-cover bg-no-repeat">
        <img
          src="/images/bgs.svg"
          alt="bh"
          className="w-[206px] h-[306px] object-cover z-[99]"
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
          {productsForActiveTab.map((product) => (
            <SmallCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;
