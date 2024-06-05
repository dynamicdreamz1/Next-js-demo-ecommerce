"use client"
import React, { useState } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageCount, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(0);

  // Function to handle page click
  function handlePageClick(selectedPage) {
    setCurrentPage(selectedPage.selected);
    onPageChange(selectedPage.selected);
  }

  return (
    <div>
      {/* Pagination component */}
      <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
        forcePage={currentPage}
      />
    </div>
  );
};

export default Pagination;
