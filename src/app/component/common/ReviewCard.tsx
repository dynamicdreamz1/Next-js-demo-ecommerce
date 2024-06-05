import React from 'react';
import Image from "next/image";



const ReviewCard = ({reviews}:any) => {
  const renderStars = () => {
    const maxStars = 5;
    const filledStars = reviews.stars > maxStars ? maxStars : reviews.stars;
    const emptyStars = maxStars - filledStars;
    const starArray: JSX.Element[] = [];

    for (let i = 0; i < filledStars; i++) {
      starArray.push(
        <span key={i} className="text-yellow-400 text-2xl">
          &#9733;
        </span>
      );
    }

    for (let i = 0; i < emptyStars; i++) {
      starArray.push(
        <span key={filledStars + i} className="text-gray-400 text-2xl">
          &#9733;
        </span>
      );
    }

    return starArray;
  };

  return (
    <div className="flex items-start border-b border-gray-200 rounded-md p-4 space-x-4">
      {/* User Avatar */}
      <div className="flex-shrink-0">
        <Image
          src={reviews.userAvatar}
          alt="User Avatar"
          width={43} // Width of the image
          height={43} // Height of the image
          className="w-12 h-12 rounded-full"
        />
      </div>
      {/* Review Details */}
      <div className="flex-grow">
        {/* Stars */}
        <div className="flex items-center space-x-2">
          {/* Render stars dynamically */}
          {renderStars()}
        </div>
        {/* Description */}
        <p className="text-[#888888] leading-[32px] text-[16px] mt-2 font-normal">{reviews.description}</p>
        {/* User Name */}
        <p className="text-[#FB7800] font-semibold	leading-[34px] text-[14px] mt-2">{reviews.name}</p>
        {/* Date */}
        <p className="text-[#666666] font-normal	leading-[22px] text-[14px]">{reviews.date}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
