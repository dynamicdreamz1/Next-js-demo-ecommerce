import React from "react";
import {
  getHomeInformation,
  getBlogsDetails,
  getBlogs,
} from "../../../service/index";
import Blogs from "../../component/blog/BlogDetails";
import Subscribe from "../../component/home/Subscribe";
import FollowUs from "../../component/home/FollowUs";
import Service from "../../component/home/Service";

const Page = async ({ params }: any) => {
  const initialBlogId = parseInt(params.blog);
  // const data = await getBlogsDetails(initialBlogId);
  const { data: blogsData } = await getBlogs();

  let data =
    (await getBlogsDetails(initialBlogId)) ||
    blogsData.items.find((data) => data.id == initialBlogId);
  const homeData = await getHomeInformation();

  return (
    <>
      <Blogs initialBlog={data} initialBlogId={initialBlogId} />
      <FollowUs />
      <Service homePageText={homeData.Service} />
      <Subscribe homePageText={homeData.Subscribe} />
    </>
  );
};

export default Page;
