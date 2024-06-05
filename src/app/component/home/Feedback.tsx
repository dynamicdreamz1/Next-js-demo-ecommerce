import React from "react";
import Image from "next/image";

const Feedback = ({homePageText}:any) => {
  // Array of quote items
  return (
    <div className="container mx-auto ">
    <div className="bg-white lg:w-[90%] w-[95%] lg:ml-[10%] md:mx-auto relative lg:h-[350px] h-[550px] p-5 flex lg:flex-row flex-col items-center justify-center mt-20 ">
      {homePageText?.items.map((item:any, index:any) => (
        <div key={index} className="flex flex-col max-[1000px]:items-center">
          {/* Left Part (Avatar) */}
          <div className="w-[200px] h-[200px] lg:w-[320px] lg:h-[320px] flex justify-center items-center lg:absolute lg:top-[5%] lg:left-[-12%]">
            <Image
              src={item.avatar}
              width={320}
              height={320}
              alt="Descriptive"
              className="w-full h-full object-cover rounded-full border-[30px] border-[#FFF2EF]"
            />
          </div>

          {/* Right Part (Quote) */}
          <div className="flex flex-col">
            {/* Quote Icon */}
            <div className="lg:ml-[20%] flex items-center mb-2">
              <Image
                src="/images/quote.svg"
                width={50}
                height={40}
                alt="quote"
                className="object-cover"
              />
            </div>

            {/* Quote Description */}
            <p className="lg:ml-[20%] text-lg font-normal leading-10 text-left text-[#555555] lg:w-[60%] ">
              {item.quote}
            </p>

            {/* Written by */}
            <div className="lg:ml-[20%] flex items-center mt-2 text-gray-600">
              <span className="mr-1 leading-12 font-semibold text-[#555555] text-lg ">
                {item.author}
              </span>
            </div>

            {/* Location */}
            <div className="lg:ml-[20%] flex items-center text-gray-600">
              <span className="mr-1 leading-12  text-[#555555] text-lg ">
                {item.location}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Feedback;
