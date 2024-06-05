import React from "react";
import Image from "./Image";
import ProductDetails from "./ProductDetails";
import ProductInformation from "./ProductInformation";
import Breadcrumbs from "../common/Breadcrumbs";

const ProductPage = ({ product }) => {
  const bredCumData = [
    { name: "Home", link: "/" },
    { name: "Products", link: "/shop" },
    { name: product.name, link: `/shop/${product.id}`},
  ];

  return (
    <div className="container mx-auto flex flex-col lg:flex-col gap-2 py-5">
      <div className="mt-8 mb-5">
        <Breadcrumbs breadcrumbs={bredCumData} />
      </div>
      <div className="w-[100%] flex lg:flex-row flex-col">
        <div className="lg:w-[50%] w-[100%]">
          <Image productImages={product.productImages} />
        </div>
        <div className="lg:w-[50%] w-[100%]">
          <ProductDetails productDetails={product} />
        </div>
      </div>
      <div className="lg:w-[60%] w-[100%]">
        <ProductInformation
          title={product.name}
          description={product.fullDescription}
          additionalInfo={product.additionalInfo}
          reviews={product.reviews}
        />
      </div>
    </div>
  );
};

export default ProductPage;
