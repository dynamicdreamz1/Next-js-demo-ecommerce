import React from "react";
import Blogs from "../component/blog/Blogs";
import { getBlogs, getHomeInformation } from "../../service/index";
import Subscribe from "../component/home/Subscribe";
import FollowUs from "../component/home/FollowUs";
import Service from "../component/home/Service";
import { Suspense } from "react";

const Page = async () => {
  const homeData = await getHomeInformation();
  const { data: initialBlogs, total: totalPages }: any = await getBlogs();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Blogs initialBlogs={initialBlogs} totalPages={totalPages} />
      <FollowUs />
      <Service homePageText={homeData.Service} />
      <Subscribe homePageText={homeData.Subscribe} />
    </Suspense>
  );
};

export default Page;
