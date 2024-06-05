import React from "react";

const TrendingProductHeader = ({title,items,activeTab,setActiveTab}:any) => {
  return (
    <div className="container mx-auto relative px-4 sm:px-8 lg:px-15 py-5 text-center flex flex-col items-center">
      <div className="playfair-font font-[500] text-3xl lg:text-4xl leading-tight text-[#363636] mt-14 mb-6">
        {title}
      </div>
      <div className="w-36 h-[2px] bg-[#FB7800] mx-auto mb-10"></div>

      <div className="flex flex-wrap justify-center mb-6 gap-3">
        {items.map((category:any) => (
          <button
            key={category?.id}
            className={`px-5 py-2 sm:px-7 sm:py-2.5 ${
              activeTab === category?.code
                ? "border-2 border-[#363636] border-dashed rounded-full text-[#FB7800]"
                : "text-[#232323]"
            }`}
            onClick={() => setActiveTab(category?.code)}
          >
            {category?.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TrendingProductHeader;
