import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Card from "../common/Card";

const TrendingSlider = ({ trendingData }) => {
  // Custom previous arrow component
  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 left-4 lg:left-[-10%] -translate-y-1/2 z-10 cursor-pointer"
        onClick={onClick}
      >
        <Image src="/images/right.svg" alt="Previous" width={50} height={50} />
      </div>
    );
  };

  // Custom next arrow component
  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute top-1/2 right-4 lg:right-[-10%] -translate-y-1/2 z-10 cursor-pointer"
        onClick={onClick}
      >
        <Image src="/images/left.svg" alt="Next" width={50} height={50} />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        },
      },
      {
        breakpoint: 640, // Add this breakpoint for tablets
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        },
      },
      {
        breakpoint: 480, // Add this breakpoint for smaller tablets or large phones
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        },
      },
      {
        breakpoint: 320, // Add this breakpoint for small phones
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="flex items-stretch p-0">
      {trendingData.map((product, index) => (
        <div key={index} className="outline-none focus:outline-none px-2">
          <Card product={product} />
        </div>
      ))}
    </Slider>
  );
};

export default TrendingSlider;
