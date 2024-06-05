"use client"
import React, { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Button from "./Button";

const Banner = ({sliderData}:any) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    pauseOnHover: false, // Add this line to pause slider on hover
  };

  return (
    <div className="w-[100%] relative">
      <Slider {...settings}>
        {sliderData.map((data, index) => (
          <div
            key={index}
            className="slide relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
             <div className="h-[180px] md:h-[320px] lg:h-[680px] relative">
              <Image
                src={data.image}
                alt="Slider Image"
                layout="fill"
                objectFit="cover"
              />
              <div
                className={`absolute top-[20%] ${
                  index === 0 ? "lg:left-[20%] left-[5%]" : "left-[50%]"
                } inset-0 flex flex-col lg:gap-5 gap-1 items-start justify-start`}
              >
                <motion.div
                  initial={{
                    opacity: 0,
                    x: index === 1 ? 0 : -100,
                    y: index === 1 ? -100 : 0,
                  }} // Start from the left side or top
                  animate={
                    hoveredIndex === index
                      ? { opacity: 1, x: 0, y: 0 }
                      : {
                          opacity: 0,
                          x: index === 1 ? 0 : -100,
                          y: index === 1 ? -100 : 0,
                        }
                  } // Animate to the center
                  transition={{ duration: 0.5 }}
                  className="text-[#FB7800] lg:text-[16px] md:text-[16px] text-[10px]"
                >
                  {data.mainTitle}
                </motion.div>

                <motion.div
                  initial={{
                    opacity: 0,
                    x: index === 1 ? 0 : -100,
                    y: index === 1 ? -100 : 0,
                  }} // Start from the left side or top
                  animate={
                    hoveredIndex === index
                      ? { opacity: 1, x: 0, y: 0 }
                      : {
                          opacity: 0,
                          x: index === 1 ? 0 : -100,
                          y: index === 1 ? -100 : 0,
                        }
                  } // Animate to the center
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="playfair-font font-[500] text-1xl lg:text-5xl md:text-4xl text-[#363636] lg:w-[70%] w-full"
                >
                  {data.title}
                </motion.div>
                {/* Add motion.div for other text elements */}

                <motion.div
                  initial={{
                    opacity: 0,
                    x: index === 1 ? 0 : -100,
                    y: index === 1 ? -100 : 0,
                  }} // Start from the left side or top
                  animate={
                    hoveredIndex === index
                      ? { opacity: 1, x: 0, y: 0 }
                      : {
                          opacity: 0,
                          x: index === 1 ? 0 : -100,
                          y: index === 1 ? -100 : 0,
                        }
                  } // Animate to the center
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-[#FB7800] text-[16px]"
                >
                  <div className="w-36 h-[2px] bg-[#FB7800]"></div>
                </motion.div>

                <motion.div
                  initial={{
                    opacity: 0,
                    x: index === 1 ? 0 : -100,
                    y: index === 1 ? -100 : 0,
                  }} // Start from the left side or top
                  animate={
                    hoveredIndex === index
                      ? { opacity: 1, x: 0, y: 0 }
                      : {
                          opacity: 0,
                          x: index === 1 ? 0 : -100,
                          y: index === 1 ? -100 : 0,
                        }
                  } // Animate to the center
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="text-[#FB7800] text-[16px]"
                >
                  <div className="font-normal lg:text-base lg:text-[16px] md:text-[16px] text-[10px] text-[#888888] lg:w-[60%]">
                  {data.description}
                  </div>
                </motion.div>

                <motion.div
                  initial={{
                    opacity: 0,
                    x: index === 1 ? 0 : -100,
                    y: index === 1 ? -100 : 0,
                  }} // Start from the left side or top
                  animate={
                    hoveredIndex === index
                      ? { opacity: 1, x: 0, y: 0 }
                      : {
                          opacity: 0,
                          x: index === 1 ? 0 : -100,
                          y: index === 1 ? -100 : 0,
                        }
                  } // Animate to the center
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="text-[#FB7800] text-[16px]"
                >
                  <Button styleClass="w-[176px] h-[50px] rounded-tl-[5px] opacity-0 bg-[#FB7800] px-5 lg:px-11 text-white absolute sm:w-auto sm:h-auto sm:opacity-100 sm:top-auto sm:left-auto uppercase">
                    Shop Now
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
