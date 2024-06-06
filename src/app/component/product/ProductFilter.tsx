import React, { useState } from "react";
import Image from 'next/image';

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
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [ratingDropdownOpen, setRatingDropdownOpen] = useState(false);

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
    <div className=" md:w-full sm:m-auto lg:m-0  h-max mx-auto md:px-6 lg:py-6 lg:w-[25%] md:w-[25%] w-[320px] lg:px-8 lg:border lg:border-black lg:border-opacity-50 rounded-lg lg:shadow-md">
      {/* Mobile view: Dropdown with checkboxes */}
      <div className="lg:hidden">
        <div className="mb-4">
          <button
            className="w-full px-4 py-3 border border-gray-300 shadow-sm  focus:outline-none rounded flex justify-between items-center"
            onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
          >
            <p className="font-normal text-[16px]">Categories</p>
            <div>{categoryDropdownOpen ? 
             <Image src="/images/dropIcon.svg" alt="dropdown" width={10} height={10} />: 
             <Image src="/images/dropIcon.svg" alt="dropdown" width={10} height={10} />
             }
             </div>
          </button>
          {categoryDropdownOpen && (
            <div className="mt-2 border border-gray-300 shadow-sm  focus:outline-none  rounded">
              {filterCategory?.map((item) => (
                <div key={item.id} className="flex items-center  cursor-pointer select-none relative p-3">
                  <input
                    type="checkbox"
                    id={`category-mobile-${item.id}`}
                    className="mr-2 text-[18px]"
                    checked={selectedCategories.includes(item.id)}
                    onChange={() => handleCategoryChange(item)}
                  />
                  <label htmlFor={`category-mobile-${item.id}`} className="text-[16px] font-normal text-[#1E1E1E]">
                    {item.title}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          <button
            className="w-full px-4 py-3 border border-gray-300 shadow-sm  focus:outline-none  rounded flex justify-between items-center"
            onClick={() => setRatingDropdownOpen(!ratingDropdownOpen)}
          >
            <span className="font-normal text-[16px]">Rating</span>
            <div>{ratingDropdownOpen ?
              <Image src="/images/dropIcon.svg" alt="dropdown" width={10} height={10} />: 
              <Image src="/images/dropIcon.svg" alt="dropdown" width={10} height={10} />
              }</div>
          </button>
          {ratingDropdownOpen && (
            <div className="mt-2 border border-gray-300 shadow-sm  focus:outline-none  rounded">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center cursor-pointer select-none relative p-3">
                  <input
                    type="checkbox"
                    id={`rating-mobile-${rating}`}
                    className="mr-2 text-[18px]"
                    checked={selectedRatings.includes(rating)}
                    onChange={() => handleRatingChange(rating)}
                  />
                  <label htmlFor={`rating-mobile-${rating}`} className="flex text-[16px] font-normal text-[#1E1E1E]">
                    {renderStars(rating)}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Larger screens: Original view */}
      <div className="hidden lg:block">
        <div className="flex items-center border-l-4 border-[#FB7800] bg-[#FB7800] bg-opacity-5 justify-between mb-6 p-3 lg:h-[46px]">
          <h2 className="text-lg lg:text-xl leading-[34px] text-[#000000] font-medium">
            Product categories
          </h2>
          <div className="w-16 lg:w-auto border-l-4 border-yellow-400"></div>
        </div>
        <div className="flex flex-col gap-4 mb-6">
          <div>
            <div className="space-y-2">
              {filterCategory?.map((item, index) => (
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
    </div>
  );
};

export default ProductFilter;
