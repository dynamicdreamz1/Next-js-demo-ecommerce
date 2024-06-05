"use client";
import React, { useState, useEffect } from "react";
import { notFound} from "../../../utills/services";
import { getBlogsDetails } from "../../../service/index";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Blogs = ({ initialBlog, initialBlogId }:any) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(initialBlog);
  const [currentBlog, setCurrentBlog] = useState(initialBlogId);

  useEffect(() => {
    if (currentBlog !== initialBlogId) {
      fetchBlogDetails(currentBlog);
    }
  }, [currentBlog]);

  const fetchBlogDetails = async (blogId:any) => {
    setLoading(true);
    try {
      const data = await getBlogsDetails(blogId);
      setData(data);
    } catch (err) {
      console.error("Error fetching blog details:", err);
    } finally {
      setLoading(false);
    }
  };

  const handlePrevious = () => {
    if (currentBlog > 1) {
      setCurrentBlog(currentBlog - 1);
      router.push(`/blog/${currentBlog - 1}`);
    }
  };

  const handleNext = () => {
    setCurrentBlog(currentBlog + 1);
    router.push(`/blog/${currentBlog + 1}`);
  };

  if (!data) {
    return <div>{notFound}</div>;
  }

  return (
    <div className="lg:w-[75rem] container mx-auto sm:px-6 py-10">
      <div className="lg:w-full w-[90%] mx-auto">
        <div className="text-[#FB7800] text-xs sm:text-sm leading-[20px] font-semibold py-2 px-6 w-fit rounded-full bg-[#FB7800] bg-opacity-5 inline-block mb-5">
          {data.category}
        </div>
        <div className="playfair-font text-[30px] lg:text-[50px] font-medium leading-[66px] text-[#1E1E1E] mt-5">
          {data.title}
        </div>
        <p className="text-base sm:text-lg leading-[1.5] text-[#1E1E1E] mt-3 mb-6">
          {data.date}
        </p>
        <p className="text-[16px] leading-[26px] font-normal text-[#555555]">
          {data.description}
        </p>
        <div className="w-full mt-8">
          <Image
            src={data.thumbnail}
            alt="thumbnail"
            width={992}
            height={653}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
        <div className="flex justify-center items-center mt-10">
          <button
            className="flex items-center rounded-lg border border-[#EEEEEE] px-5 py-2 shadow-sm mr-4"
            onClick={handlePrevious}
            disabled={loading || currentBlog === 1}
          >
            <Image
              src="/images/left-arrow.svg"
              alt="Left Arrow"
              width={4}
              height={4}
              className="w-4 h-4"
            />
            <span className="ml-2">Previous</span>
          </button>
          <button
            className="flex items-center rounded-lg border border-[#EEEEEE] px-5 py-2 shadow-sm"
            onClick={handleNext}
            disabled={loading}
          >
            <span className="mr-2">Next</span>
            <Image
              src="/images/right-arrow.svg"
              alt="Right Arrow"
              width={4}
              height={4}
              className="w-4 h-4"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
