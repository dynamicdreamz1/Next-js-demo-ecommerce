import React from "react";
import { getProductsList, getHomeInformation,getFilterCategoryData } from "../../service/index";
import Products from "../component/product/Products";
import Subscribe from "../component/home/Subscribe";
import FollowUs from "../component/home/FollowUs";
import Service from "../component/home/Service";

const Page = async () => {
  const initialProducts = await getProductsList();
  const homeData = await getHomeInformation();
  const filterCategory = await getFilterCategoryData();

  return (
    <>
      <Products initialProducts={initialProducts} filterCategory={filterCategory}/>
      <FollowUs />
      <Service homePageText={homeData.Service} />
      <Subscribe homePageText={homeData.Subscribe} />
    </>
  );
};

export default Page;
