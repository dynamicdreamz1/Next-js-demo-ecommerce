"use client"
import React, { useState } from 'react';
import AdditionalInfo from '../common/AdditionalInfo';
import ReviewCard from '../common/ReviewCard';

const ProductInformation = ({ title, description, additionalInfo, reviews }: any) => {
  const [activeTab, setActiveTab] = useState('description');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 py-4">
        <div
          onClick={() => handleTabClick('description')}
          className={`cursor-pointer ${
            activeTab === 'description'
              ? 'highlight'
              : 'border-b border-transparent'
          } py-2 px-4 text-lg font-medium text-[#1E1E1E] focus:outline-none`}
        >
          Description
        </div>
        <div
          onClick={() => handleTabClick('additionalInfo')}
          className={`cursor-pointer ${
            activeTab === 'additionalInfo'
              ? 'highlight'
              : 'border-b border-transparent'
          } py-2 px-4 text-lg font-medium text-[#1E1E1E] focus:outline-none`}
        >
          Additional Information
        </div>
        <div
          onClick={() => handleTabClick('reviews')}
          className={`cursor-pointer ${
            activeTab === 'reviews'
              ? 'highlight'
              : 'border-b border-transparent'
          } py-2 px-4 text-lg font-medium text-[#1E1E1E] focus:outline-none`}
        >
          Reviews
        </div>
      </div>
      <div className="mt-4">
        {activeTab === 'description' && (
          <div className="w-full">
            <h2 className="text-[#FB7800] text-lg font-semibold my-5">{title}</h2>
            <p className="mt-2 text-lg text-[#555555]">{description}</p>
          </div>
        )}
        {activeTab === 'additionalInfo' && (
          <div className="w-full">
            <AdditionalInfo additionalInfo={additionalInfo} />
          </div>
        )}
        {activeTab === 'reviews' && (
          <div className="w-full">
            {reviews.map((data: any, index: number) => (
              <ReviewCard key={index} reviews={data} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductInformation;


