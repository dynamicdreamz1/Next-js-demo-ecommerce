import React, { useState } from "react";

interface Category {
  id: number;
  title: string;
}

interface Props {
  filterCategory: Category[];
  onCategoryChange: (selectedCategories: number[]) => void;
  onRatingChange: (selectedRatings: number[]) => void;
}

const ProductFilter = ({ filterCategory, onCategoryChange, onRatingChange }: Props) => {
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);

  const handleCategoryChange = (category: Category) => {
    const updatedCategories = selectedCategories.includes(category.id)
      ? selectedCategories.filter(c => c !== category.id)
      : [...selectedCategories, category.id];
    setSelectedCategories(updatedCategories);
    onCategoryChange(updatedCategories);
  };

  const handleRatingChange = (rating: number) => {
    const updatedRatings = selectedRatings.includes(rating)
      ? selectedRatings.filter(r => r !== rating)
      : [...selectedRatings, rating];
    setSelectedRatings(updatedRatings);
    onRatingChange(updatedRatings);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={`text-2xl ${i < rating ? "text-yellow-400" : "text-gray-400"}`}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="w-full px-4 py-6 h-fit lg:w-[22%] lg:px-8 border border-black border-opacity-50 rounded-lg shadow-md lg:block hidden">
      <div className="flex items-center border-l-4 border-[#FB7800] bg-[#FB7800] bg-opacity-5 justify-between mb-6 p-3 lg:h-[46px]">
        <h2 className="text-lg lg:text-xl leading-[34px] text-[#000000] font-medium">
          Product categories
        </h2>
        <div className="w-16 lg:w-auto border-l-4 border-yellow-400"></div>
      </div>
      <div className="flex flex-col gap-4 mb-6">
        <div>
          <div className="space-y-2">
            {filterCategory?.map((item: any, index: any) => (
              <div key={index} className="flex items-center">
                <input
                  type="checkbox"
                  id={`type${index}`}
                  className="mr-2 h-6 w-6 border border-[#888888] bg-transparent outline-0 rounded appearance-none"
                  onChange={() => handleCategoryChange(item)}
                />
                <label
                  htmlFor={`type${index}`}
                  className="text-[16px] leading-[34px] text-[#888888] font-normal"
                >
                  {item.title}
                </label>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-t border-gray-300" />
        <div>
          <h3 className="text-[16px] leading-[34px] text-[#000000] font-medium mb-2">
            Rating
          </h3>
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((rating, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="checkbox"
                  id={`star${rating}`}
                  className="mr-2 h-6 w-6 border border-[#F0F0F0] bg-white outline-0 rounded appearance-none"
                  onChange={() => handleRatingChange(rating)}
                />
                <label htmlFor={`star${rating}`} className="flex">
                  {renderStars(rating)}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
