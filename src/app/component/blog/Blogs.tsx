"use client";
import React, { useState, useEffect } from "react";
import BlogCard from "../common/BlogCard";
import Pagination from "../common/Pagination";
import Link from "next/link";
import { getBlogs } from "../../../service/index";
import { useSearchParams } from "next/navigation";

const Blogs = ({ initialBlogs, totalPages }: any) => {
  const [filteredBlogs, setFilteredBlogs] = useState(
    initialBlogs.items.slice(0, 8)
  );
  const [pageCount, setPageCount] = useState(totalPages);
  const [currentPage, setCurrentPage] = useState(0); // Initialized currentPage to 1
  const searchParams = useSearchParams();
  const page = searchParams.get("page");

  useEffect(() => {
    setCurrentPage(page ? parseInt(page, 10) : 0); // Parse page to integer
  }, [page]);

  useEffect(() => {
    fetchBlogs(currentPage);
  }, [currentPage]);

  const fetchBlogs = async (page: any) => {
    const { data, total }: any = await getBlogs(page);
    setFilteredBlogs(data.items.slice(page, 8)); // Corrected the slicing here
    setPageCount(total);
  };

  return (
    <div className="container mx-auto mt-14">
      <div className="w-[70%] mx-auto text-center">
        <div className="playfair-font lg:text-[50px] text-[30px] sm:text-5xl lg:text-[50px] font-medium leading-tight text-[#363636] text-center mt-5">
          {initialBlogs.title}
        </div>

        <div className="text-[16px] text-[#555555] text-center mt-5">
          {initialBlogs.description}
        </div>
      </div>

      <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:md:grid-cols-4 gap-4 mx-auto mt-10 p-5">
        {filteredBlogs.map((data: any, index: any) => (
          <div key={index}>
            <Link href={`/blog/${data.id}`}>
              <BlogCard
                imageUrl={data.thumbnail}
                blogType={data.category}
                blogTitle={data.title}
                blogDescription={data.description}
                userName={data.user}
                date={data.date}
                avatar={data.avatar}
              />
            </Link>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <Pagination pageCount={pageCount} setCurrentPage={setCurrentPage} currentPage={currentPage} />
      </div>
    </div>
  );
};

export default Blogs;
