import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const BlogCard = ({ imageUrl, blogType, blogTitle, blogDescription, userName, date, avatar }: any) => {
  return (
    <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl rounded overflow-hidden shadow-lg mx-auto">
      <div>
        <Image className="w-full h-auto" layout="responsive" width={365} height={240} src={imageUrl} alt="Blog" />
      </div>

      <div className="px-4 sm:px-6 py-4">
        <div className="font-normal text-[#FB7800] text-sm sm:text-base leading-5">{blogType}</div>

        <div className="font-semibold text-[#1E1E1E] text-lg sm:text-xl mb-2 truncate">{blogTitle}</div>

        <div className="text-base sm:text-lg text-[#555555] leading-[1.625rem] font-normal line-clamp-3">
          {blogDescription}
        </div>

        <div className="flex mt-4 items-center">
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-10 h-10"
          >
            <Image className="w-full h-full rounded-full" width={40} height={40} src={avatar} alt="User Avatar" />
          </motion.div>

          <div className="ml-3">
            <div className="text-sm sm:text-base text-[#1E1E1E] leading-[1.25rem] font-medium">{userName}</div>
            <div className="text-sm sm:text-base text-[#555555] leading-[1.25rem] font-normal">{date}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
