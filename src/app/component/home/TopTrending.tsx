"use client";
import {  useState } from "react";
import Card from "../common/Card";
import TrendingProductHeader from "../common/TrendingProductHeader";
// import { getProducts } from "../../../service/index";
import Image from "next/image";

const TopTrending = ({ homePageText,ProductsData }: any) => {
  const [activeTab, setActiveTab] = useState(homePageText?.tabs[0]?.code);
  // const [productsForActiveTab, setProductsForActiveTab] = useState<Product[]>([]);

  // const fetchTabProduct = async () => {
  //   try {
  //     // let param = `${activeTab}=true`;
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
          {ProductsData.map((product:any) => (
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
