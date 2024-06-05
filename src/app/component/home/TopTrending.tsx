"use client";
import { useEffect, useState } from "react";
import Card from "../common/Card";
import TrendingProductHeader from "../common/TrendingProductHeader";
import Link from "next/link";
import { getProducts } from "../../../service/index";

const TopTrending = ({ homePageText }: any) => {
  const [activeTab, setActiveTab] = useState(homePageText?.tabs[0]?.code);
  const [productsForActiveTab, setProductsForActiveTab] = useState([]);

  const fetchTabProduct = async (activeTab: any) => {
    try {
      let param = `${activeTab}=true`;
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
      <div className="container mx-auto relative px-4 sm:px-8 lg:px-15 py-5 text-center flex flex-col items-center">
        <div className="absolute top-0 left-0 w-12 h-12 bg-cover bg-no-repeat"></div>

        <TrendingProductHeader
          title={homePageText?.title}
          items={homePageText?.tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Map over the productsForActiveTab array */}
          {productsForActiveTab.map((product) => (
            // <Link href={`/shop/${product.id}`} key={product.id}>
            <div key={product.id}>
              <Card product={product} />
            </div>
            // </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopTrending;
