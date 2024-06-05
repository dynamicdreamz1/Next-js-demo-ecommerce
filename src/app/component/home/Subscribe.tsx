import Image from "next/image";
import React from "react";

const Subscribe = ({ homePageText }: any) => {
  return (
    <div className="container mb-10 mt-10 mx-auto relative">
      <div className="absolute top-1 right-0 bg-cover bg-no-repeat">
        <Image
          src="/images/pngwing 2.svg"
          alt="bh"
          className="object-cover z-[99]"
          width={230}
          height={206}
        />
      </div>
      <div className="flex flex-col gap-5 items-start justify-start mx-auto border border-solid border-[#FB7800] bg-[#FB7800] p-4 md:p-14 rounded-md">
        <h1 className="text-[24px] md:text-[42px] font-bold text-white text-center md:text-left">
          {homePageText.title}
        </h1>
        <div className="flex flex-col lg:flex-row gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="h-[50px] px-4 py-3 border border-white rounded-md outline-none bg-transparent text-white newsletter"
          />
          <input
            type="email"
            placeholder="Email address"
            className="h-[50px] px-4 py-3 border border-white rounded-md outline-none bg-transparent text-white newsletter"
          />
          <button className="w-full h-[50px] px-4 py-3 bg-white border border-white text-[#1E1E1E] rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
