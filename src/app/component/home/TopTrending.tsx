"use client";
import {  useState, useEffect } from "react";
import Card from "../common/Card";
import TrendingProductHeader from "../common/TrendingProductHeader";
// import { getProducts } from "../../../service/index";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  productImages: string[];
  price: number;
  discountPrice: number;
  category: number;
  bestSeller: boolean;
  topRated: boolean;
  Accessories: boolean;
  Featured: boolean;
  rating: number;
  type: string;
  popularity: number;
  date: string;
  description: string;
  fullDescription: string;
  sku: string;
  size: {
    isAvailable: boolean;
    title: string;
  }[];
  service: {
    image: string;
    title: string;
  }[];
  reviews: {
    userAvatar: string;
    stars: number;
    description: string;
    name: string;
    date: string;
  }[];
  additionalInfo: {
    image: string;
    title: string;
    description: string;
  }[];
}

const TopTrending = ({ homePageText,ProductsData }: any) => {
  const [activeTab, setActiveTab] = useState(homePageText?.tabs[0]?.code);
  const [productsForActiveTab, setProductsForActiveTab] = useState<Product[]>(ProductsData);

  const fetchTabProduct = async () => {
    try {
      // Check if activeTab is a valid property of Product
      if (!(activeTab in ProductsData[0])) {
        console.error(`Invalid activeTab: ${activeTab}`);
        return;
      }
  
      const filteredProducts = ProductsData.filter((product: Product) => {
        return product[activeTab as keyof Product] === true;
      });
  
      setProductsForActiveTab(filteredProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  

  useEffect(() => {
    fetchTabProduct();
  }, [activeTab]);

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
          {productsForActiveTab.map((product:any) => (
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
