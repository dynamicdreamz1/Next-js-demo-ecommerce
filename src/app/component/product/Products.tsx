"use client";
import React, { useState, useEffect } from "react";
import ProductFilter from "./ProductFilter";
import Card from "../common/Card";
import CustomDropdown from "../common/CustomDropdown";
import Breadcrumbs from "../common/Breadcrumbs";
import Pagination from "../common/Pagination";
import Image from "next/image";
const PER_PAGE = 9;

const Products = ({ initialProducts, filterCategory }: any) => {
  // State for all products
  const [allProducts, setAllProducts] = useState(initialProducts);
  // State for filtered products
  const [filteredProducts, setFilteredProducts] = useState(
    initialProducts.slice(0, PER_PAGE)
  );
  // State for selected filter option
  const [selectedFilter, setSelectedFilter] = useState(null);
  // State for selected categories
  const [selectedCategories, setSelectedCategories] = useState([]);
  // State for selected ratings
  const [selectedRatings, setSelectedRatings] = useState([]);
  // State for current page
  const [currentPage, setCurrentPage] = useState(0);
  // State for total number of pages
  const [totalPage, setTotalPage] = useState(
    Math.ceil(initialProducts.length / PER_PAGE)
  );

  // Filter products based on selected options
  useEffect(() => {
    filterProducts();
  }, [
    selectedFilter,
    selectedCategories,
    selectedRatings,
    currentPage,
    allProducts,
  ]);

  // Function to filter products
  const filterProducts = () => {
    let filtered = [...allProducts]; // Copy all products

    // Filter by selected categories
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    // Filter by selected ratings
    if (selectedRatings.length > 0) {
      filtered = filtered.filter((product) =>
        selectedRatings.includes(Math.round(product.rating))
      );
    }

    // Sort products based on selected filter
    if (selectedFilter) {
      switch (selectedFilter.value) {
        case "2":
          filtered = filtered.sort((a, b) => b.popularity - a.popularity);
          break;
        case "3":
          filtered = filtered.sort((a, b) => b.rating - a.rating);
          break;
        case "4":
          filtered = filtered.sort(
            (a, b) => new Date(b.date) - new Date(a.date)
          );
          break;
        case "5":
          filtered = filtered.sort(
            (a, b) => parseFloat(a.discountPrice) - parseFloat(b.discountPrice)
          );
          break;
        case "6":
          filtered = filtered.sort(
            (a, b) => parseFloat(b.discountPrice) - parseFloat(a.discountPrice)
          );
          break;
        default:
          break;
      }
    }

    // Paginate filtered products
    const offset = currentPage * PER_PAGE;
    const slicedProducts = filtered.slice(offset, offset + PER_PAGE);
    setFilteredProducts(slicedProducts);
  };

  // Handler for selecting filter option
  const handleSelectOption = (option) => {
    setSelectedFilter(option);
  };

  // Handler for changing selected categories
  const handleCategoryChange = (categories) => {
    setSelectedCategories(categories);
  };

  // Handler for changing selected ratings
  const handleRatingChange = (ratings) => {
    setSelectedRatings(ratings);
  };

  // Handler for changing current page
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  // Check if there are products to display
  const hasProducts = filteredProducts && filteredProducts.length > 0;

  const bredCumData = [
    { name: "Home", link: "/" },
    { name: "Products", link: "/shop" },
  ];

  return (
    <div className="container mx-auto mt-5">
      {/* Dropdown for selecting filter option */}

      <div className="flex lg:justify-between flex-col lg:flex-row  gap-5 justify-center max-w-full lg:mr-[1%] px-10 mt-14 mb-5">
        <Breadcrumbs breadcrumbs={bredCumData} />
        <CustomDropdown
          options={filterCategory.filter}
          onSelectOption={handleSelectOption}
        />
      </div>

      {/* Product filter component */}
      <div className="flex gap-5 justify-center ">
        <ProductFilter
          filterCategory={filterCategory.categories}
          onCategoryChange={handleCategoryChange}
          onRatingChange={handleRatingChange}
        />

        {/* Product cards grid */}
        <div className="flex gap-5 ">
          {hasProducts ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredProducts.map((product: any, index: any) => (
                // <Link href={`/shop/${product.id}`} key={index}>
                <div
                  className="outline-none focus:outline-none px-5"
                  key={index}
                >
                  <Card product={product} />
                </div>
                // </Link>
              ))}
            </div>
          ) : (
            // Show not found image if no products found
            <div className="flex flex-col justify-center items-center mx-12 w-full ">
              <Image
                src="/images/notfound.svg"
                alt="Not Found"
                width={300}
                height={300}
              />

              <Image
                src="/images/no-product.svg"
                alt="Not Found"
                width="0"
                className="w-full h-[900px]"
                height="0"
              />
            </div>
          )}
        </div>
      </div>

      {/* Pagination component */}
      {hasProducts && (
        <div className="flex justify-center mt-10">
          <Pagination pageCount={totalPage} onPageChange={handlePageChange} />
        </div>
      )}
    </div>
  );
};

export default Products;
