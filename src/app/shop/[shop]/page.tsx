import React from "react";
import ProductPage from "../../component/productDetails/ProductPage";
import { getHomeInformation,getProductsList } from "../../../service/index";
import Subscribe from "../../component/home/Subscribe";
import FollowUs from "../../component/home/FollowUs";
import Service from "../../component/home/Service";

const Page = async ({ params }:any) => {
  const initialProductId = parseInt(params.shop);
  // const data = await getProductDetails(initialProductId);
  const initialProducts = await getProductsList();
  let data = initialProducts.find((data:any)=> data.id == initialProductId) 
  const homeData = await getHomeInformation();


  if (!data) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <ProductPage product={data} />
      <FollowUs />
      <Service homePageText={homeData.Service} />
      <Subscribe homePageText={homeData.Subscribe} />
    </>
  );
};

export default Page;
